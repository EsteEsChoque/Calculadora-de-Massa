// Productos.js
import React from "react";
import styles from "./Productos.module.css"; // Importa las clases de estilos

const Productos = ({ productos, onSeleccion, seleccion, otro, onChange }) => {
  const handleInputChange = (e, onChange) => {
    const inputValue = e.target.value;

    // Utiliza una expresión regular para permitir solo números
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Limita la longitud a 4 dígitos
    const truncatedValue = numericValue.slice(0, 8);

    // Llama a la función onChange con el valor validado y truncado
    onChange(truncatedValue);
  };

  return (
    <div className={styles.container}>
      {/* Columna 1 */}
      <div className={styles.column}>
        <h3>Productos: </h3>
        <select
          onChange={(e) =>
            onSeleccion(productos.find((p) => p.nombre === e.target.value))
          }
        >
          {productos.map((producto) => (
            <option key={producto.nombre} value={producto.nombre}>
              {producto.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Columna 2 */}
      <div className={styles.column}>
        <h3>Producto Seleccionado: </h3>
        {seleccion.nombre && (
          <div>
            <p>{seleccion.nombre}.</p>
            <p>Precio: ${seleccion.precio} Ars.</p>
            <img
              src={seleccion.imagen}
              alt={seleccion.nombre}
              style={{ maxWidth: "100px" }}
            />
          </div>
        )}
      </div>

      {/* Columna 3 */}
      <div>
        <h3>Otro</h3>
        <p>Precio: $</p>
        <input
          type="text"
          value={otro}
          onChange={(e) => handleInputChange(e, onChange)}
          style={{ width: '150px' }}
        />
      </div>
    </div>
  );
};

export default Productos;
