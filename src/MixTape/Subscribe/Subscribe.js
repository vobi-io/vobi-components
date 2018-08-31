import React from 'react'
import styled from 'styled-components'

const SubscribeContainer = styled.div`
  max-width: 1200px;
  display: flex;
  margin: auto;
  justify-content: space-between;
`
const Span = styled.span`
  font-size: 16px;
  font-weight: 600;
  word-break: break-word;
`
const Form = styled.form`
  display: flex;
`
const Input = styled.input`
  height: 34px;
  width: 250px;
  padding-left: 10px;
  border: none;
  background-color: #EEEEEF;
  outline: none;
`
const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  height: 36px;
  width: 150px;
  margin-left: 30px;
  color: white;
  font-weight: 600;
  letter-spacing: 1.5px;
  background-color: #FF9D00;
  border: none;
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
