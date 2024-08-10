import { BarChart } from '@mui/x-charts/BarChart';
import { User } from '../../data/types';

interface BarChartComponentProps {
    user: User;
}

const chartSetting = {
    xAxis: [
        {
            label: 'Score',
        },
    ],
    width: 300,
    height: 200,
};

const valueFormatter = (value: number | null) => `${value}`;

function BarChartComponent({ user }: BarChartComponentProps) {
    return (
        <div>
            <BarChart
                colors={["#fe5b5f"]}
                dataset={user?.detailedReport.levelScores}
                yAxis={[{ scaleType: 'band', dataKey: 'level' }]}
                series={[{ dataKey: 'score', label: 'Score', valueFormatter }]}
                layout="horizontal"
                grid={{ vertical: true }}
                {...chartSetting}
            />
        </div>
    )
}

export default BarChartComponent
