import { HeadTag } from "@/components/HeadTag";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, { FormEvent } from "react";
const encode = (data: Record<string,string>) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export default function Contact() {
	const [name, setName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [message, setMessage] = React.useState<string>('');

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact-form", name, email, message })
		})
		.then(() => {
			setMessage('');
			}
		)
		.catch(error => alert(error));
	}

	return (
		<>
			<HeadTag title="Contact" description="Contacts Page" />
			<Typography
				component="h1"
				className="text-2xl font-bold mb-8"
			>
				Reach out!
			</Typography>
			<Typography
				component="p"
				className="mb-4 leading-normal"
			>
				If you want to get in touch you can find me at any of the listed places below. You can also send me a message by filling out the form below.
			</Typography>
			<ul className="mb-10 list-disc list-inside">
				<li>
					<a className="link" href="https://twitter.com/AlexAyon12">Twitter</a>
				</li>
				<li>
					<a className="link" href="https://github.com/alex-code4okc/">Github</a>
				</li>
				<li>
					<a className="link" href="https://www.linkedin.com/in/alex-ayon">LinkedIn</a>
				</li>
			</ul>
			<Box
				component="form"
				method="POST"
				name="contact-form"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					p: 2,
					gap: 2,
					borderRadius: '5px',
					boxShadow: 1,
					maxWidth: 'md',
					mx: 'auto',
				}}
				netlify-honeypot="bot-field"
				data-netlify="true"
				onSubmit={(e) => handleFormSubmit(e)}
			>
				<TextField
					name="bot-field"
					type="hidden"
				/>
				<TextField
					name="form-name"
					value="contact-form"
					type="hidden"
				/>
				<TextField
					id="name"
					label="Name"
					name="name"
					variant="filled"
					placeholder="Jane Goodall"
					onChange={(e) => setName(e.target.value)}
					value={name}
					required
				/>
				<TextField
					id="email"
					label="Email"
					name="email"
					variant="filled"
					placeholder="email@example.com"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
				<TextField
					id="message"
					label="Message"
					name="message"
					variant="filled"
					placeholder="Greetings! Excited to connect with you."
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					multiline
					required
				/>
				<Button
					variant="contained"
					color="primary"
					endIcon={<SendIcon />}
					type="submit"
				>
					Send
				</Button>
			</Box>
		</>
	)
}