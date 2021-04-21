# 🔥 react-chat-app

A UI library of react for online chat application.

## Installation

`npm i react-chat-app`  
`yarn add react-chat-app`

## API Document
`git clone https://github.com/Yaozu-Xu/react-chat-app`  
`yarn dev`  
`yarn install`  
`yarn storybook`  
visit http://localhost:6006/

## Example
<img src="./example/screenshots/ChatApp.png">

```javascript
import ChatApp, {MessageList, Conversation, Profile, NavBar} from 'react-chat-app'

// Coustomize your components style
const MyMessageList = () => (
  <MessageList>
    {[0, 1, 2, 3, 4].map((_, key) => (
      <Card
        key={`${key}random`}
        avatarUrl={face1}
        iconSvg={Replied}
        title="David"
        avatarStatus="online"
        subtitle="onlne"
        rightLabel="3 hours"
        description="A long paragraph long paragraph long paragraph"
        active
      />
    ))}
  </MessageList>
)

const MyConversation = () => (
   <Conversation titleBar={<TitleBar />}>
    <Bubble time="昨天 下午14：26">Hi, how are you</Bubble>
    <MyBubble time="昨天 下午16：30">
      I am grand but busy working recently
    </MyBubble>
    <Bubble time="昨天 下午18：30">
      <VoiceMessage time="01:24" />
    </Bubble>
    <MyBubble time="昨天 下午16：30">
      See you tomorrow
    </MyBubble>
  </Conversation>
)

const MyNavBar = () => (
  <NavBar>
    <MenuItem showBadge active icon={Replied} />
  </NavBar>
)

const MyProfile = () => (
  <Profile>
    <Profile.Avatar status="online" avatarUrl={avatarUrl} />
    <Profile.Content name="Jack" address="Bei Jing" detail="My Profile 🔥" />
    <Profile.Contact phone="0830222222" email="Jack@gamil.com" link="https://baidu.com" />
  </Profile>
)

const ChatApp = () => (
  <ChatApp
    navBar={MyNavBar}
    sideBar={MyMessageList}
    content={MyConversation}
    profile={MyProfile}
  />)
```
## Components Screenshots
<img src="./example/screenshots/Card.png">
<br>
<br>
<img src="./example/screenshots/Bubble.png">
<br>
<br>
<img src="./example/screenshots/Voice.png">
<br>
<br>
<img src="./example/screenshots/MessageBar.png">


