import React from "react";
import styles from "./Valores.module.css";

const Valores = ({ otro, value1, value2, value3, value4, seleccion}) => {
    let precioBase = seleccion.precio;

  if (otro) {
    // Si otro tiene un valor, usarlo como precioBase
    precioBase = parseFloat(otro); // Convierte a número, asumiendo que otro es un número válido
  }
  if (otro ===0 ) {
    precioBase = parseFloat(seleccion.precio)
  }

  const val1 = Math.round(precioBase + value1 * precioBase / 100);
  const val2 = Math.round(val1 + value2 * val1 / 100);
  const val3 = Math.round(val2 + value3 * val2 / 100);
  const val4 = Math.round(val3 + value4 * val3 / 100);

  return (
    <div className={styles.caja}>
        <p className={styles.año}>Primer Año</p>
      <p className={`${styles.precio} ${styles.val1}`}> {val1} $ARS</p>
        <p className={styles.año}>Segundo Año</p>
      <p className={`${styles.precio} ${styles.val2}`}>{val2} $ARS</p>
        <p className={styles.año}>Tercer Año</p>
      <p className={`${styles.precio} ${styles.val3}`}>{val3} $ARS</p>
        <p className={styles.año}>Cuarto Año</p>
      <p className={`${styles.precio} ${styles.val4}`}>{val4} $ARS</p>
    
    </div>
  );
};

export default Valores;

