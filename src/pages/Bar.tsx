import { AppHeader, MainContent } from "../widgets";

export const Bar = () => {
    return (
        <div className="flex flex-col gap-7">
            <AppHeader
                headline='МОЛОЧНЫЙ БАР "KOROVA"'
                subtext="Три дилеммы. Три ответа. Один эксперимент, который измерит твою покорность Системе."
            />
            <MainContent />
        </div>
    );
};
