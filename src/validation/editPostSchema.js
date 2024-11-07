import * as yup from "yup";

export const editPostSchema = (originalTitle, originalContent) => {
  const hasChangesTest = {
    name: "has-changes",
    test: function (value, context) {
      const { parent } = context;
      const titleChanged = parent.title.trim() !== originalTitle?.trim();
      const contentChanged = parent.content.trim() !== originalContent?.trim();

      return titleChanged || contentChanged;
    },
    message: "At least one field must be modified",
  };

  return yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .trim()
      .test(hasChangesTest),
    content: yup
      .string()
      .required("Content is required")
      .trim()
      .test(hasChangesTest),
  });
};
