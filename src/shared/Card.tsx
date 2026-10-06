import { useState } from "react";

export const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            className={`w-full h-45 bg-contrast rounded-lg text-center flex items-center justify-center transition-transform duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
        >
            {isFlipped ? (
                <p className="text-black text-xl font-bold rotate-y-180">Временный вопрос</p>
            ) : (
                <p className="text-main text-xl font-bold">врменная карточка с вопросом</p>
            )}
        </div>
    );
};
