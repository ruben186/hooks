// imports...
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/gigapixel-logo luzjaime2.png';
import userDefault from '../../assets/user.jpg'; 
import servicio1 from '../../assets/manicure1.jpg';
import servicio2 from '../../assets/pedicure2.jpg';
import './Servicios.css';
import Swal from 'sweetalert2';
import NavbarPage from '../components/navBarPage';
import FooterPage from '../components/footerPage';
function Servicios() {
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
          
          
          <h1 className="welcome-title">SERVICIOS</h1>
         
         

<img
            src={servicio1}
            alt="manicure"
            className="servicioManicure"
            style={{ maxWidth: '600px'}}
          />
  <img
            src={servicio2}
            alt="Pedicure"
            className="servicioPedicure"
            style={{ maxWidth: '600px' }}
          />


        </div>
      </main>
        <FooterPage/>
      
    </>
  );
}

export default Servicios;