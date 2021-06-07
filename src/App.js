import './App.css';
import Event from "./components/event/Event"
import Usestate from './components/usestate/Usestate';
import Props from './components/props/Props';
function App() {
  return (
    <div className="App">
      <Event/>
      {/* <Usestate />
      <Usestate />
      <Usestate /> */}
      <Props age={10}/>
      <Props age={20}/>
      <Props age={30}/>
    </div>
  );
}

export default App;
