import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/Screens/Home';
import AddContact from './Components/Screens/AddContact';
import SearchContacts from './Components/Screens/SearchContacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add-contact" component={AddContact}></Route>
        <Route path="/search-contacts" component={SearchContacts}></Route>
      </Router>
    </div>
  );
}

export default App;
