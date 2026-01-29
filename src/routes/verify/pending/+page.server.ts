import type { PageServerLoad, Actions } from "./$types";
import { fetchAllPendingResources, verifyResource, rejectResource, updateAllResourceInfo } from "$lib/server/db/funcs";
import type { Resource } from "$lib/types";

export const load: PageServerLoad = async function () {
  const resources = (await fetchAllPendingResources()) as Resource[];
  return { resources };
};

export const actions: Actions = {
  verify: async function ({ request }) {
    const form = await request.formData();
    const resourceId = form.get("resourceId") as string;
    const result = await verifyResource(parseInt(resourceId));
    console.log(result);
    return result;
  },

  reject: async function ({ request }) {
    const form = await request.formData();
    const resourceId = form.get("resourceId") as string;
    const result = await rejectResource(parseInt(resourceId));
    console.log(result);
    return result;
  },
  
  replace: async function ({ request }) {
    const form = await request.formData();

    const resourceId = form.get("resourceId") as string;
    if (!resourceId) return;

    const data = {
      name: form.get("name") as string,
      link: form.get("link") as string,
      category: form.get("category") as string,
      level: form.get("level") as string,
      source: form.get("source") as string,
      details: form.get("details") as string,
      type: form.get("type") as string
    };

    //Insert a try catch statement and do all the form rigamajig.
    await updateAllResourceInfo(parseInt(resourceId), data);
  },
};
