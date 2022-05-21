import React from 'react';
import './App.css';
import Actions from './components/Actions';
import Button from './components/Button';
import useCount from './hooks/useCount';

function App() {
  const count = useCount();

  return (
        <div className="section-1">
           <div className="display">
             <div className="counter-value" id="counter-value">
                {count.value}
             </div>
           </div>
            <Actions style='actions-v1'>
                <Button style="plus" onClickHandler={count.plus}>Plus</Button>
                <Button style="minus" onClickHandler={count.minus}>Minus</Button>
                <Button style="multiply" onClickHandler={count.multiply}>Multiply</Button>
                <Button style="divide" onClickHandler={count.divide}>Divide</Button>
            </Actions>
        </div>
  );
}

export default App;
