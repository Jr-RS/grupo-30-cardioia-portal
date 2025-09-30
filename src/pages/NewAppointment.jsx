import React, { useReducer } from 'react';
import styles from './NewAppointment.module.css';

const initialState = {
  patientName: '',
  appointmentDate: '',
  details: ''
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    default:
      return state;
  }
}

const NewAppointment = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do agendamento:', state);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Agendamento de Consulta</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName" className={styles.label}>Nome do Paciente:</label>
          <input
            id="patientName"
            type="text"
            name="patientName"
            className={styles.input}
            value={state.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentDate" className={styles.label}>Data:</label>
          <input
            id="appointmentDate"
            type="date"
            name="appointmentDate"
            className={styles.input}
            value={state.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="details" className={styles.label}>Detalhes:</label>
          <textarea
            id="details"
            name="details"
            className={styles.textarea}
            value={state.details}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <button type="submit" className={styles.button}>Agendar</button>
      </form>
    </div>
  );
};

export default NewAppointment;
