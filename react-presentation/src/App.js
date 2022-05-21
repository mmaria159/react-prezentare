import './App.css';
import Actions from './components/Actions';

function App() {
  return (
        <div class="section-1">
           <div class="display">
             <div class="counter-value" id="counter-value">
                0
             </div>
           </div>
            <Actions style='actions-v1'>
               <button class="plus" id="plus">Plus</button>
               <button class="minus" id="minus">Minus</button>
            </Actions>
            <Actions style='actions-v2'>
                <button class="multiply" id="multiply">Multiply</button>
                <button class="divide" id="divide">Divide</button>
            </Actions>
            <Actions style='actions-v3'>
                <button class="test1" id="test1">Test 1</button>
                <button class="test2" id="test2">Test 2</button>
            </Actions>
        </div>
  );
}

export default App;
