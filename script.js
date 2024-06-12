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
	const top = ~~(Math.random()*100)+"px";
	const left = ~~(Math.random()*100)+"px";
	const newWin = makeWindow(root, {top, left, title: "test window"})
	document.body.appendChild(newWin);
}

window.onload = ()=>{
	$("#new-text-pad").addEventListener("click", newTextPad)
}

