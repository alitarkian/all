import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/homepage/Home';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
      </Router>
  );
}

export default App;
