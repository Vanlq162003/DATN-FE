import { Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import HomePage from "./views/pages/HomePage";
import ProductPage from "./views/pages/ProductPage";
import ProductDetailPage from "./views/pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<UserLayout />}> 
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path="id/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="category/:category" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
