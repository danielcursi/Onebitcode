class Account{
    #password
    #balance = 1000
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            console.log(this.#balance)
        }else{
            console.log(null)
        }
    }
    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "daniel@email.com",
    password: "12345"
}

const myAccount = new Account(user)

myAccount.getBalance("daniel@email.com", "12345")