import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = (props) => {
    const [chartData, setChartData] = useState({
        series: [{
            data: props.series ?? []
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: props.titles ?? [],
            }
        },
    });

    useEffect(() => {
        setChartData({
            series: [{
                data: props.series ?? []
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        borderRadiusApplication: 'end',
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: props.titles ?? [],
                }
            },
        });
    }, [props.series, props.titles]);

    return (
        <Chart options={chartData.options} series={chartData.series} type="bar" height={500} />
    );
}

export default BarChart;