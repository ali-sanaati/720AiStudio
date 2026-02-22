import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <section className="relative w-full min-height-[90vh] flex flex-col items-center justify-center bg-background py-20 px-6 overflow-hidden">
                {/* Background Decorative Element (Optional) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-50" />

                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-dark mb-6">
                        BIMetryX
                        <span className="block text-primary mt-2 text-4xl md:text-6xl">
                            Revit that actually thinks
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-body leading-relaxed mb-10 text-balance">
                        An intelligent Revit plugin that checks national building code compliance,
                        calculates real project quantities and costs, and integrates real-market
                        objects to bring your model closer to reality.
                    </p>

                    {/* Primary CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
                            Download Beta
                        </button>
                        <button className="px-8 py-4 bg-white text-dark font-bold rounded-lg border-2 border-border hover:border-dark transition-all">
                            Book a Demo
                        </button>
                    </div>

                    {/* Built For Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-medium text-muted mb-20">
                        <span className="px-3 py-1 bg-background rounded-full">Architects</span>
                        <span className="px-3 py-1 bg-background rounded-full">Design Studios</span>
                        <span className="px-3 py-1 bg-background rounded-full">Construction Companies</span>
                        <span className="px-3 py-1 bg-background rounded-full">Licensed Engineers</span>
                        <span className="px-3 py-1 bg-background rounded-full">BIM Students</span>
                        {/*  */}
                    </div>
                </div>
            </section>
        </>

    );
};

export default HeroSection;