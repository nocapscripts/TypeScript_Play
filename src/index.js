var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Character_characters, _Character_metadata, _Character_statuses, _Character_groups;
var Character = /** @class */ (function () {
    function Character(source, firstname, lastname, cash, bank, age, gender, lastloc, job, grade, group, phone, owner, userId, username, identifier, ped, charId, stateId, metadata, characters, statuses, groups) {
        if (metadata === void 0) { metadata = {}; }
        if (characters === void 0) { characters = []; }
        if (statuses === void 0) { statuses = {}; }
        if (groups === void 0) { groups = {}; }
        _Character_characters.set(this, []);
        _Character_metadata.set(this, {});
        _Character_statuses.set(this, {});
        _Character_groups.set(this, {});
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
        __classPrivateFieldSet(this, _Character_characters, characters, "f");
        __classPrivateFieldSet(this, _Character_metadata, metadata, "f");
        __classPrivateFieldSet(this, _Character_statuses, statuses, "f");
        __classPrivateFieldSet(this, _Character_groups, groups, "f");
    }
    Character.prototype.printValues = function () {
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
            ped: this.ped
        });
    };
    Character.prototype.addMoney = function (amount) {
        this.cash = this.cash + amount;
        console.log(this.cash);
    };
    return Character;
}());
_Character_characters = new WeakMap(), _Character_metadata = new WeakMap(), _Character_statuses = new WeakMap(), _Character_groups = new WeakMap();
function GenCharId() {
    var theid = "ch:" + Math.random();
    return theid;
}
function GenerateState() {
    var state = (Math.random() + 1000);
    return state;
}
// Create an instance of the Character class
var character = new Character(1, // source
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
GenerateState() // stateId
);
setInterval(function () {
    character.addMoney(1000);
}, 6000);
