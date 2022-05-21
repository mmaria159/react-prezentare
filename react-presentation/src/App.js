import React from 'react'
import './App.css';
import Actions from './components/Actions';
import Button from './components/Button';

function App() {
  const [count, setCount] = React.useState(0);

  function plusHandler () {
    setCount(prevCount => prevCount + 1);
  }

  function minusHandler () {
    setCount(prevCount => prevCount - 1);
  }

  return (
        <div className="section-1">
           <div className="display">
             <div className="counter-value" id="counter-value">
                {count}
             </div>
           </div>
            <Actions style='actions-v1'>
                <Button style="plus" onClickHandler={plusHandler}>Plus</Button>
                <Button style="minus" onClickHandler={minusHandler}>Minus</Button>
            </Actions>
        </div>
  );
}

export default App;
