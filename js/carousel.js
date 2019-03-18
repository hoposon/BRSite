let images = {
	coll_0: [
		'../images/collection-2019-1/azamat-zhanisov-1339165-unsplash.jpg',
		'../images/collection-2019-1/farhad-khodayari-1348907-unsplash.jpg',
		'../images/collection-2019-1/journey-man-1348080-unsplash.jpg',
		'../images/collection-2019-1/lawrson-pinson-1357054-unsplash.jpg',
		'../images/collection-2019-1/ali-pazani-1412360-unsplash.jpg',
		'../images/collection-2019-1/jonathan-borba-1433863-unsplash.jpg',
		'../images/collection-2019-1/scafeli-media-1323731-unsplash.jpg',
		'../images/collection-2019-1/ali-pazani-1412361-unsplash.jpg',
		'../images/collection-2019-1/motoki-tonn-1417187-unsplash.jpg',
	],
	coll_1: [
		'../images/collection-2018-1/azamat-zhanisov-1339165-unsplash.jpg',
		'../images/collection-2018-1/farhad-khodayari-1348907-unsplash.jpg',
		'../images/collection-2018-1/journey-man-1348080-unsplash.jpg',
		'../images/collection-2018-1/lawrson-pinson-1357054-unsplash.jpg',
		'../images/collection-2018-1/ali-pazani-1412360-unsplash.jpg',
		'../images/collection-2018-1/jonathan-borba-1433863-unsplash.jpg',
		'../images/collection-2018-1/scafeli-media-1323731-unsplash.jpg',
		'../images/collection-2018-1/ali-pazani-1412361-unsplash.jpg',
		'../images/collection-2018-1/motoki-tonn-1417187-unsplash.jpg',
	],
	coll_2: [
		'../images/collection-2017-1/azamat-zhanisov-1339165-unsplash.jpg',
		'../images/collection-2017-1/farhad-khodayari-1348907-unsplash.jpg',
		'../images/collection-2017-1/journey-man-1348080-unsplash.jpg',
		'../images/collection-2017-1/lawrson-pinson-1357054-unsplash.jpg',
		'../images/collection-2017-1/ali-pazani-1412360-unsplash.jpg',
		'../images/collection-2017-1/jonathan-borba-1433863-unsplash.jpg',
		'../images/collection-2017-1/scafeli-media-1323731-unsplash.jpg',
		'../images/collection-2017-1/ali-pazani-1412361-unsplash.jpg',
		'../images/collection-2017-1/motoki-tonn-1417187-unsplash.jpg',
	]
}

const picNumforPixels = {
	'0': {
		limits: [0,576],
		picNum: 1
	},
	'576': {
		limits: [577,768],
		picNum: 1
	},
	'768': {
		limits: [769,992],
		picNum: 2
	},
	'992': {
		limits: [993, 1199],
		picNum: 2
	},
	'1200': {
		limits: [1200, 20000],
		picNum: 3
	},
	picNum: 1
}

let createCarousels = function() {

	let carousels = document.getElementsByClassName('carousel');
	let intViewportWidth = window.innerWidth;

	for (let key in picNumforPixels) {
		if (intViewportWidth >= picNumforPixels[key].limits[0] && intViewportWidth < picNumforPixels[key].limits[1]) {
			picNumforPixels.picNum = picNumforPixels[key].picNum;
			break;
		}
	}

	for (let i = 0; i < carousels.length; i++) {
		let li = [];
		let rows_num = Math.ceil(images['coll_'+i].length/picNumforPixels.picNum);
		let items = []
		let rows = [];

		let carInd = carousels[i].childNodes[1];
		carInd.innerHTML = '';
		let carInner = carousels[i].childNodes[3];
		carInner.innerHTML = '';
		for (let k = 0; k < picNumforPixels.picNum; k++) {
			li[k] = document.createElement('li');
			li[k].setAttribute('data-target', '#'+carousels[i].id);
			li[k].setAttribute('data-slide-to', k);
			if (k === 0) li[k].setAttribute('class', 'active');
			carInd.appendChild(li[k]);
		}

		let picCounter = 0;
		for (let j = 0; j < rows_num; j++) {
			items[j] = document.createElement('div')
			items[j].setAttribute('class', j===0 ? 'carousel-item active' : 'carousel-item');
			
			rows[j] = document.createElement('div');
			rows[j].setAttribute('class', 'row');
			let cols = [];
			let imgs = [];
			let cols_num = 12/picNumforPixels.picNum;
			for (let k = 0; k < picNumforPixels.picNum; k++) {
				
				cols[k] = document.createElement('div');
				cols[k].setAttribute('class', 'col-'+cols_num);
				imgs[k] = document.createElement('img');
				imgs[k].setAttribute('class', 'd-block w-100 img-fluid');
				imgs[k].setAttribute('src', images['coll_'+i][picCounter]);
				cols[k].appendChild(imgs[k]);
				rows[j].appendChild(cols[k])
				picCounter++;
			}
			items[j].appendChild(rows[j]);
			carInner.appendChild(items[j]);
		}
	}
}
