import React, { useState, useEffect, useRef } from "react";
import {
  TeamContainer,
  SectionTitle,
  TeamMembers,
  TeamMember,
  MemberImage,
  MemberName,
  MemberTitle,
  MemberDetails,
  CyContainer,
} from "./styles";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import fcose from 'cytoscape-fcose';
import cola from 'cytoscape-cola';
import layoutUtilities from 'cytoscape-layout-utilities';

cytoscape.use(coseBilkent);
cytoscape.use(fcose);
cytoscape.use(cola);
cytoscape.use(layoutUtilities);

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [cy, setCy] = useState(null);
  const cyContainerRef = useRef(null);
  const [showTopics, setShowTopics] = useState(true); // State for topic edges
  const [showExpertise, setShowExpertise] = useState(true); // State for expertise edges
  const [showNNSA, setShowNNSA] = useState(true); // State for NNSA researchers

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeamData(data))
      .catch((err) => console.error("Error fetching team data:", err));
  }, []);

  useEffect(() => {
    if (teamData.length > 0) {
      const elements = generateGraphElements(teamData);
      const newCy = cytoscape({
        container: cyContainerRef.current,
        elements,
        style: [
          {
            selector: "node",
            style: {
              "background-color": "data(color)",
              label: "data(name)",
              width: "100px",
              height: "100px",
              "text-valign": "bottom",
              "text-halign": "center",
              "font-size": "46px",
              color: "#fff",
              "text-outline-width": "1px",
              "text-outline-color": "#000",
              "background-image": "data(image)",
              "background-fit": "cover",
              "border-width": 2,
              "border-color": "#fff",
              'opacity': 1,
            },
          },
          {
            selector: "edge",
            style: {
              width: 3,
              "line-color": "#ccc",
              "target-arrow-color": "#ccc",
              // "target-arrow-shape": "triangle",
              "curve-style": "bezier",
            },
          },
          {
            selector: 'edge[type = "topic"]',
            style: {
              "line-style": "solid",
              "width": 10,
              "line-color": "data(color)",
              display: showTopics ? "element" : "none", // Toggle visibility
            },
          },
          {
            selector: 'edge[type = "expertise"]',
            style: {
              "line-style": "dashed",
              "width": 8,
              "line-color": "data(color)",
              display: showExpertise ? "element" : "none", // Toggle visibility
            },
          },
          {
            selector: 'node[nnsa = "true"]',
            style: {
              "border-color": "#FFD700",
              "border-width": 5,
              display: showNNSA ? "element" : "none", // Toggle visibility
            },
          },
          {
            selector: "node[isCluster]",
            style: {
              "background-color": "data(color)",
              label: "data(name)",
              "text-valign": "bottom",
              "text-halign": "center",
              "padding-top": "25px",
              "font-size": "76px",
              color: "#000000",
              shape: "circle", // Make clusters circular
              "border-width": 2,
              "border-color": "#fff",
              width: "120px", // Adjust size as needed
              height: "120px",
              'opacity': 1,
            },
          },
        ],
        layout: {
          name: "fcose",
          quality: "proof",
          // Use random node positions at beginning of layout
          // if this is set to false, then quality option must be "proof"
          randomize: true, 
          // Whether or not to animate the layout
          animate: true, 
          // Duration of animation in ms, if enabled
          animationDuration: 1000, 
          // Easing of animation, if enabled
          animationEasing: undefined, 
          // Fit the viewport to the repositioned nodes
          fit: true, 
          // Padding around layout
          padding: 30,
          // Whether to include labels in node dimensions. Valid in "proof" quality
          nodeDimensionsIncludeLabels: false,
          // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
          uniformNodeDimensions: true,
          // Whether to pack disconnected components - cytoscape-layout-utilities extension should be registered and initialized
          packComponents: true,
          // Layout step - all, transformed, enforced, cose - for debug purpose only
          step: "all",
          
          /* spectral layout options */
          
          // False for random, true for greedy sampling
          samplingType: true,
          // Sample size to construct distance matrix
          sampleSize: 25,
          // Separation amount between nodes
          nodeSeparation: 75,
          // Power iteration tolerance
          piTol: 0.0000001,
          
          /* incremental layout options */
          
          // Node repulsion (non overlapping) multiplier
          nodeRepulsion: node => 14500,
          // Ideal edge (non nested) length
          idealEdgeLength: edge => 400,
          // Divisor to compute edge forces
          edgeElasticity: edge => 0.45,
          // Nesting factor (multiplier) to compute ideal edge length for nested edges
          nestingFactor: 0.1,
          // Maximum number of iterations to perform - this is a suggested value and might be adjusted by the algorithm as required
          numIter: 2500,
          // For enabling tiling
          tile: true,
          // The comparison function to be used while sorting nodes during tiling operation.
          // Takes the ids of 2 nodes that will be compared as a parameter and the default tiling operation is performed when this option is not set.
          // It works similar to ``compareFunction`` parameter of ``Array.prototype.sort()``
          // If node1 is less then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a negative value
          // If node1 is greater then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a positive value
          // If node1 is equal to node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return 0
          tilingCompareBy: undefined, 
          // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
          tilingPaddingVertical: 10,
          // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
          tilingPaddingHorizontal: 10,
          // Gravity force (constant)
          gravity: 0.25,
          // Gravity range (constant) for compounds
          gravityRangeCompound: 1.5,
          // Gravity force (constant) for compounds
          gravityCompound: 1.0,
          // Gravity range (constant)
          gravityRange: 3.8, 
          // Initial cooling factor for incremental layout  
          initialEnergyOnIncremental: 0.3,
        
          /* constraint options */
        
          // Fix desired nodes to predefined positions
          // [{nodeId: 'n1', position: {x: 100, y: 200}}, {...}]
          fixedNodeConstraint: undefined,
          // Align desired nodes in vertical/horizontal direction
          // {vertical: [['n1', 'n2'], [...]], horizontal: [['n2', 'n4'], [...]]}
          alignmentConstraint: undefined,
          // Place two nodes relatively in vertical/horizontal direction
          // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}, {...}]
          relativePlacementConstraint: undefined,
          // animate: true,
          // infinite: true,
          // animationDuration: 1000,
          // // animationEasing: "ease-in-out",
          // randomize: false,
          // fit: true,
          // padding: 10,
          // nodeDimensionsIncludeLabels: true,
          // nodeRepulsion: 95000,
          // idealEdgeLength: 50,
          // edgeElasticity: 0.85,
          // nestingFactor: 0.1,
          // gravity: 0.55,
          // numIter: 2500,
          // tile: true,
          // tilingPaddingVertical: 1,
          // tilingPaddingHorizontal: 10,
          // gravityRangeCompound: 1.5,
          // gravityCompound: 1.0,
          // gravityRange: 1.8,
          // initialEnergyOnIncremental: 0.5,
        },
        // layout: {
        //   name: "cola",
        //   animate: true,
        //   infinite: true,
        //   animationDuration: 1000,
        //   // animationEasing: "ease-in-out",
        //   randomize: false,
        //   fit: true,
        //   nodeSpacing: function( node ){ return 50; },
        //   // padding: 10,
        //   // nodeDimensionsIncludeLabels: true,
        //   // nodeRepulsion: 4500,
        //   // idealEdgeLength: 50,
        //   // edgeElasticity: 0.45,
        //   // nestingFactor: 0.1,
        //   // gravity: 0.55,
        //   // numIter: 2500,
        //   // tile: true,
        //   // tilingPaddingVertical: 1,
        //   // tilingPaddingHorizontal: 10,
        //   // gravityRangeCompound: 1.5,
        //   // gravityCompound: 1.0,
        //   // gravityRange: 1.8,
        //   // initialEnergyOnIncremental: 0.5,
        // },

      });

      setCy(newCy);
    }

    return () => {
      if (cy) {
        cy.destroy();
      }
    };
  }, [teamData]);

  // Function to toggle topic edges
  const toggleTopicEdges = () => {
    setShowTopics(!showTopics);
    cy.edges('[type = "topic"]').style("display", showTopics ? "none" : "element");
  };

  // Function to toggle expertise edges
  const toggleExpertiseEdges = () => {
    setShowExpertise(!showExpertise);
    cy.edges('[type = "expertise"]').style("display", showExpertise ? "none" : "element");
  };

// Function to toggle NNSA researchers and their connections
const toggleNNSAResearchers = () => {
  setShowNNSA(!showNNSA);
  if (cy) {
    if (!showNNSA) {
      // Hide NNSA clusters
      cy.nodes('[nnsa = "true"]').parent().style('display', 'none');
      // cy.nodes('[nnsa = "true"]').edgesTo('*').style('display', 'none');
    } else {
      // Show NNSA clusters
      cy.nodes('[nnsa = "true"]').parent().style('display', 'element');
    }
  }
};

  const generateGraphElements = (researchers) => {
    const institutionColorMap = {
      MSU: "#18453B", // MSU Green
      OU: "#006341", // Ohio University Green
      LANL: "#A47E00", // LANL Gold
      LLNL: "#005DAA", // LLNL Blue
    };

    // Create a map of topics and expertise to unique colors
    const topicColorMap = {
      "Nuclear Level Densities": "#8c52ff",
      Fission: "#299fb8",
      "Light-ion Reactions": "#02bf62",
      "Nuclear Structure": "#ff8c52",
    };

    const expertiseColorMap = {
      "High Performance Computing": "#FF0054",
      "Uncertainty Quantification": "#FFBD00",
      "Machine Learning": "#F07167",
    };

    // Create a map of institutions to unique cluster IDs
    const institutionClusterMap = {};
    let clusterIdCounter = 0;
    researchers.forEach((researcher) => {
      if (!institutionClusterMap[researcher.institution]) {
        institutionClusterMap[researcher.institution] =
          "cluster_" + clusterIdCounter++;
      }
    });

    // Create nodes for researchers
    const nodes = researchers.map((researcher) => ({
      data: {
        id: researcher.name.replace(/\s+/g, "_"),
        name: researcher.name,
        color: institutionColorMap[researcher.institution] || "#003366",
        image: researcher.image,
        nnsa: researcher.nnsa ? "true" : "false",
        institution: researcher.institution,
        topics: researcher.topics,
        expertise: researcher.expertise,
        parent: institutionClusterMap[researcher.institution], // Assign parent for clustering
      },
    }));

    // Create cluster (compound) nodes
    const clusterNodes = Object.keys(institutionClusterMap).map(
      (institution) => ({
        data: {
          id: institutionClusterMap[institution],
          name: institution,
          nnsa: institution === "LLNL" || institution === 'LANL' ? "true" : "false",
          color: institutionColorMap[institution] || "#003366",
          isCluster: true,
        },
      })
    );

    const edges = [];
    const addedEdges = new Set(); // Keep track of added edges

    researchers.forEach((researcher) => {
      researchers.forEach((otherResearcher) => {
        // if(otherResearcher.nnsa){
        //   return;
        // }
        // var addedTopic = false;
        researcher.topics.forEach((topic) => {
          if (
            researcher.collaborators.includes(otherResearcher.name) &&
            otherResearcher.name !== researcher.name &&
            otherResearcher.topics &&
            otherResearcher.topics.includes(topic)
          ) {
            // addedTopic = true;
            const sortedNames = [
              researcher.name.replace(/\s+/g, "_"),
              otherResearcher.name.replace(/\s+/g, "_"),
            ].sort(); // Sort names to ensure consistent edge IDs
            const edgeId = `${sortedNames[0]}-${sortedNames[1]}-topic`;

            // Add edge only if it hasn't been added before
            if (!addedEdges.has(edgeId)) {
              edges.push({
                data: {
                  id: edgeId,
                  source: sortedNames[0],
                  target: sortedNames[1],
                  type: "topic",
                  color: topicColorMap[topic],
                  topic: topic,
                },
              });
              addedEdges.add(edgeId); // Mark edge as added
            }
          }
        });
        if (true){
          researcher.expertise.forEach((expertise) => {  
            if (
              researcher.collaborators.includes(otherResearcher.name) &&
              otherResearcher.name !== researcher.name &&
              otherResearcher.expertise &&
              otherResearcher.expertise.includes(expertise)
            ) {
              const sortedNames = [
                researcher.name.replace(/\s+/g, "_"),
                otherResearcher.name.replace(/\s+/g, "_"),
              ].sort(); // Sort names to ensure consistent edge IDs
              const edgeId = `${sortedNames[0]}-${sortedNames[1]}-${expertise}`;

              // Add edge only if it hasn't been added before
              if (!addedEdges.has(edgeId)) {
                edges.push({
                  data: {
                    id: edgeId,
                    source: sortedNames[0],
                    target: sortedNames[1],
                    type: "expertise",
                    color: expertiseColorMap[expertise],
                    expertise: expertise,
                  },
                });
                addedEdges.add(edgeId); // Mark edge as added
              }
            }
            
          });
      };
      // addedTopic = false;
      });

    });

    return { nodes: [...nodes, ...clusterNodes], edges };
  };

  return (
    <TeamContainer>
      <SectionTitle>Meet the Team</SectionTitle>

      {/* Team Members List (Non-NNSA Only) */}
      <TeamMembers>
        {teamData
          .filter((member) => !member.nnsa)
          .map((member) => (
            <TeamMember key={member.email}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberTitle>{member.title}</MemberTitle>
              <MemberDetails>
                <p>
                  Specializes in:{" "}
                  {member.specialization
                    ? member.specialization.join(", ")
                    : "N/A"}
                </p>
                <p>Email: {member.email}</p>
              </MemberDetails>
            </TeamMember>
          ))}
      </TeamMembers>

      {/* Team Collaboration Graph */}
      {/* <SectionTitle>Team Collaboration Graph</SectionTitle>
      <CyContainer id="cy" ref={cyContainerRef} /> */}
            {/* Team Collaboration Graph */}
      <SectionTitle>Team Collaboration Graph</SectionTitle>
      <button onClick={toggleTopicEdges}>
        {showTopics ? "Hide Topic Edges" : "Show Topic Edges"}
      </button>
      <button onClick={toggleExpertiseEdges}>
        {showExpertise ? "Hide Expertise Edges" : "Show Expertise Edges"}
      </button>
      <button onClick={toggleNNSAResearchers}>
        {showNNSA ? "Hide NNSA Researchers" : "Show NNSA Researchers"}
      </button>
      <CyContainer id="cy" ref={cyContainerRef} />
    </TeamContainer>
  );
};

export default Team;