"use client";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageUrlConfig } from "config/page.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import {
  ApiErrorResponse,
  ServerErrorResponse,
} from "src/lib/api/common.utilitiy";
import { useLogin } from "src/lib/queries/user";
import Alert from "src/modules/alert.module";

export default function LoginForm() {
  const router = useRouter();
  const [model, setModel] = useState({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState({
    email: { state: false, reason: "" },
    password: { state: false, reason: "" },
  });
  const [errorData, setErrorData] = useState<ServerErrorResponse>({
    message: "",
    error: "",
    statusCode: 0,
  });
  const { mutate, isPending, error, data } = useLogin(() => {
    router.push(PageUrlConfig.HOME);
  });

  // 에러 객체 확인 및 처리

  useEffect(() => {
    if (error && typeof error === "object" && "message" in error) {
      // 서버에서 반환한 에러 응답
      const apiError = error as ApiErrorResponse;

      if (apiError.response) {
        setErrorData(apiError.response);
      } else {
        setErrorData({
          message: "서버 에러 발생",
          statusCode: 500,
          error: "Internal Server Error",
        });
      }
    }
  }, [error]);

  const onKeyUpEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSignIn();
    }
  };

  const handleSignIn = () => {
    if (!valid.email.state) {
      Alert().warning("이메일을 입력해주세요.");
      return;
    }
    if (!valid.password.state) {
      Alert().warning("비밀번호를 입력해주세요.");
      return;
    }

    mutate(model);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        validationEmail(value);
        break;
      case "password":
        validationPassword(value);
        break;
    }

    setModel({ ...model, [name]: value });
  };

  const validationEmail = (value: string) => {
    if (value === "") {
      setValid({
        ...valid,
        email: { state: false, reason: "이메일을 입력해주세요." },
      });
    } else {
      setValid({
        ...valid,
        email: { state: true, reason: "" },
      });
    }
  };

  const validationPassword = (value: string) => {
    if (value === "") {
      setValid({
        ...valid,
        password: { state: false, reason: "암호를 입력해주세요." },
      });
    } else {
      setValid({
        ...valid,
        password: { state: true, reason: "" },
      });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <Link
        href={PageUrlConfig.HOME}
        className="absolute top-4 left-16 w-8 h-8"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="!w-6 !h-6" />
      </Link>
      <div className="w-120 bg-white p-8 rounded flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
            onChange={handleChange}
            value={model.email}
          />
          {!valid.email.state && valid.email.reason !== "" && (
            <span className="text-red-400 font-medium text-xs absolute top-full mt-1">
              {valid.email.reason}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
            onChange={handleChange}
            value={model.password}
            onKeyUp={onKeyUpEnter}
          />
          {!valid.password.state && valid.password.reason !== "" && (
            <span className="text-red-400 font-medium text-xs absolute top-full mt-1">
              {valid.password.reason}
            </span>
          )}
        </div>
        <div className="relative">
          <button
            className="w-full cursor-pointer bg-primary text-white py-2 rounded-md hover:bg-secondary transition duration-200 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleSignIn}
            disabled={isPending}
          >
            Sign In
          </button>
          {errorData?.message !== "" && (
            <span className="w-full text-center text-red-400 font-medium text-xs absolute left-0 top-full mt-1">
              {errorData.message}
            </span>
          )}
        </div>
        <div className="mt-4 text-center flex flex-col gap-2">
          <div className="text-sm text-gray-600 flex gap-2 items-end justify-center">
            <p>Don't have an account?</p>
            <Link
              href={PageUrlConfig.SIGN_UP}
              className="text-secondary hover:underline"
            >
              Sign Up
            </Link>
          </div>
          <div className="text-sm text-gray-600 flex gap-2 items-end justify-center">
            <p>Having trouble logging in?</p>
            <Link
              href={PageUrlConfig.CONTACT}
              className="text-secondary hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
