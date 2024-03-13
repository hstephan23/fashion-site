import { useState } from 'react';
import { Link } from 'react-router-dom';
import fashion from '../assets/fashion.jpg';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 blogs-main">
          <div className="signup-form-div">
            <h4 className="signup-form-title bg-dark text-light p-2">Sign Up</h4>
            <hr className='horizontal-rule'></hr>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="signup-form" onSubmit={handleFormSubmit}>
                <div className='form-div-container'>
                  <input
                    className="form-input"
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                    value={formState.lastName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="User Name"
                    name="userName"
                    type="text"
                    value={formState.userName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-div-container'>
                  <hr className='horizontal-rule'></hr>
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                
                
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
    </main>
  );
};

export default Signup;
