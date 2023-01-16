import "./scss/style.scss";
import SVGReact from "./assets/react.svg";

export default function App() {
    return (
		<main className="app">
			<div className="app__react">
				<a href="https://reactjs.org/"
				target="_blank"
				rel="external noopener noreferrer">
					<SVGReact />
				</a>
			</div>

			<h1 className="app__title"
			translate="no">Léo React App</h1>

			<a className="btn"
			href="https://github.com/Leo-Henrique/leo-react-app"
			target="_blank">
				Access repository
			</a>
		</main>
	);
}