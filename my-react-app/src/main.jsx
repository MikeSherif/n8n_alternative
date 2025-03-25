import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'reactflow/dist/style.css'
import App from './components/app/App.jsx'
import {ReactFlow} from "@xyflow/react";

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App />);
