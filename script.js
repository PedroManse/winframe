function newTextPad() {
	const root = El("textarea", {
		cols: "30", rows: "20",
		style: {
			resize: "none",
			"min-width": "140px",
			border: 0,
			margin: 0,
			"border-radius": 0,
		}
	});
	const newWin = makeWindow(root, {top: "40px", left: "50px", title: "test window"})
	document.body.appendChild(newWin);
}

window.onload = ()=>{
	$("#new-text-pad").addEventListener("click", newTextPad)
}

