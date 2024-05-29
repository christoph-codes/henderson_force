import JoinTheForce from "@/emails/join-the-force";
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
			from: "TKC <cjones@thekirkconcept.com>", // TODO: Will change to hendersonforce email when ready
			to:
				process.env.NODE_ENV === "production"
					? primaryEmailRecipients
					: ["tkcwebdev@gmail.com"],
			bcc: process.env.NODE_ENV === "production" ? blindRecipients : [],
			subject: "New Potential Force Member!",
			react: JoinTheForce(body.fields),
			text: "New Potential Force Member!",
		});

		return Response.json(data);
	} catch (error) {
		console.log("error", error);
		return Response.json({ error });
	}
}
