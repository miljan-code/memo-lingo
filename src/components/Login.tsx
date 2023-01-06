import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginProps } from '../models/interface';
import { Modal } from './';

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email, password);
    onClose(false);
  };

  return (
    <Modal closeModalFn={onClose}>
      <div className="mb-5">
        <h3 className="text-center text-3xl mb-2">Demo account</h3>
        <p className="text-2xl">E-mail: demo@demo.demo</p>
        <p className="text-2xl">Password: demo1234</p>
      </div>
      <form
        onSubmit={loginHandler}
        className="h-full flex flex-col gap-5 justify-center items-center"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">E-mail address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded text-black outline-none px-2"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded text-black outline-none px-2"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
          />
        </div>
        <button className="bg-secondary text-black px-4 py-2 rounded mt-4">
          Sign in
        </button>
      </form>
    </Modal>
  );
};

export default Login;
