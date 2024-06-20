import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export interface EstadoData {
  indiceFIECInovacao: number;
  indiceCapacidades: number;
  investimentoPublicoCT: number;
  capitalHumanoGraduacao: number;
  capitalHumanoPosGraduacao: number;
  insercaoMestresDoutores: number;
  instituicoes: number;
  infraestrutura: number;
  cooperacao: number;
  indiceResultados: number;
  competitividadeGlobal: number;
  intensidadeTecnologica: number;
  propriedadeIntelectual: number;
  producaoCientifica: number;
  empreendedorismo: number;
}

interface SpiderChartProps {
  data: EstadoData;
}

const SpiderChart: React.FC<SpiderChartProps> = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    d3.select(chartRef.current).select('svg').remove();

    const margin = { top: 50, right: 80, bottom: 50, left: 80 };
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - margin.top;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${(width + margin.left + margin.right) / 2},${(height + margin.top + margin.bottom) / 2})`);

    const categories = Object.keys(data);
    const angleSlice = Math.PI * 2 / categories.length;

    const rScale = d3.scaleLinear()
      .range([0, radius])
      .domain([0, 1]);

    svg.selectAll('.gridCircle')
      .data([0.2, 0.4, 0.6, 0.8, 1])
      .enter().append('circle')
      .attr('class', 'gridCircle')
      .attr('r', d => rScale(d))
      .style('fill', '#CDCDCD')
      .style('stroke', '#CDCDCD')
      .style('fill-opacity', 0.1);

    svg.selectAll('.axisLabel')
      .data([0.2, 0.4, 0.6, 0.8, 1])
      .enter().append('text')
      .attr('class', 'axisLabel')
      .attr('x', 4)
      .attr('y', d => -rScale(d))
      .attr('dy', '0.4em')
      .style('font-size', '10px')
      .attr('fill', '#737373')
      .text(d => d.toString());

    const axis = svg.selectAll('.axis')
      .data(categories)
      .enter()
      .append('g')
      .attr('class', 'axis');

    axis.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', (d, i) => rScale(1.0) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('y2', (d, i) => rScale(1.0) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr('class', 'line')
      .style('stroke', 'white')
      .style('stroke-width', '2px');

    axis.append('text')
      .attr('class', 'legend')
      .style('font-size', '11px')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('x', (d, i) => rScale(1.1) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('y', (d, i) => rScale(1.1) * Math.sin(angleSlice * i - Math.PI / 2))
      .text(d => d);

    const radarLine = d3.lineRadial()
      .curve(d3.curveLinearClosed)
      .radius(d => rScale(d.value))
      .angle((d, i) => i * angleSlice);

    const dataReady = categories.map((key, i) => ({ axis: key, value: data[key] }));

    svg.append('path')
      .datum(dataReady)
      .attr('d', radarLine)
      .style('stroke-width', '2px')
      .style('stroke', '#2f80ed')
      .style('fill', 'rgba(47, 128, 237, 0.1)')
      .style('fill-opacity', 0.7);
  }, [data]);

  return (
    <div ref={chartRef} />
  );
};

export default SpiderChart;
