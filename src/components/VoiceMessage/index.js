import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import { ReactComponent as Play } from '@/assets/icons/play.svg'
import { ReactComponent as Wave } from '@/assets/icons/wave.svg'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import StyledVoiceMessage from './style'

function VoiceMessage({
  children, type, time, ...rest
}) {
  const theme = useTheme()
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size={40}>
        <Icon
          icon={Play}
          color="white"
          width="14"
          height="16"
          style={{ transform: 'translateX(1px)' }}
        />
      </Button>
      <Icon icon={Wave} width="100%" height="100%" color={theme.primaryColor} />
      <Text bold>{time}</Text>

    </StyledVoiceMessage>
  )
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['from']),
  time: PropTypes.string,
}

export default VoiceMessage
