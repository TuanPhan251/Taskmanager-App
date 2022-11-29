import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<HomePage />} />
        <Route path="/tasks/create" element={<CreateTaskPage />} />
        <Route path="/tasks/:id/update" element={<UpdateTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
