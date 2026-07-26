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

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-x-hidden px-4 py-8 sm:px-6 lg:px-8">
      {/* Main Card */}
      <div className="z-10 flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:max-w-md sm:p-8 lg:max-w-4xl lg:flex-row lg:items-center lg:gap-10 xl:max-w-5xl xl:p-12">
        
        {/* Left Side: Logo (Visible on LG screens and up) */}
        <div className="hidden w-full items-center justify-center p-4 lg:flex lg:w-1/2">
          <Image
            src={INGLUGlobalLogo}
            alt="Logo"
            className="h-auto w-full max-w-xs object-contain xl:max-w-sm"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="flex w-full flex-1 flex-col items-center gap-3.5 sm:gap-4">
          <div className="mb-1 flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Create an account
            </h1>
            <p className="mt-1 text-xs font-light text-gray-600 sm:text-sm">
              Please enter your details
            </p>
          </div>

          {/* Name Input */}
          <div className="flex w-full flex-col gap-1">
            <label className="ml-3 text-xs font-medium text-gray-800 sm:ml-4 sm:text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none sm:px-5 sm:py-3 sm:text-[15px] ${
                errors.name
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF] focus:ring-1 focus:ring-[#6B99FF]"
              }`}
            />
            {errors.name && (
              <span className="ml-3 text-xs font-medium text-red-500 sm:ml-4">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex w-full flex-col gap-1">
            <label className="ml-3 text-xs font-medium text-gray-800 sm:ml-4 sm:text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors outline-none sm:px-5 sm:py-3 sm:text-[15px] ${
                errors.email
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF] focus:ring-1 focus:ring-[#6B99FF]"
              }`}
            />
            {errors.email && (
              <span className="ml-3 text-xs font-medium text-red-500 sm:ml-4">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="flex w-full flex-col gap-1">
            <label className="ml-3 text-xs font-medium text-gray-800 sm:ml-4 sm:text-sm">Password</label>
            <div
              className={`flex w-full items-center gap-2 overflow-hidden rounded-xl border bg-white pr-4 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors ${
                errors.password
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF] focus-within:ring-1 focus-within:ring-[#6B99FF]"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full py-2.5 pl-4 text-sm outline-none sm:py-3 sm:pl-5 sm:text-[15px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-500 hover:text-gray-700 active:opacity-50"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="ml-3 text-xs font-medium text-red-500 sm:ml-4">
                {errors.password}
              </span>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="flex w-full flex-col gap-1">
            <label className="ml-3 text-xs font-medium text-gray-800 sm:ml-4 sm:text-sm">Confirm Password</label>
            <div
              className={`flex w-full items-center gap-2 overflow-hidden rounded-xl border bg-white pr-4 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition-colors ${
                errors.confirm
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border-[#6B99FF] focus-within:ring-1 focus-within:ring-[#6B99FF]"
              }`}
            >
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full py-2.5 pl-4 text-sm outline-none sm:py-3 sm:pl-5 sm:text-[15px]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="text-gray-500 hover:text-gray-700 active:opacity-50"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.confirm && (
              <span className="ml-3 text-xs font-medium text-red-500 sm:ml-4">
                {errors.confirm}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#155DFC] to-[#5087FF] px-4 py-2.5 text-base font-medium text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition hover:opacity-95 active:translate-y-0.5 active:shadow-none sm:py-3 sm:text-lg"
          >
            Sign Up
          </button>

          <span className="text-xs text-[#676767] sm:text-sm">Or</span>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#6B99FF] bg-white px-4 py-2.5 text-sm font-medium shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] transition hover:bg-gray-50 active:translate-y-0.5 active:shadow-none sm:gap-4 sm:py-3 sm:text-base"
          >
            <Image src={GoogleGLogo} alt="Google" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Sign Up with Google</span>
          </button>

          <div className="mt-1 flex items-center justify-center gap-1.5 text-xs sm:text-sm">
            <span className="font-light text-gray-600">Already have an account?</span>
            <Link href="/login" className="font-medium text-[#1A6BF7] hover:underline">
              Log In
            </Link>
          </div>
        </form>
      </div>

      {/* Background Decorative Blurs */}
      <div className="pointer-events-none absolute -top-20 -right-20 -z-10 hidden h-80 w-40 rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] xl:block" />
      <div className="pointer-events-none absolute -bottom-10 -left-20 -z-10 hidden h-80 w-40 rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px] xl:block" />
    </div>
  );
}