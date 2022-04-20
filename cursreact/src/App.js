import './App.css';

function sumar(){
  return 2 + 2;
}

const nom = "Joan";

function App() {
  return (
    <>
      <div className="red">
        <h2>Children</h2>
      </div>
      <h1 className="red"> Funcions { sumar() }</h1>
      <h1> Operacions Matemàtiques { 3 + 2}</h1>
      <h1> String { `Hola ${nom}` }</h1>
      <h1> Logica / Ternary { ( 3 + 2 ) > 6 ? "mayor" : "menor" }</h1>
      <img src="" alt="" />
    </>
  );
}

export default App;
