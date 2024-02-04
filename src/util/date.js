export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

export const monthlist = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);

export const yearlist = Array.from(
  { length: 5 },
  (_, i) => new Date().getFullYear() - 2 + i
);
