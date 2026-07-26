"use client";

import INGLUGlobalLogo from "@/assets/INGLU Global Logo.png";
import GoogleGLogo from "@/assets/Google_G_logo.svg";
import { AlertTriangle, Eye, EyeOff, CircleCheck, Loader2 } from "lucide-react";
import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/actions/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { validateLoginForm } from "@/lib/validation";
import { toast } from "@/components/Toast";

type FormErrors = {
  email?: string;
  password?: string;
};

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const { refreshUser } = useAuth();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = validateLoginForm(formData);
    if (!result.isValid) {
      setErrors({
        email: result.errors.email,
        password: result.errors.password,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await login(formData);
      if (res?.error) {
        toast(
          <span className="flex items-center gap-2">
            <AlertTriangle size={18} />
            Invalid Credentials
          </span>,
          "error",
          2000,
        );
        return;
      }

      toast(
        <span className="flex items-center gap-2">
          <CircleCheck size={18} />
          Successfully Logged In
        </span>,
        "success",
        2000,
      );
      await refreshUser();
      if (redirect) {
        router.replace(redirect);
      } else {
        router.replace("/dashboard");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleGoogleLogin() {
    const params = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || "",
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      prompt: "consent",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  return (
    <div className="mx-auto my-6 flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-black/20 bg-[#F4F7FE] p-6 shadow-md sm:max-w-md md:max-w-lg lg:max-w-5xl lg:flex-row lg:p-12">
      {/* Left Image Section */}
      <div className="hidden items-center justify-center lg:flex lg:w-1/2">
        <Image
          src={INGLUGlobalLogo}
          alt="INGLU Global Logo"
          className="h-auto max-w-full object-contain"
          priority
        />
      </div>

      {/* Right Form Section */}
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
        <div className="mb-6 flex flex-col items-center text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Welcome Back!
          </h1>
          <p className="mt-1 text-xs text-gray-600 sm:text-sm">
            Please enter your details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          {/* Email Input */}
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="email" className="ml-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm shadow-sm outline-none transition duration-150 focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-[#6B99FF] focus:ring-blue-200"
              }`}
            />
            {errors.email && (
              <span className="ml-2 text-xs text-red-500">{errors.email}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="password" className="ml-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div
              className={`flex w-full items-center rounded-xl border bg-white px-4 shadow-sm transition duration-150 focus-within:ring-2 ${
                errors.password
                  ? "border-red-500 focus-within:ring-red-200"
                  : "border-[#6B99FF] focus-within:ring-blue-200"
              }`}
            >
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full py-3 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="ml-2 text-xs text-red-500">{errors.password}</span>
            )}

            <Link
              href="/forgot-password"
              className="ml-auto text-xs font-medium text-[#0425F9] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#155DFC] to-[#5087FF] py-3 text-base font-medium text-white shadow-md hover:opacity-95 active:translate-y-0.5 active:shadow-none disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Log In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center justify-center text-sm text-gray-500">
          <span>Or</span>
        </div>

        {/* Google Sign-in */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#6B99FF] bg-white py-3 shadow-sm transition hover:bg-gray-50 active:translate-y-0.5"
        >
          <Image src={GoogleGLogo} alt="Google Logo" className="h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>

        {/* Sign Up Link */}
        <div className="mt-6 flex items-center gap-1 text-sm">
          <span className="font-light text-gray-600">Don&apos;t have an account?</span>
          <Link
            href="/signup"
            className="font-semibold text-[#1A6BF7] hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}