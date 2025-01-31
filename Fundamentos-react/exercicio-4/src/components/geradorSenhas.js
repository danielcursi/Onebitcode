export default function getPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$";
    const passwordLength = 8;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      let position = Math.floor(Math.random() * chars.length);
      password += chars[position];
    }
    return password
  }