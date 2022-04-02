var xLabels_humidity_Space4 = [];
var yLabels_humidity_Space4 = [];
getData_humidity_Space4();

async function getData_humidity_Space4() {
  const response = await fetch("static/output/Room4.csv");
  const data = await response.text();
  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const column = row.split(",");
    const dateTime = column[0];
    const humidity = column[2];
    xLabels_humidity_Space4.push(dateTime);
    yLabels_humidity_Space4.push(parseFloat(humidity));
  });
}

const data_humidity_Space4 = {
  labels: xLabels_humidity_Space4,
  datasets: [
    {
      label: "Humidity",
      backgroundColor: "#666666",
      borderColor: "#666666",
      data: yLabels_humidity_Space4,
    },
  ],
};

const config_humidity_Space4 = {
  type: "line",
  data: data_humidity_Space4,
  options: {
    responsive: true,
    scales: {
      x: {
        type: "time",
        distribution: "series",
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Humidity',
      },
      legend:{
        display:false,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          mode: "x",
          wheel: {
            enabled: true,
            speed: 0.8,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
};

const humidity_Space4 = new Chart(document.getElementById("humidity_Space4"), config_humidity_Space4);