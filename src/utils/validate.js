

export const validate=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const isconfirmpasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(confirmpassword)

    if(!isEmailValid)return "**Enter a valid email**";
    if(!isPasswordValid)return "Enter a valid password";
    // if(isconfirmpasswordValid !== isPasswordValid)return "Password doesnt match";
}
// export default validate;
export const validateSignup=(email,password,confirmpassword)=>{
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isconfirmpasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(confirmpassword)

    if(!isEmailValid)return "**Enter a Valid Email**";
    if(!isPasswordValid)return "Enter a valid Password";
    if(isconfirmpasswordValid !== isPasswordValid)return "Password doesnt match";
}
