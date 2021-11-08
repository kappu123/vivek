import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/product/:id' component={ProductDetails}/>
      </Switch>
    </Router>
  );
}

export default App;