import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { useWidgetDimensions } from '../base-widget'

export function MetricsChart({
  chartData,
  formatValue,
}: {
  chartData: any[]
  formatValue: (value: any) => string
}) {
  const { width, height } = useWidgetDimensions()

  // Ensure we have valid dimensions
  if (!width || !height || width < 100 || height < 100) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
        <p className="text-sm">Chart not available</p>
      </div>
    )
  }

  // Minimal padding for chart internal spacing
  const chartWidth = Math.max(width - 20, 200)
  const chartHeight = Math.max(height - 20, 150)

  // Adjust tick interval based on data length
  const tickInterval =
    chartData.length > 10 ? Math.ceil(chartData.length / 8) : 1

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <AreaChart
        width={chartWidth}
        height={chartHeight}
        data={chartData}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" />
        <XAxis
          className="text-xs"
          color="var(--color-foreground)"
          dataKey="name"
          interval={tickInterval}
          tick={{ fontSize: 10 }}
          angle={-45}
          textAnchor="end"
          height={50}
        />
        <YAxis
          className="text-xs"
          color="var(--color-foreground)"
          tickFormatter={formatValue}
          tick={{ fontSize: 10 }}
          width={60}
        />
        <Tooltip
          formatter={formatValue}
          contentStyle={{
            backgroundColor: 'var(--color-background)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
          }}
        />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="var(--color-brand)"
          strokeWidth={2}
          fill="var(--color-brand)"
          fillOpacity={0.1}
        />
      </AreaChart>
    </div>
  )
}
