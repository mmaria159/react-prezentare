import './App.css';
import Actions from './components/Actions';
import Button from './components/Button';

function App() {
  let count = 0;

  function plusHandler () {
    count++;
    console.log(count);
  }

  function minusHandler () {
    count--;
    console.log(count);
  }

  return (
        <div className="section-1">
           <div className="display">
             <div className="counter-value" id="counter-value">
                0
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
