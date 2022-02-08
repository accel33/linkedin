import Head from "next/head";
import Image from "next/image";
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
			Linkedin Clone
		</div>
	);
}
