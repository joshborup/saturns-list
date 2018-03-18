import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import store from './redux/store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Favicon from 'react-favicon';


ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Favicon url="https://res.cloudinary.com/saturnslist/image/upload/v1521344002/saturnfav.ico" />
            <App />
        </MuiThemeProvider>
    </Provider> 
</BrowserRouter> 
, document.getElementById('root'));
