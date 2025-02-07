import { useState } from "react"


const SignUpForm = () => {

  const [usernameInput, setUsernameInput] = useState(``)
  const [passwordInput, setPasswordInput] = useState(``)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()


  const user = {
    username: usernameInput,
    password: passwordInput,
  };

  try {
  const response = await fetch (`https://fsa-jwt-practice.herokuapp.com/signup`, {
    method:"POST", 
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(user),
  });

  const result = await response.json();
  console.log (result);

  if (!response.ok) {
    throw new Error (result.message `Oh noooo, an error occured when creating user!`)
  }
  console.log(`User created successfully! Yay!`, result);
  setUsernameInput(``);
  setPasswordInput(``);
  setError(null);
} catch (err) {
  console.log(`Error happened oh nooo`,err.message);
  setError(err.message);
}

  }



  return (
    <>
      <h2>Sign Up </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Username"
          onChange={(event) => {
            setUsernameInput(event.target.value); console.log(usernameInput)
          }}

        />

        <input
          placeholder="Password"
          onChange={(event) => { setPasswordInput(event.target.value); console.log(passwordInput) }}
        />

        <button>Log In!</button>

      </form>
     
  
    </>

  )

}

export default SignUpForm 