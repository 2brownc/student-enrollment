import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider'

import GotIt from '../components/GotIt'
import SlotPicker from '../components/SlotPicker'
import Countdown from '../components/Countdown'

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
    {
      widgetName: 'slotPicker',
      widgetFunc: (props) => <SlotPicker {...props} />
    },
    {
      widgetName: 'countdown',
      widgetFunc: (props) => <Countdown />
    }
  ],
};

export default config;