import { GithubBlog } from "@rena.to/github-blog";
import { atom } from "nanostores";

const blogUnit = new GithubBlog({
  repo: "sith-lord-vader/xpert-dev-blog",
  token: import.meta.env.GITHUB_TOKEN,
});

export const getPosts = async () => {
  try {
    let posts = await blogUnit.getPosts({
      query: { type: "post", state: "published" },
      pager: { limit: 10, offset: 0 },
    });
    return posts;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const blog = atom(blogUnit);
