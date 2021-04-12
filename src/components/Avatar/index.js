import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import AvatarWrapper, { AvatarClip, AvatarImage, StatusIcon } from './style'

function Avatar({
  src, size = '48px', status, StatusIconSize = '8px', ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <AvatarWrapper {...rest}>
        {status && <StatusIcon status={status} size={StatusIconSize} />}
        <AvatarClip size={size}>
          <AvatarImage src={src} alt="" />
        </AvatarClip>
      </AvatarWrapper>
    </ThemeProvider>

  )
}

Avatar.propTypes = {
  src: PropTypes.string,
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
