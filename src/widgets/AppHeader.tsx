type AppHeaderProps = {
    headline: string;
    subtext: string;
};

export const AppHeader = ({ headline, subtext }: AppHeaderProps) => {
    return (
        <div className="flex flex-col text-main text-md justify-center items-center text-center m-auto">
            <h1 className="text-contrast text-xl font-bold mb-3">{headline}</h1>
            <p>{subtext}</p>
        </div>
    );
};
