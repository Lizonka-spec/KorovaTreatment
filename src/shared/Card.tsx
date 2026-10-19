type CardProps = {
    bgImage: string;
    theme: string;
    onClick: () => void;
    isDisabled?: boolean;
};

export const Card = ({ bgImage, theme, onClick, isDisabled = false }: CardProps) => {
    return (
        <div
            onClick={onClick}
            className={`bg-center bg-cover relative w-full max-h-[50vh] sm:max-h-none aspect-[3/4] rounded-xl flex items-end justify-center overflow-hidden transition-all duration-500 ease-out group 
                ${
                    isDisabled
                        ? "pointer-events-none opacity-40 grayscale"
                        : "cursor-pointer md:hover:scale-105 md:hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
                }`}
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

            <div className="relative w-full p-6 flex flex-col items-center transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h2 className="text-main text-lg md:text-xl lg:text-2xl text-center font-black uppercase transition-colors duration-500 group-hover:text-contrast">
                    {theme}
                </h2>
                <div className="w-0 h-[2px] bg-orange-500 mt-2 transition-all duration-500 ease-out group-hover:w-24"></div>
            </div>
        </div>
    );
};
