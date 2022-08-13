type GetCurrentPage = {
  url: URL;
  route: {
    pages: {
      title: string;
      path: string;
      category: string;
      date: string;
    }[];
  };
};
export const getCurrentPage = ({ url, route }: GetCurrentPage) => {
  const page = url.pathname.split("/").filter(x => x !== "")[1];
  const currentPage = route["pages"].find(x => x.path === page);
  if (!currentPage) throw new Error("[getCurrentPage] Not CurrentPage");
  return currentPage;
};
