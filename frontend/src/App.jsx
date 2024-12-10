import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-purple-600">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
