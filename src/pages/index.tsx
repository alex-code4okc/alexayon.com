import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HeadTag } from "@/components/HeadTag";
import { InitialsAvatar } from "@/components/InitialsAvatar";
import { indigo } from "@mui/material/colors";
import { Header } from "@/components/Header";
import AppBar from "@/components/AppBar";
import { Avatar, Box, Divider, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
	//#43cea2 → #185a9d
	//className={styles.main}
	const router = useRouter();
	const navigateToContactPage = () => {
		router.push('/contact')
	}
	return (
		<>
			<HeadTag title="Home" description="Home Page" />
			<Box sx={{

			}}>
				<Avatar src="AvatarPhoto.jpg" sx={{height: 250, width: 250}}/>
				<Typography
					component="h1"
					className="text-2xl font-bold mb-8"
				>
					Hello there 👋🏼! My name is Alex Ayon, nice to meet you 😄 <Divider/> I&apos;m a senior software engineer currently living in Oklahoma City.
				</Typography>
				<Typography
					component="p"
					className="mb-4 leading-normal"
					sx={{
						mb: 4,
					}}
				>
					Software development is my passion. I use tools such as Node.js, JavasScript, TypesScript, Python, C# and more to develop performant and maintainable software. I currently work for <Link underline="none" href="https://www.getbison.com/">Bison</Link>.
				</Typography>
				<Typography
					component="p"
					className="mb-4 leading-normal"
					sx={{
						mb: 4,
					}}
				>
					If you&apos;d like to get in touch with me, leave me a <Link underline="none" onClick={() => navigateToContactPage()}>message</Link>!
				</Typography>
			</Box>
		</>
	);
}
