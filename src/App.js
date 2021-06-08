import './App.css';
import Event from "./components/event/Event"
import Usestate from './components/usestate/Usestate';
import Props from './components/props/Props';
import Header from './components/voca/Header';
import DayList from './components/voca/DayList';
import Day from './components/voca/Day';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        {/* <Event/>
        <Usestate />
        <Usestate />
        <Usestate />
        <Props age={10}/>
        <Props age={20}/>
        <Props age={30}/> */}
        <Header/>
        <Switch>
          <Route exact path="/">
            <DayList/>
          </Route>

          <Route path="/day/:day"> {/* 다른 page로 갔을때, 바뀌게하는 것 /:day*/}
           <Day/>
          </Route>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
