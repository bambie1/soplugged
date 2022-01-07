import "firebase/auth";
import firebase from "firebase/app";
import { useForm, SubmitHandler } from "react-hook-form";

import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";

interface IFormInput {
  password: string;
  email: string;
}

const TestLoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <PageWrapper isSlim center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="E-mail address"
          label="E-mail address"
          type="email"
          {...register("email", { required: true })}
        />
        <Input
          placeholder="Password"
          label="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <Button type="submit">Login</Button>
      </form>
    </PageWrapper>
  );
};

export default TestLoginPage;
