import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 60, bottom: 20, left: 60 };
    const width = 400;
    const height = 600;

    d3.select(chartRef.current).select('svg').remove();

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.indice)])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(data.map(d => d.sigla))
      .range([0, height])
      .padding(0.2);
      

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
      .attr('y', d => y(d.sigla))
      .attr('width', d => x(d.indice))
      .attr('height', y.bandwidth())
      .attr('fill', d => colorScale(d.indice / d3.max(data, d => d.indice)))
      .on('mouseover', function () {
        d3.select(this).attr('fill', 'orange');
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', colorScale(d.indice / d3.max(data, d => d.indice)));
      });

    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.indice) + 5)
      .attr('y', d => y(d.sigla) + y.bandwidth() / 2)
      .attr('dy', '.35em') 
      .attr('fill', 'black')
      .text(d => d.indice);

      svg.selectAll('.rank')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'rank')
      .attr('x',-28)
      .attr('y', d => y(d.sigla) + y.bandwidth() / 2)
      .attr('dy', '.35em')
      .attr('fill', 'black')
      .style('text-anchor', 'end')
      .text((d, i) => `${i + 1}`);

  }, [data]);

  return (
    <div ref={chartRef} />
  );
};

export default BarChart;
