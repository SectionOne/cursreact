import './App.css';
import Header from './Header.js';
import FunctionalComponent from './FunctionalComponent.js';
import ClassComponent from './ClassComponent.js';

function App() {

  const propFunc1 = "variable";
  const propsFuncObject = {
    nom: "Pere",
    edat: 23
  }
  return (
    <>
    <div className='bg-primary card'>
      <Header/>
      </div>
      <div>
        <FunctionalComponent
        propsFunctional1 = { propFunc1 }
        propsFunctional2String = "cadenaDeTexte1"
        propsFunctionalNumber = { 3 }
        propsFunctionalObject = {propsFuncObject}
        />
      </div>
      <div>
        <ClassComponent
        propsFunctional1 = { propFunc1 }
        propsFunctional2String = "cadenaDeTexte1"
        propsFunctionalNumber = { 3 }
        propsFunctionalObject = {propsFuncObject}
        />
      </div>
    </>
  );
}

export default App;
