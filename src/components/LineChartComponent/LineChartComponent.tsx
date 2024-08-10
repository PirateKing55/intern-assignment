import { LineChart } from '@mui/x-charts/LineChart';
import { User } from '../../data/types';

interface LineChartComponentProps {
    user: User;
}


function LineChartComponent({ user }: LineChartComponentProps) {
    return (
        <div>
            <LineChart
                dataset={user?.detailedReport.progressGraph}
                xAxis={[
                    {
                        dataKey: 'week',
                        valueFormatter: (value) => `Week ${value}`,
                        // type: 'number',
                        min: 0,
                        max: 5,
                        // tickInterval: 1,
                        // axisLine: { stroke: '#fe5b5f' },
                        // tick: { stroke: '#fe5b5f', fill: '#fe5b5f' },
                    },

                ]}
                yAxis={[
                    {
                        valueFormatter: (value) => `${value}%`, // Format y-axis labels
                    },
                ]}
                series={[
                    {
                        dataKey: "progress",
                        color: "#fe5b5f"
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    )
}

export default LineChartComponent
