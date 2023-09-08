import { useState, useEffect } from "react";

export default function useLocalStorage() {
  const [email, setEmail] = useState("");
  // order A2
  
  useEffect(() => {
    //getting the ITEM which has been already set to receive from
    // localstorage and storing itinside a variable loacalstorage
    let email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
    //empty dependency arrray as a 2nd argument means this
    // condition should happen at only initial render
  }, []) -
    // order B1
    //fot getting back email from ForgotPasssword yo Loginpage
    useEffect(() => {
      //setting the ITEM to receive
      localStorage.setItem("email", email);
    }, [email]);

  //we neeed both thats why returnning object
  //this is only diffrence in hooks and custom hooks to return something
  //and need to comment out all the logic which was getting repeated poreviosly
  return { email, setEmail };
}
