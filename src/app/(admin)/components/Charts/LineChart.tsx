"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", Workers: 1000, amountSpand: 2000 },
  { month: "February", Workers: 3000, amountSpand: 4000 },
  { month: "March", Workers: 1000, amountSpand: 2000 },
  { month: "April", Workers: 1344, amountSpand: 3190 },
  { month: "May", Workers: 5661, amountSpand: 3333 },
  { month: "June", Workers: 3655, amountSpand: 3190 },
]

const chartConfig = {
  Workers: {
    label: "Workers",
    color: "hsl(var(--chart-3))",
  },
  amountSpand: {
    label: "amountSpand",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function LineChartComp() {
  return (
    <Card className="bg-white pt-4 dark:bg-[#1F293B]">
      {/*  <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent>
        <ChartContainer className="h-[150px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey="Workers"
              type="monotone"
              stroke="var(--color-Workers)"
              strokeWidth={5}
              dot={true}
            />
            <Line
              dataKey="amountSpand"
              type="monotone"
              stroke="var(--color-amountSpand)"
              strokeWidth={5}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-start w-full gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Worker Onboarded this month <TrendingUp className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total Workers Onboarded for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
