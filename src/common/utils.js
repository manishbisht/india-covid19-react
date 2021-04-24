export const capitalCase = (string = "") =>
    string.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
