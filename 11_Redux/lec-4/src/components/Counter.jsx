import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/countSlice'
 
const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  console.log(count)
  return (
    <>
      <div className="App" >
        <h1> value : {count} </h1>
        <button onClick={() => dispatch(increment(count.id))}>+</button>
        <button onClick={() => dispatch(decrement(count.id))} disabled={count > 0 ? false : true}>-</button>
        <button onClick={() => dispatch(reset(count.id))}>reset</button>
      </div>
    </>
  );
}

export default Counter;
