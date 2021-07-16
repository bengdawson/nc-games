import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Reviews from "./components/Reviews";
import ReviewByID from "./components/ReviewByID";
import ReviewsByCat from "./components/ReviewsByCat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/reviews/:reviewID">
            <ReviewByID />
          </Route>
          <Route exact path="/reviews/categories/:category">
            <ReviewsByCat />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
