import { toast } from "sonner";
import { env } from "./env";
import { Loginschemtype, Registerschemtype } from "./zodschema";
import ky, { HTTPError } from "ky";

export const loginUser = async (loginData: Loginschemtype) => {
  try {
    const res = await ky.post("login", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/auth`,
      credentials: "include",
      mode: "cors",
      json: {
        email: loginData.email,
        password: loginData.password,
        mode: "session",
      },
    });

    if (res.ok) {
      toast.success("Login Success!");
      return true;
    }
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();
      toast.error(errorJson.errors[0].message);
    } else {
      toast.error("Network Error");
    }
  }
};
export const registerUser = async (registerData: Registerschemtype) => {
  try {
    const isRegistered = await ky.get("users", {
      prefixUrl: `${env.NEXT_PUBLIC_API}`,
      credentials: "include",
      mode: "cors",
    });
    const res = await ky.post("register", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/users`,
      credentials: "include",
      mode: "cors",
      json: {
        first_name: registerData.first_name,
        email: registerData.email,
        password: registerData.password,
        mode: "session",
      },
    });

    if (res.ok) {
      toast.success("Login Success!");
      return true;
    }
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();
      toast.error(errorJson.errors[0].message);
    } else {
      toast.error("Network Error");
    }
  }
};
