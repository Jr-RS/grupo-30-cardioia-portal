
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import NewAppointment from './pages/NewAppointment';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { AppointmentProvider } from './contexts/AppointmentContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/patients" element={
              <ProtectedRoute>
                <Patients />
              </ProtectedRoute>
            } />
            <Route path="/agendamento" element={
              <ProtectedRoute>
                <NewAppointment />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </AppointmentProvider>
    </AuthProvider>
  );
}

export default App;
