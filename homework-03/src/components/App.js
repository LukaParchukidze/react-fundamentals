import logo from "../logo.svg";
import './../main.scss';
import './../main.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Logo = () => <img src={logo} style={{ height: 128 }} />

const Header = () => {
  return <header>
    <Logo />
    <p style={{fontSize: 30}}>REACT COURSE</p>
  </header>;
}

const Footer = () => {
  return <header>
    <Logo />
    <p style={{fontFamily: "serif"}}>LUKA PARCHUKIDZE</p>
  </header>;
}

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="link" to="/">HOME</Link>
      <Link className="link" to="/about">ABOUT</Link>
      <Link className="link" to="/contact">CONTACT</Link>
    </nav>
  );
};

const Home = () => {
  return <h1 className="component">HOME COMPONENT</h1>;
}

const About = () => {
  return <h1 className="component">ABOUT COMPONENT</h1>;
}

const Contact = () => {
  return <h1 className="component">CONTACT COMPONENT</h1>;
}

const NotFound = () => {
  return <h1 className="error" style={{fontWeight: "bold"}}>404 ERROR</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
