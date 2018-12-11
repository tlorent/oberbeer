import React from 'react';

import './login-page.scss';
import { auth, provider } from '../../firebase';
import Search from '../search/Search';

class Login extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  login = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      this.setState({
        user
      });
    });
  };

  logout = () => {
    auth.signOut().then(() => this.setState({ user: null }));
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <div className="login">
          {user ? (
            <button className="login__button" type="button" onClick={() => this.logout()}>
              Log Out
            </button>
          ) : (
            <button className="logout__button" type="button" onClick={() => this.login()}>
              Log In With Google
            </button>
          )}
        </div>
        {user && <Search />}
      </React.Fragment>
    );
  }
}

export default Login;
