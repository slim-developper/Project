import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Register {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/profile"
          render={(props) => <Profile {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
