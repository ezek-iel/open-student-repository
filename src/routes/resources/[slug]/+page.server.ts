import type { PageServerLoad } from "./$types";
import { fetchResourceByID } from "$lib/server/db/funcs";

export const load: PageServerLoad = async function ({ params }) {
  const id = parseInt(params.slug);
  const resource = await fetchResourceByID(id)
  return {resource: resource[0]}
}
