const { User, Address } = require("../models");

const createUser = async () => {
  try {
    await User.create({
      username: "rochafi",
      email: "rochafi@mail.com",
      password: "password",
    });
    console.log("success generate user");
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async () => {
  try {
    await User.update(
      {
        age: 25,
        gender: "Male",
      },
      {
        where: {
          userId: 1,
        },
      }
    );
    console.log("success update user");
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  try {
    const response = await User.findAll({
      include: {
        model: Address,
        as: "addresses",
      },
    });
    const users = JSON.parse(JSON.stringify(response));
    console.log(users[0].addresses);
  } catch (error) {
    console.log(error);
  }
};

getUser();

// ADDRESS //

const createAddress = async () => {
  try {
    await Address.create({
      userId: 1,
      name: "Jl. Setiabudi 3",
    });
    console.log("success generate address");
  } catch (error) {
    console.log(error);
  }
};
