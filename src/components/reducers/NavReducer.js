const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        case "Profile":
            return "Profile";
        case "Entry":
            return "Entry";
        case "Category":
            return "Category";
        case "History":
            return "History";
        case "Home":
            return "Home";
        case "ForgotPassword":
            return "ForgotPassword";
        case "Food":
            return "Food";
        case "Clothing":
            return "Clothing";
        case "State":
            return "State";
        case "About":
            return "About";
        case "Festival":
            return "Festival";
        default:
            return "Login";

    }

}