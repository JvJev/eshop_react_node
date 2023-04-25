import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href= "/">Jev's eshop</a>
        </header>
        <main>Products list
          <h1>Featured products</h1>
          <div className="products">
          {data.products.map(product =>(<div className="product" key={product.slug}>
            
              <img src={product.image} alt={product.name}/>
              
              <div className="product-info">
                <p>
                  {product.name}
                </p>
                <p>
                  {product.price}
                </p>
                <button>Add to cart</button> 
              </div>      
            </div>))}
          </div>

          

        </main>
      
    </div>
  );
}

export default App;
