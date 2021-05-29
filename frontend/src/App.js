import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Store from "./components/store/store.component";
import CheckoutPage from "./pages/checkout/checkout.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/shop" component={Store} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
