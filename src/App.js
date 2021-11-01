
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Resume from './components/Resume/Resume';



function App() {
  return (
    <div className="App">
      <header>
       <NavBar /> 
       </header>
       <main>
       <Route path='/' component={Body}/>
       <Route exact path='/resume' component={Resume}/> 
     
       </main>
    </div>
  );
}

export default App;
