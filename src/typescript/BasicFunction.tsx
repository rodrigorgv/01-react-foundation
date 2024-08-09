import React from 'react'

const addTwoNumber = (a:number,b:number): string => {
  // return (a + b).toString();
  return `${a + b}`;
}

const BasicFunction = () => {
  return (
    <div>
      <h3>Funciones</h3>
      <h3>Este es un mensaje de prueba para git</h3>
      <span>el resultado de sumar {addTwoNumber(2,8) }</span>
    </div>
  )
}

export default BasicFunction
