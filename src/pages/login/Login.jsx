import Form from "./Form";
import LoginHeader from "./LoginHeader";

function Login() {
  return (
    <div className="flex--basic justify-center bg-gray-300 h-screen w-screen gap-3">
      <LoginHeader />
      <Form />
    </div>
  );
}

export default Login;
