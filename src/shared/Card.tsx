type CardProps = {
    question: string;
    bgImage: string;
};

export const Card = ({ question, bgImage }: CardProps) => {
    return (
        <div className="relative w-full aspect-[3/4] rounded-lg text-center flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.7)]">
            <div
                className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-75 transition-opacity duration-500 ease-out bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <p className="relative text-white text-xl font-bold px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                {question}
            </p>
        </div>
    );
};
