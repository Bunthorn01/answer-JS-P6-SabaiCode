// a.Mock database
const mockDatabase = [
    { id: 1, name: "sok" },
    { id: 2, name: "sao" },
    { id: 3, name: "pisey"},
    { id: 4, name: "Bunthorn"}
  ];
  
  // b.Function to get user info by id
  function getUserById(id, callback) {
    setTimeout(() => {
      const user = mockDatabase.find(user => user.id === id);
      if (user) {
        callback(null, user);
      } else {
        callback("User not found");
      }
    }, 2000);
  }
  
  // c.Function to process user data by capitalizing the user name
  function processUserData(user, callback) {
    setTimeout(() => {
      if (user) {
        user.name = user.name.toUpperCase();
        callback(null, user);
      } else {
        callback("User data is invalid");
      }
    }, 1500);
  }
  
  // d.Execution flow
  getUserById(4, (error, user) => {
    if (error) {
      console.error(error);
    } else {
      processUserData(user, (error, processedUser) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Processed User Data:", processedUser);
        }
      });
    }
  });
  
