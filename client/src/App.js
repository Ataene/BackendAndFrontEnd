import "./App.css";
import { useState } from "react";

function App() {

  const [data, setData] = useState();

  const myClick = async () => {
    try {
      let response = await fetch("/slow"); //set up proxy in package.json
      let vals = await response.json();
      return setData(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={myClick}>Click Me</button>
        <p>{data || "data is loading"}</p>
      </header>
    </div>
  );
}

export default App;
