import React from 'react'

interface Person {
  firstname: string;
  lastname?: string;
  age: number;
  address: Address;
  isAlive?: boolean;
};
interface Address {
  country: string;
  houseNo: number;
};

const ObjectLiterals = () => {
  const person: Person = {
    age: 21,
    firstname: 'rodrigo',
    lastname: 'perez',
    isAlive: true,
    address: {
      country: 'Chile',
      houseNo: 221
    }
  }
  return (
    <>
      <h3>
        Objetor literales
      </h3>
      <pre>
        {JSON.stringify(person,null,2)}
      </pre>
    </>
  )
}

export default ObjectLiterals
