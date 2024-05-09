import { EmailTemplate } from "@/emails/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

export async function POST(req: Request) {
	const body = await req.json();
	console.log("fields", body.fields);
	try {
		const data = await resend.emails.send({
			from: "TKC <cjones@thekirkconcept.com>", // TODO: Will change to hendersonforce email when ready
			to: ["tkcwebdev@gmail.com", "krubinojr@gmail.com"],
			subject: "New Potential Force Member!",
			react: EmailTemplate(body.fields),
			text: "New Potential Force Member!",
		});

		return Response.json(data);
	} catch (error) {
		console.log("error", error);
		return Response.json({ error });
	}
}
