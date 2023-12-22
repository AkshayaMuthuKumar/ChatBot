import config from './Config.js'
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};