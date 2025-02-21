import { useForm } from "react-hook-form";
import {
  Form,
  Logo,
  FormRow,
  Label,
  InputWrapper,
  Input,
  Button,
  Spinner,
  Heading,
  ErrorMessage,
  StyledNavLink,
} from "./authForm.styles.js";
import useLogin from "../../Hooks/useLogin.js";
import { NavLink } from "react-router";

export default function Login() {
  const { login, isPending, isSuccess } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("login", isSuccess);
  const onSubmit = ({ email, password }) => {
    login({ email, password });
  };

  return (
    <>
      {!isSuccess && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo src="logoT.png" alt="logo" />
          <Heading>Login</Heading>

          {/* Email Field */}
          <FormRow>
            <Label for="email">Email</Label>
            <InputWrapper>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                disabled={isPending}
                {...register("email", {
                  required: "This field is required!",
                  pattern: {
                    value: /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message: "Input a valid email id!",
                  },
                })}
              />
              {errors?.email && (
                <ErrorMessage>{errors?.email.message}</ErrorMessage>
              )}
            </InputWrapper>
          </FormRow>

          {/* Password Field */}
          <FormRow>
            <Label for="password">Password</Label>
            <InputWrapper>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                disabled={isPending}
                {...register("password", {
                  required: "This field is required!",
                })}
              />
              {errors?.password && (
                <ErrorMessage>{errors?.password.message}</ErrorMessage>
              )}
            </InputWrapper>
          </FormRow>

          {/* Submit Button */}
          <Button type="submit" disabled={isPending}>
            <>{isPending ? <Spinner /> : ""} Login</>
          </Button>
          <StyledNavLink>
            <NavLink to="/signup"> Don't have an account? Sign up</NavLink>
          </StyledNavLink>
        </Form>
      )}
    </>
  );
}
