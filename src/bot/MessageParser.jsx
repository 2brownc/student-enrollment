import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  setName,
  setAge,
  setSlot,
  setCurrentInput,
  currentInput,
} from '../store/chatSlice'

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch()
  const inputType = useSelector(currentInput)

  const parse = (message) => {
    switch (inputType) {
      case "name":
        dispatch(setName(message))
        dispatch(setCurrentInput("age"))
        actions.askAge()
        break
      case "age":
        dispatch(setAge(message))
        break
      case "slot":
        dispatch(setSlot(message))
        break
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;