import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <h1>Welcome to React Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
