import { useNavigate } from "react-router-dom";
import { AppHeader } from "../widgets";
import { PlotSummary } from "./PlotSummary";
import { History } from "./History";
import { CharactersList } from "../widgets/CharacterList";
import { BookFeatures } from "./BookFeatures";

export const Theory = () => {
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="theme-bar flex flex-col gap-7 w-full min-h-screen bg-slate-950 pb-12">
            <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-4 sm:gap-6">
                        <button
                            onClick={() => scrollToSection("history")}
                            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-contrast transition-colors"
                        >
                            История
                        </button>
                        <button
                            onClick={() => scrollToSection("plot")}
                            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-contrast transition-colors"
                        >
                            Сюжет
                        </button>
                        <button
                            onClick={() => scrollToSection("characters")}
                            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-contrast transition-colors"
                        >
                            Персонажи
                        </button>

                        <button
                            onClick={() => scrollToSection("features")}
                            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-contrast transition-colors"
                        >
                            Смыслы
                        </button>
                    </div>

                    <button
                        onClick={() => navigate("/bar")}
                        className="bg-accent hover:bg-rose-600 text-slate-950 text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                    >
                        Перейти к тесту
                    </button>
                </div>
            </nav>

            <AppHeader
                headline="АНТИУТОПИЯ: ЗАВОДНОЙ АПЕЛЬСИН"
                subtext="Прежде чем погрузиться в Эксперимент Системы, изучите теоретическую базу и ключевые аспекты произведения."
            />

            <div className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-7">
                <main className="flex flex-col gap-7">
                    <History />
                    <PlotSummary />
                    <CharactersList />
                    <BookFeatures />
                </main>

                <footer className="text-center mt-4 bg-slate-900/60 p-8 rounded-2xl border border-contrast/20 shadow-xl backdrop-blur-sm max-w-3xl mx-auto w-full">
                    <h3 className="text-xl font-black text-main tracking-wide uppercase mb-2">
                        Все готово для эксперимента?
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                        Вы изучили историю, персонажей и скрытые смыслы. Теперь пришло время
                        проверить себя и измерить свою покорность Системе.
                    </p>
                    <button
                        onClick={() => navigate("/bar")}
                        className="inline-flex items-center justify-center bg-contrast hover:opacity-90 text-slate-950 font-black tracking-wider uppercase text-sm sm:text-base px-12 py-4 rounded-xl shadow-lg shadow-contrast/10 transition-all duration-200 active:scale-98"
                    >
                        Начать эксперимент
                    </button>
                </footer>
            </div>
        </div>
    );
};
