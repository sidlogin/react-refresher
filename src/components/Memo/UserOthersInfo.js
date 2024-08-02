import { useMemo, memo } from "react";

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

export default memo(UserOthersInfo);