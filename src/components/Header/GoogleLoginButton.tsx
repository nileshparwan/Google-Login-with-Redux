import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllAction from '../../actions/AllActions';
import Button from '../Button/Button';
import allActions from '../../actions/AllActions';

const GoogleLoginButton: React.FunctionComponent<any> = () => {
  let auth: any;
  const dispatch = useDispatch();

  const { isSignedInGoogle } = useSelector((state: any) => ({
    isSignedInGoogle: state.authReducer.isSignedInGoogle,
  }));

  /**
   * @signinChanged a function which sign user with google.
   * @signInState a parameter which returns true or false when user is logged in or not
   */
  const signinChanged = (signInState: boolean) => {
    if (!signInState) return dispatch(AllAction.auth.signOut());
    else if (auth !== undefined) return dispatch(AllAction.auth.signIn(auth.currentUser.get().getId()));
    return false;
  };

  /**
   * @initializeGoogleSignIn a function which allow us to fetch method from the library on load.
   */
  const initializeGoogleSignIn = () => {
    (window as any).gapi.load('auth2', () => {
      auth = (window as any).gapi.auth2.init({
        client_id:
          '1005347716602-dqlpe0b7ueggmim7jdn2v0b6qa9lr0u3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });

      if (auth !== (undefined || null)) {
        if (auth.isSignedIn.get() === true)
          signinChanged(auth.isSignedIn.get());
        else auth.isSignedIn.listen(signinChanged);
        return true;
      }

      return false;
    });
  };

  /**
   * @insertGapiScript a function which iniatializes google auth script on window load.
   */
  const insertGapiScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      initializeGoogleSignIn();
    };
    document.body.appendChild(script);
    console.log('loading');
  };

  /**
   * @onSignIn a function which sign user with google.
   */
  const onSignInClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    auth === undefined && initializeGoogleSignIn();
    auth.signIn();
    return true;
  };

  /**
   * @onSignOut a function which signout user from google signin
   * @initializeGoogleSignIn it reiniatialises the user on click
   */
  const onSignOutClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    auth === undefined && initializeGoogleSignIn();
    auth.signOut();
    return true;
  };

  /**
   * @renderButton a function that renders google signin button upon state change
   * @Button is a button component
   */
  const renderButton = () => {
    if (isSignedInGoogle !== true)
      return (
        <Button
          className="red google"
          iconClassName="google"
          ButtonText="SignIn"
          callBackFunction={(e: any) => onSignInClick(e)}
        />
      );
    else
      return (
        <Button
          className="red google"
          iconClassName="google"
          ButtonText="SignOut"
          callBackFunction={(e: any) => onSignOutClick(e)}
        />
      );
  };

  React.useEffect(() => {
    insertGapiScript();
  }, []);

  return <>{renderButton()}</>;
};

export default GoogleLoginButton;
