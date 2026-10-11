import { Card } from "../shared";

export const MainContent = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl mx-auto my-10 px-5 gap-15 justify-items-center">
            <Card bgImage="/img/Card1.png" theme="Природа жестокости" />
            <Card bgImage="/img/Card2.png" theme="Побег от реальности" />
            <Card bgImage="/img/Card3.jpg" theme="Конфликт поколений" />
        </div>
    );
};
