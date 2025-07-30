"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async ({ firstName, email, message }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: "tayyabaakhter189@gmail.com", // replace with your own email
      subject: "New Contact Form Submission",
      react: (
        <div>
          <h1>Contact Form Message</h1>
          <p><strong>Name:</strong> {firstName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>
      ),
    });

    if (error) {
      console.error("Send error:", error);
      return { error };
    }

    return { data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { error: err.message };
  }
};
