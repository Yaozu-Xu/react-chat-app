import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledPopover, { Content, Triangle, Target } from './style'

function Popover({
  children,
  content,
  onHide,
  onVisible,
  offset,
  ...rest
}) {
  const [visible, setVisible] = useState(false)

  const onClick = () => {
    if (visible) {
      setVisible(false)
      if (onHide) { onHide() }
    } else {
      setVisible(true)
      if (onVisible) { onVisible() }
    }
  }
  return (
    <StyledPopover {...rest} onClick={onClick}>
      <Content visible={visible}>{content}</Content>
      <Triangle visible={visible} />
      <Target>{children}</Target>
    </StyledPopover>
  )
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
}

export default Popover
