import './App.css';
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Apod from "./components/apod/Apod";
import Home from "./components/pages/Home";
import Neos from "./components/neos/Neos";
import About from "./components/pages/About";
import Mars from "./components/mars/Mars";
import Footer from "./components/layouts/Footer";
import SignUp from './components/signup/SignUp';
import Error from "./components/pages/Error";
import SpinnerView from './components/pages/SpinnerView';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/apod" component={Apod} />
          <Route path="/neos" component={Neos} />
          <Route path="/about" component={About} />
          <Route path="/mars" component={Mars} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/spinner" component={SpinnerView}/>
          <Route path="*" component={Error} />
        </Switch>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
