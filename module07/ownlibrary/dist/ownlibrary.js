let e = 0;
const t = () => {
  e += 1;
}, n = () => {
  e -= 1;
}, c = () => e, o = { increment: t, decrement: n, value: c };
export {
  o as default
};
