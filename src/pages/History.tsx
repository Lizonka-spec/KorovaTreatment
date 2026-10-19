export const History = () => {
    return (
        <section
            id="history"
            className="scroll-mt-20 bg-slate-900/40 text-main p-6 rounded-2xl border border-contrast/10 shadow-xl backdrop-blur-sm"
        >
            <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1 space-y-2">
                    <h2 className="text-xl font-black text-contrast uppercase tracking-wider">
                        О книге
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        Роман{" "}
                        <span className="text-contrast font-semibold">«Заводной апельсин»</span>{" "}
                        написан Энтони Бёрдджессом в{" "}
                        <span className="text-contrast font-semibold">1962 году</span>. Написание
                        книги во многом было продиктовано личной трагедией автора и его тяжелым
                        медицинским диагнозом. Название отсылает к лондонскому сленгу, означающему
                        нечто максимально неестественное. Это история о подростковом бунте, которая
                        ставит под сомнение методы контроля государства над человеческой природой.
                    </p>
                </div>
                <div className="w-25 h-25 sm:w-40 sm:h-40 shrink-0 overflow-hidden border border-slate-800 shadow-md">
                    <img
                        src="/img/history.webp"
                        alt="Заводной апельсин"
                        className="w-full h-full object-cover filter grayscale contrast-125"
                    />
                </div>
            </div>
        </section>
    );
};
