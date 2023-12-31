
import Chatbot from 'react-chatbot-kit'
import config from '../bot/config'
import MessageParser from '../bot/MessageParser'
import ActionProvider from '../bot/ActionProvider'

import 'react-chatbot-kit/build/main.css'

function ChatBot() {
	return (
		<Chatbot
			config={config}
			messageParser={MessageParser}
			actionProvider={ActionProvider}
		/>
	)
}

export default ChatBot