export const calcDistFromFov = (fov: number): number => {
  const fovRad = (fov / 2) * (Math.PI / 180);
  return 2 / 2 / Math.tan(fovRad);
};
