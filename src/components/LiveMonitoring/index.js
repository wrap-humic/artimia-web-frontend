import { Button, Row } from "antd";
import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs/canvasjs.react";
import { dataECG } from "../../data/ECGSignal";
import Navbar from "../Navbar";

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = []; //dataPoints.
var xAxisStripLinesArray = [];
var yAxisStripLinesArray = [];
var xVal = dps.length + 1;
var yVal = 0;
var updateInterval = 200;

export default class LiveMonitoring extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateChart, updateInterval);
  }

  updateChart() {
    yVal = dataECG[xVal];
    // yVal = xVal % 10 === 0 ? Math.random() * (3 - -3) + -3 : 0.16;
    dps.push({ x: xVal, y: yVal });
    xVal++;
    if (dps.length > 200) {
      dps.shift();
    }
    this.chart.render();
  }

  render() {
    const options = {
      title: {
        text: "",
      },
      axisY:{
      	stripLines:yAxisStripLinesArray,
        gridThickness: 2,
        gridColor:"#DC74A5",
        lineColor:"#DC74A5",
        tickColor:"#DC74A5",
        labelFontColor:"#DC74A5",        
      },
      axisX:{
      	stripLines:xAxisStripLinesArray,
        gridThickness: 2,
        gridColor:"#DC74A5",
        lineColor:"#DC74A5",
        tickColor:"#DC74A5",
        labelFontColor:"#DC74A5",
      },
      data: [
        {
          type: "spline",
          markerSize: 0,
          color:"black",
          dataPoints: dps,
        },
      ],
    };
    return (
      <>
        <Navbar />
        <Row justify="center" align="middle" style={{ marginTop: 50 }}>
          <CanvasJSChart
            options={options}
            onRef={(ref) => (this.chart = ref)}
          />
        </Row>
        <Row justify="center" align="middle" style={{ marginTop: 100 }}>
          <Button>Normal</Button>
        </Row>
      </>
    );
  }
}
