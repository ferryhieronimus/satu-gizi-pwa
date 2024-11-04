"use client";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/atoms/chart";
import { Typography } from "@/components/atoms/typography";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Page() {
  return (
    <div className="flex mb-8 flex-col gap-4">
      <div className="flex flex-col">
        <Typography variant="h3">Selamat Malam</Typography>
        <Typography variant="h5" className="text-primary">
          SMA Negeri 12 Jakarta Selatan
        </Typography>
      </div>

      <div className="rounded-xl bg-green-500 p-4">
        <Typography variant="s5" className="text-white">
          Anda sudah menggungah foto hari ini
        </Typography>
      </div>

      <Typography variant="h5" className="text-gray-900">
        Pemenuhan Gizi Sekolah
      </Typography>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
          <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>

      <div className="flex flex-col gap-4">
        <Typography variant="h3">Riwayat Hasil</Typography>
        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 p-3">
            <Typography variant="h5" className="text-white">
              97
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 p-3">
            <Typography variant="h5" className="text-white">
              67
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400 p-3">
            <Typography variant="h5" className="text-white">
              25
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400 p-3">
            <Typography variant="h5" className="text-white">
              97
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 p-3">
            <Typography variant="h5" className="text-white">
              67
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400 p-3">
            <Typography variant="h5" className="text-white">
              25
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400 p-3">
            <Typography variant="h5" className="text-white">
              25
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p3">Total Pengguna</Typography>
            <Typography variant="p5">1,200</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
