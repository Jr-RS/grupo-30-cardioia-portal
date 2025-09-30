import React, { useEffect, useState, useContext } from 'react';
import { mockPatients } from '../services/api';
import styles from './Dashboard.module.css';
import { AppointmentContext } from '../contexts/AppointmentContext';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const { appointments } = useContext(AppointmentContext);

  useEffect(() => {
    setPatients(mockPatients);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dashboard</h2>
      <p className={styles.metric}>Total de pacientes: {patients.length}</p>
      <p className={styles.metric}>Total de agendamentos: {appointments.length}</p>
    </div>
  );
};

export default Dashboard;
