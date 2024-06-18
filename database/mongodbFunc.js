exports = function (payload, response) {
  const { name, email } = payload.query;
  let query = {};
  if (name) {
    query = { name: { $eq: name } };
  } else if (email) {
    query = { email: { $eq: email } };
  }
  const doc = context.services
    .get("mongodb-atlas")
    .db("sample_mflix")
    .collection("users");
  let userslist = doc.find(query).toArray();
  return userslist;
};
