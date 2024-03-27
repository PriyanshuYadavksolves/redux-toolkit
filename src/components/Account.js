import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,incrementByAmount } from '../slices/accountSlice';
import { useState } from 'react';
  
function Account() {
  const amount = useSelector(state=>state.account.amount)
  const dispatch = useDispatch()
  const [value,setValue] = useState(0)

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(decrement())}>Decrement -</button>
        <input type="number" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
