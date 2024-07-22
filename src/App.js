import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard/Dashboard";
import Mymoves from "./components/MyMoves/Mymoves";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route index  element={<Mymoves/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




