import * as firebase from 'firebase';
import * as React from 'react';
import {Home} from '../Home/Home';
import {Route, RouteComponentProps, withRouter} from 'react-router-dom';
import './App.css';



export interface IAppCompProps extends RouteComponentProps<any> {}
export class AppComp extends React.Component<IAppCompProps> {

  public render() {
    return (
      <div className="container app">
          <Route exact={true} path="/" component={Home}/>
          {/*<Route exact={true} path="/user-area"  />*/}
      </div>
    );
  }
}

export const App = withRouter(AppComp);

