import User from "./user.model";

// Creating New User [INSERT INTO DB]
export const createUser = async () => {
    // Database Query
    const user = new User({
        name: "Rubel Hossain",
        age: "25",
        nationality: "bangladeshian",
    });

    await user.save();

    return user;
};
