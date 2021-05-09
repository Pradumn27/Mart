import Home from "./components/Home/Home"
import { GlobalProvider } from "./Context/GlobalState"
import Cart from "./components/Cart/Cart"
import ProductLayout from "./components/Pages/ProductLayout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/category/t-shirt" exact children={ <ProductLayout catego={"t-shirt"}/>}/>
          <Route path="/category/pants" exact children={ <ProductLayout catego={"pants"}/>}/>
          <Route path="/category/accessories" exact children={ <ProductLayout catego={"accessories"}/>}/>
          <Route path="/category/jacket" exact children={ <ProductLayout catego={"jacket"}/>}/>
          <Route path="/category/hoodie" exact children={ <ProductLayout catego={"hoodie"}/>}/>
          <Route path="/category/sweatshirt" exact children={ <ProductLayout catego={"sweatshirt"}/>}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
