import Head from "next/head";
import FormComponent from "../src/FormComponent.jsx";
import styles from "../styles/Home.module.css";
import { Toolbar } from "@material-ui/core";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>

			<main className={styles.main}>
        <Toolbar>
          <h1>SENDING FORM </h1>
        </Toolbar>
				<FormComponent />
			</main>
		</div>
	);
}
