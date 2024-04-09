class Shape {
    area() {
        console.log("Area of shape")
    }
}

class Rectangle extends Shape {
    constructor(len, width) {
        this.len = len;
        this.width = width;
    }

    area() {
        let rec_area = this.len * this.width
        console.log(`Area of rectangle: ${rec_area}`)
    }
}

class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        let circle_area = Math.PI * this.radius *this.radius;
        console.log(`Area of circle: ${circle_area}`)
    }
}