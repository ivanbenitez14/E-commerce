import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ecommerceAPI from "../api/ecommerceApi";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await ecommerceAPI.post('/auth/register', {
        name,
        email,
        password
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ email: data.email, name: data.name, password: data.password }));
      navigate('/');
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await ecommerceAPI.post('/auth/login', { email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
      navigate('/');
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    navigate('/login');
  };

  return {
    // PROPIEDADES
    errorMessage,
    status,
    user,
    // METODOS
    startLogin,
    startRegister,
    startLogout
  };
};