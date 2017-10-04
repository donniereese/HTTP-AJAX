import React, { Component } from 'react';
import ContactsList from './components/ContactsList';
import AddContact from './components/AddContact';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Friendly Contacts</h1>
                </header>
                <main>
                    <ContactsList />
                    <AddContact />
                </main>
            </div>
        );
    }
}

export default App;
