import logo from './logo.svg';
import './App.css';
import productsData from './products';
function App() {
  let show = productsData.map(element =>
    <div>
    <img src={element.image}/>
    <h5>{element.name}</h5>
    <p>{element.price}KD</p>
    </div>
  )
  return (
    <div className="App">
      <header className="App-header">
        <h1>The store</h1>
        {console.log(productsData)}
        {show}
      </header>
    </div>
  );
}

export default App;

