import { Bar, Laboratory, Results, Theory } from "../pages"; // Добавили импорт Theory
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <Routes>
            <Route path="/" index element={<Theory />} />
            <Route path="/bar" element={<Bar />} />

            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    );
}
