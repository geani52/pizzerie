import React from 'react';
import { Main } from './pages/main';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { CatalogPizza } from './pages/page/catalog_pizza';
import { Home } from './pages/page/home';
import { CatalogDesert } from './pages/page/catalog_desert';
import { CatalogBauturi } from './pages/page/catalog_bauturi';
import { CatalogSosuri } from './pages/page/catalog_sosuri';
import { About } from './pages/page/about';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main title='Pizzeria Delliciosa' contentPage={<Home />}/>} />
          <Route path="/catalog-pizza" element={
            <Main 
              contentPage={<CatalogPizza />}
              title='Catalog Pizza'/>
          } />
          <Route path="/catalog-desert" element={
            <Main 
              contentPage={<CatalogDesert />}
              title='Catalog Desert'/>
          } />
          <Route path="/catalog-bauturi" element={
            <Main 
              contentPage={<CatalogBauturi />}
              title='Catalog Bauturi'/>
          } />
          <Route path="/catalog-sosuri" element={
            <Main 
              contentPage={<CatalogSosuri />}
              title='Catalog Sosuri'/>
          } />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;