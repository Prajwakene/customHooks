// import { useEffect, useState } from "react";
//importing custom hooks
import useLocalStorage from "./useLocalStorage";

export default function Reset() {
  //destructring the custom hooks
  const { email, setEmail } = useLocalStorage();
  // const [email,setEmail] = useState("");

  //uaing custom hooks instead

  // // order A2
  // useEffect(() => {
  //   //getting the ITEM which has been already set to receive from
  //   // localstorage and storing itinside a variable loacalstorage
  //   let email = localStorage.getItem("email");
  //   if(email){
  //     setEmail(email)
  //   }
  //   //empty dependency arrray as a 2nd argument means this
  //   // condition should happen at only initial render
  // }, [])

  // // order B1
  // //fot getting back email from ForgotPasssword yo Loginpage
  // useEffect(() => {
  //   //setting the ITEM to receive
  //   localStorage.setItem("email", email);
  //  }, [email])

  return (
    <>
      <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
