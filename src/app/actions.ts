"use server"

import { Resend } from "resend"
import { z } from "zod"

// Define the schema for form validation
const ContactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Type for the form data
type ContactFormData = z.infer<typeof ContactFormSchema>

// Type for the response
type SubmitResponse = {
  success: boolean
  message?: string
}

export async function submitContactForm(formData: ContactFormData): Promise<SubmitResponse> {
  try {
    // Validate the form data
    const validatedData = ContactFormSchema.parse(formData)

    // Initialize Resend with the API key
    const resend = new Resend("re_f5NgXQeS_A4LwYePdnUGNCuzEgaV4jxPN")

    // Send the email
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Resend's default sender email
      to: "pediredlanarasaraju@gmail.com", // Update with your email address
      subject: `Contact Form: ${validatedData.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error(error.message)
    }

    // Return success response
    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return {
        success: false,
        message: errorMessage,
      }
    }

    // Handle other errors
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}

