import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: solid 1px #dbdbdb;
  padding: 25px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 569px;
  background-color: #ffffff;
  border: solid 1px #cfcfcf;
  overflow-y: scroll;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2f3033;
  ::-webkit-scrollbar {
      width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #eeeeee;
      width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6.5px;
    background-color: #d1d1d1;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`
const Footer = styled.div`
  display: flex;
  background-color: #ffffff;
`
const Form = styled.form`
  display: flex;
  padding-top: 25px;
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
const Button = styled.button`
  width: 194px;
  height: 46px;
  background-color: #ffffff;
  border: solid 1px #c1c1c1;
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #332f2f;
`
const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
`
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`
const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 20px;
`
const Message = styled.span`
  display: flex;
`
const Date = styled.span`
  opacity: 0.44;
  font-size: 16px;
  text-align: right;
  color: #2f3033;
`

const MessageBox = props => (
  <Container>
    <Content>
      {props.messages.map(item => (
        <ListItem>
          <Avatar src={item.user.avatar} />
          <MessageList>
            {item.messages.map(message => (
              <Message>{message}</Message>
            ))}
          </MessageList>
          <Date>
            {moment(item.lastMessageDate).format('h:mm a')}
          </Date>
        </ListItem>
      ))}
    </Content>
    <Footer>
      <Form onSubmit={(e) => {
        e.preventDefault()
        props.onSend(e)
      }}
      >
        <Input
          placeholder="Type your message"
          required
        />
        <Button type="submit">
          Send
        </Button>
      </Form>
    </Footer>
  </Container>
)

MessageBox.propTypes = {
  messages: PropTypes.array,
  onSend: PropTypes.func,
}

MessageBox.defaultProps = {
  messages: [],
  onSend: () => false,
}

export default MessageBox
