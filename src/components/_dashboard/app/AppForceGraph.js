import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import * as d3 from 'd3';
import { Card, CardHeader, Box } from '@mui/material';

const {useState, useEffect, useRef} = React;


const ForceGraphView = ({ myData }) => {
      const fgRef = useRef();

      const [graphData, setGraphData] = useState({ nodes: [], links: [] });
      const nodes = myData.nodes;
      const links = myData.links;

      useEffect(() => {
        const fg = fgRef.current;

        fg.d3Force("link").distance(10);
        fg.d3Force('collide', d3.forceCollide(35));
        fg.zoom(1);
        setGraphData({ nodes, links });
      }, []);

      return (

    <Card justify="center" >
      <CardHeader title="Connection Overview" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ForceGraph2D
        	height={360}
        	width={800}
			ref={fgRef}
  			graphData={graphData}
  			nodeLabel="id"
  			nodeAutoColorBy="group"
          	nodeCanvasObject={(node, ctx, globalScale) => {
	            const label = node.id;
	            const fontSize = 10/globalScale;
	            ctx.font = `${fontSize}px Sans-Serif`;
	            const textWidth = ctx.measureText(label).width;
	            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize ); // some padding

	            ctx.fillStyle = node.color;
	            ctx.beginPath();
	            ctx.arc(node.x, node.y, bckgDimensions[0] / 2, 0, 2 * 2 * Math.PI);
	            ctx.closePath();
	            ctx.fill();
	            // ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

	            ctx.textAlign = 'center';
	            ctx.textBaseline = 'middle';
	            ctx.fillStyle = '#000000';
	            ctx.fillText(label, node.x, node.y);

	            node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
	        }}
	        linkLabel={(link) => {return link.data}}
	        linkDirectionalParticles="value"
          linkDirectionalParticleSpeed={d => d.value*0.02}
          linkColor={link => link.source.color}
		/>
      </Box>
    </Card>

		);
    };


export default ForceGraphView;