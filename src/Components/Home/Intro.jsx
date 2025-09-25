const Intro = () => {
    return (
        <section className="w-full my-16 md:my-32 px-4 md:px-8">
            {/* 🔹 Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center h-full">
                {/* Text Content */}
                <div className="md:col-span-2 lg:col-span-4 space-y-4 text-center md:text-left h-full">
                    <p className="text-3xl md:text-6xl font-bold leading-tight">Your Most Trusted Tally Partner.</p>
                    <p className="text-lg md:text-3xl   text-gray-700">
                        YENNES has expertise around all Tally products and has been selling, implementing, customizing,
                        and supporting customers all over India for more than 3 decades.
                    </p>
                    {/* 🔹 Marquee */}
                    <div className="overflow-hidden relative py-2">
                        <p className="whitespace-nowrap animate-marquee text-base md:text-2xl text-red-700 font-bold">
                            Experience the Power of Banking with All-New TallyPrime 6.0.
                        </p>
                    </div>
                </div>

                {/* Video */}
                <div className="md:col-span-1 lg:col-span-2 w-full h-full">
                    <video
                        src=""
                        className="aspect-video h-auto md:rounded-xl shadow-md border border-gray-200"
                        // controls
                        poster="https://via.placeholder.com/600x400.png?text=Tally+Intro+Video"
                    />
                </div>
            </div>
        </section>
    );
};

export default Intro;
