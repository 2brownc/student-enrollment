import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider'

import GotIt from '../components/GotIt'

const config = {
  initialMessages: [createChatBotMessage(
    `Hello, welcome to student info system!`,
    {
      widget: 'gotIt',
    }
  )
  ],
  widgets: [
    {
      widgetName: 'gotIt',
      widgetFunc: (props) => <GotIt {...props} />,
    },
  ],
};

export default config;