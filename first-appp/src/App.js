import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import ShowProduct from './components/ShowProduct'
//import prod from './components/prod' ;
function App() {
 

  return (
    <div className="App">
      <header className="App-header">
       
     <Head/>
    <ShowProduct/>
      
      </header>
    </div>
  );
}

export default App;

