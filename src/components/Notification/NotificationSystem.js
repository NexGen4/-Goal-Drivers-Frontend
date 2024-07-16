import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002');

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  const handleSelectCustomer = (customerId, auctionId) => {
    setSelectedCustomer(customerId);
    socket.emit('selectCustomer', { customerId, auctionId });
  };

  const handleResponse = (accepted, auctionId) => {
    const participants = ['customer1', 'customer2', 'customer3']; // List of participant IDs
    const sellerId = 'seller1'; // Seller ID

    socket.emit('responseWinner', { accepted, participants, sellerId, auctionId });
  };

  return (
    <div>
      <h1>Notification System</h1>
      <div>
        <button onClick={() => handleSelectCustomer('customer1', 'auction1')}>
          Select Customer 1
        </button>
      </div>
      <div>
        {notifications.map((notification, index) => (
          <div key={index}>
            <p>{notification.message}</p>
            {notification.type === 'winner' && (
              <div>
                <button onClick={() => handleResponse(true, notification.auctionId)}>Accept</button>
                <button onClick={() => handleResponse(false, notification.auctionId)}>Ignore</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
