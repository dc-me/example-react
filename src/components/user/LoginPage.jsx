import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import Header from "../Header";
import Button from "../Button";
import TextField from "../TextField";
import Heading from "../Heading";
import { emailPattern } from "../../lib/regexes";
import { login, saveUser } from "../../lib/users";
/**
 * Login Page
 */
export default function LoginPage() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submit = async (formData) => {
    try {
      const user = await login(formData);
      saveUser(user);
      navigate("/users/chat");
    } catch (err) {
      const data = err.response.data;
      setError("password", {
        type: "login",
        message: data.message || "Internal Server Error",
      });
    }
  };

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-screen-2xl">
      <Header />
      <div className="mx-[5%] pb-10 pt-[10%] sm:w-5/6 lg:w-2/6">
        <h2 className="mb-4 font-sans text-2xl font-semibold">
          Sign In to RTT 42 Class
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Button variant="outlined">
            <FcGoogle />
            <span>Google</span>
          </Button>
          <Button variant="outlined">
            <FaGithub />
            <span>GitHub</span>
          </Button>
          <Button variant="outlined">
            <FaApple />
            <span>Apple</span>
          </Button>
          <Button variant="outlined">
            <FaMicrosoft />
            <span>Microsoft</span>
          </Button>
        </div>
        <Heading className="mb-4 mt-6" title="Or continue with" />
        <form onSubmit={handleSubmit(submit)}>
          <TextField
            fullWidth
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: emailPattern,
            })}
            label="Email:"
            placeholder="your@email.com"
          />
          <TextField
            fullWidth
            label="Password:"
            type="password"
            error={errors.password}
            placeholder="plase enter you password here"
            {...register("password", {
              required: "Password can not be empty",
              minLength: {
                value: 6,
                message: "Password should have at least 6 characters",
              },
            })}
          />
          <div className="flex flex-col items-end">
            <Button className="mt-4" variant="contained">
              Sign In
            </Button>
            <p className="mt-8 text-sm">
              Need an account?{" "}
              <Link to="/users/signup" className="text-sky-600 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          className="h-full w-full object-cover"
          src="https://perscholas.org/wp-content/uploads/2023/05/20190625-143859-_DSC5051-scaled1-1500x1500.jpg"
        />
      </div>
    </div>
  );
}
