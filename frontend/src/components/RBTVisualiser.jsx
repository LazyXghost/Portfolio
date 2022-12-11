import React, { useState, useEffect } from "react";
import $ from 'jquery';

let left;
const Node = function (props) {
    const color = props.color;
    const value = props.value;
    const level = props.level * 100;
    left += 25;

    return (
        <div className = {"treeNode-" + (color)} style={{top: level+"px", left: left+"px"}}>
            <div className="treeNode-value">
                {value}
            </div>
        </div>
    );    
};

export default function RBTVisualiser() {
    const [tree, setTree] = useState([]);
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
                    body: JSON.stringify({ value: parseInt(value) })
                };
                const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/visualiser`, requestOptions);
                const data = await response.json();
                setTree(data);
            } catch (err) {
                console.log(err);
            }
        };
        $('#nodeValue').keyup((event) => {
            left = -50;
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
            <div className = "page halfPage">
                <div id="takeNodeInput">
                    <label htmlFor="nodeValue">Insert: </label>
                    <input type="number" id="nodeValue" />
                </div>
                <div id="tree">
                    {tree.map((node) => {
                        return <Node key={node.id} color={node.color} value={node.value} level={node.level} />;
                    })}
                </div>
            </div>
        </>
    );
}