import React from "react";
import style from "./Input.module.css"

const Inputs = ({ value1, value2, value3, value4, onChange1, onChange2, onChange3, onChange4 }) => {
    const handleInputChange = (e, onChange) => {
        const inputValue = e.target.value;
    
        // Utiliza una expresión regular para permitir solo números
        const numericValue = inputValue.replace(/[^0-9]/g, '');
    
        // Limita la longitud a 4 dígitos
        const truncatedValue = numericValue.slice(0, 4);
    
        // Llama a la función onChange con el valor validado y truncado
        onChange(truncatedValue);
      };
  return (
    <div className={style.caja}>
       
        <p className={style.anual}>Inflacion Anual</p>
        <div  className={style.inputs}>
            <p className={style.letra}>Primer Año %</p>
            <p className={style.letra}>Segundo Año %</p>
            <p className={style.letra}>Tercer Año %</p>
            <p className={style.letra}>Cuarto Año %</p>
        </div>

        <div className={style.inputs}>
            
            <input 
            className={style.input2} 
            type="text" 
            value={value1} 
            onChange={(e) => handleInputChange(e, onChange1)}
             />
            <input 
            className={style.input3} 
            type="text" 
            value={value2} 
            onChange={(e) => handleInputChange(e, onChange2)}
             />
            <input 
            className={style.input4} 
            type="text" 
            value={value3} 
            onChange={(e) => handleInputChange(e, onChange3)}
             />
            <input 
            className={style.input5} 
            type="text" 
            value={value4} 
            onChange={(e) => handleInputChange(e, onChange4)}
             />
            
        </div>
      <p className={style.grayText}>Si crees que habrá más o menos inflación, cámbialos a tu gusto ;D</p>
    </div>
  );
};

export default Inputs;

