import React, { useEffect, useState } from 'react';
import { mockPatients } from '../services/api';
import styles from './Patients.module.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(mockPatients);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pacientes</h2>
      <ul className={styles.list}>
        {patients.map((p) => (
          <li key={p.id} className={styles.item}>
            <span className={styles.name}>{p.nome}</span> - Idade: {p.idade} - Condição: {p.condicao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
