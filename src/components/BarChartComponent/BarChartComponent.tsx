import { BarChart } from '@mui/x-charts/BarChart';
import { User } from '../../data/types';

interface BarChartComponentProps {
    user: User;
}

const chartSetting = {
    yAxis: [
        {
            label: 'Score',
        },
    ],
    width: 300,
    height: 300,
};

const valueFormatter = (value: number | null) => `${value}`;

function BarChartComponent({ user }: BarChartComponentProps) {
    return (
        <div>
            <BarChart
                colors={["#fe5b5f"]}
                dataset={user?.detailedReport.levelScores}
                xAxis={[
                    {
                        scaleType: "band",
                        dataKey: "level",
                    },
                ]}
                series={[{ dataKey: 'score', label: 'Score', valueFormatter }]}
                {...chartSetting}
            />
        </div>
    );
}

export default BarChartComponent;
