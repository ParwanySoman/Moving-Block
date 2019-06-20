const downKeys = new Set()
let x = 0;
let y = 0;

let square = document.getElementById('square');

document.addEventListener('keydown', event => downKeys.add(event.key));
document.addEventListener('keyup', event => downKeys.delete(event.key));

function update()
{
	function isDown(key) {return downKeys.has(key)}

	const s = square.style

	if (isDown('ArrowDown'))
	{
		s.top = ++y + 'px';
	}

	if (isDown('ArrowUp'))
	{
		s.top = --y + 'px';
	}

	if (isDown('ArrowRight'))
	{
		s.top = ++x + 'px';
	}

	if (isDown('ArrowLeft'))
	{
		s.top = --x + 'px';
	}
	window.requestAnimationFrame(update); // vertelt dat je de animatie wilt uitvoeren
}


window.requestAnimationFrame(update);// nogmaals want je wilt het allemaal uitvoeren