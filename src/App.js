import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [products, setproducts] = useState([
    {
      id: "10",
      title: "gulab jamun",
      price: 150,
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/gulab-jamun-recipe.jpg"
    },
    {
      id: "20",

      title: "ras gulla",
      price: 250,
      img: "https://i.ytimg.com/vi/c_ZkvfLuCsE/maxresdefault.jpg"
    },
    {
      id: 30,
      title: "ras maalai",
      price: 350,
      img: "https://www.manjulaskitchen.com/wp-content/uploads/ras_malai.jpg"
    }
  ])
  const [cart, setcart] = useState([]);
  function addtocart(index) {
    // setproducts( products )
    setcart([products[index]])
    return console.log(cart)
    
    // console.log([products[index]])
  }


  return (<>
    <div className="App">
      <div>
        {products.map((product, index) => (
          <div key={index} >
            <img src={product.img} width="250px" />
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => addtocart(index)}>Add to cart</button>
            &ensp;
          </div>
        ))}
      </div>

      <div>
        {cart.map((value, index) => (
          <div key={index}>
            <h1>add to cart</h1>
            <img src={value.img} width="250px" />
            <p>Title: {value.title}</p>
            <p>Price: {value.price}</p>
          </div>
        ))}
      </div>
    </div>
  </>);

}

export default App;
