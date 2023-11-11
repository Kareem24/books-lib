import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<ul className="flex gap-4 p-4">
			<li className="capitalize">
				<Link to={"/"}>home</Link>
			</li>
			<li className="capitalize">
				<Link to={"/categories"}>categories</Link>
			</li>
		</ul>
	);
};

export default Navbar;
