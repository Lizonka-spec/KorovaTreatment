type PopUpProps = {
    question: string;
    AnswerA: string;
    AnswerB: string;
};

export const PopUp = ({ question, AnswerA, AnswerB }: PopUpProps) => {
    return (
        <div className="fixed inset-0 bg-main rounded-b-lg px-10 py-5 flex flex-col justify-center items-center w-2000 h-150">
            <h2 className="text-contrast shadow-amber-700 font-bold text-xl">{question}?</h2>
            <div className="flex justify-around p-4 text-black ">
                <button className="border border-black rounded-b-lg">{AnswerA}</button>
                <button className="border border-black rounded-b-lg">{AnswerB}</button>
            </div>
        </div>
    );
};
