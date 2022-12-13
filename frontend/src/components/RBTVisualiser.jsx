import React, { useState, useEffect } from "react";
import $ from 'jquery';

const verticalGap = 100, horizontalGap = 50;
const Node = function (props) {
    const color = props.color;
    const nodeValue = props.value;
    const leftValue = props.left + "px";
    const topValue = props.top + "px";

    return (
        <div className={"treeNode-" + (color)} style={{ top: topValue, left: leftValue , zIndex:999}}>
            <div className="treeNode-value">
                {nodeValue}
            </div>
        </div>
    );
};
const Arrow = function (props) {
    const start = props.start;
    const end = props.end;

    
    let hm = Math.min(start[0], end[0]);
    let vm = Math.min(start[1], end[1]);
    let vg = Math.abs(start[1] - end[1]), hg = Math.abs(start[0] - end[0]);
    let angle = Math.atan(vg/hg) * 180 / 3.14;
    let length = hg + Math.sqrt(vg);
    
    let left, right;
    if(start[0] > end[0]){
        left = vg;
        right = 0;
    }
    else{
        left = 0;
        right = vg;
    }
    // const svg = document.createElement("svg");
    // svg.setAttribute("class", "arrow");
    // svg.setAttribute("width", "2000");
    // svg.setAttribute("height", "2000");
    // svg.style.left = margin;

    // const path = document.createElement("path");
    // path.setAttribute("d", "M"+angle+","+left+" L"+length+","+right);
    // path.style.stroke = "white";
    // path.style.strokeWidth = "2px";
    // path.style.fill = "none";

    // svg.appendChild(path);

    // const node = document.getElementById("tree");
    // node.appendChild(svg);
    // console.log(node);

    return (
        <svg className="arrow" width={hg} height={vg} style={{postion:"absolute", left: hm+25, top: vm+25}}>
            <path d={"M0"+","+left+" L"+length+","+right} style={{stroke: "white", strokeWidth: "2px", fill: "none"}}></path>
        </svg>
    )
};

export default function RBTVisualiser() {
    const [tree, setTree] = useState([]);
    const [arrows, setArrows] = useState([]);
    useEffect(() => {
        const constructTree = async () => {
            try {
                await fetch(`${process.env.REACT_APP_BACKENDURL}/visualiser`);
            } catch (err) {
                console.log(err);
            }
        };
        constructTree();

        const insertInTree = async (value) => {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ value: parseInt(value), verticalGap: verticalGap, horizontalGap: horizontalGap })
                };
                const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/visualiser`, requestOptions);
                const data = await response.json();

                setArrows(data.arrowsPos);
                setTree(data.nodesPos);
            } catch (err) {
                console.log(err);
            }
        };
        $('#nodeValue').keyup((event) => {
            if (event.keyCode === 13) {
                let input = document.getElementById("nodeValue");
                if (input.value.length !== 0)
                    insertInTree(input.value);
                input.value = null;
            }
        });
    }, []);

    return (
        <>
            <div className="page halfPage">
                <div id="takeNodeInput">
                    <label htmlFor="nodeValue">Insert: </label>
                    <input type="number" id="nodeValue" />
                </div>
                <div id="tree">
                    {tree.map((node) => {
                        return <Node key={node.id} color={node.color} value={node.value} left={node.left} top={node.top} />;
                    })}
                </div>
                <div id="arrows">
                    {arrows.map((arrow) => {
                        return <Arrow key={arrow.id} start={arrow.start} end={arrow.end} />;
                    })}
                </div>
            </div>
        </>
    );
}