//Parcial:

//Punto 1. 
/*
//Importamos:

import React, { useState } from 'react';

//Declaramos el componente y lo definimos como una funcion de flecha.

const TimeConverter = () => {
  const [seconds, setSeconds] = useState('');

//La funcion converTime se usa para convertir los segundos.
  const convertTime = () => {
    const inputSeconds = parseFloat(seconds);
    if (!isNaN(inputSeconds)) {
      const hours = Math.floor(inputSeconds / 3600);
      const remainingSeconds = inputSeconds % 3600;
      const minutes = Math.floor(remainingSeconds / 60);
      const secondsLeft = remainingSeconds % 60;

      const resultText = `${hours}h ${minutes}m ${secondsLeft}s`;

//Mostramos el resultado en la consola.
      console.log(resultText); 
    } else {
      console.log('Por favor, ingrese un valor válido de segundos.');
    }
  };
//Representacion del componente.
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>¿Cuanto tiempo desea cambiar?</h2>
      <input
        style={styles.input}
        type="number"
        placeholder="Segundos"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <button style={styles.button} onClick={convertTime}>
        cambiar
      </button>
    </div>
  );
};
//Estilos de interface.
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  header: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    border: 'none',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default TimeConverter;
*/

//Punto 2.
/*
//Importamos:
import React, { useState } from 'react';

//Declaramos el componente y lo definimos como una funcion de flecha.
const CallCostCalculator = () => {
  const [callDuration, setCallDuration] = useState('');

  const calculateCost = (evt) => {
    evt.preventDefault(); 
    const duration = parseFloat(callDuration);
    if (!isNaN(duration)) {
//Valor para llamadas que duren menos de 3 minutos.
      let cost = 100; 
      if (duration > 3) {
        const additionalMinutes = Math.ceil(duration - 3);
//Cobro de 50 pesos por minuto adicional.
        cost += additionalMinutes * 50; 
      }
      console.log(`El costo de la llamada es: ${cost} pesos`);
    } else {
      console.log('Por favor, ingrese una duración válida en minutos.');
    }
  };
//Representacion del componente.
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Calcular el costo de la llamada</h2>
      <form>
        <input
          style={styles.input}
          type="number"
          placeholder="Duración de la llamada (minutos)"
          value={callDuration}
          onChange={(e) => setCallDuration(e.target.value)}
        />
        <button style={styles.button} onClick={(evt) => calculateCost(evt)}>
          Calcular
        </button>
      </form>
    </div>
  );
};
//Estilos de interface.
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  header: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    border: 'none',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default CallCostCalculator;
*/

//Punto 3.
/*
//Importamos:
import React, { useState, useEffect } from 'react';

//Declaramos el componente y lo definimos como una funcion.
function Saludo() {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
//Mensaje en consola del navegador.
    console.log(mensaje);
  }, [mensaje]);
//Esta funcion convierte la hora ingresada en un numero entero y luego dependiendo de la hora genera el mensaje de saludo.
  const myFunction = () => {
    const horaActual = parseInt(hora);

    if (horaActual >= 5 && horaActual < 12) {
      setMensaje(`Buenos días, ${nombre}`);
    } else if (horaActual >= 12 && horaActual < 18) {
      setMensaje(`Buenas tardes, ${nombre}`);
    } else {
      setMensaje(`Buenas noches, ${nombre}`);
    }
  };
//Representacion del componente.
  return (
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Hora"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <button onClick={myFunction}>Saludar</button>
    </div>
  );
}

export default Saludo;
*/
