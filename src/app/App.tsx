import { Bar } from "../pages";
import { Route, Routes } from "react-router-dom";
export function App() {
    return (
        <Routes>
            <Route path="/" index element={<Bar />} />
        </Routes>
    );
}
