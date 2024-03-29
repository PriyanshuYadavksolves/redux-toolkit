import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';
import { useContext } from 'react';
import { BonusContext } from '../context/BonusContext';


function Bonus() {
  const {points} = useSelector(state=>state.bonus)
  const dispatch = useDispatch()
  const {bonus,setBonus} = useContext(BonusContext)
  const incrementBonusContextValue = () =>{
    setBonus(bonus+1)
  }

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component : {bonus} </b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={incrementBonusContextValue}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
