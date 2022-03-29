import "./App.css";
import { Home, Login, Rules } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}
