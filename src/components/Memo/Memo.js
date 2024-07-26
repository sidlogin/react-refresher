import React, { useState, useMemo, useCallback, memo } from'react';
import './Memo.css';

function PureChildComponent() {
    console.log(`PureChildComponent rendered once with memo!`);
    return (
      <div>
        <h2>User Info</h2>
      </div>
    )
}

function PureChildComponentWithProps({ name }) {
    console.log(`PureChildComponentWithProps render when parent state changed with memo!`);
    return (
      <div>
        <h2>User Info {name}</h2>
      </div>
    )
}
  
function UserOthersInfo({ user, updateCounter }) {
    const childNumber = useMemo(() => { 
        let output = 0;
        for(let i = 0; i < 5_000_000_000; i++) {
          output ++;
        }
        return output;
    }, []);
    
    console.log(`UserOthersInfo rendered! ${JSON.stringify(user)}}`);
    return (
      <div>
        <h2>User Info {user.user.name} {childNumber}</h2>
        <button onClick={updateCounter}>Callback</button>
      </div>
    )
}

const PureChildComponentMemo = memo(PureChildComponent);
const PureChildComponentWithPropsMemo = memo(PureChildComponentWithProps);
const UserOthersInfoMemo = memo(UserOthersInfo);

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
      <PureChildComponentMemo />
      <PureChildComponentWithPropsMemo name={name} />

      <UserOthersInfoMemo user={params} updateCounter={updateCounterFromChild} />
    </div>
    )
}

export default Memo;