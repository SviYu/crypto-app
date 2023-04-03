import { Chart as ChartJS, CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import React from 'react'
import { Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Chart = ({ arr = [], currency, days }) => {

    const prices = [];
    const date = []
    
    for (let i = 0; i < arr.length; i++) {
        if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
        else {
            date.push(new Date(arr[i][0]).toLocaleDateString())
        }
        prices.push(arr[i][1]);
}

    console.log(date)
    const data = {
        labels: date,
        datasets: [
            {
            label: `Prices in ${currency}`,
            data: prices,
            borderColor: "rgb(255, 99, 123)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
            }
        ]
    }

  return (
      <Line options={{
        responsive: true,
      }}
          data={data}
      />
  )
}

export default Chart