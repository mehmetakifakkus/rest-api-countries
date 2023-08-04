"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import cx from "classnames";
import React from "react";
import {} from "../context/CountryContext";
import OutsideAlerter from "./OutsideAlerter";
import { useRouter, useSearchParams } from "next/navigation";
import { createSearchQuery } from "../lib/utilities";

type Props = {
  defaultSelected?: string;
  regions: Set<string>;
};

export default function RegionSelector({ regions }: Props) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "";
  const search = searchParams.get("search") || "";

  return (
    <div className="relative inline-block">
      <OutsideAlerter setOpen={setOpen}>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className="w-40 sm:w-52 border border-gray-400 rounded-lg h-10 bg-white px-2 sm:px-4 pr-2"
        >
          <div className="flex flex-row gap-1 sm:gap-3 justify-between items-center">
            <span className="text-sm">
              {region !== "" ? region : "Filter by Region"}
            </span>
            {region !== "" ? (
              <span
                className="text-sm text-blue-500"
                onClick={() => {
                  router.push(createSearchQuery(search, ""));
                }}
              >
                clear
              </span>
            ) : open ? (
              <CaretUp size={20} />
            ) : (
              <CaretDown size={20} />
            )}
          </div>
        </button>
        <div
          className={cx(
            "absolute bg-white py-2 w-40 sm:w-52 border bodrer-gray-400 rounded-lg shadow-md z-10 mt-1",
            { block: open },
            { hidden: !open }
          )}
        >
          {Array.from(regions).map((region) => (
            <div
              key={region}
              className="text-sm py-1 px-3 hover:bg-slate-600 hover:text-white hover:cursor-pointer"
              onClick={() => {
                router.push(createSearchQuery(search, region));
                setOpen(false);
              }}
            >
              {region}
            </div>
          ))}
        </div>
      </OutsideAlerter>
    </div>
  );
}
