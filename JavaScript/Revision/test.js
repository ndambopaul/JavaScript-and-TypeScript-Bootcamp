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
    return view_content.filter(content => content.min_age <= age && content.max_age >= age);
    //return min_filtered.map(content => content.content);
}

// Test the function
console.log(filtered_content(8)); // Output: [ 'Cartoons', 'Animations' ]
