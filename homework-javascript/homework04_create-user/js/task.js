function createNewUser() {
    this.userFirstName = prompt('Please enter you First name: ','');
    while (this.userFirstName === '') {
        this.userFirstName = prompt('Please enter you First name: ','');
    }

    this.userLastName = prompt('Please enter you Last name:','');
    while (this.userLastName === '') {
        this.userLastName = prompt('Please enter you Last name:: ','');
    }




    
    this.getLogin = function(){
        let newLogin = this.userFirstName.charAt(0).toLowerCase() + this.userLastName.toLowerCase();
        return newLogin;
    }
}

let newUserObj = new createNewUser();
alert(`Your login is: ${newUserObj.getLogin()}`);
