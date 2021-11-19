import logo from './logo.svg';
import './App.css';

function App() {
  const products = [{name:'Basic', price:'20$'},{name:'Standard', price:'40$'},{name:'Premium', price:'99$'}]
  return (
    <div className="App">
      <header className='App-header'>
        <h1 style={{textAlign:'center'}}> Let's go</h1>

        {/* first way to do this is by ... [ThreeDots]
        second way to do this is by destructure
        third way to do this is by array.map(product=>product.parameter)
         */}
 
        <h2>The list of products:</h2>
         <ul>
           {
             products.map(product=> <li> {product.name +'And Price is '+ product.price} </li>)
           }
         </ul>
        
        {
          products.map(product=> <Product product = {products} > </Product>)
        }


        <Here  name='Abrar'></Here>
        <Here name= 'Fahim'></Here>
        <Here name= 'Patwari'></Here>
      </header>
    </div>  
  );
}

function Product(props){
  const productStyle = {
    textAlign:'center',
    float: 'left',
    border: '2px solid red',
    backgroundColor: 'teal',
    borderRadius: '5px',
    height:'200px',
    width:'200px',
  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button>Buy Now</button>
    </div>
  )
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
