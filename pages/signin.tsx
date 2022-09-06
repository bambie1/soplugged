import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={() => signIn("google")}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
