import React from 'react';
import ListView from './ListView'
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../css/styles.css';

function App() {
  return (
    <Router>
      <Route path="/">
        <ListView />
      </Route>

    </Router>
  );
}

export default App;
