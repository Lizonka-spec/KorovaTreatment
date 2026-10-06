type AppHeaderProps = {
    headline: string;
    subtext: string;
};

export const AppHeader = ({ headline, subtext }: AppHeaderProps) => {
    return (
        <div className="flex flex-col justify-center items-center text-center m-auto md:px-5 w-full mt-10">
            <h1 className="text-contrast text-xl font-bold mb-3">{headline}</h1>
            <p className="text-main text-md md:text-lg">{subtext}</p>
        </div>
    );
};
