import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import Button from "../Button";
import preventDefault from "../../lib/utils";
import { emailPattern } from "../../lib/regexes";
import { saveUser, signup } from "../../lib/users";

export default function RegisterPage() {
  const {
    watch,
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  const submit = async (formData) => {
    try {
      const user = await signup(formData);
      saveUser(user);
      navigate("/users/chat");
    } catch (err) {
      let message = "Unknow Error!";
      if (err.response) {
        message = err.response.data.message;
      } else {
        message = err.message;
      }
      setError("submit", {
        type: "signup",
        message: message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:p-20">
        <div>
          <h1 className="text-lg font-bold">Sign Up</h1>
          <p className="mt-2">
            This information will be displayed publicly so be careful what you
            share.
          </p>
          {errors.submit && (
            <p className="mt-4 text-lg font-bold text-red">
              {errors.submit.message}
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="col-span-2 rounded-lg bg-white ring-1 ring-gray-300"
        >
          <div className="mx-8 my-6 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-6">
            <TextField
              {...register("name.firstName", {
                required: "Please enter your first name",
              })}
              className="md:col-span-3"
              label="First name:"
              error={errors.name?.firstName}
            />
            <TextField
              {...register("name.lastName", {
                required: "Please enter your last name",
              })}
              className="md:col-span-3"
              label="Last name:"
              error={errors.name?.lastName}
            />
            <TextField
              {...register("username", {
                required: "Please enter your username",
              })}
              className="md:col-span-2"
              label="Username:"
              error={errors.username}
            />
            <TextField
              {...register("email", {
                required: "Please enter your email",
                pattern: emailPattern,
              })}
              className="md:col-span-4"
              label="Email:"
              error={errors.email}
            />
            <TextField
              {...register("password", {
                required: "Please enter your password",
              })}
              className="md:col-span-3"
              label="Password:"
              type="password"
              error={errors.password}
            />
            <TextField
              type="password"
              className="md:col-span-3"
              label="Confirm password:"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate(value) {
                  return value === password || "The passwords do not match";
                },
              })}
              error={errors.confirmPassword}
              onPaste={preventDefault}
            />
          </div>
          <div className="mt-10 flex justify-end gap-4 border-t border-gray-300 p-4">
            <Button
              type="button"
              onClick={() => reset()}
              className="rounded-lg"
              variant="contained"
            >
              Reset
            </Button>
            <Button className="rounded-lg" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
