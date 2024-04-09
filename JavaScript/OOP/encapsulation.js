class Student {
    constructor(name, reg_number) {
        this.name = name;
        this.reg_number = reg_number;
    }

    is_active() {
        console.log("This student is active");
    }
}

const student = new Student("Jane Doe", "REG_00_B00_SBD");
student.is_active();