import Reac, {useState} from 'react'; 
import {Routes, Route} from 'react-router-dom';

import Inicio from '../components/Header/Inicio/Inicio';
import Eventos from '../components/Header/Eventos/Eventos';
import Competencias from '../components/Header/Competencias/Competencias';
import Integrantes from '../components/Header/Integrantes/Integrantes';
import Colaboradores from '../components/Header/Colaboradores/Colaboradores';
import Servicios from '../components/Header/Servicios/Servicios';

function Router() {
    return (
        <Routes>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            <Route path='/competencias' element={<Competencias/>}/>
            <Route path='/integrantes' element={<Integrantes/>}/>
            <Route path='/colaboradores' element={<Colaboradores/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
        </Routes>
    );
} 
export default Router; 