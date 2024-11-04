"use client";

import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="relative flex h-full flex-col justify-end overflow-x-hidden p-6">
      <img src="/welcome/indonesia.svg" alt="logo" className="absolute left-0 top-1/4 h-72 w-full" />
      <Typography variant="h1">SatuGizi</Typography>
      <Typography variant="s5" className="text-gray-500">
        Menuju Indonesia Emas Tanpa Stunting
      </Typography>
      <div className="mt-4 flex flex-col gap-2">
        <Link href="/login" className="w-full">
          <Button className="h-14 w-full rounded-2xl">Mulai</Button>
        </Link>
        <Button variant="secondary" className="h-14 w-full rounded-2xl" disabled>
          Daftar
        </Button>
      </div>
    </div>
  );
}
