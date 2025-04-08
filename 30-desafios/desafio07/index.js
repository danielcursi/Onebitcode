function orderToArray(arrays) {
    const listNumbers = []
    arrays.forEach(element => {
        element.forEach(e => {
            listNumbers.push(e)
        })
    });
    const orders = listNumbers.sort((a, b) => a - b)

    console.log(orders)
}

orderToArray([[1, 3], [4, 8], [7, 5], [2, 6]])
orderToArray([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]])
orderToArray([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]])