let neo4j = require("neo4j-driver");
require("dotenv").config();
let driver = neo4j.driver(
  process.env.NEO4J_URL,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PW)
);

exports.getTimeStamp = () => {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
  let day = date.getDate();

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hour = date.getHours();

  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}

exports.apiCall = async (query, queryObject) => {
  const session = await driver.session();
  try {
    let res = await session.run(query, queryObject);
    return {res, queryObject};
  } catch (err) {
    console.error(err);
    return err;
  } finally {
    await session.close();
  }
}
