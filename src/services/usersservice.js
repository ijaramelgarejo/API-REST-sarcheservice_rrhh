const Users = require("../model/users");

const getAllUsers = () => {
    const allUsers = Users.getAllUsers();
    return allUsers;
};
const getOneUsers = (Id) => {
    const userforId = Users.getUserById(Id);
    return userforId;
};
const createNewUsers = (userData) => {
    const createUser = Users.createUser(userData);
    return createUser;
};
const updateOneUsers = (userId, userData) => {
    const updateuser = Users.updateUser(userId, userData);
    return updateuser;
};
const deleteOneUsers = (userId) => {
    const deleteUser = Users.deleteUser(userId)
    return deleteUser;
};

module.exports = {
    getAllUsers,
    getOneUsers,
    createNewUsers,
    updateOneUsers,
    deleteOneUsers
}