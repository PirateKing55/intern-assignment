import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const size = {
    width: 300,
    height: 300,
};

interface PieChartProps {
    id: number;
    label: string;
    value: number;
}

interface PieChartComponentProps {
    userData: PieChartProps[];
}

function PieChartComponent({ userData }: PieChartComponentProps) {
    return (
        <div style={{ width: '300px', height: '200px', display: "flex", justifyContent: "center", alignItems: "center" }} className='flex justify-center items-center'>
            <PieChart
                colors={["#fe5b5f"]}
                slotProps={{ legend: { hidden: true } }}
                series={[
                    {
                        arcLabel: (item) => `${item.label} (${item.value})`,
                        data: userData,
                        // data: [
                        //     { id: 1, label: "Speaking", value: 12 },
                        //     { id: 2, label: "Writing", value: 15 },
                        //     { id: 3, label: "Reading", value: 10 },
                        //     { id: 4, label: "Listening", value: 8 }
                        // ],
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        innerRadius: 30,
                        outerRadius: 140,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 270,

                        cx: 140,
                        cy: 150,
                    }
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                    },
                }}
                {...size}
            />
        </div>
    )
}

export default PieChartComponent
