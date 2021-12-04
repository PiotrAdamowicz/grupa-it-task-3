import "./App.css";
import OddEvenGenerator from "./components/task1/OddEvenGenerator";
import Form from "./components/task2/Form";
import QuoteGenerator from "./components/task3/QuoteGenerator";
import Background from "./components/task4/Background";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/task1">
            <Nav />
            <OddEvenGenerator />
          </Route>
          <Route path="/task2">
            <Nav />
            <Form />
          </Route>
          <Route path="/task3">
            <Nav />
            <QuoteGenerator />
          </Route>
          <Route>
            <Nav />
            <Background />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
