class Contact {
    //constructor
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
    //method for validating firstName,lastName.
    validateName(name) {
      let nameRegex = RegExp("^[A-Z]{1}[A-z a-z]{2,}$");
      if (nameRegex.test(name)) {
        return true;
      } else {
        return false;
      }
    }
  
    //gettters and setters for firstName
    get firstName() {
      return this._firstName;
    }
    set firstName(firstName) {
      //passsing firstName to validateName method.
      if (this.validateName(firstName)) {
        this._firstName = firstName;
      } else {
        throw "First name is incorrect";
      }
    }
  
    //getter and setter for lastName
    get lastName() {
      return this._lastName;
    }
    set lastName(lastName) {
      //passsing lastName to validateName method.
      if (this.validateName(lastName)) {
        this._lastName = lastName;
      } else {
        throw "Last name is incorrect";
      }
    }
  
    //method for validating address, city, state.
    validateAddressCityState(address) {
      let addressRegex = RegExp("^[A-z]{4,}$");
      if (addressRegex.test(address)) {
        return true;
      } else {
        return false;
      }
    }
  
    //getter and setter for address.
    get address() {
      return this._address;
    }
    set address(address) {
      //passing address to validateAddressCityState method.
      if (this.validateAddressCityState(address)) {
        this._address = address;
      } else {
        throw "Address is incorrect";
      }
    }
  
    //getter and setter for city.
    get city() {
      return this._city;
    }
    set city(city) {
      //passing city to validateAddressCityState method.
      if (this.validateAddressCityState(city)) {
        this._city = city;
      } else {
        throw "City is incorrect";
      }
    }
  
    //getter and setter for state.
    get state() {
      return this._state;
    }
    set state(state) {
      //passing state to validateAddressCityState method.
      if (this.validateAddressCityState(state)) {
        this._state = state;
      } else {
        throw "State is incorrect";
      }
    }
  
    //getter and setter for zip-code.
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      //regexp for zip-code.
      let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
      if (zipRegex.test(zip)) {
        this._zip = zip;
      } else {
        throw "zip is incorrect";
      }
    }
  
    //getter and setter for phone-number.
    get phoneNumber() {
      return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
      //regexp for phone-number.
      let phoneNumberRegex = RegExp("^[0-9]{2}\\s[0-9]{10}$");
      if (phoneNumberRegex.test(phoneNumber)) {
        this._phoneNumber = phoneNumber;
      } else {
        throw "Phone number is incorrect";
      }
    }
  
    //getter and setter for email.
    get email() {
      return this._email;
    }
    set email(email) {
      //regexp for email-id.
      let emailRegex = RegExp(
        "^[0-9a-zA-Z]+([.,+,_,-]{1}[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2})?"
      );
      if (emailRegex.test(email)) {
        this._email = email;
      } else {
        throw "email is incorrect";
      }
    }
  
    toString() {
      return (
        "First-Name = " +
        this.firstName +
        " Last-Name = " +
        this.lastName +
        " Address = " +
        this.address +
        " City = " +
        this.city +
        " State = " +
        this.state +
        " Zip = " +
        this.zip +
        " Phone-Number = " +
        this.phoneNumber +
        " email = " +
        this.email
      );
    }
  }
  try {
    let contact = new Contact(
        "Rushikesh",
        "Bhandare",
        "karvenaka",
        "karad",
        "Maharashtra",
        415110,
        "91 7743928819",
        "rushikeshbhandare789@gmail.com"
    );
    console.log(contact.toString());
  } catch (error) {
    console.error(error);
  }
