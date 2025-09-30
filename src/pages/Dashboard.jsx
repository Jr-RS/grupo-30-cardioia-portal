import React, { useEffect, useState } from 'react';
import { mockPatients } from '../services/api';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(mockPatients);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dashboard</h2>
      <p className={styles.metric}>Total de pacientes: {patients.length}</p>
    </div>
  );
};

export default Dashboard;
