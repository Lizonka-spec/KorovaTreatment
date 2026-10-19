import { useState } from "react";
import { Card } from "../../shared";
import { Modal } from "../../features";
import type { CardData } from "./types";

type MainContentProps = {
    cards: CardData[];
    onApplyEffect: (effectValue: number, cardId: number) => void;
    answeredCardIds: number[];
};

export const MainContent = ({ cards, onApplyEffect, answeredCardIds }: MainContentProps) => {
    const [activeCard, setActiveCard] = useState<CardData | null>(null);

    const handleAnswerSelect = (buttonIndex: number) => {
        if (!activeCard) return;

        const effect = buttonIndex === 1 ? activeCard.effect1 : activeCard.effect2;

        onApplyEffect(effect, activeCard.id);
        setActiveCard(null);
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-10 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 justify-items-center">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        bgImage={card.bgImage}
                        theme={card.theme}
                        onClick={() => setActiveCard(card)}
                        isDisabled={answeredCardIds.includes(card.id)}
                    />
                ))}
            </div>

            <Modal
                isOpen={!!activeCard}
                onClose={() => setActiveCard(null)}
                theme={activeCard?.theme || ""}
                question={activeCard?.question || ""}
                answer1={activeCard?.answer1 || ""}
                answer2={activeCard?.answer2 || ""}
                onAnswer={handleAnswerSelect}
            />
        </div>
    );
};
