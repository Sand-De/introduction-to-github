import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Accueil from "./Page/Accueil";
import Films from "./Page/Films";
import Categorie from "./Page/Categorie";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Categories" element={<Categorie />} />
            <Route path="/film/:id" element={<Films />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
