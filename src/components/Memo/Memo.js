import React, { useState, useMemo, useCallback } from'react';
import './Memo.css';
import PureChildComponent from './PureChildComponent';
import PureChildComponentWithProps from './PureChildComponentWithProps';
import UserOthersInfo from './UserOthersInfo';

const Memo = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("John Doe");
  const [user, setUser] = useState({ name: "John Doe" });
  const params = useMemo(() => ({ user }), [user]);

  const updateCounterFromChild = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  console.log(`App rendered! ${counter}`);
  return (
    <div className="memo">
      <h1>React Memorization!</h1>
      <div className='buttons'>
        <button onClick={() => setCounter(() => counter + 1)}>
            Render Child Once with Memo
        </button>

        <button onClick={() => setName(() => name === "John Doe" ? "Marry Kom" : "John Doe")}>
            Re-render Child When Parent State changes
        </button>

        <button onClick={() => setUser(() => user.name === "John Doe" ? { name: "Marry Kom" } : { name: "John Doe" })}>
            Add User Other Details!
        </button>
      </div>
      <PureChildComponent />
      <PureChildComponentWithProps name={name} />

      <UserOthersInfo user={params} updateCounter={updateCounterFromChild} />
    </div>
    )
}

export default Memo;