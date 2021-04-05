import React from 'react'
import PropTypes from 'prop-types'

import AvatarWrapper, { AvatarClip, AvatarImage, StatusIcon } from './style'

function Avatar({
  src, size = '48px', status, StatusIconSize = '8px', ...rest
}) {
  return (
    <AvatarWrapper {...rest}>
      {status && <StatusIcon status={status} size={StatusIconSize} />}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  StatusIconSize: PropTypes.string,
}

Avatar.defaultProps = {
  size: '48px',
  status: 'online',
  StatusIconSize: '8px',
}

export default Avatar
