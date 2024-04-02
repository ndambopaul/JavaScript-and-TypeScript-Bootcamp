const tax_calculator =  (salary, tax_percentage) => {
    let tax = (tax_percentage / 100) * salary  
    return salary - tax

}

const salary = 500000
const tax_percentage = 13

const salary_after_taxation = tax_calculator(salary, tax_percentage)
console.log(`Taxed_salary ${salary_after_taxation}`)
