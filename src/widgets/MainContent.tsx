import { Card } from "../shared";

export const MainContent = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-10 gap-5">
            <Card />
            <Card />
            <Card />
        </div>
    );
};
