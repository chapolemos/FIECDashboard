import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import brazilGeoJson from '../data/br.json';
import './tooltip.css'; 

const BrazilMap = ({ data, highlightedStates }) => {
  const mapRef = useRef(null);
  const tip = useRef(null);

  useEffect(() => {
    const width = mapRef.current.clientWidth;
    const height = width;

    d3.select(mapRef.current).select('svg').remove();

    const svg = d3.select(mapRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height);

    const projection = d3.geoMercator()
      .fitSize([width, height], brazilGeoJson);

    const path = d3.geoPath().projection(projection);

    const geojson = brazilGeoJson;

    const indexValues = data.map(d => d.indice);
    const colorScale = d3.scaleSequential()
      .domain([-0.8, d3.max(indexValues)])
      .interpolator(d3.interpolateBlues);

    tip.current = d3Tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(d => {
        const stateId = d.properties.id;
        const stateIndexData = data.find(data => data.sigla === stateId);
        if (stateIndexData) {
          return `
            <div class="title"><strong>${stateId}</strong></div>
            <div class="value">${stateIndexData.indice}</div>`;
        }
        return `<div class="title">${stateId}</div>
              <div class="value">No data</div>`;
      });

    svg.call(tip.current);

    svg.append('g')
      .selectAll('path')
      .data(geojson.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', feature => {
        const stateId = feature.properties.id;
        const stateIndexData = data.find(d => d.sigla === stateId);
        if (stateIndexData) {
          return colorScale(stateIndexData.indice);
        } else {
          return 'lightblue';
        }
      })
      .attr('stroke', 'white')
      .attr('stroke-width', 1)
      .on('mouseover', function (event, feature) {
        tip.current.show(feature, this);
        d3.select(this).attr('fill', 'skyblue');
      })
      .on('mouseout', function (event, feature) {
        tip.current.hide();
        const stateId = feature.properties.id;
        const stateIndexData = data.find(d => d.sigla === stateId);
        if (stateIndexData) {
          d3.select(this).attr('fill', colorScale(stateIndexData.indice));
        } else {
          d3.select(this).attr('fill', 'lightblue');
        }
      });

  }, [data, highlightedStates]);

  return (
    <div ref={mapRef} className="relative w-full">
      <div className="absolute hidden bg-white border border-gray-300 p-2 rounded text-sm -mt-10 -ml-20 pointer-events-none">
        <div className="font-bold text-blue-600 mb-1"></div>
        <div></div>
      </div>
    </div>
  );
};

export default BrazilMap;
