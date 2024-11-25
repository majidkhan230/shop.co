import React from 'react';
import { message } from 'antd';

const MyMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (type,message) => {
    switch (type) {
      case 'success':
        messageApi.open({
          type: 'success',
          content: message.content,
        });
        break;
      case 'error':
        messageApi.open({
          type: 'error',
          content: message.content,
        });
        break;
      case 'warning':
        messageApi.open({
          type: 'warning',
          content: message.content,
        });
        break;
      default:
        messageApi.open({
          type: 'info',
          content: message.content,
        });
        break;
    }
  };

  return { contextHolder, showMessage };
};

export default MyMessage;
