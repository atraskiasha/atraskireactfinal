import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
const Chat = () => {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Done',
    },
    {
      id: 'Done',
      message: 'Please enter your name!',
      trigger: (previousValue) => {
        if (previousValue !== 'waiting1') {
         return 'waiting1';
        }
      },
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issue',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {
          value: 'Marketing',
          label: 'Marketing',
          trigger: 'Marketing',
        },
        {
          value: 'Events',
          label: 'Events',
          trigger: 'Events',
        },
      ],
    },
    {
      id: 'Marketing',
      message: 'Thanks for your interest. Our team will get in touch with you.',
      end: true,
    },
    {
      id: 'Events',
      message: 'Thanks for your interest. Our team will get in touch with you.',
      end: true,
    },
  ];

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </div>
  );
};

export default React.memo(Chat);
