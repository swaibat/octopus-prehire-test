import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Currencies from './currencies';
import { Typography } from './components/Typography';
import Currency from './currencies/Currency';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Currencies />} />
          <Route path="/currency/:country/:code" element={<Currency />} />
          <Route
            path="*"
            element={
              <Typography size="md" style={{ margin: 'auto' }}>
                There's nothing here: 404!
              </Typography>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
