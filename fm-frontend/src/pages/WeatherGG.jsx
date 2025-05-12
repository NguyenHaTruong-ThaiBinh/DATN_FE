import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherGG() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dự báo thời tiết
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&units=metric&appid=598a016f4f2bf857693e4666216c0425'
      )
      .then((response) => {
        // Nhóm dữ liệu thời tiết theo ngày
        const groupedByDay = response.data.list.reduce((acc, curr) => {
          const date = new Date(curr.dt * 1000).toLocaleDateString(); // Chuyển đổi timestamp sang ngày
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(curr);
          return acc;
        }, {});

        setForecast(groupedByDay);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ báo thời tiết:', error);
      });
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem',
          fontWeight: '600',
          color: '#2c3e50',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        }}
      >
        Hanoi Weather Forecast
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {Object.keys(forecast).map((date, index) => {
          const dailyData = forecast[date];
          const dateFormatted = new Date(date).toLocaleDateString('vi-VN', {
            weekday: 'long',
            day: 'numeric',
            month: 'numeric',
          });
          const avgTemp = (
            dailyData.reduce((sum, day) => sum + day.main.temp, 0) /
            dailyData.length
          ).toFixed(1);

          return (
            <div
              key={index}
              style={{
                padding: '20px',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                textAlign: 'center',
                backgroundColor: '#fff',
                width: '250px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow =
                  '0 8px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 4px 10px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>
                {dateFormatted}
              </h3>
              <img
                src={`http://openweathermap.org/img/wn/${dailyData[0].weather[0].icon}@2x.png`}
                alt={dailyData[0].weather[0].description}
                style={{ width: '60px', height: '60px', marginBottom: '10px' }}
              />
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                {dailyData[0].weather[0].description}
              </p>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>
                🌡️ Nhiệt độ trung bình: {avgTemp}°C
              </p>
              <p>💧 Độ ẩm trung bình: {dailyData[0].main.humidity}%</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WeatherGG;
