import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserPage from './UserPage';
import theme from './themes/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const UserPageComponent = ({ match }) => {
    return <UserPage theme={theme} userName={match.params.userName} />;
};


ReactDOM.render(    
    <BrowserRouter>
        <div>
            <CssBaseline />
            <Route exact path='/' component={App}/>
            <Route exact path='/volunteers/:userName' component={UserPageComponent}/>
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
