const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'Mohammad'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(35, (user) => {
  console.log(user);
});
