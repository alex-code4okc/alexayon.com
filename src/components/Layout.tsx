import { AppProps } from "next/app";
import { Header } from "./Header";
import AppBar from "@/components/AppBar";

export default function Layout({children}: any) {
	return (
		<div className="flex flex-col max-w-4xl mx-auto min-h-screen font-sans text-gray-800">
			<AppBar />
			<main className="flex-1 w-full px-4 py-8 mx-auto md:px-8 md:py-8">{children}</main>
		</div>
	)
}