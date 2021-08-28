//import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './Components/ListStudentComponent';
import HeadedComponent from './Components/HeadedComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div>
      <HeadedComponent />
        <div className="container">
          <ListStudentComponent />
        </div>
      <FooterComponent />
    </div>
    
  );
}

export default App;
