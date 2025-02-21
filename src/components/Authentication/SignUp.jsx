import { useForm } from "react-hook-form";
import useSignUp from "../../Hooks/useSignUp.js";
import {
  Form,
  FormRow,
  Label,
  Input,
  Button,
  Spinner,
  Heading,
  ErrorMessage,
  InputWrapper,
  Logo,
  StyledNavLink,
} from "./authForm.styles.js";
import { NavLink } from "react-router";

export default function SignUp() {
  const { signUp, isPending } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, fullName, password }) => {
    signUp({ email, password, fullName });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Logo src="logoT.png" alt="logo" />
      <Heading>SignUp</Heading>

      <FormRow>
        <Label for="fullName">Full Name</Label>
        <InputWrapper>
          <Input
            id="fullName"
            type="text"
            placeholder="Name"
            disabled={isPending}
            {...register("fullName", {
              required: "This field is required!",
              maxLength: {
                value: 30,
                message: "Name cannot exceed 30 characters!",
              },
            })}
          />
          {errors?.fullName && (
            <ErrorMessage>{errors?.fullName.message}</ErrorMessage>
          )}
        </InputWrapper>
      </FormRow>

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
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long!",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-@*#&]).*$/,
                message:
                  "Password should have at least 1 uppercase 1 lowercase 1 of '@#*&' and 1 digit",
              },
            })}
          />
          {errors?.password && (
            <ErrorMessage>{errors?.password.message}</ErrorMessage>
          )}
        </InputWrapper>
      </FormRow>

      <Button type="submit" disabled={isPending}>
        <>{isPending ? <Spinner /> : ""} Sign up</>
      </Button>
      <StyledNavLink to="/signup">
        <NavLink to="/login">Already have an account? Login</NavLink>
      </StyledNavLink>
    </Form>
  );
}
