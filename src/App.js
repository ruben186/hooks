import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage/loginpage";
import ForgotPage from "./pages/forgotpage/forgotpage";
import RegisterPage from "./pages/registerpages/registerpages";
//import UseStateContador from "./playground/useState";

//Import para hooks
import HooksGral from "./playground/HooksGral"
import UseStateHook from "./playground/useState"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hooks" element={<HooksGral />} />
        <Route path="/useState" element={<UseStateHook />} />

        </Routes>
    </BrowserRouter>


  );
}

export default App;