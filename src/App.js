import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";
import Task3 from "./Components/Task3";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/task1">Task 1</Link>
          </li>
          <li>
            <Link to="/task2">Task 2</Link>
          </li>
          <li>
            <Link to="/task3">Task 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
