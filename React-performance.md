### When React Component Renders?
1. When component states changes then component re-renders
2. When props rececives changes then component re-renders
3. When Parent re-render by default then child component re-renders

References: https://www.youtube.com/watch?v=3cYtqrNUiVw&ab_channel=JustinKim

## Memoization memo()
It is speed optimization technique to use for component cached version of components output all the time. 
A memorized function remembers the results of an output for given set of inputs (Pure components)
It does shallow comparison of the props, and if it sees that is has changed, then it will re-render
Important - Only use when you want to improve performance

## useCallback() memoized function
useCallback hooks helps to memoized functions and use the function reference. 
It only redefined the function when its dependencies state will be changed. 

## useMemo() memoized function
useCallback hooks helps to memoized functions and use the function reference. 
It only redefined the function when its dependencies state will be changed. 

```
import React, { memo } from'react';

function PureChildComponent() {
    console.log(`PureChildComponent rendered once with memo!`);
    return (
      <div>
        <h2>User Info</h2>
      </div>
    )
}

function UserOthersInfo({ user, updateCounter }) {
    console.log(`UserOthersInfo rendered! ${JSON.stringify(user)}}`);
    return (
      <div>
        <h2>User Info {user.user.name}</h2>
        <button onClick={updateCounter}>Callback</button>
      </div>
    )
}

const PureChildComponentMemo = memo(PureChildComponent);
const PureChildComponentWithPropsMemo = memo(PureChildComponentWithProps);
const UserOthersInfoMemo = memo(UserOthersInfo);

const App = () => {
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
```
