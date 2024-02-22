import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rental">
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* <GlobalStyle/> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
