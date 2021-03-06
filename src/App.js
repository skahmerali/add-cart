
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
  const [counter, setcounter] = useState(0);
  function addtocart(product) {


    var result = cart.find((cart) => cart.id === product.id);

    if (result === undefined) {
      setcart([...cart, product])
    } else {
      alert("Order Already Exsist")
    }

   
      // setproducts( products )
      // setcart([products[index]])
      // return console.log(cart)
      // console.log([products[index]])
    }

  
  function add(value) {
    var increament = cart.find((product) => product.id === value.id);
    if(increament){
      setcounter(function (pre) {
        return pre + 1;
      
    })
  }
}
  function minus() {
    setcounter(function (prev) {
      return prev - 1
    })
  }
    return (<>
      <div className="App">


        <div className="app1">
          {products.map((product, index) => (

            <div key={index} >
              {console.log("index", index), console.log("product", product)}
              <img src={product.img} width="250px" />
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <button onClick={() => addtocart(product)}>Add to cart</button>
            &ensp;
            </div>
          ))}
        </div>

        <div className="app2" >
          <h1 id="cart">Add To Cart</h1>
          {cart.length === 0 ? <div>cart is empty</div> :
            <>
              {cart.map((value, index) => (
                <div key={index}>
                  <img src={value.img} width="250px" />
                  <p>Title: {value.title}</p>
                  <p>Price: {value.price}</p>
                  {/* <p>P: {value.price}</p> */}
                  <button onClick={()=>add(value)}>+</button>
            &ensp;
            &ensp;
                  <span id="result">{counter}</span>
            &ensp;
            &ensp;
                  <button onClick={()=>minus(value)}>-</button>
                </div>

              ))}
            </>
          }
        </div>




      </div>
    </>);

  }

  export default App;
