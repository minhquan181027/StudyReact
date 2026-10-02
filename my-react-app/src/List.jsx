function List() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 62 },
        { id: 3, name: "banana", calories: 105 }
    ];
    fruits.sort((a, b) => b.name.localeCompare(a));
    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

    return (
        <ul>
            {
                lowCalFruit.map(fruit => (
                    <li key={fruit.id}>{fruit.name}-{fruit.calories} calories</li>
                ))
            }
        </ul>
    )
}
export default List;