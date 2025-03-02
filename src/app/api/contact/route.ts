import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

// Define the schema for form validation
const ContactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export async function POST(request: NextRequest) {
  console.log("Contact form submission received")

  try {
    // Check if API key exists
    const apiKey = "re_f5NgXQeS_A4LwYePdnUGNCuzEgaV4jxPN"
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables")
      return NextResponse.json(
        { error: "Email service configuration error. Please contact the administrator." },
        { status: 500 },
      )
    }

    console.log("RESEND_API_KEY is defined")

    // Initialize Resend with the API key
    const resend = new Resend(apiKey)

    // Parse the request body
    const body = await request.json()
    console.log("Received form data:", JSON.stringify(body))

    // Validate the form data
    const validatedData = ContactFormSchema.parse(body)

    // Send the email
    console.log("Attempting to send email with Resend...")
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "pediredlanarasaraju@gmail.com", // Replace with your actual email
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
      console.error("Error sending email with Resend:", error)
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    // Return success response
    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 })
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      console.error("Validation error:", errorMessage)
      return NextResponse.json({ error: errorMessage }, { status: 400 })
    }

    // Handle other errors
    console.error("Unexpected error in contact form submission:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please check server logs for details." },
      { status: 500 },
    )
  }
}

