import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'
import Avatar from '@/components/Avatar'
import Paragraph from '@/components/Paragraph'
import Divider from '@/components/Divider'
import Text from '@/components/Text'
import { ReactComponent as Cross } from '@/assets/icons/cross.svg'
import Button from '@/components/Button'
import StyledProfile, {
  ContactSection,
  Album,
  Photo,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
} from './style'

function Profile({
  showEditBtn,
  showCloseIcon = true,
  onCloseClick,
  onEdit,
  children,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          Edit
        </Button>
      )}
      {children}
    </StyledProfile>
  )
}

Profile.Description = ({ label, children }) => (
  <Paragraph>
    <Text type="secondary">
      {label}
      ：
    </Text>
    <Text>{children}</Text>
  </Paragraph>
)

Profile.Avatar = ({
  avatarUrl, size = '160px', status, statusIconSize = '25px',
}) => (
  <Avatar
    css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `}
    src={avatarUrl}
    size={size}
    status={status}
    statusIconSize={statusIconSize}
  />
)
Profile.Contact = ({
  email,
  link,
  phone,
}) => (
  <ContactSection>
    {phone && <Profile.Description label="Phone">{phone}</Profile.Description>}
    {email && <Profile.Description label="Email">{email}</Profile.Description>}
    {link && <Profile.Description label="Website">{link}</Profile.Description>}
  </ContactSection>
)

Profile.Album = ({ title = 'Album (0)', albumList, children }) => (
  <AlbumSection>
    <AlbumTitle>
      <Text type="secondary">{title}</Text>
    </AlbumTitle>
    <Album>
      {albumList.map((_) => (
        <Photo src={_.photoUrl} alt={_.alt} />
      ))}
    </Album>
    {children}
  </AlbumSection>
)

Profile.Content = ({
  name, address, detail, children,
}) => (
  <>
    <Paragraph
      size="xlarge"
      css={`
          margin-bottom: 12px;
        `}
    >
      {name}
    </Paragraph>
    <Paragraph
      size="medium"
      type="secondary"
      css={`
          margin-bottom: 18px;
        `}
    >
      {address}
    </Paragraph>
    <Paragraph
      css={`
          margin-bottom: 26px;
        `}
    >
      {detail}
    </Paragraph>
    {children}
    <Divider
      css={`
          margin: 30px 0;
        `}
    />
  </>

)

Profile.Description.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
}

Profile.Content.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  address: PropTypes.string,
  detail: PropTypes.string,
}

Profile.Contact.propTypes = {
  link: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}

Profile.propTypes = {
  children: PropTypes.any,
  showEditBtn: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  onEdit: PropTypes.func,
  onCloseClick: PropTypes.func,
}

Profile.Avatar.propTypes = {
  status: PropTypes.oneOf(['online', 'offline']),
  avatarUrl: PropTypes.string,
  statusIconSize: PropTypes.string,
  size: PropTypes.string,
}

Profile.Album.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  albumList: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    photoUrl: PropTypes.string,
    alt: PropTypes.string,
  })),
}

export default Profile
