import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const API_URL = import.meta.env.API_URL;
  const formData = await request.formData();
  const username = formData.get("userField");
  const password = formData.get("passwordField");

  const response = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  console.log(response.status);

  if (response.status !== 200 || !data.token) {
    return redirect("/login?error=invalid_credentials");
  }

  const { token, userId, expires } = data;

  cookies.set("access-token", token, {
    path: "/",
  });

  return redirect("/");
};
