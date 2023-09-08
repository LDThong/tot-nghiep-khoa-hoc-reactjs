import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomeProvider  } from './context/HomeContext';
import { AuthProvider} from './context/authContext';
import { ProductProvider } from './context/ProductContext';
import { SearchProvider} from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HomeProvider>
      <AuthProvider>
        <SearchProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </SearchProvider>
      </AuthProvider>
    </HomeProvider>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
