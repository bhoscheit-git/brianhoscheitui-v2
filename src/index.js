import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify'
import 'bootstrap/dist/css/bootstrap.css';

Amplify.configure({
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
  aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  aws_mandatory_sign_in: process.env.REACT_APP_MANDATORY_SIGN_IN,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
