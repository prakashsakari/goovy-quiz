import "./App.css";
import { Home, Login, Rules, Quiz, Result, SignUp } from "./pages";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
