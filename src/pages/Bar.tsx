import { useState } from "react";
import { AppHeader, MainContent } from "../widgets";
import { ProgressBar } from "../shared/ProgressBar";
import type { CardData } from "../widgets/MainContent/types";
import { useNavigate } from "react-router-dom";

export const Bar = () => {
    const navigate = useNavigate();
    const [lawfulness, setLawfulness] = useState(0);
    const [answeredCardIds, setAnsweredCardIds] = useState<number[]>([]);

    const barCards: CardData[] = [
        {
            id: 1,
            bgImage: "/img/Card1.png",
            theme: "Побег от реальности",
            question:
                "Имеет ли право человек уходить от реальности с помощью веществ или субкультур, если его не устраивает мир вокруг?",
            answer1: "Разрешено",
            answer2: "Запрещено",
            effect1: -33,
            effect2: 33,
        },
        {
            id: 2,
            bgImage: "/img/Card2.png",
            theme: "Природа жестокости",
            question: "Если подростки совершают жестокие поступки ради забавы, кто в этом виноват?",
            answer1: "Общество",
            answer2: "Вседозволенность",
            effect1: -33,
            effect2: 33,
        },
        {
            id: 3,
            bgImage: "/img/Card3.jpg",
            theme: "Конфликт поколений",
            question:
                "Должна ли молодежь слепо подчиняться правилам старшего поколения и государства?",
            answer1: "Никогда",
            answer2: "Обязана",
            effect1: -34,
            effect2: 34,
        },
    ];

    const handleApplyEffect = (effectValue: number, cardId: number) => {
        setLawfulness((prev) => Math.max(0, Math.min(100, prev + effectValue)));

        setAnsweredCardIds((prev) => {
            const updated = [...prev, cardId];

            if (updated.length === 3) {
                setTimeout(() => {
                    navigate("/laboratory");
                }, 500);
            }

            return updated;
        });
    };

    return (
        <div className="flex flex-col gap-7">
            <AppHeader
                headline='МОЛОЧНЫЙ БАР "KOROVA"'
                subtext="Три дилеммы. Три ответа. Один эксперимент, который измерит твою покорность Системе."
            />

            <MainContent
                cards={barCards}
                answeredCardIds={answeredCardIds}
                onApplyEffect={handleApplyEffect}
            />
            <ProgressBar value={lawfulness} label="Законопослушность" />
        </div>
    );
};
