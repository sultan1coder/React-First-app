import Header from './components/header/header';
import { useState } from 'react';

function App() {

   // Needs fixes
  // let x = 100;
  // console.log('X IS', x);
  // const incrementHandler = () => {
  //   // x = x + 1;
  //   x++;
  //   console.log('New x value is ', x);
  //   alert('You clicked me!');
  // };
  const [number, setNumber] = useState(10);
  const [skip, setSkip] = useState(1);
  const incrementHandler = () => {
    // FOR REV
    // setNumber((prev) => {
    //   return prev + 1;
    // });
    setNumber((prev) => prev + skip);
  };
  const decrementHandler = () => {
    setNumber((prev) => prev - skip);
  };
  // const changeSkip = (newSkipValue) => {
  //   setSkip(+newSkipValue);
  // };
  return (
    <>
      <Header
        applicationName={'Tiigsi Technology'}
        color= {'red'}
      />

<p>X Equals = {number} </p>
      <button onClick={(e) => setNumber((prev) => prev + skip)}>
        Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <br />
      <input
        // onChange={(e) => {
        //   changeSkip(e.target.value);
        // }}
        onChange={(e) => setSkip(+e.target.value)}
        type='text'
      />
    </>
  );
}

export default App;
