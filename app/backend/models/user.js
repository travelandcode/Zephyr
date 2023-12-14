class User {

    users = [];

    id;
    name;
    email;
    password;
    location;
    logoUrl;
    isActive;
    isDeleted;
    isEmailVerified;

    constructor() {
    }


    create = (newUser) => {
        newUser.id = Math.random().toString(36).substr(2, 9);
        newUser.isActive = true;
        newUser.isDeleted = false;
        newUser.isEmailVerified = false;
        this.users.push(newUser);

        return newUser;
    }

    getAll = () => {
        return this.users;
    }

    getUserById = (id) => {
        return this.users.find(x => x.id === id && x.isDeleted === false);
    }

    delete = (userId) => {

        let userToDelete = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToDelete.isDeleted = true;

        this.users[index] = userToDelete;

    }

    deactivate = (userId) => {

        let userToDeactivate = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToDeactivate.isActive = false;

        this.users[index] = userToDeactivate;
    }

    activate = (userId) => {

        let userToActivate = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToActivate.isActive = true;

        this.users[index] = userToActivate;
    }

    verifyEmail = (userId) => {

        let userToValidate = this.users.find(x => x.id === userId);
        const index = this.users.indexOf(x => x.id === userId);

        userToValidate.isEmailVerified = true;

        this.users[index] = userToValidate;
    }

    getActiveUsers = () => {
        console.log("users", this.users)
        console.log("active user", this.users.filter(x => x.isActive === true))
        console.log("delete filtered user", this.users.filter(x => x.isDeleted === true))
        console.log("delete an active filtered user", this.users.filter(x => x.isActive === true && x.isDeleted === false))
        const activeUsers = this.users.filter(x => x.isActive === true && x.isDeleted === false);
        console.log("activeUsers", activeUsers)

        return activeUsers
    }

    update = (updateUser) => {

        const index = this.users.indexOf(x => x.id === updateUser.id);

        console.log("updateUser",updateUser)

        this.users[index] = updateUser;

        return updateUser;
    }


}

module.exports = User;