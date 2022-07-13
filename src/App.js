import "./styles.css";
import { Counter } from "./features/counter/Counter";

export default function App() {
  console.log("update");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
    </div>
  );
}
