"use client";

export async function submitForm<T extends Record<string, unknown>>(
  formType: string,
  data: T,
) {
  try {
    const res = await fetch("/api/forms/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, data }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { error: result?.message || "Submission failed. Please try again." };
    }

    return result;
  } catch (err) {
    console.error("Form submit error:", err);
    return { error: "An unexpected error occurred." };
  }
}
