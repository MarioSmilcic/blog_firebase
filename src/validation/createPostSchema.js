import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must not exceed 100 characters"),
  blogPost: yup
    .string()
    .required("Post content is required")
    .trim()
    .min(10, "Post must be at least 10 characters")
    .max(5000, "Post must not exceed 5000 characters"),
});
