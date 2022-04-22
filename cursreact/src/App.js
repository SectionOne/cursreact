import './App.css';

function App() {

  const functionClick = () => {
    console.log("onClick");
  }

  const functionOnMouseOver = () => {
    console.log("onMouseOver");
  }
  return (
    <>
      <button onClick = { functionClick } > On Click </button>
      <h1 onMouseOver = { functionOnMouseOver } > Mouse Over Event </h1>
    </>
  );
}

export default App;
