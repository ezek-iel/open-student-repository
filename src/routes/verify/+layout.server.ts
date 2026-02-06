import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

/**
 * We are not looking into the dashboard routes for now
 */
export const load: LayoutServerLoad = function () {
  redirect(307, "/");
};
