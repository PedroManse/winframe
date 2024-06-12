function _initWinFrame(win) {
	const controller = new AbortController();
	const title = $(".titlebar .title", win).innerText;
	$(".titlebar .drag", win).addEventListener("mousedown", (e)=>{
		$$(".win").forEach(wn=>{
			wn.style["z-index"]=1;
		})
		win.style["z-index"]=2;
		e.preventDefault();
		const controller = new AbortController();
		const followMouse = ()=>{
			win.style.left = getMouseX()-(title.length*9.5)-32+"px"
			win.style.top = getMouseY()-8+"px"
		}
		document.addEventListener("mousemove", followMouse, {signal: controller.signal})
		document.addEventListener("mouseup", ()=>controller.abort(), {once: true});
	}, {signal: controller.signal});
	$(".titlebar .close", win).addEventListener("click", ()=>{
		controller.abort();
		win.remove();
	}, {once: true})
}

// https://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript

//TODO i _could_ wrap this in a class and add all sorts of functions to ease
//interop., like close(), onResize(), onClose(), onMove(), onFocus(), onUnfocus() etc
//but, idk, whatever
function makeWindow(root, options) {
	const w = El("div", {
		class: "win",
		style: {
			...options
		}
	}, [
		El("div", {class: "titlebar"}, [
			El("span", {class: "drag"}, [
			El("p", {class: "title"}, options.title??"Window"),
			]),
			El("button", {class: "close"}),
			El("p", " ", {class:"resize"})
		]),
		El("div", {class: "content"}, [
			root
		])
	])

	_initWinFrame(w);
	return w
}

