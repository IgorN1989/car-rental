import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car-rental">
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
