import './App.css';

function App() {

  const functionClick = () => {
    console.log("onClick");
  }

  const functionOnMouseOver = () => {
    console.log("onMouseOver");
  }

  const functionWithParameters = ( parameter ) => {
    console.log(`function llençada desde: ${parameter} `);
  }
  return (
    <>
      <button onClick = { () => functionWithParameters("onClick") } > On Click </button>
      <h1 onMouseOver = { () => functionWithParameters("mouseOver") } > Mouse Over Event </h1>
    </>
  );
}

export default App;
