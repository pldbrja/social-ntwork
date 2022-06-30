const validation = (email) => {
    const checker = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return checker.test(email);
}

module.exports = validation;