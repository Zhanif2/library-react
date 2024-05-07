import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Books from "./Pages/Books";
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/books" component={Books} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
