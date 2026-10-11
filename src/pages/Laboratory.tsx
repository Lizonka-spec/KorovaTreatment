import { useState } from "react";
import { AppHeader, MainContent } from "../widgets";
import { ProgressBar } from "../shared/ProgressBar";
import type { CardData } from "../widgets/MainContent/types";
import { useNavigate } from "react-router-dom";

export const Laboratory = () => {
    const navigate = useNavigate();
    const [humanity, setHumanity] = useState(0);
    const [answeredCardIds, setAnsweredCardIds] = useState<number[]>([]);

    const barCards: CardData[] = [
        {
            id: 1,
            bgImage: "/img/Card4.jpg",
            theme: "Насилие государства",
            question:
                "Допустимо ли применять физическое насилие и пытки к преступнику, если это гарантированно исправит его?",
            answer1: "Недопустимо",
            answer2: "Оправданно",
            effect1: 33,
            effect2: -33,
        },
        {
            id: 2,
            bgImage: "/img/Card5.jpg",
            theme: "Свобода выбора",
            question:
                "Что лучше для общества: человек, который принудительно делает только добро, или человек, который сам выбирает между добром и злом?",
            answer1: "Послушание",
            answer2: "Свобода",
            effect1: -33,
            effect2: 33,
        },
        {
            id: 3,
            bgImage: "/img/Card6.jpg",
            theme: "Жертва ради порядка",
            question:
                "Готовы ли вы ради искоренения преступности лишить осужденного возможности наслаждаться искусством и музыкой ",
            answer1: "Да",
            answer2: "Нет",
            effect1: -34,
            effect2: 34,
        },
    ];

    const handleApplyEffect = (effectValue: number, cardId: number) => {
        setHumanity((prev) => Math.max(0, Math.min(100, prev + effectValue)));

        setAnsweredCardIds((prev) => {
            const updated = [...prev, cardId];

            if (updated.length === 3) {
                setTimeout(() => {
                    navigate("/results");
                }, 500);
            }

            return updated;
        });
    };

    return (
        <div className="flex flex-col gap-7">
            <AppHeader
                headline="ЛАБОРАТОРИЯ МЕТОДА ЛЮДОВИКА"
                subtext="Инструменты исправления. Три вопроса. Эксперимент, который определит грань твоей человечности."
            />

            <MainContent
                cards={barCards}
                answeredCardIds={answeredCardIds}
                onApplyEffect={handleApplyEffect}
            />
            <ProgressBar value={humanity} label="Человечность" />
        </div>
    );
};
