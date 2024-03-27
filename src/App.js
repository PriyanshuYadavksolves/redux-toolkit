import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
function App() {
  
  const {amount} = useSelector(state=>state.account) //ye account jo store ke reducer me dala h vhi h
  const {points} = useSelector(state=>state.bonus)

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
