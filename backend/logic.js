const peoples= require('./db')

const allPeopleData = () => {
    return peoples.users.find().then((result) => {
      if (result) {
        return {
          statusCode: 200,
          users: result,
        };
      } else {
        return {
          statusCode: 404,
          message: "data not available",
        };
      }
    });
  };

  module.exports={allPeopleData}