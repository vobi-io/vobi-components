import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import moment from 'moment'

const Container = styled.div`
  background: #fff;
  padding: 25px 25px 12px 30px;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.17)
`

const Header = styled.h1`
  color: #303030;	
  font-family: "Proxima Nova";	
  font-size: 24px;	
  font-weight: 600;	
  line-height: 29px;
  text-align: left;
  margin: 0 0 15px;
  padding: 0;
`

const ChatBox = styled.div`
  border: 1px solid #cfcfcf;
`

const Paragraph = styled.p`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  margin: 0;
  border-bottom: 1px solid #cfcfcf;
`

const Span = styled.span`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  color: #07730D;
  font-family: "Proxima Nova";	
  font-size: 18px;	
  font-weight: 600;	
  line-height: 22px;

  &:hover {
    text-decoration: underline;
  }
`

const Avatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 12px;
`
const MessageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 12px;
`

const MessageLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 0;
  width: 100%;
`
const MessageArea = styled.div`
  display: inline-flex;
  align-items: flex-start;
`

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #2f3033;
  margin-bottom: 5px;
  font-weight: 600;
`

const Text = styled.span`
  display: inline-block;
  font-size: 16px;
  color: #2f3033;
`

const Divider = styled.hr`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: #cfcfcf;
  border: 0;
`

const Date = styled.span`
  display: inline-block;
  white-space: nowrap;
  font-size: 16px;
  color: rgba(47, 48, 51, 0.5);
  margin-top: 7px;
  position: relative;
  user-select: none;
  &:hover {
    span {
      display: inline-block;
    }
  }
`

const ExactData = styled.span`
  font-size: 13px;
  display: inline-block;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  position: absolute;
  top: -25px;
  right: 0;
  padding: 3px 7.5px;
  display: none;
  border-radius: 999px;
  font-weight: 600;
`

const Arrow = styled.div`
  position: absolute;
  bottom: -5px;
  right: 20%;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, 0.75);
`

const Footer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding-bottom: 25px;
`
const Form = styled.form`
  display: flex;
  padding-top: 13px;
  flex-grow: 1;
`
const Input = styled.input`
  background-color: #ffffff;
  border: solid 1px #cfcfcf;
  margin-right: 7px;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 0 20px;
  flex-grow: 1;
  ::placeholder {
    opacity: 0.65;
    text-align: left;
    color: #2f3033;
  }
`
const SendButton = styled.button`
  color: #332F2F;	
  font-family: "Proxima Nova";	
  font-size: 18px;	
  font-weight: bold;	
  line-height: 22px;
  background-color: #ffffff;
  border: solid 1px #c1c1c1;
  text-align: center;
  color: #332f2f;
  padding: 10px 35px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`

const MessageList = props => (
  <Container>
    <Header>Messages</Header>
    <ChatBox>
      <Paragraph>
        <Span>See All Messages</Span>
      </Paragraph>
      <MessageColumn>
        <MessageLine>
          <MessageArea>
            <Avatar src={props.messages.inboxAvatar} />
            <TextColumn>
              <Name>{props.messages.inboxFrom}</Name>
              {props.messages.inbox.map((item, index) => <Text key={index}>{item}</Text>)}
            </TextColumn>
          </MessageArea>
          <Date>
            {moment(props.messages.inboxMessageDate).fromNow()}
            <ExactData>
              {moment(props.messages.inboxMessageDate).format('MMMM Do YYYY, h:mm A')} <Arrow />{' '}
            </ExactData>
          </Date>
        </MessageLine>
        <Divider />
        <MessageLine>
          <MessageArea>
            <Avatar src={props.messages.replyAvatar} />
            <TextColumn>
              <Name>{props.messages.replyFrom}</Name>
              {props.messages.reply.map((item, index) => <Text key={index}>{item}</Text>)}
            </TextColumn>
          </MessageArea>
          <Date>
            {moment(props.messages.replyMessageDate).fromNow()}
            <ExactData>
              {moment(props.messages.replyMessageDate).format('MMMM Do YYYY, h:mm A')} <Arrow />{' '}
            </ExactData>
          </Date>
        </MessageLine>
      </MessageColumn>
    </ChatBox>
    {props.showInput && (
      <Footer>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          props.onSend(e)
        }}
      >
        <Input placeholder="Type your message" required />
        <SendButton type="submit">Send</SendButton>
      </Form>
    </Footer>
    )}
  </Container>
)

MessageList.propTypes = {
  messages: PropTypes.object.isRequired,
  onSend: PropTypes.func,
}

MessageList.defaultProps = {
  onSend: () => false
}

export default MessageList
