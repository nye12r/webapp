import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import Header from './components/Header/Header';
import NavOptions from './components/nav/NavOptions';
import Consultar from './components/pages/Consultar';
import Prestar from './components/pages/Prestar';
import Agregar from './components/pages/Agregar';
import Eliminar from './components/pages/Eliminar';

import "./style.css";

export default function App() {

    return <>
        <BrowserRouter>
            <NavOptions></NavOptions>
            <Header></Header>            
            <div>
                <Switch>
                    <Route exact path='/' component={Consultar}/>
                    <Route exact path='/prestar' component={Prestar}/>
                    <Route exact path='/agregar' component={Agregar}/>
                    <Route exact path='/eliminar' component={Eliminar}/>
                </Switch>
            </div>
        </BrowserRouter>
    </>
}