"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function BackButton({}: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="w-32 border border-slate-300 rounded mb-8 p-1 px-2 text-lg hover:bg-slate-600 hover:text-white shadow-md"
    >
      ← Back
    </button>
  );
}
