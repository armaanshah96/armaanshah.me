import { home } from "./constants";

export const constructPathArray = (pathname) =>
  pathname.split("/").filter((el) => el.length);

export const isHomepage = (url) => url === "/";

export const currentPage = (pathArray) => {
  if (pathArray.length === 0) {
    return home;
  }
  return pathArray[pathArray.length - 1];
};
