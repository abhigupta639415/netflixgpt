
export const checkValidation = (email, password) => {
   
    const isemailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ;
    const ispasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password) ;
    if(!isemailValid)return "Invalid Email Address" ;
    if(!ispasswordValid)return "Invalid Password type" ;
    return null ;
}