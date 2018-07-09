import * as firebase from 'firebase';
import * as React from 'react';

export enum LoginStrategy {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  GITHUB = 'github',
}

type Strategy =
  LoginStrategy.FACEBOOK
  | LoginStrategy.GOOGLE
  | LoginStrategy.GITHUB

export interface ILoginButtonProps {
  strategy: Strategy;
  onSuccess: () => void
}

export class LoginButton extends React.PureComponent<ILoginButtonProps> {

  private providerMapper = {
    [LoginStrategy.FACEBOOK]: firebase.auth.FacebookAuthProvider,
    [LoginStrategy.GOOGLE]: firebase.auth.GoogleAuthProvider,
    [LoginStrategy.GITHUB] : firebase.auth.GithubAuthProvider
  };

  private strategyOptions = {
    [LoginStrategy.FACEBOOK]: {text: 'Login with Facebook', buttonColor: 'primary', icon: 'facebook'},
    [LoginStrategy.GOOGLE]: {text: 'Login with Google', buttonColor: 'danger', icon: 'google'},
    [LoginStrategy.GITHUB]: {text: 'Login with GitHub', buttonColor: 'secondary', icon: 'github'},
  }

  public authenticate = async () => {
    const provider = new this.providerMapper[this.props.strategy]();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      // @ts-ignore
      localStorage.setItem('userToken', result.credential.accessToken)
      localStorage.setItem('user', JSON.stringify(result.user))
      this.props.onSuccess();
    } catch (e) {
      alert('error');
    }


  };

  public render() {
    console.log(this.strategyOptions[this.props.strategy]);
    const {text, buttonColor, icon} = this.strategyOptions[this.props.strategy];
    return (<div onClick={this.authenticate}>
      <button type="button" className={`social-button btn btn-block btn-${buttonColor}`}>
        <i className={`fab fa-${icon} social-icon`} />{text}
        </button>
    </div>);
  }
}