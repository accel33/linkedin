import { signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="flex">
			<Head>
				<title>LinkedIn</title>
				<meta name="description" content="Generado por Next" />
				<link rel="stylesheet" href="/favicon.ico" />
			</Head>
			<Header />
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded"
				onClick={signOut}
			>
				Sign out
			</button>
		</div>
	);
}
