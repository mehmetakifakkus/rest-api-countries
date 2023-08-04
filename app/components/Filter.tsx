import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { createSearchQuery } from "../lib/utilities";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  defaultValue?: string;
}

export default function Filter({ defaultValue }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "";

  return (
    <div className="flex flex-row items-center w-40 sm:w-80 border border-gray-400 rounded-lg h-10 bg-white pl-4 ">
      <MagnifyingGlass size={22} />
      <input
        className="h-full w-full rounded-lg px-4 border-none outline-none"
        type="text"
        value={searchParams.get("search") || ""}
        onChange={(e) => router.push(createSearchQuery(e.target.value, region))}
      ></input>
    </div>
  );
}
