import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";

import "./styles/App.css";

function App() {
  return (
    <div className="main-app">
      <HomePage />
      <EmployeePage/>
    </div>
  );
}

export default App;
