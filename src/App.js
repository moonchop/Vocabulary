import './App.css';
import Event from "./components/event/Event"
import Usestate from './components/usestate/Usestate';
import Props from './components/props/Props';
import Header from './components/voca/Header';
import DayList from './components/voca/DayList';
import Day from './components/voca/Day';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import CreateWord from './components/voca/CreateWord';
import CreateDay from './components/voca/CreateDay';
import EmptyPage from './components/voca/EmptyPage';
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
          {/* Switch내부는 url에 따라 각각 다른 page보여준다. Link로 연결해야함.
              Switch외부는 모든 page에 공통으로 노출된다. */}
          <Route exact path="/">
            {/* path="/"는 첫page를 의미.
                exact는 /와 일치할때만 렌더링된다. 없으면 /로 시작하는 첫번째를 렌더링한다.즉, path="/day를 렌더링 할수없다.*/}
            <DayList/>
          </Route>

          <Route path="/day/:day"> 
          {/* Day를 click하면 url의 day/1,2,3은 바뀌는데 page의 값은 안변함.
              url의 1,2,3을 가져와야 page 값을 바꾸는 것 /:day, 변수명을 직접 정함.  */}
           <Day/>
          </Route>
          <Route path="/create_word">
           <CreateWord/>
          </Route>
          <Route path="/create_day">
           <CreateDay/>
          </Route>
          <Route>
           <EmptyPage/>
          </Route>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
