import { Triangle } from './Triangle';
import { Rectangle } from './Rectangle';
import { Square } from './Square';
import { Circle } from './Circle';

let triangle = new Triangle(10, 20)
console.log("TriangleArea: ",triangle.getArea())
console.log("TrianglePerimeter: ",triangle.getPerimeter())

let rettangle = new Rectangle(10, 20)
console.log("RettangleArea: ",rettangle.getArea())
console.log("RettanglePerimeter: ",rettangle.getPerimeter())

let square = new Square(10)
console.log("SquareArea: ",square.getArea())
console.log("SquarePerimeter: ",square.getPerimeter())

let circle = new Circle(20)
console.log("CircleArea: ",circle.getArea())
console.log("CirclePerimeter: ",circle.getPerimeter())