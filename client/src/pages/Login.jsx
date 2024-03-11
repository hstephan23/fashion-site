import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import fashion from '../assets/fashion.jpg';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="flex-row justify-center mb-4 blogs-main">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <div>
                <form className='login-form' onSubmit={handleFormSubmit}>
                  <div className='form-el-div'>
                    <label className='form-label' for='email'>Email: </label>
                    <input
                      className="form-input"
                      placeholder="Email"
                      id='email'
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className='form-label' for='password'>Password: </label>
                    <input
                      className="form-input"
                      placeholder="******"
                      id='password'
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <div className="login-signup-menu">
                  <a className="login-signup-text" href="/signup">No Account? Sign-Up!</a>
                </div>
              </div>
            )}

            {error ? (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
