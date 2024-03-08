/***
 * Objective: When the button is clicked then js wil take the inputs take the formula and give the result in the area calculator .Let us do it in step by step
 * 
 * Step 1- get base value
 * Step-2 get height value
 * Step-3 calculation method
 */  


function calculateTriangleArea(){
    // console.log("connected");

    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);

    // trying to get triangle height
    const triangleHightInput = document.getElementById('triangle-height');
    const triangleHightText = triangleHightInput.value;
    const height = parseFloat(triangleHightText);
    // console.log(height);

    // calculate triangle area 

    const area = 0.5 * base * height;

    console.log('area of triangle is: ',area);

    // showing the triangle area 
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
} 

// Rectangle
function calculateRectangleArea(){
    const RectangleBaseInput = document.getElementById('rectangle-base');
const RectangleBaseText = RectangleBaseInput.value;
const rectangleBase = parseFloat(RectangleBaseText);
console.log(rectangleBase);

const RectangleHightInput = document.getElementById('rectangle-height');
    const RectangleHightText = RectangleHightInput.value;
    const rectangleHeight = parseFloat(RectangleHightText);
    console.log(rectangleHeight);

    const rectangle = rectangleBase * rectangleHeight;

    const rectangleArea = document.getElementById('area-rectangle');
    rectangleArea.innerText = rectangle;

    console.log('area of rectangle is ', rectangle);
} 

// Parallelogram

 function calculateParallelogramArea(){
    const ParallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = ParallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseText);
// console.log(parallelogramBase);

const ParallelogramHightInput = document.getElementById('parallelogram-height');
    const ParallelogramHightText = ParallelogramHightInput.value;
    const parallelogramHeight = parseFloat(ParallelogramHightText);
    // console.log(parallelogramHeight);

    const parallelogram = parallelogramBase * parallelogramHeight;

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = parallelogram;

    console.log('area of parallelogram is : ', parallelogram);
 }