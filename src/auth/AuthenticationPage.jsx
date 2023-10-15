import { useAuthStore } from '../hooks/useAuthStore';
import { useForm } from '../hooks/useForm';
import './authstyles.css';

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
};

export const AuthenticationPage = () => {

  const { startLogin } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields );

  const loginSubmit = ( event ) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };


  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-12 login-form-1">

          <h3>Login</h3>

          <form onSubmit={ loginSubmit }>
            <div className="form-group mb-2">
              <input 
                type="text"
                className="form-control"
                placeholder="Correo"
                name='loginEmail'
                value={ loginEmail }
                onChange={ onLoginInputChange }
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name='loginPassword'
                value={ loginPassword }
                onChange={ onLoginInputChange }
              />
            </div>
            <div className="form-group mb-2">
              <input 
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};