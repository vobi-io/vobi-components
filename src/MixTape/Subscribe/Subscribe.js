import React from 'react'
import styled from 'styled-components'

const SubscribeContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  justify-content: space-between;
`
const Span = styled.span`
  font-size: 20px;
  font-weight: 600;
  word-break: break-word;
`
const Form = styled.form`
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-end;
  }
`
const Input = styled.input`
  padding-left: 10px;
  border: none;
  background-color: #EEEEEF;
  outline: none;
  height: 45px;
  width: 350px;
  ::-webkit-input-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  ::-moz-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  :-ms-input-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
  :-moz-placeholder {
    color: black;
    font-size: 17px;
    letter-spacing: 1.5;
    font-weight: 100;
  }
`
const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  height: 47px;
  margin-left: 30px;
  color: white;
  font-weight: 600;
  background-color: #FF9D00;
  border: none;
  letter-spacing: 2px;
  font-size: 20px;
  width: 200px;
  @media only screen and (max-width: 900px) {
    margin-top: 10px;
  }
`
const Subscribe = () => (
  <SubscribeContainer>
    <Span>Subscribe to Mixtape Madness for the latest on news, music, and upcoming releases</Span>
    <Form>
      <Input placeholder="Type Email Here..." />
      <Button>Subscribe</Button>
    </Form>
  </SubscribeContainer>
)

export default Subscribe
