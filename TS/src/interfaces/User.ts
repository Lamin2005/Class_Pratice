export interface User {
  name: string;
  age: number;
  address: string;
  adult?: boolean;
  isLogin(state?: boolean): boolean;
}

export interface User {
  city: string;
}
