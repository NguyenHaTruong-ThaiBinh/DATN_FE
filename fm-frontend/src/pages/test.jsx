import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test({ selectedStadium }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Nếu có selectedStadium, có thể sử dụng nó trong API call hoặc logic khác
    axios
      .get('http://localhost:8080/manager/stadium')
      .then((response) => {
        console.log('Dữ liệu từ API:', response.data);
        setData(response.data.result || []); // Lấy mảng result nếu có
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  }, []);

  return (
    <div>
      <h2>Danh sách sân vận động</h2>
      {selectedStadium && <h3>Sân đã chọn: {selectedStadium}</h3>}{' '}
      {/* Hiển thị sân đã chọn */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.name} width="200" height="150" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
