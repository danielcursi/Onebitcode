function show(){
    const contactList = document.getElementById("contact-list")
    console.log(contactList)

    const liElemtent = document.getElementsByTagName("li")
    console.log(liElemtent)

    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)

    const contacts = document.querySelectorAll("#contact-list > li > label")
    console.log(contacts)

    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)
}