type ProgressBarProps = {
    value: number;
    label: string;
};

export const ProgressBar = ({ value, label }: ProgressBarProps) => {
    return (
        <div className="w-full max-w-xl mx-auto px-5 my-6 text-center">
            <div className="flex justify-between items-center text-white font-bold uppercase tracking-wider text-sm mb-2">
                <span className="text-contrast text-xl">{label}</span>
                <span className="text-main">{value}%</span>
            </div>

            <div className="w-full h-4 bg-neutral-800 rounded-full overflow-hidden shadow-[0_0_15px_#ec4899,0_0_5px_#ec4899] relative">
                <div
                    className="h-full bg-accent  rounded-full transition-all duration-500 ease-out"
                    style={{
                        width: `${value}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};
