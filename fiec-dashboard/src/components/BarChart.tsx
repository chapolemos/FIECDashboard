import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 40, left: 90 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    d3.select(chartRef.current).select('svg').remove();

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.ValorRanking)])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(data.map(d => d.UF))
      .range([0, height])
      .padding(0.1);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => y(d.UF))
      .attr('width', d => x(d.ValorRanking))
      .attr('height', y.bandwidth())
      .attr('fill', d => d3.interpolateBlues(d.ValorRanking / d3.max(data, d => d.ValorRanking)))
      .on('mouseover', function () {
        d3.select(this).attr('fill', 'orange');
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', d => d3.interpolateBlues(d.ValorRanking / d3.max(data, d => d.ValorRanking)));
      });
  }, [data]);

  return (
    <div ref={chartRef} />
  );
};

export default BarChart;
