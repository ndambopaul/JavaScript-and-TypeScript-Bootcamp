const country = "Uganda";
const capital_city = 'Kampala City'
const address = "228, 90119, Nairobi"
const physical_address = "228-90119, Nairobi"


const country_in_caps = country.toUpperCase()
const c_c_in_lowercase = capital_city.toLowerCase()

const n = country_in_caps[3]

const country_split = country.split("")
const capital_city_split = capital_city.split(" ")
const address_split = address.split(",")
const physical_address_split = physical_address.split("-")
console.log(physical_address_split)
console.log(address_split)  


const address_mapped = address_split.map(address => address.trim())

const address_joined = address_mapped.join("-")
console.log(address_joined)
const car = " Tesla Model X"
const car_stripped = car.trim()
console.log(car_stripped)