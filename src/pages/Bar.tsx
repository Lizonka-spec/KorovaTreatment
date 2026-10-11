import { AppHeader, MainContent } from "../widgets";
import type { CardData } from "../widgets/MainContent/types";

export const Bar = () => {
    const barCards: CardData[] = [
        {
            id: 1,
            bgImage: "/img/Card1.png",
            theme: "Пбег от реальности",
            question:
                "Имеет ли право человек уходить от реальности с помощью веществ или субкультур, если его не устраивает мир вокруг?",
            answer1: "Разрешено",
            answer2: "Запрещено",
        },
        {
            id: 2,
            bgImage: "/img/Card2.png",
            theme: "Природа жестокости",
            question: "Если подростки совершают жестокие поступки ради забавы, кто в этом виноват?",
            answer1: "Общество",
            answer2: "Вседозволенность",
        },
        {
            id: 3,
            bgImage: "/img/Card3.jpg",
            theme: "Конфликт поколений",
            question:
                "Должна ли молодежь слепо подчиняться правилам старшего поколения и государства?",
            answer1: "Никогда",
            answer2: "Обязана",
        },
    ];

    return (
        <div className="flex flex-col gap-7">
            <AppHeader
                headline='МОЛОЧНЫЙ БАР "KOROVA"'
                subtext="Три дилеммы. Три ответа. Один эксперимент, который измерит твою покорность Системе."
            />
            <MainContent cards={barCards} />
        </div>
    );
};
