import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from "./Layout/Route";
import Layout from './Layout/layout';
import NotFound from './Pages/404/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Layout />}>
          <Route path='*' element={<NotFound />} />
          {routes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={Component} />
          ))};
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
