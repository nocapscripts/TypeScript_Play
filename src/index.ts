import { UserClass } from "./class2";

type Dict<T> = { [key: string]: T };

interface Values {
  charId?: any;
  cid?: any;
  owner: string;
  stateId?: string;
  firstname: string;
  lastname: string;
  cash: number;
  bank: number;
  age: number;
  gender: string;
  lastloc: {};
  heading?: number;
  lastPlayed?: string;
  health?: number;
  hunger?: number;
  thirst?: number;
  armour?: number;
  isNew?: boolean;
  metadata: {};
  job: string;
  grade: number;
  group: string;
  phone: string;
}

class Character implements Values {
  source: number | string;
  firstname: string;
  lastname: string;
  cash: number;
  bank: number;
  age: number;
  gender: string;
  lastloc: {};
  metadata: {};
  job: string;
  grade: number;
  group: string;
  phone: string;
  owner: string;
  userId: number;
  charId?: number;
  stateId?: string;
  username: string;
  identifier: string;
  ped: number;



  constructor(
    source: number | string,
    firstname: string,
    lastname: string,
    cash: number,
    bank: number,
    age: number,
    gender: string,
    lastloc: {},
    job: string,
    grade: number,
    group: string,
    phone: string,
    owner: string,
    userId: number,
    username: string,
    identifier: string,
    ped: number,
    charId?: number,
    stateId?: string,
    metadata: Dict<any> = {},
   
  ) {
    this.source = source;
    this.firstname = firstname;
    this.lastname = lastname;
    this.cash = cash;
    this.bank = bank;
    this.age = age;
    this.gender = gender;
    this.lastloc = lastloc;
    this.metadata = metadata;
    this.job = job;
    this.grade = grade;
    this.group = group;
    this.phone = phone;
    this.owner = owner;
    this.userId = userId;
    this.charId = charId;
    this.stateId = stateId;
    this.username = username;
    this.identifier = identifier;
    this.ped = ped;
   
  }

  printValues(): void {
    console.log({
      source: this.source,
      firstname: this.firstname,
      lastname: this.lastname,
      cash: this.cash,
      bank: this.bank,
      age: this.age,
      gender: this.gender,
      lastloc: this.lastloc,
      metadata: this.metadata,
      job: this.job,
      grade: this.grade,
      group: this.group,
      phone: this.phone,
      owner: this.owner,
      userId: this.userId,
      charId: this.charId,
      stateId: this.stateId,
      username: this.username,
      identifier: this.identifier,
      ped: this.ped,
    });
  }

  addMoney(amount: number): void {
    this.cash = this.cash + amount;
    console.log(`Character total: ${this.cash}`);
  }
}


function GenerateState() {
  const state: any = Math.random() + 1000;
  return state;
}

// Create an instance of the Character class
const character = new Character(
  1, // source
  "John", // firstname
  "Doe", // lastname
  1000, // cash
  5000, // bank
  30, // age
  "Male", // gender
  {}, // lastloc
  "Developer", // job
  3, // grade
  "GroupA", // group
  "123-456-7890", // phone
  "Owner123", // owner
  12345, // userId
  "johndoe", // username
  "identifier123", // identifier
  123, // ped
  1, // charId
  GenerateState(), // stateId
);

const user = new UserClass({
  username: "Sten",
  email: "uudo.kepp@gmail.com",
  money: 100,
});

setInterval(function () {
  character.addMoney(1000);
  user.addMoney(100);
}, 6000);

import "./types.ts";
import "./class2.ts";
