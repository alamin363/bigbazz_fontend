import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { AuthForm } from "./Signin.style";
import InputField from "../../components/Custom/InputFilde";
export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ name, email, password }) => {
    try {
    } catch (error) {}
  };
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <AuthForm
          sx={{
            "& input,textarea": {
              transform: "translateX(-100vw)",
              animation: "contactFormInputs 1s ease-in-out forwards 0.5s",
              "@keyframes contactFormInputs": {
                "100%": {
                  transform: "translateX(0)",
                },
              },
            },
            "& button": {
              padding: "1vmax",
              backgroundColor: "hsl(250, 100%, 75%)",
              transform: "translateY(-100vw)",
              animation: "contactFormBtn 1s ease-in-out forwards 1s",
            },
            "& button:hover": {
              backgroundColor: "hsl(219, 48%, 8%)",
            },
            "@keyframes contactFormBtn": {
              "100%": {
                transform: "translateY(0)",
              },
            },
          }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            sx={{
              transform: "translateY(-100vh)",
              animation: "contactFormInputs 1s ease-in-out forwards 0.5s",
              "@keyframes contactFormInputs": {
                "100%": {
                  transform: "translateY(0)",
                },
              },
            }}
            variant="h3"
            color="primary"
            textAlign="center"
          >
            Register Now
          </Typography>
          <InputField
            placeholder="user Name"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Please Input Your Name",
              },
            })}
            error={errors.name}
            helperText={errors.name && errors.name.message}
          />
          <InputField
            {...register("email", {
              required: {
                value: true,
                message: "Please provide your email",
              },
            })}
            error={errors.email}
            helperText={errors.email && errors.email.message}
            placeholder="user Email"
            type="email"
          />
          <InputField
            placeholder="user Password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Please provide Your password",
              },
              minLength: {
                value: 6,
                message: "password must be at least 6 characters long",
              },
            })}
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />
          <Link
            to="/login"
            style={{
              color: "#f91914",
            }}
          >
            Already have a account
          </Link>
          <Button sx={{ borderRadius: "8px" }} type="submit">
            submit
          </Button>
        </AuthForm>
      </Container>
    </Box>
  );
};
