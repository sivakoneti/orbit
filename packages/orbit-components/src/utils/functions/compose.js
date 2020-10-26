// @flow
const compose = (...fns: any[]) => (args: any) => fns.reduceRight((arg, fn) => fn(arg), args);

export default compose;
