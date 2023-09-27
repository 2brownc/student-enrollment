import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children
}) => {

  // helper function
  const updateBot = (msg) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, msg]
    }))

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

  const printDateSlotSummary = (msg) => {
    const userMessage = createClientMessage(msg)

    updateBot(userMessage)
  }

  const askName = () => {
    const botMessage = createChatBotMessage('Enter your name:')
    updateBot(askSlotMessage)
  }

  const askAge = () => {
    const botMessage = createChatBotMessage('Enter your name:')
    updateBot(askSlotMessage)
  }

  return <div>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        actions: {
          handleGotIt,
          askSlotMessage,
          printDateSlotSummary,
          askName,
          askAge,
        },
      })
    })}
  </div>
}

export default ActionProvider;