import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex flex-col md:items-center md:justify-center md:bg-transparent h-[635px] sm:h-[650px] rounded-md overflow-hidden">
      <img
        src="https://rb.gy/p2hphi"
        alt=""
        className="z-10 opacity-60  h-full object-cover"
      />

      {/* login from */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" absolute top-1/4  z-20 w-full sm:w-3/4 md:w-2/3 px-4 sm:left-[80px] md:left-[140px] rounded-md bg-[gray]/40 py-3"
      >
        <h1 className="text-4xl font-semibold mb-2">Sign In</h1>
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="space-y-5">
              <input
                {...register("email", { required: true })}
                type="text"
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <span className="p-1 text-[13px] font-light text-orange-500 ">
                  Please enter a valid email.
                </span>
              )}
              <input
                {...register("password")}
                type="password"
                className="input"
                placeholder="Password"
              />

              {errors.password && (
                <span className="p-1 text-[13px] font-light text-orange-500 ">
                  Your password must contain between 4 and 60 characters.
                </span>
              )}
            </div>

            <button
              className="w-full rounded bg-[#e50914] py-3 font-semibold"
              type="submit"
              onClick={() => setLogin(true)}
            >
              Sign In
            </button>
          </div>

          <div className=" space-x-3">
            <span className="text-white/50">New to Lara?</span>
            <button
              onClick={() => setLogin(false)}
              className="text-white hover:underline"
            >
              Sign up Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
