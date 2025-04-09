import slugify from "@sindresorhus/slugify";

export const buildPageSlug = (pageSlugId: string, pageTitle?: string): string => {
  const titleSlug = slugify(pageTitle?.substring(0, 70) || "untitled", {
    customReplacements: [
      ["♥", ""],
      ["🦄", ""],
    ],
  });

  return `${titleSlug}-${pageSlugId}`;
};

export const buildPageUrl = (
  spaceName: string,
  pageSlugId: string,
  pageTitle?: string,
): string => {
  if (spaceName === undefined) {
    return `/p/${buildPageSlug(pageSlugId, pageTitle)}`;
  }
  return `/s/${spaceName}/p/${buildPageSlug(pageSlugId, pageTitle)}`;
};
