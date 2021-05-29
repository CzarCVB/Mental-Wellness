import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Store from "./components/store/store.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import "./App.css";

const HomePage = () => (
  <div>
    <Header classType={""} />
    <h1>HomePage</h1>
  </div>
);

const Login = () => (
  <div>
    <Header classType={"hidden"} />
    <h1>Login Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shop" component={Store} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
