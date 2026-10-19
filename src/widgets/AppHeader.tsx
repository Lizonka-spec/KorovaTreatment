type AppHeaderProps = {
    headline: string;
    subtext: string;
};

export const AppHeader = ({ headline, subtext }: AppHeaderProps) => {
    return (
        <div className="flex flex-col justify-center items-center text-center m-auto px-4 md:px-5 w-full mt-12 mb-6">
            <div className="w-fit flex flex-col items-center mb-5 group">
                <h1 className="text-contrast text-3xl sm:text-5xl font-black uppercase tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                    {headline}
                </h1>
                <div className="w-full h-[3px] bg-accent rounded-full shadow-[0_0_15px_#ec4899,0_0_5px_#ec4899]"></div>
            </div>

            <p className="text-main text-sm sm:text-base md:text-lg font-medium max-w-xl opacity-90 tracking-wide leading-relaxed">
                {subtext}
            </p>
        </div>
    );
};
