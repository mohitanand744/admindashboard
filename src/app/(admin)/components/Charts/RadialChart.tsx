"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

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
const chartData = [{ month: "january", Revenue: 112260, amount: 112570 }]

const chartConfig = {
  Revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-3))",
  },
  amount: {
    label: "amount",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RadialChartComp() {
  const totalVisitors = chartData[0].Revenue + chartData[0].amount

  return (
    <Card className="flex flex-col bg-white dark:bg-[#1F293B] ">
      {/*  <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent className="flex items-center flex-1 h-full pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full mt-8 flex justify-center items-center h-[190px] mx-auto aspect-square "
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="text-2xl font-bold fill-foreground"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Revenue
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="Revenue"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-Revenue)"
              className="stroke-2 stroke-transparent"
            />
            <RadialBar
              dataKey="amount"
              fill="var(--color-amount)"
              stackId="a"
              cornerRadius={5}
              className="stroke-2 stroke-transparent"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 -mt-10 text-sm text-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Revenue up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Revenue for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
