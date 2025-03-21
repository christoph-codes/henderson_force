import DefaultEmail from "@/emails/defaultEmail";
import { Resend } from "resend";
import { querySanity } from "../../../../sanity/lib/client";
import { SanityDocument } from "next-sanity";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

const SITE_CONFIG_QUERY = `*[_type == "siteConfig"]`;

export async function POST(req: Request) {
	const body = await req.json();
	const query = await querySanity<SanityDocument>(SITE_CONFIG_QUERY);
	const siteConfig = query[0] as SanityDocument;
	const contactEmails = siteConfig.contactEmails as string[];
	const devEmails = siteConfig.devEmails as string[];

	try {
		const data = await resend.emails.send({
			from: "Henderson Force Admin <info@hendersonforce.com>",
			to: process.env.NODE_ENV === "production" ? contactEmails : devEmails,
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
