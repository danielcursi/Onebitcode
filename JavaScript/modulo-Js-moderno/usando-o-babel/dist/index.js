"use strict";

var obj = function obj() {
  var _user$address;
  var user = {
    name: 'Daniel',
    address: {
      street: '38'
    }
  };
  console.log(user === null || user === void 0 || (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.city);
};
obj();