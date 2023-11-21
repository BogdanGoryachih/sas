import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Layout from "../page/Layout";
import Contact from "../page/Contact";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Home />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: (
						<About />
				),
			},
			{
				path: 'contact',
				element: (
					<Contact/>
				),
			},
			
		],
	},
])
