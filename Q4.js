// Base class Shape
class Shape {
    area() {
        throw new Error('Method "area()" must be implemented.');
    }

    perimeter() {
        throw new Error('Method "perimeter()" must be implemented.');
    }
}

// Subclass Circle
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Subclass Triangle
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a; // side a
        this.b = b; // side b
        this.c = c; // side c
    }

    // Using Heron's formula for the area
    area() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    perimeter() {
        return this.a + this.b + this.c;
    }
}

// Example usage
const circle = new Circle(5);
console.log(`Circle - Area: ${circle.area()}, Perimeter: ${circle.perimeter()}`);

const rectangle = new Rectangle(10, 20);
console.log(`Rectangle - Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);

const triangle = new Triangle(3, 4, 5);
console.log(`Triangle - Area: ${triangle.area()}, Perimeter: ${triangle.perimeter()}`);
