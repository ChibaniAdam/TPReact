import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigationBar';
import NotFound from './pages/notFound';
import Products from './pages/products';

function App() {
  return (
    <Suspense fallback={<>Loading<Spinner/></>}>
    <NavigationBar/>
<Routes>
  <Route path="/" element={<Products/>}></Route>
  <Route path="/:name" element={<Products/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
</Routes>
</Suspense>
  );
}

export default App;
