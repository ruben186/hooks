
import { Link } from "react-router-dom";

function RegisterPage (){
    return(
        <div>
            <h1>REGISTRO</h1>
            <Link to= "/">
            <button> volver al login</button>
            </Link>
            <div class="form-card w-50 mx-auto">
        <h3 class="text-center mb-4">Registro de Usuario</h3>
        <form>
            <div class="mb-3">
                <label class="form-label">Nombres</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Apellidos</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Fecha de nacimiento</label>
                <input type="date" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Escriba una contraseña</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Repita la contraseña</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Correo electrónico</label>
                <input type="email" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Teléfono</label>
                <input type="tel" class="form-control"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Sexo</label>
                <select class="form-select">
                    <option disabled selected>Seleccione una opción</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                    <option>Otro</option>
                    <option>Prefiero no decirlo</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="form-label">Nacionalidad</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Enviar registro</button>
                <a href="../index.html" class="btn btn-outline-secondary">Volver al login</a>
            </div>
        </form>
    </div>
   
    </div>      
            
    );
    
    }
    export default RegisterPage;