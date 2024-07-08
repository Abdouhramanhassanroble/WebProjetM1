import React, { useEffect, useState } from 'react';
import { getMessages } from '../services/api';

const MessageList = ({ conversationId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (conversationId) {
      getMessages(conversationId).then(response => {
        setMessages(response.data);
      });
    }
  }, [conversationId]);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <strong>{message.sender.username}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
