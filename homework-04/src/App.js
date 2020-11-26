import './App.css';
import { useEffect, useState } from 'react';

const Container1 = (props) => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    if (count > 10) { props.callback() };
  }, [count, props]);

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCounter(count + 1)}>+</button>
    </div>
  );
}

const Container2 = () => {
  return (
    <h1>Container2</h1>
  );
}

const Container3 = () => {
  const [firstButtonColor, setFirstButtonColor] = useState('red');
  const [secondButtonColor, setSecondButtonColor] = useState('green');
  const [thirdButtonColor, setThirdButtonColor] = useState('blue');

  const randomColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++){
    const random = Math.random();
    const bit = (random * 16) | 0;
    color += (bit).toString(16);
  };
  return color;
  };

  return (
    <div>
      <button style={{backgroundColor: firstButtonColor}} onClick={() => setFirstButtonColor(randomColor())}>First Button</button>
      <button style={{backgroundColor: secondButtonColor}} onClick={() => setSecondButtonColor(randomColor())}>Second Button</button>
      <button style={{backgroundColor: thirdButtonColor}} onClick={() => setThirdButtonColor(randomColor())}>Third Button</button>
    </div>
  );
}

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div className="App">
      {showCounter ? <Container1 callback={() => setShowCounter(false)} /> : <main><Container2 /> <Container3 /></main>}
    </div>
  );
}

export default App;
