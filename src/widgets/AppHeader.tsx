import { Info } from "lucide-react";

type AppHeaderProps = {
    Headline: string;
};

export const AppHeader = ({ Headline }: AppHeaderProps) => {
    return (
        <div className="bg-black">
            <Info size={20} className="text-main" />
            <h1 className="text-contrast text-xl font-bold ">{Headline}</h1>
        </div>
    );
};
