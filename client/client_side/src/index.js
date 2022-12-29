import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from "./sport_finder_actually/User";
import KindsOfSport from "./sport_finder_actually/KindsOfSport";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new User(),
        training: new KindsOfSport(),
    }}>
        <App />
    </Context.Provider>

);

