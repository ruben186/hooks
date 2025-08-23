
import { useState } from 'react';
import Swal from 'sweetalert2';
import { auth, googleProvider, db } from '../../firebase';
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail, linkWithCredential, EmailAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './loginpage.css';
//import logo from '../../assets/brilla.png';
import { Link } from "react-router-dom";
function Loginpage (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // LOGIN CON EMAIL/PASSWORD
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        Swal.fire("Campos vacíos", "Por favor llena todos los campos.", "warning");
        return;
      }
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Opcional: verificar si existe documento en Firestore
        const userDocRef = doc(db, 'usuarios', user.uid);
        const userSnap = await getDoc(userDocRef);
  
        if (userSnap.exists()) {
          const data = userSnap.data();
          if (data.estado === "Inactivo") {
            Swal.fire("Acceso denegado", "Tu cuenta está inactiva. Contacta al administrador.", "error");
            return;
          }
        }
  
        Swal.fire({
          title: "¡Bienvenido!",
          text: `Sesión iniciada como ${user.email}`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "/dashboard";
        });
  
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Credenciales incorrectas o usuario no existe.", "error");
      }
    };
  
    // LOGIN CON GOOGLE
    const handleGoogleLogin = async () => {
      try {
        const googleResult = await signInWithPopup(auth, googleProvider);
        const user = googleResult.user;
  
        // Verificar si ya existía ese correo con otro método
        const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);
  
        if (signInMethods.includes('password')) {
          // Si existe por password hay que vincularlo
          const password = await solicitarPassword();
          if (!password) {
            Swal.fire("Cancelado", "Operación cancelada.", "info");
            return;
          }
  
          // Crear credential de email/password
          const credential = EmailAuthProvider.credential(user.email, password);
          await linkWithCredential(user, credential);
        }
  
        Swal.fire({
          title: "¡Bienvenido!",
          text: `Sesión iniciada con Google: ${user.email}`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "/dashboard";
        });
  
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
      }
    };
  
    const solicitarPassword = async () => {
      const result = await Swal.fire({
        title: "Contraseña requerida",
        input: "password",
        inputLabel: "Introduce tu contraseña para vincular cuentas",
        inputPlaceholder: "Tu contraseña",
        showCancelButton: true,
        confirmButtonText: "Vincular",
        cancelButtonText: "Cancelar"
      });
  
      if (result.isConfirmed && result.value) {
        return result.value;
      }
      return null;
    }; 
    return(
    <div>
        <h1>HOME</h1>
        <Link to= "/register">
        <button> IR A REGISTRO</button>
        </Link>
<Link to= "/forgot">
<button>OLVIDE MI CONTRASENIA</button>
</Link>
<Link to= "/hooks">
<button>ir a Hooks</button>
</Link>

<div class="form-card w-50 mx-auto">
        <h3 class="text-center mb-4">Iniciar Sesión</h3>
        <form id="loginForm"> 
            <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="email" placeholder="tucorreo@ejemplo.com" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <div class="input-group">
                    <input type="password" class="form-control" id="password" placeholder="Contraseña" required />
                    <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                        <i class="bi bi-eye"></i>
                    </button>
                </div>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Entrar</button>
            </div>
        </form>
        <div class="text-center mt-3">
           
            <Link to= "/register">
            <a >¿No tienes cuenta? Regístrate</a>
        </Link><br />
                        <Link to= "/forgot">
            <a >¿Olvidaste tu contraseña?</a>
</Link>
        </div>
    </div>
</div>      
        
);

}

export default Loginpage;