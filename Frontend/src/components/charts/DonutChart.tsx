import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface DonutChartProps {
    data: number[];
    labels: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: ['#98c6c7', '#92bfa4', '#b0c492', '#abcba1', '#cf959e'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                display: true,
                color: '#fffeff',
                font: {
                    weight: 'bold' as const,
                    size: 14,
                },
                formatter: (value: number, context: any) => {
                    const total = context.chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${percentage}%`;
                },
            },
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: '#589a81',
                    boxWidth: 40,
                    font: {
                        family: 'Nunito',
                        size: 15,
                    },
                    padding: 8
                }
            },
            tooltip: {
                backgroundColor: 'rgba(88, 154, 129, 0.90)',
                bodyColor: '#fffeff',
                bodyFont: {
                    weight: 'bold' as const,
                    family: 'Nunito',
                    size: 13,
                },
                displayColors: false,
                padding: { x: 8, y: 6 },
                caretPadding: 20,
                callbacks: {
                    label: (context: any) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}`;
                    },
                    title: () => '',
                },
            },
        },
    };

    return (
        <Doughnut data={chartData}  options={options} />
    );
};

export default DonutChart;