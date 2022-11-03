import { Html, Head, Main, NextScript } from "next/document";

export default function DefaultDocument() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<title>Bolão Online</title>
			</Head>
			<body className="bg-gray-900 bg-hero-pattern bg-no-repeat bg-cover">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
