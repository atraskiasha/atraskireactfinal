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
      message: 'Hi {previousValue}, kindly let us know with which service we can help you',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        {
          value: 'Digital Marketing',
          label: 'Digital Marketing',
          trigger: 'Digital Marketing',
        },
        {
          value: 'Events',
          label: 'Events',
          trigger: 'Events',
        },
        {
          value: 'Public Relation',
          label: 'Public Relation',
          trigger: 'Public Relation',
        },
        {
          value: 'Production',
          label: 'Production',
          trigger: 'Production',
        },
        {
          value: 'Web Development',
          label: 'Web Development',
          trigger: 'Web Development',
        },
        {
          value: 'MICE',
          label: 'MICE',
          trigger: 'MICE',
        },
        {
          value: 'Influencer Marketing',
          label: 'Influencer Marketing',
          trigger: 'Influencer Marketing',
        },
      ],
    },
    {
      id: 'Digital Marketing',
      message: 'Thanks for your interest. Our team will get in touch with you.',
      end: true,
    },
    {
      id: 'Events',
      message: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
    {
      id: 'Public Relation',
      message: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
    {
      id: 'Production',
      message: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
    {
      id: 'Web Development',
      message: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
    {
      id: 'MICE',
      message: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
      end: true,
    },
    {
      id: 'Influencer Marketing',
      message: 'Thanks for your interest. Our team will get in touch with you.Have a look at our past projects',
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
