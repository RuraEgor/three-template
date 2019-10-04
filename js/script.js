let camera, pos, controls, scene, renderer, geometry, material;
let time = 0;

function init() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	
	renderer = new THREE.WebGLRenderer();
	
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerWidth);
	
	let container = document.getElementById('container');
	container.appendChild(renderer.domElement);
	
	camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.001, 1000
	);
	camera.position.set(0, 0, 100);
	
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.minPolarAngle = Math.PI * 1 / 4;
	// controls.maxPolarAngle = Math.PI * 3 / 4;
	controls.minDistance = 10;
	controls.maxDistance = 1250;
	// controls.autoRotate = true;
	// controls.autoRotateSpeed = -1.0;
	controls.update();
	
	resize();
	
	
	let cub_g = new THREE.CubeGeometry(10, 10, 10);
	// let cub_t = new THREE.MeshBasicMaterial({color: 0x7fffb7});
	let cub_t = new THREE.MeshNormalMaterial();
	let cube = new THREE.Mesh(cub_g, cub_t);
	scene.add(cube);
	
	const lightAmb = new THREE.AmbientLight(0xffffff);
	scene.add(lightAmb);
}




// function loadImages(paths, whenLoaded) {
// 	var imgs = [];
// 	paths.forEach(function (path) {
// 			var img = new Image;
// 		}
// 	);
//
// }


function resize() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	renderer.setSize(w, h);
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
}


function animate() {
	time++;
	controls.update();
	requestAnimationFrame(animate);
	render();
}

function render() {
	renderer.render(scene, camera);
}

window.onresize = function () {
	resize()
}

init();
animate();