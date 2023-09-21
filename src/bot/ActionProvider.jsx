import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children
}) => {
  console.log("client msg type", typeof createClientMessage)
  const handleGotIt = () => {
    const userMessage = createClientMessage('Got it!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage]
    }))
  }

  return <div>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        actions: {
          handleGotIt,
        },
      })
    })}
  </div>
}

export default ActionProvider;