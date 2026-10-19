import { CharacterCard } from "../shared/index";

export const CharactersList = () => {
    const characters = [
        {
            name: "Алекс",
            role: "Главный герой / Антигерой",
            description:
                "15-летний харизматичный лидер банды, жестокий социопат и одновременно интеллектуал, тонко чувствующий классическую музыку. Его образ — это парадокс сочетания высокой культуры (Бетховен) и первобытной агрессии. В ходе сюжета превращается из палача в беззащитную жертву Системы.",
            traits: ["Ультранасилие", "Бетховен", "Лидер банды", "Надсат"],
            image: "/img/alex.jpg",
        },
        {
            name: "Пит, Джорджи, Тём",
            role: "Лимы (сообщники)",
            description:
                "Окружение Алекса, отражающее разные пути деградации и адаптации молодежи. Джорджи олицетворяет борьбу за власть внутри стаи и гибнет. Тём — тупая исполнительная сила, которая легко меняет бандитскую форму на полицейскую. Пит — пример обывателя, который просто «перерастает» бунт ради тихой семейной жизни.",
            traits: ["Стадный инстинкт", "Предательство", "Оборотни в погонах"],
            image: "/img/droogs.jpeg",
        },
    ];

    return (
        <section
            id="characters"
            className="scroll-mt-20 bg-slate-900/40 text-main p-6 rounded-2xl border border-contrast/10 shadow-xl backdrop-blur-sm"
        >
            <h2 className="text-2xl font-black text-contrast uppercase tracking-wider mb-6">
                Психология персонажей
            </h2>
            <div className="grid grid-cols-1 gap-4">
                {characters.map((char, index) => (
                    <CharacterCard key={index} {...char} />
                ))}
            </div>
        </section>
    );
};
