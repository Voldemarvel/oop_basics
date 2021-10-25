class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    }
  
  calcPerimeter(){
    return this.sides * this.sideLength;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square" ,4 ,sideLength);
  }
  calcArea(){
    return this.sideLength * this.sideLength
  }
}

let square = new Square(5);


console.log(square);
console.log(square.calcPerimeter());
console.log(square.calcArea());

let triangle = new Shape("triangle", 3, 3);
console.log(triangle);
console.log(triangle.calcPerimeter());