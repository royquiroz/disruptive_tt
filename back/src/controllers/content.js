import sql from "../db";

export async function getContent() {
  // const contents = sql`select * from content`;
  const contents = await sql`
    select description, value, name, write, delete, username, role, email, content.created_at from content
    left join themes
    on content.related_to = themes.id
    left join users
    on content.created_by = users.id
    order by content.created_at desc
  `;
  return contents;
}

export async function createContent({
  description,
  value,
  related,
  created_by,
}) {
  const content = sql`
  insert into content (description, value, related_to, created_by) values (${description}, ${value}, ${related}, ${created_by});
  `;
  return content;
}
