class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(){
        if(this.email == "teste@gmail.com" && this.password == 123){
            console.log(`Sejá bem vindo ${this.fullname}`)
        }else{
            console.log("Usuario não encontrado!")
        }
    }
}

const toEnter = new User()

toEnter.fullname = "Daniel"
toEnter.email = "teste@gmail.com"
toEnter.password = 1234
toEnter.login()