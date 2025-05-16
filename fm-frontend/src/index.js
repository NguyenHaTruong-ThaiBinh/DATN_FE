import React,{useState, useEffect} from 'react';
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
import Test from './pages/test';
import PaymentResult from './pages/PaymentResult';
import Report from './pages/Report';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App component={Home} title="Home" />} />
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
          path="/report"
          element={<App component={Report} title="Report" />}
        />
        <Route
          path="/payment-success"
          element={<App component={PaymentResult} />}
        />
        <Route
          path="/handle"
          element={<App component={Handle} title="Cancel" />}
        />
        <Route path="/test" element={<App component={Test} />} />
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
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover_pw" element={<RecoverPW />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
