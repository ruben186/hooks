// imports...
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/logorc.png';
import userDefault from '../../assets/user.jpg'; 
import './DashboardPage.css';
import Swal from 'sweetalert2';
import NavbarPage from '../components/navBarPage';
import FooterPage from '../components/footerPage';
function DashboardPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // Determinar foto de usuario
  const userPhoto = user?.photoURL || userDefault;

  // Agregamos el console.log para verificar qué foto se está usando
  console.log(
    user?.photoURL
      ? `Usuario tiene foto: ${user.photoURL}`
      : `Usuario SIN foto, se usará: ${userDefault}`
  );

  

  return (
    <>
      <NavbarPage />

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <div>
          <img src={logo} alt="Brilla Logo" className="main-logo" />
          <h1 className="welcome-title">Welcome to RC System</h1>
          <p className="welcome-text">
            Manage your clients, services, and more efficiently!
          </p>

          <p className="welcome-text">
            <strong>Nombre:</strong> {user?.displayName || "Sin nombre"}
          </p>
          <p className="welcome-text">
            <strong>Email:</strong> {user?.email || "Sin correo"}
          </p>
          <img
            src={userPhoto}
            alt="Foto de usuario"
            className="main-logo"
            style={{ maxWidth: '100px', borderRadius: '50%' }}
          />
        </div>
      </main>
        <footerPage/>
      
    </>
  );
}

export default DashboardPage;