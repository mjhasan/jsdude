import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const App = () => {
  return (
    <Router>
      <AuthContext>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz/:id" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthContext>
    </Router>
  );
}

export default App;
