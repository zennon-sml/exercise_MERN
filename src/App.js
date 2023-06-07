import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exact Component={ExercisesList} />
          <Route path="/edit/:id" Component={EditExercise} />
          <Route path="/create" Component={CreateExercise} />
          <Route path="/user" Component={CreateUser} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
