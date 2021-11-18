import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: 'steelblue'}}>
      <h1> Let's go</h1>
      <Here  name='Abrar'></Here>
      <Here name= 'Fahim'></Here>
      <Here name= 'Patwari'></Here>
    </div>  
  );
}
function Here(props) {
  const customStyle = {
    color: 'white', border:'2px solid white', margin: '10px 20px', padding: '20px'
  }
  return (
    <div style={customStyle}>
      <h3 style={{color:'black'}}>Name: {props.name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reiciendis?</p>
    </div>
    )
}
export default App;
