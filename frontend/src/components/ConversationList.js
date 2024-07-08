import React, { useEffect, useState } from 'react';
import { getConversations } from '../services/api';

const ConversationList = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    getConversations().then(response => {
      setConversations(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map(conversation => (
          <li key={conversation.id} onClick={() => onSelectConversation(conversation.id)}>
            {conversation.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
