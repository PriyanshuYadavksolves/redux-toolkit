import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,incrementByAmount,getUserAccount, decrementByAmount } from '../slices/accountSlice';
import { useContext, useReducer, useState } from 'react';
import { MyContext } from '../context/MyContext';

  
function Account() {
  const amount = useSelector(state=>state.account.amount)
  const dispatch = useDispatch()
  const [value,setValue] = useState(0)

  //Context api
  const {myName,setMyName} = useContext(MyContext)

  //reducer
  const initialState = {
    amount:20
  }
  function reducer(state,action){
    switch(action.type){
      case 'decBySeven' : return {amount:state.amount-7}
      default : return state
    }
  }

  const [state,dispat] = useReducer(reducer,initialState);
  
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component : {myName}</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <h3>Reducer Amount:${state.amount}</h3>
        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(decrement())}>Decrement -</button>
        <button onClick={()=>dispat({type:'decBySeven'})}>DecrementBySeven </button>
        <input type="number" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
        <button onClick={() => dispatch(decrementByAmount(value))}>DecByAmt</button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          Get User
        </button>
      </div>
    </div>
  );
}

export default Account;
