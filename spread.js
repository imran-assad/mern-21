const user1 = {
  name: "imran",
  age: 24,
};

const user2 = {
  name: "kamran",
  age: 20,
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);
