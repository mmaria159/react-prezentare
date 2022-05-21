import './App.css';
import Actions from './components/Actions';
import Button from './components/Button';

function App() {
  return (
        <div className="section-1">
           <div className="display">
             <div className="counter-value" id="counter-value">
                0
             </div>
           </div>
            <Actions style='actions-v1'>
                <Button style="plus">Plus</Button>
                <Button style="minus">Minus</Button>
            </Actions>
            <Actions style='actions-v2'>
                <Button style="multiply">Multiply</Button>
                <Button style="divide">Divide</Button>
            </Actions>
            <Actions style='actions-v3'>
                <Button>Test 1</Button>
                <Button>Test 2</Button>
            </Actions>
        </div>
  );
}

export default App;
