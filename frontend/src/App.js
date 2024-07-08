import React, { useState } from 'react';
import ConversationList from './components/ConversationList';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import Navbar from './components/Navbar';
import './styles.css';

const App = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <ConversationList onSelectConversation={setSelectedConversation} />
        </div>
        <div className="main">
          {selectedConversation ? (
            <>
              <MessageList conversationId={selectedConversation} />
              <SendMessageForm conversationId={selectedConversation} />
            </>
          ) : (
            <p>Sélectionnez une conversation</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
