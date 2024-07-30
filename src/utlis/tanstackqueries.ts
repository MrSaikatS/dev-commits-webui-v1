import { readItems, readMe } from "@directus/sdk";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "./sdk";
import { Post } from "./types";
import { User } from "@directus/types";

export const getAuthUser = () => {
  return useQuery({
    queryKey: ["getAuthUser"],
    queryFn: async () => {
      const authUserInfo = await sdk.request<User>(readMe());

      return authUserInfo;
    },
  });
};

export const getAllPosts = () => {
  return useQuery({
    queryKey: ["getAllPosts"],
    queryFn: async () => {
      const allPosts = await sdk.request(
        readItems("posts", {
          fields: [
            "*",
            {
              user_created: ["*"],
              likes: ["*"],
            },
          ],
        })
      );

      return allPosts as Post[];
    },
  });
};

export const getUserPosts = (uId: string) => {
  return useQuery({
    queryKey: ["getUserPosts", uId],
    queryFn: async () => {
      const userPosts = await sdk.request(
        readItems("posts", {
          fields: [
            "*",
            {
              user_created: ["*"],
              likes: ["*"],
              postImg: ["*"],
            },
          ],
          filter: {
            user_created: {
              _eq: uId as any,
            },
          },
        })
      );

      return userPosts as Post[];
    },
  });
};

export const getLikeDetails = (pId: string) => {
  return useQuery({
    queryKey: ["getLikeDetails", pId],
    queryFn: async () => {
      const { id } = await sdk.request(readMe());

      const xyz = await sdk.request(
        readItems("post_likes", {
          filter: {
            user_created: {
              _eq: id,
            },
            liked_in: {
              _eq: pId,
            },
          },
        })
      );

      return xyz;
    },
  });
};
