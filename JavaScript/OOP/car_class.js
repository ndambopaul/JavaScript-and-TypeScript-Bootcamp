class Car {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }

    start(){
        console.log("The car has started!!")
    }

    stop() {
        console.log("The car has stopped");
    }

    check_fuel(){
        console.log("Checking fuel...")
    }

    apply_discount(discount_percentage){
        let discount = this.price * (discount_percentage / 100)
        console.log(`Discount is: ${discount}`)
    }
}

const tesla = new Car("Tesla", "Model X", 60000);
tesla.apply_discount(10);
tesla.start();
tesla.check_fuel();
tesla.stop();