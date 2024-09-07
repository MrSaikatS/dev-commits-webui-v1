import { toast } from "sonner";
import { env } from "./env";
import {
  Loginschemtype,
  Registerschemtype,
  UpdateProfileSchemaType,
} from "./zodschema";
import ky, { HTTPError } from "ky";
import { LikeArray } from "./types/LikeType";
import { FileType } from "./types/FileType";
import { UserType } from "./types/UserType";
import { PostType } from "./types/PostType";

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
    await ky.post("register", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/users`,
      mode: "cors",
      json: {
        first_name: registerData.first_name,
        email: registerData.email,
        password: registerData.password,
      },
    });
  } catch (error: any) {
    console.log(error);

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
        fields: "*.*",
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

export const updateProfileImage = async (files: File[]) => {
  try {
    const formData = new FormData();
    formData.append("file", files[0]);

    const editProfile = await ky
      .post("files", {
        prefixUrl: `${env.NEXT_PUBLIC_API}`,
        credentials: "include",
        mode: "cors",
        body: formData,
      })
      .json<FileType>();

    const result = await ky.patch("me", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/users`,
      credentials: "include",
      mode: "cors",
      json: {
        avatar: editProfile.data.id,
      },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getLikesByPostID = async (postid: string) => {
  try {
    const filter = {
      post_id: {
        _eq: postid,
      },
      user_created: {
        _eq: "$CURRENT_USER",
      },
    };
    const res = await ky.get("likes", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
      searchParams: new URLSearchParams({
        filter: JSON.stringify(filter),
      }),
    });

    return res.json<LikeArray>();
  } catch (error) {
    console.log(error);
  }
};
export const deleteLikesByPostID = async (postid: string) => {
  try {
    const filter = {
      post_id: {
        _eq: postid,
      },

      user_created: {
        _eq: "$CURRENT_USER",
      },
    };
    const res = await ky.get("likes", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
      searchParams: new URLSearchParams({
        filter: JSON.stringify(filter),
      }),
    });

    const data = (await res.json<LikeArray>()).data[0];

    await ky.delete(data.id, {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items/likes`,
      credentials: "include",
      mode: "cors",
    });
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = async (info: { caption: string }, files: File[]) => {
  try {
    const formData = new FormData();
    formData.append("file", files[0]);

    const postImage = await ky
      .post("files", {
        prefixUrl: `${env.NEXT_PUBLIC_API}`,
        credentials: "include",
        mode: "cors",
        body: formData,
      })
      .json<FileType>();

    await ky.post("posts", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
      json: {
        caption: info.caption,
        post_img: postImage.data.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileDetails = async (
  userData: UpdateProfileSchemaType
) => {
  try {
    const res = await ky.patch("me", {
      prefixUrl: `${env.NEXT_PUBLIC_API}/users`,
      credentials: "include",
      mode: "cors",
      json: {
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        description: userData.description,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const checkEmail = async (email: string) => {
  try {
    const isRegistered = await ky
      .get("users", {
        prefixUrl: `${env.NEXT_PUBLIC_API}`,
        credentials: "include",
        mode: "cors",
        searchParams: new URLSearchParams({
          filter: JSON.stringify({
            email: {
              _eq: email,
            },
          }),
        }),
      })
      .json<any>();

    console.log(isRegistered.data.length);

    if (isRegistered.data.length != 0) {
      return true;
    }

    // if (isRegistered !== null) {
    //   return true;
    // }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: string) => {
  try {
    await ky.delete(`posts/${id}`, {
      prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
      credentials: "include",
      mode: "cors",
    });
  } catch (error) {}
};

export const publicProfile = async (id: string) => {
  try {
    const request = await ky
      .get(`users/${id}`, {
        prefixUrl: `${env.NEXT_PUBLIC_API}`,
        credentials: "include",
        mode: "cors",
      })
      .json<UserType>();
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const publicUserPosts = async (id: string) => {
  try {
    const filter = {
      user_created: {
        _eq: id,
      },
    };

    const request = await ky
      .get("posts", {
        prefixUrl: `${env.NEXT_PUBLIC_API}/items`,
        credentials: "include",
        mode: "cors",
        searchParams: new URLSearchParams({
          fields: "*.*",
          filter: JSON.stringify(filter),
        }),
      })
      .json<PostType>();
    return request;
  } catch (error) {
    console.log(error);
  }
};
