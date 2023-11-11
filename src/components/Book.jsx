import React from "react";

function Book({ book }) {
	const { title, author } = book;
	return (
		<li className="flex gap-4 list-none my-4">
			<p>
				<span>{title}</span> by <span>{author}</span>
			</p>
			<button className="border-2 border-black px-2 py-1">delete</button>
		</li>
	);
}

export default Book;
