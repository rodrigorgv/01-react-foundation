// import { BasicTypes } from './typescript';
import BasicFunction from './typescript/BasicFunction';
// import ObjectLiterals from './typescript/ObjectLiterals';
//no es necesario poner /typescript/index.ts ya que al ser index lo toma como principal

function App() {
  return (
    <main>
      <h1>introduccion a TS - React</h1>
      {/* <BasicTypes /> */}\
      {/* <ObjectLiterals></ObjectLiterals> */}
      <BasicFunction></BasicFunction>
    </main>
  );
}

export default App;
