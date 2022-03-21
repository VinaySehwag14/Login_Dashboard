import "./App.css";
import LoginPage from "./Login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
