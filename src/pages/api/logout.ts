import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ redirect, cookies }) => {
  cookies.delete("access-token", { path: "/" });

  return redirect("/");
};
