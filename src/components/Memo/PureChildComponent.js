import { memo } from "react";

function PureChildComponent() {
    console.log(`PureChildComponent rendered once with memo!`);
    return (
      <div>
        <h2>User Info</h2>
      </div>
    )
}

export default memo(PureChildComponent);