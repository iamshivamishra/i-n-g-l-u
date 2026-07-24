"use client";

import Link from "next/link";
import INGLUGlobalLogo from "@/assets/INGLU Global Logo.png";
import GoogleGLogo from "@/assets/Google_G_logo.svg";
import Image from "next/image";
import { useState } from "react";
import { validateSignupForm } from "@/lib/validation";
import { toast } from "@/components/Toast";
import { AlertTriangle, CircleCheck, Eye, EyeOff } from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
};

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    const { isValid, errors: zodErrors } = validateSignupForm(form);

    if (!isValid) {
      setErrors(zodErrors);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (!res.ok) {
        toast(
          <span className="flex items-center gap-2">
            <AlertTriangle size={18} />
            Signup Failed
          </span>,
          "error",
          2000,
        );
      } else {
        toast(
          <span className="flex items-center gap-2">
            <CircleCheck size={18} />
            SignUp Successfully!
          </span>,
          "success",
          2000,
        );
        window.location.href = "/login";
      }
    } catch (err) {
      console.error(err);
    }
  };

  function handleGoogleSignup() {
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      prompt: "consent",
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  return (
    <div className="relative mx-4 my-8 flex min-h-[80vh] w-auto items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:max-w-lg lg:max-w-5xl lg:flex-row lg:items-center lg:gap-12 lg:p-12">
        
        {/* Left Side: Logo */}
        <div className="hidden w-1/2 items-center justify-center p-4 lg:flex">
          <Image
            src={INGLUGlobalLogo}
            alt="Logo"
            className="h-auto w-full max-w-sm object-contain"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <div className="mb-2 flex flex-col items-center text-center">
            <span className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Create an account
            </span>
            <span className="text-xs font-light sm:text-sm">
              Please enter your details
            </span>
          </div>

          {/* Name Input */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="ml-4 text-[15px] font-medium">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none ${
                errors.name
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF]"
              }`}
            />
            {errors.name && (
              <span className="ml-4 text-xs font-medium text-red-500">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="ml-4 text-[15px] font-medium">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full rounded-xl border bg-white px-5 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none ${
                errors.email
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF]"
              }`}
            />
            {errors.email && (
              <span className="ml-4 text-xs font-medium text-red-500">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="ml-4 text-[15px] font-medium">Password</span>
            <div
              className={`flex w-full items-center gap-4 overflow-hidden rounded-xl border bg-white pr-5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors ${
                errors.password
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF]"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full py-3 pl-5 text-[15px] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="cursor-pointer hover:opacity-75 active:opacity-50"
              >
                {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
            {errors.password && (
              <span className="ml-4 text-xs font-medium text-red-500">
                {errors.password}
              </span>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="flex w-full max-w-md flex-col gap-1">
            <span className="ml-4 text-[15px] font-medium">Confirm Password</span>
            <div
              className={`flex w-full items-center gap-4 overflow-hidden rounded-xl border bg-white pr-5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors ${
                errors.confirm
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF]"
              }`}
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full py-3 pl-5 text-[15px] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="cursor-pointer hover:opacity-75 active:opacity-50"
              >
                {showConfirmPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
            {errors.confirm && (
              <span className="ml-4 text-xs font-medium text-red-500">
                {errors.confirm}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-2 w-full max-w-md cursor-pointer rounded-xl bg-gradient-to-r from-[#155DFC] to-[#5087FF] px-4 py-3 text-lg font-medium text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition active:translate-y-0.5 active:shadow-none sm:text-xl"
          >
            Sign Up
          </button>

          <span className="text-sm text-[#676767]">Or</span>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex w-full max-w-md cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#6B99FF] bg-white px-5 py-3 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition active:translate-y-0.5 active:shadow-none"
          >
            <Image src={GoogleGLogo} alt="Google" className="size-6" />
            <span>Sign Up with Google</span>
          </button>

          <div className="flex gap-2 text-sm">
            <span className="font-light">Already have an account?</span>
            <Link href="/login" className="font-medium text-[#1A6BF7] hover:opacity-75">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 -right-20 -z-10 hidden h-96 w-40 rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] xl:block" />
      <div className="pointer-events-none absolute -bottom-20 -left-32 -z-10 hidden h-96 w-40 rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px] xl:block" />
    </div>       
  );
}