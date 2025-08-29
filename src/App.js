import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Rutas públicas
import LoginPage from './pages/loginpage/loginpage';
import RegisterPage from './pages/registerpages/registerpages';
import ForgotPasswordPage from './pages/forgotpage/forgotpage';
import NotFoundPage from  './pages/components/NotFoundPage';
import Protegida from './pages/protegida/proegida';

// Rutas para hooks
import UseStatePlay from './pages/playground/UseStatePlay';
import UseEffectPlay from './pages/playground/UseEffectPlay';
import UseRefPlay from './pages/playground/UseRefPlay';

// Protege rutas con autenticación Firebase
import ProtectedRoute from './pages/components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import AuxiliaresPage from './pages/AuxiliaresPage/AuxiliaresPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/protegida" element={<Protegida/>} />

        {/* Rutas protegidas con Firebase Auth */}
        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute> } />
        <Route path="/auxiliares" element={<ProtectedRoute> <AuxiliaresPage /> </ProtectedRoute> } />

        {/* Ruta genérica para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Rutas para prácticas de hooks */}
        <Route path="/usestate" element={<UseStatePlay />} />
        <Route path="/useeffect" element={<UseEffectPlay />} />
        <Route path="/useref" element={<UseRefPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;