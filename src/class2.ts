import { User } from "./types";

//type Dict<T> = { [key: string]: T };

class UserClass implements User {
  public username: string;
  public email: string;
  public money: number;

  constructor(data: User) {
    this.username = data.username;
    this.email = data.email;
    this.money = data.money;
  }

  addMoney(amt: number) {
    this.money = this.money + amt;
    // log bugs out because of obfuscation :/
    console.log(`User total: ${this.money}`);
  }
}

export { UserClass };
