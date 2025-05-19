"use client";
import { PageUrlConfig } from "config/page.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import {
  ApiErrorResponse,
  ServerErrorResponse,
} from "src/lib/api/common.utilitiy";
import { useRegister } from "src/lib/queries/user";
import Alert from "src/modules/alert.module";

export default function JoinForm() {
  const router = useRouter();
  const [model, setModel] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [valid, setValid] = useState({
    email: { state: false, reason: "" },
    password: { state: false, reason: "" },
    passwordCheck: { state: false, reason: "" },
  });
  const [errorData, setErrorData] = useState<ServerErrorResponse>({
    message: "",
    error: "",
    statusCode: 0,
  });
  const { mutate, isPending, error, data } = useRegister(() => {
    Alert().success(
      "성공",
      "회원가입이 완료되었습니다.\n승인 후 이용 가능합니다.",
      () => {
        router.push("/sign/in");
      }
    );
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
      handleRegister();
    }
  };

  const handleRegister = () => {
    if (!valid.email.state) {
      Alert().warning("이메일을 확인해주세요.");
      return;
    }
    if (!valid.password.state) {
      Alert().warning("비밀번호를 확인해주세요.");
      return;
    }
    if (!valid.passwordCheck.state) {
      Alert().warning("비밀번호 재입력을 확인해주세요.");
      return;
    }
    mutate({ email: model.email, password: model.password });
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
      case "passwordCheck":
        validationPasswordCheck(value);
        break;
    }

    setModel({ ...model, [name]: value });
  };

  const validationEmail = (value: string) => {
    let initialValid = {
      password: { state: false, reason: "" },
      passwordCheck: { state: false, reason: "" },
    };
    if (value === "") {
      setValid({
        ...initialValid,
        email: { state: false, reason: "" },
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value.match(emailRegex)) {
      setValid({
        ...initialValid,
        email: {
          state: false,
          reason: "이메일 형식이 올바르지 않습니다.",
        },
      });
    } else {
      setValid({
        ...initialValid,
        email: { state: true, reason: "" },
      });
    }
  };

  const validationPassword = (value: string) => {
    let initialValid = {
      email: valid.email,
      password: { state: false, reason: "" },
      passwordCheck: { state: false, reason: "" },
    };

    if (value === "") {
      setValid(initialValid);
      return;
    }

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/;

    if (!value.match(passwordRegex)) {
      setValid({
        ...initialValid,
        password: {
          state: false,
          reason:
            "비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
        },
      });
    } else {
      setValid({
        ...initialValid,
        password: { state: true, reason: "" },
      });
    }
  };

  const validationPasswordCheck = (value: string) => {
    if (value === "") {
      setValid({ ...valid, passwordCheck: { state: false, reason: "" } });
      return;
    }

    if (value !== model.password) {
      setValid({
        ...valid,
        passwordCheck: {
          state: false,
          reason: "비밀번호가 일치하지 않습니다.",
        },
      });
    } else {
      setValid({
        ...valid,
        passwordCheck: {
          state: true,
          reason: "",
        },
      });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-120 bg-white p-8 rounded flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
          />
          {!valid.password.state && valid.password.reason !== "" && (
            <span className="text-red-400 font-medium text-xs absolute top-full mt-1">
              {valid.password.reason}
            </span>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="password_check"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your password one more time
          </label>
          <input
            type="password"
            id="password_check"
            name="passwordCheck"
            placeholder="Enter your password one more time"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
            onChange={handleChange}
            value={model.passwordCheck}
            onKeyUp={onKeyUpEnter}
          />
          {!valid.passwordCheck.state && valid.passwordCheck.reason !== "" && (
            <span className="text-red-400 font-medium text-xs absolute top-full mt-1">
              {valid.passwordCheck.reason}
            </span>
          )}
        </div>
        <div className="relative">
          <button
            className="w-full cursor-pointer bg-primary text-white py-2 rounded-md hover:bg-secondary transition duration-200 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleRegister}
            disabled={isPending}
          >
            Sign Up
          </button>
          {errorData?.message !== "" && (
            <span className="w-full text-center text-red-400 font-medium text-xs absolute left-0 top-full mt-1">
              {errorData.message}
            </span>
          )}
        </div>
        <div className="mt-4 text-center flex flex-col gap-2">
          <div className="text-sm text-gray-600 flex gap-2 items-end justify-center">
            <p>Already have an account?</p>
            <Link
              href={PageUrlConfig.SIGN_IN}
              className="text-secondary hover:underline"
            >
              Sign In
            </Link>
          </div>
          <div className="text-sm text-gray-600 flex gap-2 items-end justify-center">
            <p>Having trouble signing up?</p>
            <Link
              href={PageUrlConfig.SIGN_UP}
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
