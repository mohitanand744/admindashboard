"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "January", Jobs: 10, ActiveJobs: 8 },
  { month: "February", Jobs: 15, ActiveJobs: 13 },
  { month: "March", Jobs: 20, ActiveJobs: 18 },
  { month: "April", Jobs: 24, ActiveJobs: 19 },
  { month: "May", Jobs: 29, ActiveJobs: 21 },
  { month: "June", Jobs: 25, ActiveJobs: 14 },
]

const chartConfig = {
  Jobs: {
    label: "Jobs",
    color: "hsl(var(--chart-3))",
  },
  ActiveJobs: {
    label: "ActiveJobs",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function BarChartComp() {
  return (
    <Card className="dark:bg-[#1F293B] h-full">
      <CardHeader>
        <CardTitle>Monthly Jobs Details</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent >
        <ChartContainer className="h-[300px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Number"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Jobs" fill="var(--color-Jobs)" radius={10} />
            <Bar dataKey="ActiveJobs" fill="var(--color-ActiveJobs)" radius={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Jobs Details <TrendingUp className="w-4 h-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing All Data for the last 6 Months
        </div>
      </CardFooter>
    </Card>
  )
}
