//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './Components/ListStudentComponent';
import HeadedComponent from './Components/HeadedComponent';
import FooterComponent from './Components/FooterComponent';
import CreateStudentComponent from './Components/CreateStudentComponent';

function App() {
  return (
    <div>
      <Router>
       
              <HeadedComponent />
                <div className="container">
                  <Switch>
                          <Route path = "/" exact component = {ListStudentComponent}></Route>
                          <Route path = "/students" component = {ListStudentComponent}></Route>   
                          <Route path = "/add-student" component = {CreateStudentComponent}></Route>  
                  </Switch>
                </div>
                <FooterComponent />    
      </Router>
      
    </div>
    
  );
}

export default App;


