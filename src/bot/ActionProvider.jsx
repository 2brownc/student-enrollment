import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

import { useSelector, useDispatch } from 'react-redux'
import {
  setName,
  setAge,
  setCurrentInput,
} from '../store/chatSlice'


const ActionProvider = ({
  createChatBotMessage,
  setState,
  children
}) => {

  const dispatch = useDispatch()

  // helper function
  const updateBot = (msg) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg]
    }))

  }

  const countdown = () => {
    const botMessage = createChatBotMessage(
      "Thank you!",
      {
        widget: 'countdown'
      }
    )

    updateBot(botMessage)
  }

  const handleGotIt = () => {
    const userMessage = createClientMessage('Got it!')

    updateBot(userMessage)
  }

  const askSlotMessage = () => {
    const askSlotMessage = createChatBotMessage(
      'Pick a time slot!',
      {
        widget: 'slotPicker'
      }
    )
    updateBot(askSlotMessage)
  }



  const askAge = () => {
    const botMessage = createChatBotMessage('Enter your age:')
    updateBot(botMessage)
  }

  const askName = () => {
    const botMessage = createChatBotMessage('Enter your name:')
    updateBot(botMessage)
    dispatch(setCurrentInput("name"))
  }

  const printDateSlotSummary = (msg) => {
    const userMessage = createClientMessage(msg)

    updateBot(userMessage)

    /*
      after printing the date slot
      info ask for the name
    */
    askName()
  }

  return <div>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        actions: {
          handleGotIt,
          askSlotMessage,
          printDateSlotSummary,
          askAge,
          askName,
          countdown
        },
      })
    })}
  </div>
}

export default ActionProvider;