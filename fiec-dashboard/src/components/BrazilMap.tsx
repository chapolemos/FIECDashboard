import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import brazilGeoJson from '../data/br.json';

const BrazilMap = () => {
  const mapRef = useRef(null);

  const sudesteStates = ["SP", "RJ", "MG", "ES"];

  useEffect(() => {
    const width = 960;
    const height = 600;
    
    d3.select(mapRef.current).select('svg').remove();

    const svg = d3.select(mapRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const projection = d3.geoMercator()
      .scale(850)
      .center([-55, -15])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const geojson = brazilGeoJson;

    svg.append('g')
      .selectAll('path')
      .data(geojson.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', d => sudesteStates.includes(d.properties.id) ? 'orange' : 'steelblue')
      .attr('stroke', 'white')
      .attr('stroke-width', 1)
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', 'red');
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', sudesteStates.includes(d.properties.id) ? 'orange' : 'steelblue');
      });
  }, []);

  return (
    <div ref={mapRef} />
  );
};

export default BrazilMap;
