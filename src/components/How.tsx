import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";

function How() {
  return (
    <section className="">
          <div className="">
            <div className="bg-slate-900 py-20 p-6 lg:px-26 ">
              <h3 className="text-2xl md:text-4xl mb-6 lg:mb-12 text-gray-800 dark:text-gray-200 font-semibold">
                How VerifAI Works
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm text-justify">
                Our AI analyzes the content, source, and context of news posts
                to determine their credibility.
              </p>
            </div>
            <div className="relative">
              <div className="min-h-screen lg:max-w-7xl">
                <div className="absolute top-0 left-0 w-full lg:mt-16">
                  <FeaturesSectionWithHoverEffects />
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}

export { How };
