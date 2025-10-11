import { cn } from "@/lib/utils";
import {
  IconMoodCheck,
  IconNews,
  IconRss,
  IconBallpen,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Source Credibility",
      description:
        "Checks if the source is reliable using trusted databases like Media Bias/Fact Check.",
      icon: <IconRss />,
    },
    {
      title: "Writing Credibility",
      description:
        "Analyzes the article or post using NLP models trained on fake news datasets.",
      icon: <IconBallpen />,
    },

    {
      title: "Matched Articles",
      description:
        "Finds real news versions of the same topic from verified media outlets.",
      icon: <IconNews />,
    },
    {
      title: "Face & Context Matching",
      description:
        "Detects people in images and verifies if the photo context matches the story.",
      icon: <IconMoodCheck />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10 lg:px-20">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-cyan-900",
        (index === 0 || index === 2) && "lg:border-l dark:border-cyan-900",
        index < 4 && "lg:border-b dark:border-cyan-900"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-cyan-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-cyan-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
