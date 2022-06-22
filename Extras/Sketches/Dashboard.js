// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Composite = Matter.Composite,
    // Constraint = Matter.Constraint,
    // MouseConstraint = Matter.MouseConstraint,
    // Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

const scrollBarWidth = 15,
    bounciness = 1.1,
    bounciness2 = 1.2,
    canvasHeight = 581,
    canvasWidth = 600,
    groundWidth = 10;

function doAnimations(element, option, bodies, gravity = 1) {
    var element = document.querySelector(element),
        engine = Engine.create();
    engine.world.gravity.y = gravity;
    var canvas = Render.create({
        element: element,
        engine: engine,
        options: {
            height: option[0],
            width: option[1],
            wireframes: option[2],
            background: option[3]
        }
    });
    Render.run(canvas);

    var runner = Runner.create();
    Runner.run(runner, engine);
    Composite.add(engine.world, bodies);
}


var onceclicked = false;
$('#Pipe').click(function () {
    if (!onceclicked) {
        var options = [223, 300, false, 'black'];
        var ball = Bodies.circle(235, 20, 35, {
            render: { fillStyle: 'red' },
            friction: 0,
        });

        doAnimations('#ballEntryCanvas', options, [ball], 0.5);
    }
    onceclicked = true;
});

var options = [canvasHeight, window.innerWidth - scrollBarWidth, false, 'black'];
var box = Bodies.rectangle(450, 0, 80, 80, {
    render: { fillStyle: 'blue' },
    restitution: bounciness
});
var ground = Bodies.rectangle(window.innerWidth / 2, canvasHeight, window.innerWidth - scrollBarWidth, groundWidth, { isStatic: true });
doAnimations('#mainCanvas', options, [box, ground], 1);

// IN HTML 
// <script src="libraries/matter.js"></script>
// <script src="libraries/matter.min.js"></script>
// <script src="Sketches/Dashboard.js"></script>
// <img src="Pipe.png" id="Pipe" alt="Pipe"></img>
// <div id="mainCanvas"></div>
// <div id="ballEntryCanvas"></div>