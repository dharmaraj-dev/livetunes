import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const LineChart = () => {
  return (
    <>
        <Line
            data = {{
                labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: [50,150,200,300],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    tension : 0.5
                  },
                  {
                    label: 'Dataset 2',
                    data: [40,100,156,250],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    tension : 0.5
                  },
                ],
              }}

              options = {{
                responsive: true,
                plugins: {
                  legend: {
                    // position: 'top' as const,
                  },
                  title: {
                    display: true,
                  },
                },
              }}

        />
    </>
  )
}

export default LineChart