// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Constraint = Matter.Constraint,
    Composite = Matter.Composite,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

const scrollBarWidth = 15,
    bounciness = 1.1,
    bounciness2 = 1.2,
    canvasHeight = 581,
    canvasWidth = 600,
    groundWidth = 10;

// create an engine
var engine = Engine.create(),
    world = engine.world;

// create a renderer
// var render2 = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         height: window.innerHeight - 700,
//         width: 60,
//         // wireframes: false,
//         // background: 'black'
//     }
// });

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        height: canvasHeight,
        width: window.innerWidth - scrollBarWidth,
        wireframes: false,
        background: 'black'
    }
});
// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// create two boxes and a ground
//                       (x, y, size, width)
var ball = Bodies.circle(830, 0, 35, {
    render: { fillStyle: 'red' },
    friction: 0
});
var box = Bodies.rectangle(450, 50, 80, 80, {
    render: { fillStyle: 'blue' },
    restitution: bounciness
});
var ground = Bodies.rectangle(window.innerWidth / 2, canvasHeight, window.innerWidth, groundWidth, { isStatic: true });
objects = [ball, box, ground];


// add all of the bodies to the world
Composite.add(engine.world, objects);

