export const date = () => {
  const Now = new Date();
  const year = Now.getFullYear();
  return { year };
};
