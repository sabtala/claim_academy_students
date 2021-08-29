//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './Components/ListStudentComponent';
import HeadedComponent from './Components/HeadedComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
       
              <HeadedComponent />
                <div className="container">
                  <Switch>
                          <Route path = "/" component = {ListStudentComponent}></Route>
                          <Route path = "/students" component = {ListStudentComponent}></Route>
                         
                  </Switch>
                </div>
              <FooterComponent />
        
      </Router>
    </div>
    
  );
}

export default App;
