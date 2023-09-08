import { useEffect, useState } from "react";

export default function Login(){
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");  

   // order B2
   //to get email back from forgotPassword to login page
   useEffect(() => {
    //getting the ITEM which has been already set to receive from 
    // localstorage and storing itinside a variable loacalstorage
    let email = localStorage.getItem("email");
    if(email){
      setEmail(email)
    }
    //empty dependency arrray as a 2nd argument means this 
    // condition should happen at only initial render
  }, [])

// order A1
   useEffect(() => {
    //setting the ITEM to receive 
    localStorage.setItem("email", email);
   }, [email])

   
    return(
        <>
        <h1>Login to the Portal!</h1>
        <h3>Login</h3>
      <input
        placeholder="Enter Email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password..."
        type="password..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted")
        }}
      >
        Submit
      </button>
      <br />
        </>
    )
}