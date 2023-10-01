import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
        <h1>Dane's Responsive App for PizzaUI</h1>
      </header>
      <main>
        <div className="content">
          <h2>Welcome to our Web App</h2>
          <p>This is a basic responsive React web application.</p>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default App;

