
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import './index.scss'; // Asegúrate de que Tailwind CSS esté correctamente importado
const container = document.getElementById('root');
const root = createRoot(container);
import ReactDOM from "react-dom/client";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

