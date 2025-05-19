"use client";

import { IntroduceProps } from "app/(intro)/page";
import LazyImage from "components/lazyElements/lazyImage";
import LazyText from "components/lazyElements/lazyText";

export default function ProductIntroduce({ data }: IntroduceProps) {
  return (
    <div className="w-full max-w-7xl flex flex-col items-start justify-center gap-6 pb-8">
      <h2 className="w-full flex flex-col items-end justify-start gap-2">
        <LazyText className="text-lg font-semibold" text={data.description} />
        <LazyText className="text-3xl font-semibold" text={data.title} />
      </h2>
      <div className="w-full flex gap-2 hover:scale-105 transition-all">
        <LazyImage
          src={data.image ?? ""}
          alt="product table example"
          width="1280px"
        />
      </div>
    </div>
  );
}
