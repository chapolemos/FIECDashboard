import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 60, bottom: 20, left: 60 };
    const width = 200;
    const height = 500;

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
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y))
      .selectAll('text')
      .style('fill', 'black'); 
    const colorScale = d3.scaleSequential()
      .domain([-0.5, 1]) 
      .interpolator(d3.interpolateBlues);

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => y(d.UF))
      .attr('width', d => x(d.ValorRanking))
      .attr('height', y.bandwidth())
      .attr('fill', d => colorScale(d.ValorRanking / d3.max(data, d => d.ValorRanking)))
      .on('mouseover', function () {
        d3.select(this).attr('fill', 'orange');
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', colorScale(d.ValorRanking / d3.max(data, d => d.ValorRanking)));
      });

    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.ValorRanking) + 5)
      .attr('y', d => y(d.UF) + y.bandwidth() / 2)
      .attr('dy', '.35em') 
      .attr('fill', 'black')
      .text(d => d.ValorRanking);

  }, [data]);

  return (
    <div ref={chartRef} />
  );
};

export default BarChart;
