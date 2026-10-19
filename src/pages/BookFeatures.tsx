export const BookFeatures = () => {
    return (
        <section
            id="features"
            className="scroll-mt-20 bg-slate-900/40 text-main p-6 rounded-2xl border border-contrast/10 shadow-xl backdrop-blur-sm"
        >
            <h2 className="text-2xl font-black text-contrast uppercase tracking-wider mb-6">
                Смыслы и философия произведения
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-850">
                    <h3 className="text-base font-bold text-contrast uppercase tracking-wider mb-2">
                        Проблема свободы воли
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Центральный вопрос романа: что ценнее для мира — человек, принудительно
                        запрограммированный делать только добро (как робот), или порочный человек,
                        который <span className="text-main font-semibold">сам выбирает</span> свой
                        путь? Бёрдджесс доказывает, что лишая человека возможности совершить грех,
                        государство лишает его человечности.
                    </p>
                </div>

                <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-850">
                    <h3 className="text-base font-bold text-contrast uppercase tracking-wider mb-2">
                        Две стороны насилия
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Книга противопоставляет хаотичное насилие уличных банд (Алекс) и системное,
                        холодное насилие тоталитарного государства (Метод Людовика). Автор
                        показывает, что попытка Системы «исцелить» преступника лоботомическими
                        методами оказывается куда более зловещей, чем подростковый бунт.
                    </p>
                </div>

                <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-850">
                    <h3 className="text-base font-bold text-contrast uppercase tracking-wider mb-2">
                        Музыка как триггер
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Классическая music (особенно Девятая симфония Бетховена) служит лакмусовой
                        бумажкой. Сначала она подпитывает агрессию Алекса, а после эксперимента
                        превращается в источник невыносимой физической боли. Это символ того, как
                        прекрасное может быть осквернено и использовано как оружие контроля.
                    </p>
                </div>

                <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-850">
                    <h3 className="text-base font-bold text-contrast uppercase tracking-wider mb-2">
                        Языковой барьер «Надсат»
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Вымышленный сленг (
                        <span className="text-main italic">droog, malchik, korova, horrowshow</span>
                        ) — это не просто фишка. С одной стороны, он отгораживает подростков от мира
                        взрослых. С другой — он камуфлирует ужас совершаемых ими преступлений,
                        превращая жестокость в подобие абстрактной игры.
                    </p>
                </div>
            </div>
        </section>
    );
};
