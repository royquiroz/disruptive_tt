import sql from "../db";

export async function getUsers() {
  const users = await sql`
    select * from users
  `;
  return users;
}

export async function getUserByEmail({ email }) {
  const users = await sql`
    select * from users where email = ${email}
  `;
  return users;
}

export async function createUser({ username, role, email, password }) {
  const user = sql`
  insert into users (username, role, email, password) values (${username}, ${role}, ${email}, ${password});
  `;
  return user;
}
