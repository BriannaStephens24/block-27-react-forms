import { useState } from "react"


const SignUpForm = () => {

const [usernameInput, setUsernameInput] = useState(``)
const [passwordInput, setPasswordInput] = useState(``)
const [error, setError] = useState(`null`)

const handleSubmit = async(event) => {
event.preventDefault()
console.log(`hello`)
}

return (
<>
<h2>Sign Up </h2>

<form onSubmit={handleSubmit}>

<input
placeholder = "Username"
onChange={ (event) => { setUsernameInput(event.target.value);console.log(usernameInput)
}}

/>

<input
placeholder = "Password" 
onChange = { (event) => { setPasswordInput(event.target.value)}}
/>

<button>Log In!</button>

</form>
</>

)

}

export default SignUpForm