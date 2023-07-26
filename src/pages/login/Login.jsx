import { Form } from "./Form"
import { Login_Header } from "../login/Login-Header"


function Login() {
  return (
    <div className="flex flex-col justify-center bg-gray-300 h-screen w-screen gap-3">
      <Login_Header />
      <Form />
    </div>
  )
}

export default Login