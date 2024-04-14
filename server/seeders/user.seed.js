import { User } from "../models/user.model.js";
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

const createUser = async (numUsers) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Elite-Chat");
    await User.deleteMany();
    console.log("Users are deleted");

    const usersPromise = [];

    for (let i = 0; i < numUsers; i++) {
      const tempUser = User.create({
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        bio: faker.lorem.sentence(10),
        password: "password",
        avatar: {
          url: faker.image.avatar(),
          public_id: faker.system.fileName(),
        },
      });
      usersPromise.push(tempUser);
    }

    await Promise.all(usersPromise);
    //   await User.insertMany(usersPromise);
    //   console.log("User are created");
    console.log("Users created", numUsers);
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// export { createUser };
createUser(10);
