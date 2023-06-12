import sql from "../db";

export async function getThemes() {
  const themes = await sql`
    select c.id, t.name, c.name as category_name, t.write, created_by from themes as t
    inner join categories as c
    on t.category_permission = c.id
  `;
  return themes;
}

export async function getThemeById(id) {
  const themes = await sql`
    select * from themes where id = ${id}
  `;
  return themes;
}

export async function createTheme({
  name,
  write,
  category_permission,
  created_by,
}) {
  const theme = sql`
  insert into themes (name, write, category_permission, created_by) values (${name}, ${write}, ${category_permission}, ${created_by});
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
