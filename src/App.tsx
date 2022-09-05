import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsuracePage from './InsurancePage';

function App() {
  return (
    <div className="App">
      <Router>
				<Routes>
          <Route path="/" element={<InsuracePage/>} />
					<Route path="/insurance" element={<InsuracePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
