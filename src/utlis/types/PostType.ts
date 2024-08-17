export type PostType = {
  data: PostTypeSingle[];
};

export type PostTypeSingle = {
  id: string;
  sort: any;
  user_created: string;
  date_created: string;
  caption: string;
  post_img: string;
  likes: Array<string>;
};
