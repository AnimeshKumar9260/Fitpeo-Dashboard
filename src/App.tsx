import "./App.css";
import NavMenu from "./components/navigation/NavMenu";
import Dashboard from "./components/dashboard/Dashboard";
import Planner from "./components/planner/Planner";

function App() {
  return (
    <div className="main-container">
      <NavMenu />
      <Dashboard />
      <Planner />
    </div>
  );
}

export default App;
