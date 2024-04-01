import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

function Bonus() {
  const {points} = useSelector(state=>state.bonus)
  const dispatch = useDispatch()


  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component : {bonus} </b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={()=>dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
