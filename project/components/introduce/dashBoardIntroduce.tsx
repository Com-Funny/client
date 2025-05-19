"use client";

import { IntroduceProps } from "app/(intro)/page";
import LazyImage from "components/lazyElements/lazyImage";
import LazyText from "components/lazyElements/lazyText";

export default function DashBoardIntroduce({ data }: IntroduceProps) {
  return (
    <div className="w-full max-w-7xl flex flex-col items-start justify-center gap-6">
      <h2 className="w-full flex flex-col items-start justify-start gap-2">
        <LazyText className="text-lg font-semibold" text={data.description} />
        <LazyText className="text-3xl font-semibold" text={data.title} />
      </h2>
      <ul className="w-full flex gap-2">
        {data.images?.map((imageUrl: string, index: number) => (
          <li
            key={`dashboard_image_example_${index}`}
            className="hover:scale-105 transition-all"
          >
            <LazyImage src={imageUrl} alt="dashboard example" width="248px" />
          </li>
        ))}
      </ul>
    </div>
  );
}
