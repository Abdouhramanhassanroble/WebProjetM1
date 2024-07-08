import React, { useState } from 'react';
import { sendMessage } from '../services/api';

const SendMessageForm = ({ conversationId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ content, conversationId, senderId: '1' }) // Remplacez '1' par l'ID réel de l'utilisateur connecté
      .then(() => {
        setContent('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessageForm;
