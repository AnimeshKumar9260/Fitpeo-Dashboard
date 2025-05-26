import "./App.css";
import Dashboard from "./components/dashboard/DashBoard";
import NavMenu from "./components/navigation/NavMenu";

function App() {
  return (
    <div className="main-container">
      <NavMenu />
      <Dashboard />
    </div>
  );
}

export default App;
