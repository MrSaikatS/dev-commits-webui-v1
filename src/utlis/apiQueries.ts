import { toast } from "sonner";
import { env } from "./env";
import { Loginschemtype, Registerschemtype } from "./zodschema";
import ky, { HTTPError } from "ky";
import { UserType } from "./types/UserType";
import { json } from "stream/consumers";

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

export const getCurrentUser = async () => {
  try {
    const result = await ky.get("me", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/users`,
      credentials: "include",
      mode: "cors",
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getCurrentUserPosts = async () => {
  try {
    const filter = {
      user_created: {
        _eq: "$CURRENT_USER",
      },
    };

    const result = await ky.get("posts", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
      searchParams: new URLSearchParams({
        filter: JSON.stringify(filter),
      }),
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const res = await ky.post("logout", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/auth`,
      credentials: "include",
      mode: "cors",
      json: {
        mode: "session",
      },
    });

    if (res.ok) {
      toast.success("Logout Success!");
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

export const getPosts = async () => {
  try {
    const result = await ky.get("posts", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
      searchParams: new URLSearchParams({
        fields: "*.*",
      }),
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const postLike = async (postid: string) => {
  try {
    const varr = await ky.post("likes", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
      json: {
        post_id: postid,
      },
    });
    console.log(varr);
  } catch (error) {
    console.log(error);
  }
};
