import "../css/app.css";

export const metadata = {
	title: "React App",
	description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Bootstrap */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
				/>
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
