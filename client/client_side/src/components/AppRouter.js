import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../Routes";
import {Context} from "../index";
const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)

    return (
        <Routes>

            {authRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element ={<Component/>} exact/>
            )}


            {publicRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element ={<Component/>} exact/>
            )}
                </Routes>
);
};

export default AppRouter;