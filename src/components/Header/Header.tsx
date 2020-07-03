import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';

const Header: React.FunctionComponent<any> = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Header;
