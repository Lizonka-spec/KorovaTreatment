import { useState } from "react";

interface TimelineEvent {
    part: string;
    title: string;
    description: string;
}

export const PlotSummary = () => {
    const [activePart, setActivePart] = useState<number>(0);

    const plotParts: TimelineEvent[] = [
        {
            part: "Часть 1",
            title: "Ультранасилие и банда",
            description:
                "Знакомство с Алексом и его бандой (лимами). Ночные набеги, ограбления, акты неоправданной жестокости под аккомпанемент классической музыки (Бетховена). Часть заканчивается предательством банды и арестом Алекса.",
        },
        {
            part: "Часть 2",
            title: "Метод Людовика",
            description:
                "Алекс проводит два года в тюрьме и соглашается на экспериментальное лечение в обмен на свободу. Ему вводят препарат, вызывающий тошноту при просмотре насилия под музыку. Алекс теряет способность совершать зло, но лишается выбора.",
        },
        {
            part: "Часть 3",
            title: "Возмездие и финал",
            description:
                "Выйдя на свободу, Алекс становится беззащитной жертвой своих бывших жертв и бывших друзей-полицейских. В оригинальной версии он в итоге «перерастает» свой подростковый бунт, понимая, что хочет созидать.",
        },
    ];

    return (
        <section
            id="plot"
            className="scroll-mt-20 bg-slate-900/40 text-main p-6 rounded-2xl border border-contrast/10 shadow-xl backdrop-blur-sm"
        >
            <h2 className="text-2xl font-black text-contrast uppercase tracking-wider mb-6">
                Сюжет и структура
            </h2>

            <div className="flex border-b border-slate-800 mb-6">
                {plotParts.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActivePart(index)}
                        className={`flex-1 py-3 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                            activePart === index
                                ? "text-contrast border-b-2 border-contrast bg-contrast/5"
                                : "text-slate-500 hover:text-slate-300"
                        }`}
                    >
                        {item.part}
                    </button>
                ))}
            </div>

            <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-850 min-h-[140px] flex flex-col md:flex-row gap-5 items-center">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-contrast mb-2">
                        {plotParts[activePart].title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {plotParts[activePart].description}
                    </p>
                </div>
            </div>
        </section>
    );
};
