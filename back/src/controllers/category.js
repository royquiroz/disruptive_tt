import sql from "../db";

export async function getCategories() {
  const category = await sql`
    select * from categories
  `;
  return category;
}

export async function createCategory({ name }) {
  const category = sql`
  insert into categories (name) values (${name});
  `;
  return category;
}
