import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const API_URL = import.meta.env.API_URL;
  const formData = await request.formData();
  const email = formData.get("emailField");

  const response = await fetch(`${API_URL}/user/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: [email] }),
  });

  const data = await response.json();

  console.log(data);

  if (data.error || data.detail?.[0]?.type === "value_error.email") {
    return redirect("/reset-password?error=true");
  }

  return redirect("/reset-password?success=true");
};
