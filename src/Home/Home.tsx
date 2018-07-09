import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {LoginButton, LoginStrategy} from '../LoginButton/LoginButton';
import './Home.css';

export interface IHomeProps extends RouteComponentProps<any> {
}

export class HomeComp extends React.Component<IHomeProps> {

  public onAuthSuccess = () => this.props.history.push('/user-area');

  public render() {
    return (<div className="home-container">
      <img src="assets/logo.png" className="app-logo"/>
      <div className="social-login-bar">
        {Object.keys(LoginStrategy).map((strategy, index) =>
          <LoginButton key={index}
                       strategy={LoginStrategy[strategy]}
                       onSuccess={this.onAuthSuccess}/>)}
      </div>
    </div>);
  }
}

export const Home = withRouter(HomeComp);