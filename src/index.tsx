import * as firebase from 'firebase';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp({
  apiKey: 'AIzaSyBitfy1yyJ_3QFV83-UcPX330-iJK4pn1Y',
  authDomain: 'mtahack-307c1.firebaseapp.com',
  databaseURL: 'https://mtahack-307c1.firebaseio.com',
  messagingSenderId: '821537806622',
  projectId: 'mtahack-307c1',
  storageBucket: 'mtahack-307c1.appspot.com',
});

ReactDOM.render(
  <BrowserRouter basename="/">
    <App/>
  </BrowserRouter>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
