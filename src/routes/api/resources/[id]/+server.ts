import { fetchResourceByID } from "$lib/server/db/funcs";
import { error, json } from "@sveltejs/kit";

export async function GET({ params }) {
  const id = params.id;
  const resource = await fetchResourceByID(parseInt(id));

  if (resource.length === 0) return error(404, "Not Found");
  return json({ resource: resource[0] });
}
