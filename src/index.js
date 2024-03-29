import { createRoot } from "react-dom/client";
import App from "./components/app/app";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
