function El(name, value="", attributes=null) {
	if (typeof value !== "string" && !Array.isArray(value)) {
		[value, attributes] = [attributes, value];
		if (value === null) {value = ""};
	}
	const el = document.createElement(name);
	for (const attr in attributes) {
		if (attr === "style") {
			for (const stl in attributes[attr]) {
				el.style[stl] = attributes[attr][stl];
			}
			continue;
		}
		el.setAttribute(attr, attributes[attr]);
	}
	if (Array.isArray(value)) {
		value.forEach(el.appendChild.bind(el));
	} else {
		el.innerHTML = value;
	}
	return el;
}

const [getMouseX, getMouseY] = (()=>{
	let x = null;
	let y = null;
	document.addEventListener('mousemove', onMouseUpdate, false);
	document.addEventListener('mouseenter', onMouseUpdate, false);
	function onMouseUpdate(e) {
		x = e.clientX;
		y = e.clientY;
	}

	function getMouseX() {
		return x;
	}

	function getMouseY() {
		return y;
	}
	return [getMouseX, getMouseY]
})()

const $ =(st, doc=document)=> doc.querySelector(st)
const $$ =(st, doc=document)=> doc.querySelectorAll(st)

