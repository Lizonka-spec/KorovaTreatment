export interface CharacterProps {
    name: string;
    role: string;
    description: string;
    traits: string[];
    image: string;
}

export const CharacterCard = ({ name, role, description, traits, image }: CharacterProps) => {
    return (
        <div className="bg-slate-950/60 border border-slate-850 rounded-xl overflow-hidden hover:border-contrast/20 transition-all duration-300 flex flex-col sm:flex-row shadow-lg">
            <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto sm:h-full relative overflow-hidden bg-slate-900 shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-slate-950/80 sm:to-transparent"></div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                    <div className="flex items-start justify-between mb-2 gap-2">
                        <h3 className="text-lg font-bold text-main tracking-wide">{name}</h3>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 whitespace-nowrap shadow-[0_0_10px_rgba(244,63,94,0.1)]">
                            {role}
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {traits.map((trait, index) => (
                        <span
                            key={index}
                            className="text-[11px] bg-slate-900 text-slate-500 px-2 py-0.5 rounded border border-slate-800"
                        >
                            #{trait}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
