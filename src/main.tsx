import ReactDOM from "react-dom/client";
import router from "./App.tsx";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './i18n';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </Provider>
);
