import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import UserSignupPage from "./pages/UserSignupPage";

function App() {
  return (
    <div className="w-full min-h-screen bg-white ">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="user/signup" element={<UserSignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
