import DefaultEmail from "@/emails/defaultEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

const blindRecipients = ["tkcwebdev@gmail.com", "krubinojr@gmail.com"];

const primaryEmailRecipients = [
	"mattj@hendersonforce.com",
	"justindoucette@cmbhockey.com",
];

export async function POST(req: Request) {
	const body = await req.json();
	try {
		const data = await resend.emails.send({
			from: "Henderson Force Admin <info@hendersonforce.com>",
			to:
				process.env.NODE_ENV === "production"
					? body.to
						? [...primaryEmailRecipients, body.to]
						: primaryEmailRecipients
					: ["tkcwebdev@gmail.com"],
			bcc: process.env.NODE_ENV === "production" ? blindRecipients : [],
			subject: body.subject,
			react: DefaultEmail(body.fields, body.subject),
			text: body.subject,
		});

		return Response.json(data);
	} catch (error) {
		console.log("error", error);
		return Response.json({ error });
	}
}
