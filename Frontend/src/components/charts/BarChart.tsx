// Imports
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

// Interface
interface BarChartProps {
    data: number[];
    labels: string[];
}

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels);

const BarChart: React.FC<BarChartProps> = ({ data, labels}) => {
    const barData = {
        labels: labels,
        datasets: [
            {
                label: 'Supply Levels',
                data: data,
                backgroundColor: ['#98c6c7', '#92bfa4', '#b0c492', '#abcba1', '#c0d2b8'],
                borderColor: '#3f6f65',
                borderWidth: 0,
                barPercentage: 1
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins: {
            datalabels: {
                color: '#589a81',
                font: {
                    size: 14,
                },
                anchor: 'end' as const,
            align: 'top' as const,  
            offset: -3.5,  
            },
            legend: {
                display: false,
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
        scales: {
            x: {
                ticks: {
                    color: '#589a81',
                    font: {
                        family: 'Nunito',
                        size: 14,
                    },
                },
            },
            y: {
                ticks: {
                    color: '#589a81',
                    font: {
                        family: 'Nunito',
                        size: 14,
                    },
                },
            },
        },
    
    };

    return <Bar data={barData} options={options} />;
};

export default BarChart;