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
import Service from './pages/Service';
import Canlendar from './pages/Calendar';
import Stadium11 from './pages/Stadium11';
import HistoryBooking from './pages/HistoryBooking';
import Matching from './pages/Matching';
import Handle from './pages/Handle';
import Match from './pages/Match';
import Profile from './pages/Profile';
import Facility from './pages/Facility';
import WeatherGG from './pages/WeatherGG';
import PaymentResult from './pages/PaymentResult';
import Report from './pages/Report';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import AdminRoutes from './routes/AdminRoutes';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="form_booking" element={<FormBooking />} />
          <Route path="stadium5" element={<Stadium5 />} />
          <Route path="calendar" element={<Canlendar />} />

          <Route path="/" element={<AdminRoutes />}>
            <Route path="report" element={<Report />} />
            <Route path="users" element={<Users />} />
            <Route path="facility" element={<Facility />} />
          </Route>

          <Route path="payment-success" element={<PaymentResult />} />
          <Route path="handle" element={<Handle />} />
          <Route path="search" element={<Search />} />
          <Route path="weather" element={<WeatherGG />} />
          <Route path="profile" element={<Profile />} />
          <Route path="match" element={<Match />} />

          <Route path="stadium11" element={<Stadium11 />} />

          <Route path="history_booking" element={<HistoryBooking />} />
          <Route path="matching" element={<Matching />} />

          <Route path="service" element={<Service />} />

          <Route path="recover_pw" element={<RecoverPW />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
