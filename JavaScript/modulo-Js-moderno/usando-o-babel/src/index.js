const obj = () => {
    const user = {
        name:'Daniel',
        address: {
            street: '38'
        }
    }
    console.log(user?.address?.city)
}

obj()
