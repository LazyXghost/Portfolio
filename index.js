// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

const scrollBarWidth = 15;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
});
render.canvas.height = window.innerHeight;
render.canvas.width = window.innerWidth-scrollBarWidth;

// create two boxes and a ground
// (x,y,size, width)
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(600, 610, 810, 60, { isStatic: true });

console.log(boxA);
console.log(ground);

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);