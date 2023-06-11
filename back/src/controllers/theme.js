import sql from "../db";

export async function getThemes() {
  const themes = await sql`
    select * from themes
  `;
  return themes;
}

export async function getThemeById(id) {
  console.log(id);
  const themes = await sql`
    select * from themes where id = ${id}
  `;
  return themes;
}

export async function createTheme({
  name,
  description,
  value,
  write,
  category_permission,
  created_by,
}) {
  const theme = sql`
  insert into themes (name, write, description, value, category_permission, created_by) values (${name}, ${write}, ${description}, ${value}, ${category_permission}, ${created_by});
  `;
  return theme;
}

export async function updateTheme(
  id,
  { name, permission, category_permission }
) {
  const theme = sql`
  update themes set name = ${name}, permission = ${permission}, category_permission = ${category_permission} where id = ${id}
`;
  return theme;
}

export async function deleteTheme(id, { remove }) {
  const theme = sql`
  update themes set delete = ${remove} where id = ${id}
`;
  return theme;
}
