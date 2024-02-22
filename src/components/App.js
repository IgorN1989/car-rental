import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/catalog" element={<div>Catalog page</div>} />
        <Route path="/favorites" element={<div>Favorites page</div>} />
      </Routes>
    </div>
  );
};
