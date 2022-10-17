import React from "react";

function App() {

const [count, setCount] = React.useState(0);

function Increase (){
  setCount (count+1)
}

function Decrease (){
  setCount(count-1)
}



  return (<div className="container">
    <h1>{count}</h1>
    <button onClick={Increase}>+</button>
    <button onClick={Decrease}>-</button>
    <button onClick={function (){ return setCount(0)
    }}>0</button>
  </div>
);

}

export default App;
