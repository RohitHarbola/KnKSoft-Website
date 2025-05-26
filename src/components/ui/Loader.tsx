import React from "react";

const Loader: React.FC = () => {
    // We have 12 segments (divs) each with a slightly different rotation & animation delay
    const segments = Array.from({ length: 12 });

    return (
        <div className="relative inline-block w-20 h-20">
            {segments.map((_, i) => {
                // Each segment rotates by 30° more than the previous (i*30)
                // Animation delay starts at -1.1s for i=0, incrementing by 0.1s until 0s for i=11
                const delay = -1.1 + i * 0.1;

                return (
                    <div
                        key={i}
                        className="
              absolute top-0 left-0
              w-full h-full
              animate-lds-spinner
            "
                        style={{
                            transform: `rotate(${i * 30}deg)`,
                            transformOrigin: "40px 40px",     // same center as original (80/2=40px)
                            animationDelay: `${delay}s`,
                        }}
                    >
                        {/* Pseudo-element (after) done via Tailwind's `after:` classes */}
                        <div
                            className="
                after:content-['']
                after:block
                after:absolute
                after:top-[3px]
                after:left-[37px]
                after:w-[6px]
                after:h-[18px]
                after:rounded-[20%]
                after:bg-foreground
              "
                        />
                    </div>

                );
            })}
        </div>
    );
};

export default Loader;
