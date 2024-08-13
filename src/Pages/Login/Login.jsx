import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("second");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-darkWhite">
      <div className="w-full flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          name="login"
          className="bg-white dark:bg-[#22262b] shadow-md shadow-black/20 rounded-md w-5/6 sm:w-2/4 md:w-[27%] flex flex-col gap-3 p-3"
        >
          <h1 className="text-center text-xl font-medium tracking-wide">
            Login in to Zimuth
          </h1>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="temp@gmail.com"
                className="w-full bg-transparent outline-none p-2 focus:outline-none rounded-md border border-cyan80"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none p-2 focus:outline-none rounded-md border border-cyan80"
              />
            </div>
            <div className="flex items-center justify-center pt-3">
              <button
                type="submit"
                className="bg-cyan80 rounded-md w-full py-2"
              >
                LOGIN
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400 text-center">OR</p>
            <p className="font-medium text-center pt-2 text-lg">Login with</p>
            <div className="flex items-center justify-center">
              <button className="border border-gray-300 rounded-full p-1">
                <FcGoogle
                  onClick={() => {
                    alert("Logged In With Google");
                  }}
                  size={27}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
