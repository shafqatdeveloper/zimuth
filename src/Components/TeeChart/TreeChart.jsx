import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { hierarchy, tree } from "d3-hierarchy";
import { FaExpandAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

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
  const d3ModalContainer = useRef(null);
  const [expandSection, setExpandSection] = useState(false);

  const drawTree = (container) => {
    // Clear previous content
    d3.select(container).select("svg").remove();

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Set width and height based on container dimensions
    const width = containerWidth;
    const height = containerHeight;

    const root = hierarchy(data);

    // Adjust the size of the tree layout and the vertical spacing between nodes
    const treeLayout = tree().size([height, width - 160]);
    treeLayout(root);

    const svg = d3
      .select(container)
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
  };

  useEffect(() => {
    if (d3Container.current) {
      drawTree(d3Container.current);
    }
  }, []);

  useEffect(() => {
    if (expandSection && d3ModalContainer.current) {
      drawTree(d3ModalContainer.current);
    }
  }, [expandSection]);

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-2.5 right-2.5 z-10">
        <FaExpandAlt
          onClick={() => setExpandSection(true)}
          className="text-gray-500 cursor-pointer"
        />
      </div>
      <div
        ref={d3Container}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden", // Hide overflow to allow zoom and pan
          border: "1px solid #ccc",
        }}
      />
      {expandSection && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-11/12 h-5/6 rounded-md shadow-md shadow-black/30 flex flex-col justify-center items-center p-6">
            <AiOutlineClose
              onClick={() => setExpandSection(false)}
              className="cursor-pointer absolute top-4 right-4 text-gray-500 z-50"
              size={24}
            />
            <div
              ref={d3ModalContainer}
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden", // Hide overflow to allow zoom and pan
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default D3Tree;
