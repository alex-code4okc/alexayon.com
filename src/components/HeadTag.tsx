import Head from 'next/head'

interface HeadTagProps {
	title: string;
	description: string;
}

export function HeadTag(props: HeadTagProps) {
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/Aa.ico" />
		</Head>
	)
}