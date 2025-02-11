import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/watch/:id" element={<Watch />}></Route>
                <Route path="/search" element={<Search />}></Route>
                {/* O asterisco é usado para indicar qualquer outra rota a não ser as que estão declaradas */}
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;