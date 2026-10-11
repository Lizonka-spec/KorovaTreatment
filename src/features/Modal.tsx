type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    theme: string;
    question: string;
    answer1: string;
    answer2: string;
    onAnswer: (effect: number) => void;
};

export const Modal = ({
    isOpen,
    onClose,
    theme,
    question,
    answer1,
    answer2,
    onAnswer,
}: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={onClose}
        >
            <div className="bg-neutral-900 border border-contrast/30 shadow-[0_0_40px_rgba(249,115,22,0.25)] rounded-2xl max-w-md w-full p-6 flex flex-col items-center text-center">
                <span className="text-contrast text-xs font-black uppercase mb-2">{theme}</span>
                <h3 className="text-white text-xl font-bold mb-6">{question}</h3>

                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
                    <button
                        onClick={() => onAnswer(1)}
                        className="w-full sm:w-auto py-3 px-5 border-2 border-gray-500 hover:text-contrast text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] text-sm uppercase cursor-pointer"
                    >
                        {answer1}
                    </button>
                    <button
                        onClick={() => onAnswer(2)}
                        className="w-full sm:w-auto py-3 px-5 border-2 border-gray-500 hover:text-contrast text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] text-sm uppercase cursor-pointer"
                    >
                        {answer2}
                    </button>
                </div>
            </div>
        </div>
    );
};
