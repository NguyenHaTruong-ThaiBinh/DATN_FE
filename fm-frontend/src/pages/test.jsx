import React, { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import { toast } from 'react-toastify';
import SockJS from 'sockjs-client';

const Test = () => {
  const [notifications, setNotifications] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const userId = 1; // Giả lập userId

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/manager/ws'), // Đảm bảo URL này đúng
      reconnectDelay: 5000, // Tự động reconnect mỗi 5s
      debug: (str) => console.log('🛠️ STOMP DEBUG:', str),
      onConnect: (frame) => {
        console.log('✅ WebSocket connected!', frame);
        setIsConnected(true);

        // Khi kết nối xong thì subscribe tới topic của user
        client.subscribe(`/topic/user/${userId}`, (message) => {
          toast.success('📩 Tin nhắn nhận được:', message.body);
          if (message.body) {
            setNotifications((prev) => [...prev, message.body]);
          }
        });
      },
      onDisconnect: () => {
        console.warn('⚠️ WebSocket đã ngắt kết nối!');
        setIsConnected(false);
      },
      onStompError: (frame) => {
        console.error('❌ Lỗi STOMP:', frame.headers['message']);
        console.error('Chi tiết:', frame.body);
      },
      onWebSocketClose: (event) => {
        console.warn('⚠️ WebSocket đóng kết nối:', event);
        setIsConnected(false);
      },
      onWebSocketError: (event) => {
        console.error('❌ Lỗi WebSocket:', event);
      },
    });

    client.activate();

    // Cleanup khi component unmount
    return () => {
      client.deactivate();
    };
  }, [userId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📢 WebSocket Notifications</h2>
      {isConnected ? (
        <p style={{ color: 'green' }}>🟢 Kết nối WebSocket thành công!</p>
      ) : (
        <p style={{ color: 'red' }}>🔴 Đang cố gắng kết nối WebSocket...</p>
      )}

      <ul>
        {notifications.length === 0 ? (
          <p>🕑 Chưa có thông báo mới.</p>
        ) : (
          notifications.map((msg, index) => <li key={index}>{msg}</li>)
        )}
      </ul>
    </div>
  );
};

export default Test;
