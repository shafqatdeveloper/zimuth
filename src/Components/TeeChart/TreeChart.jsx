import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { hierarchy, tree } from "d3-hierarchy";

const data = {
  name: "Outdoor Spring Activities",
  children: [
    {
      name: "Gardening",
      children: [
        { name: "Planting flowers" },
        { name: "Starting a vegetable garden" },
        { name: "Preparing garden beds" },
      ],
    },
    {
      name: "Outdoor Sports",
      children: [
        { name: "Cycling" },
        { name: "Hiking" },
        {
          name: "Running",
          children: [
            { name: "Planting flowers" },
            { name: "Starting a vegetable garden" },
            { name: "Preparing garden beds" },
          ],
        },
      ],
    },
    {
      name: "Picnicking",
      children: [{ name: "Location ideas" }, { name: "Picnic essentials" }],
    },
    {
      name: "Birdwatching",
      children: [{ name: "Equipment" }, { name: "Popular bird species" }],
    },
  ],
};

const D3Tree = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    // Clear previous content
    d3.select(d3Container.current).select("svg").remove();

    const containerWidth = d3Container.current.clientWidth;
    const containerHeight = d3Container.current.clientHeight;

    // Set width and height based on container dimensions
    const width = containerWidth;
    const height = containerHeight;

    const root = hierarchy(data);

    // Adjust the size of the tree layout and the vertical spacing between nodes
    const treeLayout = tree().size([height, width - 160]);
    treeLayout(root);

    const svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("font", "10px sans-serif")
      .style("user-select", "none");

    const g = svg.append("g").attr("transform", "translate(80,0)");

    // Add zoom behavior
    const zoom = d3.zoom().on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

    svg.call(zoom);

    // Links
    g.append("g")
      .attr("fill", "none")
      .attr("stroke-width", 2)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("stroke", (d) => {
        switch (d.source.data.name) {
          case "Gardening":
            return "#e74c3c";
          case "Outdoor Sports":
            return "#e67e22";
          case "Picnicking":
            return "#f1c40f";
          case "Birdwatching":
            return "#2ecc71";
          default:
            return "orange";
        }
      })
      .attr(
        "d",
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x)
      );

    // Nodes
    const node = g
      .append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node
      .append("circle")
      .attr("fill", (d) => (d.children ? "blue" : "blue"))
      .attr("r", 4);

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.children ? -6 : 6))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name)
      .clone(true)
      .lower()
      .attr("stroke", "white");
  }, []);

  return (
    <div
      ref={d3Container}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden", // Hide overflow to allow zoom and pan
        border: "1px solid #ccc",
      }}
    />
  );
};

export default D3Tree;
