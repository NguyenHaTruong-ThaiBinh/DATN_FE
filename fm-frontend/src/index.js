import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RecoverPW from './pages/RecoverPW';
import Users from './pages/Users';
import Stadium5 from './pages/Stadium5';
import FormBooking from './pages/FormBooking/FormBooking';
import Chat from './pages/Chat';
import Service from './pages/Service';
import Canlendar from './pages/Calendar';
import Stadium11 from './pages/Stadium11';
import HistoryBooking from './pages/HistoryBooking';
import Matching from './pages/Matching';
import Handle from './pages/Handle';
import Match from './pages/Match';
import Profile from './pages/Profile';
import Facility from './pages/Facility';
import MapGG from './pages/MapGG';
import WeatherGG from './pages/WeatherGG';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App component={Home} title="Home" />} />
        <Route path="/stadium5" element={<Stadium5 />} />
        <Route path="/stadium11" element={<Stadium11 />} />
        <Route
          path="/form_booking"
          element={<App component={FormBooking} title="Form Booking" />}
        />
        <Route path="/history_booking" element={<HistoryBooking />} />
        <Route path="/matching" element={<Matching />} />
        <Route
          path="/calendar"
          element={<App component={Canlendar} title="Calendar" />}
        />
        <Route
          path="/handle"
          element={<App component={Handle} title="Handle" />}
        />
        <Route path="/map" element={<App component={MapGG} title="Map" />} />
        <Route
          path="/weather"
          element={<App component={WeatherGG} title="Weather" />}
        />
        <Route path="/facility" element={<Facility />} />
        <Route
          path="/match"
          element={<App component={Match} title="Match" />}
        />
        <Route path="/chat" element={<App component={Chat} title="Chat" />} />
        <Route
          path="/profile"
          element={<App component={Profile} title="Profile" />}
        />
        <Route path="/service" element={<Service />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover_pw" element={<RecoverPW />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
