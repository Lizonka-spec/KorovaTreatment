import { Bar, Laboratory, Results } from "../pages";
import { Route, Routes } from "react-router-dom";
export function App() {
    return (
        <Routes>
            <Route path="/" index element={<Bar />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    );
}
