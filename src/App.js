import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";
import Login from "./components/Login";
import { UserProvider } from "./context/UserContext";
import { MyContextProvider } from "./context/MyContext";
import { BonusContextProvider } from "./context/BonusContext";
import Admin from "./components/Admin";

function App() {
  const { amount } = useSelector((state) => state.account); //ye account jo store ke reducer me dala h vhi h
  const { points } = useSelector((state) => state.bonus);

  return (
    <UserProvider>
      <MyContextProvider>
        <BonusContextProvider>

      <div className="App">
        <h4>App</h4>
        <h3>Current Amount : {amount}</h3>
        <h3>Total Bonus : {points}</h3>
        <Login />

        <Account></Account>
        <Bonus></Bonus>
        <Reward></Reward>
        <Admin></Admin>
      </div>
        </BonusContextProvider>
      </MyContextProvider>
    </UserProvider>
  );
}

export default App;
