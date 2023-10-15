import { useAuthStore } from '../hooks/useAuthStore';
import { useForm } from '../hooks/useForm';
import './authstyles.css';

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: ''
};

export const RegisterPage = () => {

    const { startRegister } = useAuthStore();
    const { registerName, registerEmail, registerPassword, onInputChange: onRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = ( event ) => {
        event.preventDefault();
        startRegister({ name: registerName, email: registerEmail, password: registerPassword });
    };

  return (

    <div className="container login-container">
        <div className="row">
            <div className="col-md-12 login-form-2">

                <h3>Register</h3>

                <form onSubmit={ registerSubmit }>
                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name='registerName'
                        value={ registerName }
                        onChange={ onRegisterInputChange }
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        name='registerEmail'
                        value={ registerEmail }
                        onChange={ onRegisterInputChange }
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña" 
                        name='registerPassword'
                        value={ registerPassword }
                        onChange={ onRegisterInputChange }
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                        type="submit" 
                        className="btnSubmit" 
                        value="Crear cuenta" 
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}