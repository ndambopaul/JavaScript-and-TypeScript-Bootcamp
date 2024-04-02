var referred = false;
var fees = 100000;
var discount = 10;

var total_fees = 0;

if (referred == true) {
    total_fees = fees - (10/100 * fees);
} else {
    total_fees = fees   
}

console.log(total_fees)


var salary = 150000
var tax_percentage = 0;

if(salary > 200000) {
    tax_percentage = 16;
} else if(salary >= 100000 && salary <= 199000) {
    tax_percentage = 13;
} else {
    tax_percentage = 10;
}

switch (salary) {
    case 200000:
        tax_percentage = 20
        break;

    case 150000:
        tax_percentage = 17
        break;
    default:
        tax_percentage = 10
        break;
}
