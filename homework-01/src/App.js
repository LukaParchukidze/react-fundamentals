import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import Footer from './components/footer';

function App(props) {
  return (
    <div className={props.variant}>
      <Navigation variant={props.variant} />
      <Content variant={props.variant}/>
      <Footer variant={props.variant}/>
    </div>
  );
}

export default App;
