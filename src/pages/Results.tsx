import { useLocation, useNavigate } from "react-router-dom";
import { ProgressBar } from "../shared/ProgressBar";
import { AppHeader } from "../widgets";

export const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const chaos = location.state?.lawfulness ?? 0;
    const order = location.state?.humanity ?? 0;

    let verdictType: "vintik" | "marginal" | "balance" = "balance";
    if (order === chaos) {
        verdictType = "balance";
    } else if (order > chaos) {
        verdictType = "vintik";
    } else {
        verdictType = "marginal";
    }

    const verdicts = {
        vintik: {
            title: "ИДЕАЛЬНЫЙ ВИНТИК СИСТЕМЫ",
            stamp: "ВЫЛЕЧЕН",
            colorClass: "border-green-500 text-green-500 shadow-[0_0_25px_rgba(34,197,94,0.3)]",
            stampColor: "border-green-500 text-green-500",
            text: "Вы полностью одобрили методы государства. Программа Людовика прошла успешно. Вы больше физически не способны совершить зло и нарушить закон. Однако вы лишились свободы выбора и возможности искренне наслаждаться искусством. Вы стали безопасной, но бездушной деталью государственного механизма.",
        },
        marginal: {
            title: "НЕИСПРАВИМЫЙ МАРГИНАЛ",
            stamp: "ОПАСЕН",
            colorClass: "border-red-500 text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)]",
            stampColor: "border-red-500 text-red-500",
            text: "Метод Людовика оказался бессилен перед вашей волей. Вы отказались подчиняться государственного контролю и выбрали абсолютную свободу. Вы сохранили свою человеческую душу, но ваша внутренняя агрессия делает вас опасным для общества. Система отправляет вас в изолятор.",
        },
        balance: {
            title: "ГУМАНИСТИЧЕСКИЙ БАЛАНС",
            stamp: "ОСОЗНАНИЕ",
            colorClass: "border-amber-500 text-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.3)]",
            stampColor: "border-amber-500 text-amber-500",
            text: "Вы разгадали главную загадку Бёрджесса. Вы поняли, что и насилие уличных банд, и ответное насилие тоталитарного государства — это тупиковые пути. Вы признаете ценность свободы воли, но понимаете необходимость порядка. Вы похожи на повзрослевшего Алекса в финальной 21-й главе книги, который сам, осознанно пришел к добру, без принуждения со стороны шприцов и законов.",
        },
    };

    const currentVerdict = verdicts[verdictType];

    return (
        <div className="theme-laboratory w-full max-w-5xl mx-auto my-10 px-5 flex flex-col gap-10">
            <AppHeader
                headline="ПРОФИЛЬ ЛИЧНОСТИ"
                subtext="Электронная система анализа зафиксировала твои показатели. Ознакомься со своим окончательным статусом в структуре Нового Порядка."
            />
            <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
                <div className="flex flex-col gap-4 w-full lg:w-1/2">
                    <ProgressBar value={chaos} label="Уровень деструктивной свободы (Хаос)" />
                    <ProgressBar
                        value={order}
                        label="Уровень государственного контроля (Порядок)"
                    />
                </div>

                <div
                    className={`relative w-full lg:w-1/2 bg-neutral-900/50 border-2 rounded-2xl p-6 sm:p-8 flex flex-col items-start text-left pb-20 ${currentVerdict.colorClass}`}
                >
                    <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-2 block">
                        Заключение электронной системы комиссии
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide mb-6">
                        {currentVerdict.title}
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
                        {currentVerdict.text}
                    </p>

                    <div
                        className={`absolute bottom-6 right-6 border-4 font-mono font-black text-sm sm:text-base px-4 py-2 uppercase rounded tracking-widest -rotate-12 select-none mix-blend-screen opacity-90 ${currentVerdict.stampColor}`}
                    >
                        {currentVerdict.stamp}
                    </div>
                </div>
            </div>
            <button
                onClick={() => navigate("/")}
                className="bg-contrast hover:bg-rose-600 w-80 m-auto text-slate-950 text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg transition-colors shadow-[0_0_15px_rgba(244,63,94,0.3)]"
            >
                Перейти к теории
            </button>
        </div>
    );
};
