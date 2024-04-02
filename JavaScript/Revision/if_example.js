const age = 13

//const content = ["Cartoons", "Animations", "Sports", "All Content"]

const view_content = [
    {
        "min_age": 17,
        "max_age": 200,
        "content": "All content"
    },
    {
        "min_age": 11,
        "max_age": 16,
        "content": ["Cartoons", "Animations", "Sports"]
    },
    {
        "min_age": 6,
        "max_age": 10,
        "content": ["Cartoons", "Animations"]
    },
    {
        "min_age": 1,
        "max_age": 5,
        "content": ["Cartoons"]
    }
]

const filtered_content = (age) => {
    let min_filtered =  view_content.filter(content => content.min_age >= age)
    return min_filtered.map(content => content.max_age <= age)
}

console.log(filtered_content(17))

/*
if(age >= 17) {
    console.log(content[-1])
} else if (age >= 11 && age <= 16) {
    console.log(content.slice(0,3))
} else if (age >= 6 && age <= 10){
    console.log(content.slice(0, 2))
} else if (age >= 0 && age <= 5) {
    console.log(content[0])
}
*/