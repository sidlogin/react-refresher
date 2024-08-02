import { memo } from "react";
function PureChildComponentWithProps({ name }) {
    console.log(`PureChildComponentWithProps render when parent state changed with memo!`);
    return (
      <div>
        <h2>User Info {name}</h2>
      </div>
    )
}

export default memo(PureChildComponentWithProps);