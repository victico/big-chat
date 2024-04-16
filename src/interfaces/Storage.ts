interface Storage {
  get: (key:string) => any,
  set:  (key:string, value:any) => any,
  delete: (key:string) => any,
}
export default Storage;