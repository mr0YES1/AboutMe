(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Задание_3_HTML5 Canvas_atlas_1", frames: [[0,0,1356,1146],[0,1148,1668,684]]},
		{name:"Задание_3_HTML5 Canvas_atlas_2", frames: [[0,861,321,321],[836,488,576,437],[1414,488,375,611],[0,0,1844,486],[0,488,834,371]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.колесо2 = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крылоб = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.крылом = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.кусты = function() {
	this.initialize(img.кусты);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8945,2073);


(lib.л1 = function() {
	this.initialize(img.л1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2610,1181);


(lib.л2 = function() {
	this.initialize(img.л2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2265,1516);


(lib.л3 = function() {
	this.initialize(img.л3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3599,1720);


(lib.л4 = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.л5 = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.л6pngкопия = function() {
	this.initialize(img.л6pngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2095,610);


(lib.л7pngкопия = function() {
	this.initialize(img.л7pngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2416,1769);


(lib.машинакорпус = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.птица = function() {
	this.initialize(ss["Задание_3_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.фон2 = function() {
	this.initialize(img.фон2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8151,5257);


(lib.фон3 = function() {
	this.initialize(img.фон3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8096,7496);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.машина = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.машинакорпус();
	this.instance.setTransform(0,0,0.6386,0.6386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.машина, new cjs.Rectangle(0,0,1065.2,436.8), null);


(lib.Символ28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л1();
	this.instance.setTransform(0,0,0.2418,0.2418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,631.2,285.6), null);


(lib.Символ27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л2();
	this.instance.setTransform(0,0,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,496,332), null);


(lib.Символ26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л3();
	this.instance.setTransform(0,0,0.1791,0.1791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,644.7,308.1), null);


(lib.Символ25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л4();
	this.instance.setTransform(0,0,0.2251,0.2251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,415,109.4), null);


(lib.Символ24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л5();
	this.instance.setTransform(0,0,0.2285,0.2285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,309.9,261.9), null);


(lib.Символ23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л6pngкопия();
	this.instance.setTransform(0,0,0.2468,0.2468);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,517.1,150.6), null);


(lib.Символ22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л7pngкопия();
	this.instance.setTransform(0,0,0.2242,0.2242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,541.6,396.6), null);


(lib.Символ20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колесо2();
	this.instance.setTransform(0,0,0.6386,0.6386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,205,205), null);


(lib.Символ19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.кусты();
	this.instance.setTransform(0,0,0.2418,0.2418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,2163,501.3), null);


(lib.Символ18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.фон3();
	this.instance.setTransform(0,0,0.2418,0.2418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,1957.7,1812.6), null);


(lib.Символ16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крылом();
	this.instance.setTransform(0,127.55,0.3927,0.3927,-59.9989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,281.5,247.5), null);


(lib.Символ14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крылоб();
	this.instance.setTransform(0,199.5,0.3923,0.3923,-61.9915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,257.5,280), null);


(lib.л7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ22();
	this.instance.setTransform(13.55,151.35,1,1,0,0,0,1.5,153.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:270.8,regY:198.3,rotation:-0.3532,x:283.1,y:194.25},0).wait(1).to({rotation:-0.7064,x:283.4,y:192.55},0).wait(1).to({rotation:-1.0596,x:283.6,y:190.9},0).wait(1).to({rotation:-1.4128,x:283.85,y:189.25},0).wait(1).to({rotation:-1.7659,x:284.05,y:187.55},0).wait(1).to({rotation:-2.1191,x:284.3,y:185.9},0).wait(1).to({rotation:-2.4723,x:284.5,y:184.2},0).wait(1).to({rotation:-2.8255,x:284.65,y:182.55},0).wait(1).to({rotation:-3.1787,x:284.9,y:180.9},0).wait(1).to({rotation:-3.5319,x:285.05,y:179.15},0).wait(1).to({rotation:-3.8851,x:285.25,y:177.55},0).wait(1).to({rotation:-4.2383,x:285.35,y:175.85},0).wait(1).to({rotation:-4.5915,x:285.55,y:174.15},0).wait(1).to({rotation:-4.9447,x:285.7,y:172.5},0).wait(1).to({rotation:-5.2978,x:285.85,y:170.8},0).wait(1).to({rotation:-5.651,x:286,y:169.15},0).wait(1).to({rotation:-6.0042,x:286.05,y:167.45},0).wait(1).to({rotation:-6.3574,x:286.15,y:165.8},0).wait(1).to({rotation:-6.7106,x:286.2,y:164.1},0).wait(1).to({rotation:-7.0638,x:286.3,y:162.45},0).wait(1).to({rotation:-7.417,x:286.4,y:160.75},0).wait(1).to({rotation:-7.7702,y:159.1},0).wait(1).to({rotation:-8.1234,x:286.45,y:157.4},0).wait(1).to({rotation:-8.4765,x:286.5,y:155.75},0).wait(1).to({rotation:-8.1375,x:286.4,y:157.3},0).wait(1).to({rotation:-7.7984,y:158.9},0).wait(1).to({rotation:-7.4594,x:286.35,y:160.5},0).wait(1).to({rotation:-7.1203,x:286.3,y:162.15},0).wait(1).to({rotation:-6.7812,x:286.2,y:163.8},0).wait(1).to({rotation:-6.4422,x:286.15,y:165.35},0).wait(1).to({rotation:-6.1031,x:286.1,y:166.95},0).wait(1).to({rotation:-5.7641,x:286,y:168.6},0).wait(1).to({rotation:-5.425,x:285.9,y:170.2},0).wait(1).to({rotation:-5.0859,x:285.8,y:171.8},0).wait(1).to({rotation:-4.7469,x:285.6,y:173.45},0).wait(1).to({rotation:-4.4078,x:285.45,y:175.05},0).wait(1).to({rotation:-4.0687,x:285.25,y:176.65},0).wait(1).to({rotation:-3.7297,x:285.15,y:178.3},0).wait(1).to({rotation:-3.3906,x:285,y:179.9},0).wait(1).to({rotation:-3.0516,x:284.8,y:181.45},0).wait(1).to({rotation:-2.7125,x:284.65,y:183.1},0).wait(1).to({rotation:-2.3734,x:284.4,y:184.7},0).wait(1).to({rotation:-2.0344,x:284.25,y:186.3},0).wait(1).to({rotation:-1.6953,x:284,y:187.9},0).wait(1).to({rotation:-1.3562,x:283.8,y:189.5},0).wait(1).to({rotation:-1.0172,x:283.55,y:191.1},0).wait(1).to({rotation:-0.6781,x:283.35,y:192.7},0).wait(1).to({rotation:-0.3391,x:283.05,y:194.3},0).wait(1).to({rotation:0,x:282.85,y:195.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-80.2,594.1,474.4);


(lib.л6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:258.6,regY:75.3,rotation:-0.1451,x:258.8,y:74.65},0).wait(1).to({rotation:-0.2901,x:259,y:74},0).wait(1).to({rotation:-0.4352,x:259.15,y:73.35},0).wait(1).to({rotation:-0.5802,x:259.35,y:72.7},0).wait(1).to({rotation:-0.7253,x:259.55,y:72.05},0).wait(1).to({rotation:-0.8703,x:259.7,y:71.35},0).wait(1).to({rotation:-1.0154,x:259.9,y:70.7},0).wait(1).to({rotation:-1.1605,x:260.05,y:70.05},0).wait(1).to({rotation:-1.3055,x:260.25,y:69.4},0).wait(1).to({rotation:-1.4506,x:260.4,y:68.7},0).wait(1).to({rotation:-1.5956,x:260.6,y:68.05},0).wait(1).to({rotation:-1.7407,x:260.8,y:67.4},0).wait(1).to({rotation:-1.8858,x:260.95,y:66.75},0).wait(1).to({rotation:-2.0308,x:261.1,y:66.1},0).wait(1).to({rotation:-2.1759,x:261.25,y:65.45},0).wait(1).to({rotation:-2.3209,x:261.45,y:64.8},0).wait(1).to({rotation:-2.466,x:261.6,y:64.15},0).wait(1).to({rotation:-2.611,x:261.8,y:63.4},0).wait(1).to({rotation:-2.7561,x:261.9,y:62.75},0).wait(1).to({rotation:-2.9012,x:262.05,y:62.1},0).wait(1).to({rotation:-3.0462,x:262.25,y:61.45},0).wait(1).to({rotation:-3.1913,x:262.4,y:60.8},0).wait(1).to({rotation:-3.3363,x:262.55,y:60.1},0).wait(1).to({rotation:-3.4814,x:262.65,y:59.45},0).wait(1).to({rotation:-3.3421,x:262.55,y:60.1},0).wait(1).to({rotation:-3.2029,x:262.4,y:60.75},0).wait(1).to({rotation:-3.0636,x:262.25,y:61.4},0).wait(1).to({rotation:-2.9244,x:262.1,y:62},0).wait(1).to({rotation:-2.7851,x:261.95,y:62.65},0).wait(1).to({rotation:-2.6459,x:261.8,y:63.25},0).wait(1).to({rotation:-2.5066,x:261.65,y:63.95},0).wait(1).to({rotation:-2.3674,x:261.5,y:64.55},0).wait(1).to({rotation:-2.2281,x:261.35,y:65.2},0).wait(1).to({rotation:-2.0888,x:261.2,y:65.85},0).wait(1).to({rotation:-1.9496,x:261,y:66.45},0).wait(1).to({rotation:-1.8103,x:260.85,y:67.1},0).wait(1).to({rotation:-1.6711,x:260.7,y:67.7},0).wait(1).to({rotation:-1.5318,x:260.5,y:68.35},0).wait(1).to({rotation:-1.3926,x:260.35,y:69},0).wait(1).to({rotation:-1.2533,x:260.2,y:69.65},0).wait(1).to({rotation:-1.114,x:260,y:70.25},0).wait(1).to({rotation:-0.9748,x:259.85,y:70.9},0).wait(1).to({rotation:-0.8355,x:259.65,y:71.55},0).wait(1).to({rotation:-0.6963,x:259.5,y:72.15},0).wait(1).to({rotation:-0.557,x:259.35,y:72.8},0).wait(1).to({rotation:-0.4178,x:259.15,y:73.4},0).wait(1).to({rotation:-0.2785,x:258.95,y:74.05},0).wait(1).to({rotation:-0.1393,x:258.8,y:74.65},0).wait(1).to({rotation:0,x:258.6,y:75.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.4,525.3,182);


(lib.л5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ24();
	this.instance.setTransform(303.9,108.4,1,1,0,0,0,303.9,108.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:154.9,regY:130.9,scaleY:0.9963,rotation:0.1745,x:154.8,y:130.35},0).wait(1).to({scaleY:0.9927,rotation:0.349,x:154.75,y:129.85},0).wait(1).to({scaleY:0.989,rotation:0.5235,x:154.65,y:129.3},0).wait(1).to({scaleY:0.9853,rotation:0.698,y:128.8},0).wait(1).to({scaleY:0.9816,rotation:0.8725,x:154.6,y:128.25},0).wait(1).to({scaleY:0.978,rotation:1.047,x:154.45,y:127.75},0).wait(1).to({scaleY:0.9743,rotation:1.2215,y:127.15},0).wait(1).to({scaleY:0.9706,rotation:1.396,x:154.4,y:126.6},0).wait(1).to({scaleY:0.9669,rotation:1.5705,x:154.35,y:126.05},0).wait(1).to({scaleY:0.9632,rotation:1.7451,x:154.3,y:125.55},0).wait(1).to({scaleY:0.9596,rotation:1.9196,x:154.25,y:125.05},0).wait(1).to({scaleY:0.9559,rotation:2.0941,x:154.2,y:124.45},0).wait(1).to({scaleY:0.9522,rotation:2.2686,x:154.15,y:123.95},0).wait(1).to({scaleY:0.9485,rotation:2.4431,x:154.1,y:123.4},0).wait(1).to({scaleY:0.9448,rotation:2.6176,x:154.05,y:122.85},0).wait(1).to({scaleY:0.9412,rotation:2.7921,x:154,y:122.3},0).wait(1).to({scaleY:0.9375,rotation:2.9666,y:121.75},0).wait(1).to({scaleY:0.9338,rotation:3.1411,x:153.95,y:121.25},0).wait(1).to({scaleY:0.9302,rotation:3.3156,x:153.9,y:120.7},0).wait(1).to({scaleY:0.9265,rotation:3.4901,x:153.85,y:120.2},0).wait(1).to({scaleY:0.9228,rotation:3.6646,x:153.9,y:119.65},0).wait(1).to({scaleY:0.9191,rotation:3.8391,x:153.85,y:119.05},0).wait(1).to({scaleY:0.9155,rotation:4.0136,x:153.75,y:118.55},0).wait(1).to({scaleY:0.9118,rotation:4.1881,x:153.8,y:118},0).wait(1).to({scaleY:0.9153,rotation:4.0206,y:118.5},0).wait(1).to({scaleY:0.9188,rotation:3.8531,y:119.05},0).wait(1).to({scaleY:0.9223,rotation:3.6856,x:153.9,y:119.55},0).wait(1).to({scaleY:0.9259,rotation:3.518,x:153.85,y:120.05},0).wait(1).to({scaleY:0.9294,rotation:3.3505,x:153.95,y:120.6},0).wait(1).to({scaleY:0.933,rotation:3.183,x:153.9,y:121.15},0).wait(1).to({scaleY:0.9365,rotation:3.0155,x:154,y:121.6},0).wait(1).to({scaleY:0.94,rotation:2.8479,y:122.15},0).wait(1).to({scaleY:0.9435,rotation:2.6804,x:154.1,y:122.65},0).wait(1).to({scaleY:0.9471,rotation:2.5129,x:154.05,y:123.2},0).wait(1).to({scaleY:0.9506,rotation:2.3454,x:154.1,y:123.75},0).wait(1).to({scaleY:0.9541,rotation:2.1778,x:154.15,y:124.25},0).wait(1).to({scaleY:0.9577,rotation:2.0103,x:154.2,y:124.75},0).wait(1).to({scaleY:0.9612,rotation:1.8428,x:154.25,y:125.25},0).wait(1).to({scaleY:0.9647,rotation:1.6753,x:154.3,y:125.75},0).wait(1).to({scaleY:0.9683,rotation:1.5077,x:154.35,y:126.25},0).wait(1).to({scaleY:0.9718,rotation:1.3402,x:154.4,y:126.75},0).wait(1).to({scaleY:0.9753,rotation:1.1727,x:154.45,y:127.3},0).wait(1).to({scaleY:0.9788,rotation:1.0052,x:154.5,y:127.8},0).wait(1).to({scaleY:0.9824,rotation:0.8376,x:154.55,y:128.35},0).wait(1).to({scaleY:0.9859,rotation:0.6701,x:154.65,y:128.85},0).wait(1).to({scaleY:0.9894,rotation:0.5026,x:154.7,y:129.35},0).wait(1).to({scaleY:0.993,rotation:0.3351,x:154.75,y:129.85},0).wait(1).to({scaleY:0.9965,rotation:0.1675,x:154.8,y:130.4},0).wait(1).to({scaleY:1,rotation:0,x:154.9,y:130.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-12.3,326.5,274.2);


(lib.л4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ25();
	this.instance.setTransform(42.9,0,1,1,0,0,0,42.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:207.5,regY:54.7,rotation:-0.1856,x:207.7,y:54.15},0).wait(1).to({rotation:-0.3712,x:207.85,y:53.6},0).wait(1).to({rotation:-0.5568,x:208.05,y:53.1},0).wait(1).to({rotation:-0.7424,x:208.2,y:52.55},0).wait(1).to({rotation:-0.9279,x:208.35,y:52},0).wait(1).to({rotation:-1.1135,x:208.5,y:51.45},0).wait(1).to({rotation:-1.2991,x:208.7,y:50.95},0).wait(1).to({rotation:-1.4847,x:208.85,y:50.4},0).wait(1).to({rotation:-1.6703,x:209,y:49.9},0).wait(1).to({rotation:-1.8559,x:209.15,y:49.3},0).wait(1).to({rotation:-2.0415,x:209.3,y:48.75},0).wait(1).to({rotation:-2.2271,x:209.5,y:48.25},0).wait(1).to({rotation:-2.4126,x:209.6,y:47.7},0).wait(1).to({rotation:-2.5982,x:209.8,y:47.15},0).wait(1).to({rotation:-2.7838,x:209.95,y:46.65},0).wait(1).to({rotation:-2.9694,x:210.1,y:46.1},0).wait(1).to({rotation:-3.155,x:210.25,y:45.55},0).wait(1).to({rotation:-3.3406,x:210.4,y:44.95},0).wait(1).to({rotation:-3.5262,x:210.5,y:44.45},0).wait(1).to({rotation:-3.7118,x:210.65,y:43.9},0).wait(1).to({rotation:-3.8974,x:210.75,y:43.35},0).wait(1).to({rotation:-4.0829,x:210.95,y:42.85},0).wait(1).to({rotation:-4.2685,x:211.05,y:42.25},0).wait(1).to({rotation:-4.4541,x:211.2,y:41.75},0).wait(1).to({rotation:-4.276,x:211.1,y:42.25},0).wait(1).to({rotation:-4.0978,x:210.95,y:42.75},0).wait(1).to({rotation:-3.9196,x:210.85,y:43.25},0).wait(1).to({rotation:-3.7415,x:210.65,y:43.8},0).wait(1).to({rotation:-3.5633,x:210.55,y:44.35},0).wait(1).to({rotation:-3.3851,x:210.45,y:44.85},0).wait(1).to({rotation:-3.207,x:210.25,y:45.35},0).wait(1).to({rotation:-3.0288,x:210.15,y:45.9},0).wait(1).to({rotation:-2.8506,x:210,y:46.45},0).wait(1).to({rotation:-2.6725,x:209.8,y:47},0).wait(1).to({rotation:-2.4943,x:209.7,y:47.45},0).wait(1).to({rotation:-2.3161,x:209.55,y:47.95},0).wait(1).to({rotation:-2.138,x:209.4,y:48.5},0).wait(1).to({rotation:-1.9598,x:209.25,y:49},0).wait(1).to({rotation:-1.7816,x:209.1,y:49.5},0).wait(1).to({rotation:-1.6035,x:208.95,y:50.1},0).wait(1).to({rotation:-1.4253,x:208.8,y:50.6},0).wait(1).to({rotation:-1.2472,x:208.65,y:51.1},0).wait(1).to({rotation:-1.069,x:208.45,y:51.65},0).wait(1).to({rotation:-0.8908,x:208.3,y:52.15},0).wait(1).to({rotation:-0.7127,x:208.2,y:52.6},0).wait(1).to({rotation:-0.5345,x:208,y:53.15},0).wait(1).to({rotation:-0.3563,x:207.85,y:53.65},0).wait(1).to({rotation:-0.1782,x:207.65,y:54.15},0).wait(1).to({rotation:0,x:207.5,y:54.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28.9,422.4,141.3);


(lib.л3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ26();
	this.instance.setTransform(554.8,104.4,1,1,0,0,0,554.8,104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:322.4,regY:154.1,scaleY:0.9977,rotation:0.0923,x:322.3,y:153.6},0).wait(1).to({scaleY:0.9954,rotation:0.1846,x:322.2,y:153.15},0).wait(1).to({scaleY:0.9931,rotation:0.2769,x:322.15,y:152.65},0).wait(1).to({scaleY:0.9908,rotation:0.3692,x:322.05,y:152.15},0).wait(1).to({scaleY:0.9885,rotation:0.4615,x:321.95,y:151.65},0).wait(1).to({scaleY:0.9861,rotation:0.5538,y:151.15},0).wait(1).to({scaleY:0.9838,rotation:0.6461,x:321.85,y:150.7},0).wait(1).to({scaleY:0.9815,rotation:0.7384,x:321.75,y:150.2},0).wait(1).to({scaleY:0.9792,rotation:0.8307,x:321.65,y:149.7},0).wait(1).to({scaleY:0.9769,rotation:0.923,y:149.2},0).wait(1).to({scaleY:0.9746,rotation:1.0153,x:321.55,y:148.7},0).wait(1).to({scaleY:0.9723,rotation:1.1076,x:321.5,y:148.25},0).wait(1).to({scaleY:0.97,rotation:1.1999,x:321.4,y:147.75},0).wait(1).to({scaleY:0.9677,rotation:1.2922,x:321.35,y:147.25},0).wait(1).to({scaleY:0.9654,rotation:1.3845,x:321.25,y:146.75},0).wait(1).to({scaleY:0.963,rotation:1.4768,y:146.25},0).wait(1).to({scaleY:0.9607,rotation:1.5691,x:321.2,y:145.8},0).wait(1).to({scaleY:0.9584,rotation:1.6614,x:321.05,y:145.35},0).wait(1).to({scaleY:0.9561,rotation:1.7537,y:144.8},0).wait(1).to({scaleY:0.9538,rotation:1.846,x:320.95,y:144.35},0).wait(1).to({scaleY:0.9515,rotation:1.9383,x:320.9,y:143.85},0).wait(1).to({scaleY:0.9492,rotation:2.0306,x:320.85,y:143.3},0).wait(1).to({scaleY:0.9469,rotation:2.1229,x:320.8,y:142.85},0).wait(1).to({scaleY:0.9445,rotation:2.2152,x:320.75,y:142.35},0).wait(1).to({scaleY:0.9468,rotation:2.1265,y:142.8},0).wait(1).to({scaleY:0.949,rotation:2.0379,x:320.85,y:143.3},0).wait(1).to({scaleY:0.9512,rotation:1.9493,y:143.75},0).wait(1).to({scaleY:0.9534,rotation:1.8607,x:321,y:144.25},0).wait(1).to({scaleY:0.9556,rotation:1.7721,x:321.05,y:144.7},0).wait(1).to({scaleY:0.9579,rotation:1.6835,y:145.15},0).wait(1).to({scaleY:0.9601,rotation:1.5949,x:321.15,y:145.65},0).wait(1).to({scaleY:0.9623,rotation:1.5063,x:321.2,y:146.1},0).wait(1).to({scaleY:0.9645,rotation:1.4177,x:321.25,y:146.6},0).wait(1).to({scaleY:0.9667,rotation:1.3291,x:321.3,y:147.1},0).wait(1).to({scaleY:0.969,rotation:1.2405,x:321.35,y:147.6},0).wait(1).to({scaleY:0.9712,rotation:1.1519,x:321.5,y:148},0).wait(1).to({scaleY:0.9734,rotation:1.0633,y:148.5},0).wait(1).to({scaleY:0.9756,rotation:0.9747,x:321.6,y:148.95},0).wait(1).to({scaleY:0.9778,rotation:0.8861,y:149.4},0).wait(1).to({scaleY:0.98,rotation:0.7975,x:321.7,y:149.9},0).wait(1).to({scaleY:0.9823,rotation:0.7088,x:321.8,y:150.35},0).wait(1).to({scaleY:0.9845,rotation:0.6202,x:321.85,y:150.85},0).wait(1).to({scaleY:0.9867,rotation:0.5316,x:321.95,y:151.3},0).wait(1).to({scaleY:0.9889,rotation:0.443,x:322,y:151.8},0).wait(1).to({scaleY:0.9912,rotation:0.3544,x:322.1,y:152.25},0).wait(1).to({scaleY:0.9934,rotation:0.2658,x:322.15,y:152.7},0).wait(1).to({scaleY:0.9956,rotation:0.1772,x:322.25,y:153.15},0).wait(1).to({scaleY:0.9978,rotation:0.0886,x:322.3,y:153.65},0).wait(1).to({scaleY:1,rotation:0,x:322.4,y:154.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-15.5,655.5,323.6);


(lib.л2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ27();
	this.instance.setTransform(33.6,166,1,1,0,0,0,33.6,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:248,scaleY:1.0001,rotation:-0.1142,x:248.05,y:165.55},0).wait(1).to({scaleY:1.0002,rotation:-0.2284,x:248,y:165.1},0).wait(1).to({scaleY:1.0003,rotation:-0.3427,x:248.05,y:164.7},0).wait(1).to({rotation:-0.4569,x:248,y:164.25},0).wait(1).to({scaleY:1.0004,rotation:-0.5711,y:163.85},0).wait(1).to({scaleY:1.0005,rotation:-0.6853,x:248.05,y:163.4},0).wait(1).to({rotation:-0.7996,x:247.95,y:162.95},0).wait(1).to({scaleY:1.0006,rotation:-0.9138,x:248,y:162.6},0).wait(1).to({scaleY:1.0007,rotation:-1.028,y:162.15},0).wait(1).to({scaleY:1.0008,rotation:-1.1422,x:247.95,y:161.7},0).wait(1).to({rotation:-1.2565,x:248,y:161.25},0).wait(1).to({scaleY:1.0009,rotation:-1.3707,x:247.95,y:160.85},0).wait(1).to({scaleY:1.001,rotation:-1.4849,y:160.4},0).wait(1).to({scaleY:1.0011,rotation:-1.5991,y:160},0).wait(1).to({rotation:-1.7133,x:247.9,y:159.55},0).wait(1).to({scaleY:1.0012,rotation:-1.8276,y:159.15},0).wait(1).to({scaleY:1.0013,rotation:-1.9418,y:158.7},0).wait(1).to({scaleY:1.0014,rotation:-2.056,y:158.25},0).wait(1).to({rotation:-2.1702,x:247.85,y:157.85},0).wait(1).to({scaleY:1.0015,rotation:-2.2845,x:247.9,y:157.4},0).wait(1).to({scaleY:1.0016,rotation:-2.3987,x:247.85,y:156.95},0).wait(1).to({scaleY:1.0017,rotation:-2.5129,x:247.8,y:156.6},0).wait(1).to({rotation:-2.6271,y:156.15},0).wait(1).to({scaleY:1.0018,rotation:-2.7413,x:247.75,y:155.75},0).wait(1).to({scaleY:1.0017,rotation:-2.6317,x:247.85,y:156.1},0).wait(1).to({rotation:-2.522,x:247.8,y:156.55},0).wait(1).to({scaleY:1.0016,rotation:-2.4124,x:247.85,y:156.95},0).wait(1).to({scaleY:1.0015,rotation:-2.3027,y:157.35},0).wait(1).to({scaleY:1.0014,rotation:-2.1931,y:157.75},0).wait(1).to({rotation:-2.0834,x:247.9,y:158.2},0).wait(1).to({scaleY:1.0013,rotation:-1.9738,x:247.85,y:158.55},0).wait(1).to({scaleY:1.0012,rotation:-1.8641,x:247.9,y:159},0).wait(1).to({scaleY:1.0011,rotation:-1.7545,x:247.95,y:159.4},0).wait(1).to({rotation:-1.6448,x:247.9,y:159.85},0).wait(1).to({scaleY:1.001,rotation:-1.5352,x:247.95,y:160.2},0).wait(1).to({rotation:-1.4255,y:160.65},0).wait(1).to({scaleY:1.0009,rotation:-1.3158,y:161.05},0).wait(1).to({scaleY:1.0008,rotation:-1.2062,x:248,y:161.5},0).wait(1).to({scaleY:1.0007,rotation:-1.0965,y:161.9},0).wait(1).to({scaleY:1.0006,rotation:-0.9869,x:247.95,y:162.3},0).wait(1).to({rotation:-0.8772,x:248,y:162.65},0).wait(1).to({scaleY:1.0005,rotation:-0.7676,y:163.1},0).wait(1).to({scaleY:1.0004,rotation:-0.6579,y:163.5},0).wait(1).to({rotation:-0.5483,x:248.05,y:163.95},0).wait(1).to({scaleY:1.0003,rotation:-0.4386,x:248,y:164.35},0).wait(1).to({scaleY:1.0002,rotation:-0.329,y:164.8},0).wait(1).to({rotation:-0.2193,x:248.05,y:165.15},0).wait(1).to({scaleY:1.0001,rotation:-0.1097,x:248,y:165.6},0).wait(1).to({scaleY:1,rotation:0,y:166},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-22.1,511.29999999999995,355.8);


(lib.л1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ28();
	this.instance.setTransform(44.8,201.5,1,1,0,0,0,44.8,201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:315.6,regY:142.8,scaleY:1.0002,rotation:-0.1022,x:315.5,y:142.3},0).wait(1).to({scaleY:1.0005,rotation:-0.2043,x:315.4,y:141.8},0).wait(1).to({scaleY:1.0007,rotation:-0.3065,x:315.3,y:141.3},0).wait(1).to({scaleY:1.0009,rotation:-0.4086,x:315.2,y:140.75},0).wait(1).to({scaleY:1.0011,rotation:-0.5108,x:315.1,y:140.3},0).wait(1).to({scaleY:1.0014,rotation:-0.6129,x:315,y:139.8},0).wait(1).to({scaleY:1.0016,rotation:-0.7151,x:314.85,y:139.3},0).wait(1).to({scaleY:1.0018,rotation:-0.8172,x:314.75,y:138.85},0).wait(1).to({scaleY:1.002,rotation:-0.9194,x:314.65,y:138.3},0).wait(1).to({scaleY:1.0022,rotation:-1.0215,x:314.55,y:137.85},0).wait(1).to({scaleY:1.0025,rotation:-1.1237,x:314.4,y:137.3},0).wait(1).to({scaleY:1.0027,rotation:-1.2258,x:314.3,y:136.85},0).wait(1).to({scaleY:1.0029,rotation:-1.328,x:314.15,y:136.35},0).wait(1).to({scaleY:1.0031,rotation:-1.4302,x:314.05,y:135.9},0).wait(1).to({scaleY:1.0034,rotation:-1.5323,x:314,y:135.3},0).wait(1).to({scaleY:1.0036,rotation:-1.6345,x:313.85,y:134.85},0).wait(1).to({scaleY:1.0038,rotation:-1.7366,x:313.7,y:134.35},0).wait(1).to({scaleY:1.004,rotation:-1.8388,x:313.6,y:133.9},0).wait(1).to({scaleY:1.0042,rotation:-1.9409,x:313.45,y:133.35},0).wait(1).to({scaleY:1.0045,rotation:-2.0431,x:313.35,y:132.9},0).wait(1).to({scaleY:1.0047,rotation:-2.1452,x:313.25,y:132.4},0).wait(1).to({scaleY:1.0049,rotation:-2.2474,x:313.1,y:131.95},0).wait(1).to({scaleY:1.0051,rotation:-2.3495,x:313,y:131.4},0).wait(1).to({scaleY:1.0054,rotation:-2.4517,x:312.85,y:130.95},0).wait(1).to({scaleY:1.0052,rotation:-2.3536,x:313,y:131.4},0).wait(1).to({scaleY:1.0049,rotation:-2.2556,x:313.1,y:131.9},0).wait(1).to({scaleY:1.0047,rotation:-2.1575,x:313.2,y:132.3},0).wait(1).to({scaleY:1.0045,rotation:-2.0594,x:313.35,y:132.8},0).wait(1).to({scaleY:1.0043,rotation:-1.9614,x:313.45,y:133.3},0).wait(1).to({scaleY:1.0041,rotation:-1.8633,x:313.55,y:133.75},0).wait(1).to({scaleY:1.0038,rotation:-1.7652,x:313.65,y:134.25},0).wait(1).to({scaleY:1.0036,rotation:-1.6671,x:313.75,y:134.7},0).wait(1).to({scaleY:1.0034,rotation:-1.5691,x:313.9,y:135.2},0).wait(1).to({scaleY:1.0032,rotation:-1.471,x:314.05,y:135.65},0).wait(1).to({scaleY:1.003,rotation:-1.3729,x:314.15,y:136.15},0).wait(1).to({scaleY:1.0028,rotation:-1.2749,x:314.25,y:136.6},0).wait(1).to({scaleY:1.0026,rotation:-1.1768,x:314.4,y:137.05},0).wait(1).to({scaleY:1.0024,rotation:-1.0787,x:314.5,y:137.55},0).wait(1).to({scaleY:1.0021,rotation:-0.9807,x:314.6,y:138.05},0).wait(1).to({scaleY:1.0019,rotation:-0.8826,x:314.65,y:138.5},0).wait(1).to({scaleY:1.0017,rotation:-0.7845,x:314.75,y:139},0).wait(1).to({scaleY:1.0015,rotation:-0.6865,x:314.9,y:139.4},0).wait(1).to({scaleY:1.0013,rotation:-0.5884,x:315,y:139.9},0).wait(1).to({scaleY:1.0011,rotation:-0.4903,x:315.1,y:140.4},0).wait(1).to({scaleY:1.0009,rotation:-0.3923,x:315.25,y:140.85},0).wait(1).to({scaleY:1.0007,rotation:-0.2942,x:315.35,y:141.4},0).wait(1).to({scaleY:1.0004,rotation:-0.1961,x:315.45,y:141.8},0).wait(1).to({scaleY:1.0002,rotation:-0.0981,x:315.55,y:142.3},0).wait(1).to({scaleY:1,rotation:0,x:315.6,y:142.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-25.9,642.8000000000001,313.79999999999995);


(lib.л = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.л1_1();
	this.instance.setTransform(315.6,238.8,1,1,0,0,0,315.6,142.8);

	this.instance_1 = new lib.л2_1();
	this.instance_1.setTransform(673,166,1,1,0,0,0,248,166);

	this.instance_2 = new lib.л3_1();
	this.instance_2.setTransform(915.4,194.1,1,1,0,0,0,322.4,154.1);

	this.instance_3 = new lib.л4_1();
	this.instance_3.setTransform(1177.5,176.7,1,1,0,0,0,207.5,54.7);

	this.instance_4 = new lib.л5_1();
	this.instance_4.setTransform(1526.9,193.9,1,1,0,0,0,154.9,130.9);

	this.instance_5 = new lib.л6();
	this.instance_5.setTransform(1784.6,210.2,1,1,0,0,0,261.6,75.2);

	this.instance_6 = new lib.л7();
	this.instance_6.setTransform(2271.8,215.3,1,1,0,0,0,270.8,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.л, new cjs.Rectangle(0,0,2554.7,411.2), null);


(lib.колесо2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ20();
	this.instance.setTransform(102.5,102.5,1,1,0,0,0,102.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-170.0015},9).to({rotation:-350.0005},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-42.3,289.5,289.5);


(lib.Символ21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колесо2_1();
	this.instance.setTransform(778.5,102.5,1,1,0,0,0,102.5,102.5);

	this.instance_1 = new lib.колесо2_1();
	this.instance_1.setTransform(102.5,102.5,1,1,0,0,0,102.5,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,881,205), null);


(lib.Символ15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ16();
	this.instance.setTransform(151.45,137.8,0.8356,1,0,0,0,151.4,137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:140.7,regY:123.8,scaleX:0.8927,scaleY:1.0061,x:142.35,y:122.9},0).wait(1).to({scaleX:0.9499,scaleY:1.0122,x:142.25,y:121.95},0).wait(1).to({scaleX:1.007,scaleY:1.0183,x:142.15,y:121},0).wait(1).to({scaleX:1.0642,scaleY:1.0244,x:142.1,y:120.1},0).wait(1).to({scaleX:1.1213,scaleY:1.0306,x:141.95,y:119.15},0).wait(1).to({scaleX:1.1785,scaleY:1.0367,x:141.85,y:118.2},0).wait(1).to({scaleX:1.2357,scaleY:1.0428,x:141.75,y:117.3},0).wait(1).to({scaleX:1.2928,scaleY:1.0489,x:141.65,y:116.35},0).wait(1).to({scaleX:1.35,scaleY:1.055,x:141.55,y:115.4},0).wait(1).to({scaleX:1.2928,scaleY:1.0489,x:141.65,y:116.35},0).wait(1).to({scaleX:1.2357,scaleY:1.0428,x:141.75,y:117.3},0).wait(1).to({scaleX:1.1785,scaleY:1.0367,x:141.85,y:118.2},0).wait(1).to({scaleX:1.1213,scaleY:1.0306,x:141.95,y:119.15},0).wait(1).to({scaleX:1.0642,scaleY:1.0244,x:142.1,y:120.1},0).wait(1).to({scaleX:1.007,scaleY:1.0183,x:142.15,y:121},0).wait(1).to({scaleX:0.9499,scaleY:1.0122,x:142.25,y:121.95},0).wait(1).to({scaleX:0.8927,scaleY:1.0061,x:142.35,y:122.9},0).wait(1).to({scaleX:0.8356,scaleY:1,x:142.45,y:123.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-15.2,379.90000000000003,262.7);


(lib.Символ13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ14();
	this.instance.setTransform(67.8,84.2,1.0633,1,0,0,0,67.1,84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:128.7,regY:140,scaleX:1.0049,scaleY:1.007,rotation:2.0491,x:127.6,y:142.6},0).wait(1).to({scaleX:0.9464,scaleY:1.014,rotation:4.0982,x:121.9,y:144.85},0).wait(1).to({scaleX:0.888,scaleY:1.021,rotation:6.1473,x:116.1,y:146.7},0).wait(1).to({scaleX:0.8296,scaleY:1.028,rotation:8.1964,x:110.2,y:148.25},0).wait(1).to({scaleX:0.7712,scaleY:1.035,rotation:10.2454,x:104.25,y:149.5},0).wait(1).to({scaleX:0.7127,scaleY:1.0419,rotation:12.2945,x:98.3,y:150.4},0).wait(1).to({scaleX:0.6543,scaleY:1.049,rotation:14.3436,x:92.3,y:150.9},0).wait(1).to({scaleX:0.5959,scaleY:1.0559,rotation:16.3927,x:86.35,y:151.1},0).wait(1).to({scaleX:0.5375,scaleY:1.0629,rotation:18.4418,x:80.4,y:150.95},0).wait(1).to({scaleX:0.5959,scaleY:1.0559,rotation:16.3927,x:86.35,y:151.1},0).wait(1).to({scaleX:0.6543,scaleY:1.049,rotation:14.3436,x:92.3,y:150.9},0).wait(1).to({scaleX:0.7127,scaleY:1.0419,rotation:12.2945,x:98.3,y:150.4},0).wait(1).to({scaleX:0.7712,scaleY:1.035,rotation:10.2454,x:104.25,y:149.5},0).wait(1).to({scaleX:0.8296,scaleY:1.028,rotation:8.1964,x:110.2,y:148.25},0).wait(1).to({scaleX:0.888,scaleY:1.021,rotation:6.1473,x:116.1,y:146.7},0).wait(1).to({scaleX:0.9464,scaleY:1.014,rotation:4.0982,x:121.9,y:144.85},0).wait(1).to({scaleX:1.0049,scaleY:1.007,rotation:2.0491,x:127.6,y:142.6},0).wait(1).to({scaleX:1.0633,scaleY:1,rotation:0,x:133.3,y:140},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,0,275.40000000000003,296.9);


(lib.колеса = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ21();
	this.instance.setTransform(440.5,102.5,1,1,0,0,0,440.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.9913,y:100.65},0).wait(1).to({scaleY:0.9827,y:98.75},0).wait(1).to({scaleY:0.974,y:96.9},0).wait(1).to({scaleY:0.9653,y:95},0).wait(1).to({scaleY:0.9566,y:93.1},0).wait(1).to({scaleY:0.948,y:91.2},0).wait(1).to({scaleY:0.9393,y:89.35},0).wait(1).to({scaleY:0.9306,y:87.45},0).wait(1).to({scaleY:0.922,y:85.55},0).wait(1).to({scaleY:0.9306,y:87.45},0).wait(1).to({scaleY:0.9393,y:89.35},0).wait(1).to({scaleY:0.948,y:91.2},0).wait(1).to({scaleY:0.9566,y:93.1},0).wait(1).to({scaleY:0.9653,y:95},0).wait(1).to({scaleY:0.974,y:96.9},0).wait(1).to({scaleY:0.9827,y:98.75},0).wait(1).to({scaleY:0.9913,y:100.65},0).wait(1).to({scaleY:1,y:102.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.9,881,213.9);


(lib.Символ17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ13();
	this.instance.setTransform(132.7,143.6,1,1,0,0,0,63,89.2);

	this.instance_1 = new lib.птица();
	this.instance_1.setTransform(0,286,0.3784,0.3784,-64.983);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(145.7,147,1,1,0,0,0,140.7,123.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0.1,339.9,345.29999999999995), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// крыло_б_png
	this.instance = new lib.Символ17();
	this.instance.setTransform(261.05,101.7,1,1,0,0,0,163.6,172.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(97.5,-70.9,339.9,345.29999999999995), null);


(lib.машинауком = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.колеса();
	this.instance.setTransform(486.5,389.5,1,1,0,0,0,440.5,102.5);

	this.instance_1 = new lib.машина();
	this.instance_1.setTransform(532.5,218.4,1,1,0,0,0,532.5,218.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.машинауком, new cjs.Rectangle(0,0,1065.2,492), null);


// stage content:
(lib.Задание_3_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_5
	this.instance = new lib.Символ17();
	this.instance.setTransform(2048.5,176.05,0.7457,0.7457,0,-120.1365,59.8635,161.8,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:148.2,regY:184.5,scaleX:0.7603,scaleY:0.7603,skewX:-117.4404,skewY:62.5596,x:2029.25,y:203.65},0).wait(1).to({scaleX:0.7749,scaleY:0.7749,skewX:-114.7427,skewY:65.2573,x:2004.85,y:244.3},0).wait(1).to({scaleX:0.7894,scaleY:0.7894,skewX:-112.0451,skewY:67.9549,x:1980,y:284.8},0).wait(1).to({scaleX:0.804,scaleY:0.804,skewX:-109.3474,skewY:70.6526,x:1955,y:325.15},0).wait(1).to({scaleX:0.8186,scaleY:0.8186,skewX:-106.6497,skewY:73.3503,x:1929.9,y:365.45},0).wait(1).to({scaleX:0.8332,scaleY:0.8332,skewX:-103.9521,skewY:76.0479,x:1904.7,y:405.7},0).wait(1).to({scaleX:0.8478,scaleY:0.8478,skewX:-101.2544,skewY:78.7456,x:1879.35,y:446},0).wait(1).to({scaleX:0.8623,scaleY:0.8623,skewX:-98.5568,skewY:81.4432,x:1853.95,y:486.3},0).wait(1).to({scaleX:0.8769,scaleY:0.8769,skewX:-95.8591,skewY:84.1409,x:1828.6,y:526.55},0).wait(1).to({scaleX:0.8915,scaleY:0.8915,skewX:-93.1615,skewY:86.8385,x:1803.1,y:566.85},0).wait(1).to({scaleX:0.9061,scaleY:0.9061,skewX:-90.4638,skewY:89.5362,x:1777.6,y:607.1},0).wait(1).to({scaleX:0.9206,scaleY:0.9206,skewX:-87.7662,skewY:92.2338,x:1751.95,y:647.5},0).wait(1).to({scaleX:0.9352,scaleY:0.9352,skewX:-85.0685,skewY:94.9315,x:1725.35,y:687.15},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,skewX:-82.3709,skewY:97.6291,x:1696.25,y:724.95},0).wait(1).to({scaleX:0.9644,scaleY:0.9644,skewX:-79.6732,skewY:100.3268,x:1666.3,y:762.2},0).wait(1).to({scaleX:0.9789,scaleY:0.9789,skewX:-76.9756,skewY:103.0244,x:1635.4,y:798.75},0).wait(1).to({scaleX:0.9935,scaleY:0.9935,skewX:-74.2779,skewY:105.7221,x:1603.6,y:834.5},0).wait(1).to({scaleX:1.0081,scaleY:1.0081,skewX:-71.5803,skewY:108.4197,x:1570.5,y:869},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,skewX:-68.8826,skewY:111.1174,x:1535.35,y:901.5},0).wait(1).to({scaleX:1.0372,scaleY:1.0372,skewX:-66.185,skewY:113.815,x:1495.9,y:928.15},0).wait(1).to({scaleX:1.0518,scaleY:1.0518,skewX:-63.4873,skewY:116.5127,x:1452.95,y:948.75},0).wait(1).to({scaleX:1.0664,scaleY:1.0664,skewX:-60.7897,skewY:119.2103,x:1408.65,y:966},0).wait(1).to({scaleX:1.081,scaleY:1.081,skewX:-58.092,skewY:121.908,x:1361.95,y:974.25},0).wait(1).to({scaleX:1.0955,scaleY:1.0955,skewX:-55.3944,skewY:124.6056,x:1314.6,y:976.7},0).wait(1).to({scaleX:1.1101,scaleY:1.1101,skewX:-52.6967,skewY:127.3033,x:1267.3,y:974.35},0).wait(1).to({scaleX:1.1247,scaleY:1.1247,skewX:-49.9991,skewY:130.0009,x:1222.35,y:960.45},0).wait(1).to({scaleX:1.1392,scaleY:1.1392,skewX:-47.3014,skewY:132.6986,x:1179.1,y:941.85},0).wait(1).to({scaleX:1.1538,scaleY:1.1538,skewX:-44.6038,skewY:135.3962,x:1136.7,y:921.2},0).wait(1).to({scaleX:1.1684,scaleY:1.1684,skewX:-41.9061,skewY:138.0939,x:1095.2,y:898.95},0).wait(1).to({scaleX:1.183,scaleY:1.183,skewX:-39.2085,skewY:140.7915,x:1054.5,y:875.05},0).wait(1).to({scaleX:1.1976,scaleY:1.1976,skewX:-36.5108,skewY:143.4892,x:1014.85,y:849.7},0).wait(1).to({skewX:-37.3552,skewY:142.6448,x:976.3,y:821.25},0).wait(1).to({skewX:-38.1995,skewY:141.8005,x:938.95,y:791},0).wait(1).to({skewX:-39.0439,skewY:140.9561,x:901.2,y:761.25},0).wait(1).to({skewX:-39.8883,skewY:140.1117,x:862.4,y:733},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,skewX:-40.7326,skewY:139.2674,x:822.55,y:706.1},0).wait(1).to({scaleX:1.1976,scaleY:1.1976,skewX:-41.577,skewY:138.423,x:781.95,y:680.65},0).wait(1).to({skewX:-42.4214,skewY:137.5786,x:740.5,y:656.5},0).wait(1).to({skewX:-43.2657,skewY:136.7343,x:698.2,y:633.7},0).wait(1).to({skewX:-44.1101,skewY:135.8899,x:655.3,y:612.2},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,skewX:-44.9545,skewY:135.0455,x:611.8,y:591.85},0).wait(1).to({scaleX:1.1976,scaleY:1.1976,skewX:-45.7988,skewY:134.2012,x:567.75,y:572.85},0).wait(1).to({skewX:-46.6432,skewY:133.3568,x:523.25,y:554.95},0).wait(1).to({skewX:-47.4876,skewY:132.5124,x:478.25,y:538.15},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,skewX:-48.3319,skewY:131.6681,x:432.9,y:522.6},0).wait(1).to({scaleX:1.1976,scaleY:1.1976,skewX:-49.1763,skewY:130.8237,x:387.25,y:508.1},0).wait(1).to({skewX:-50.0207,skewY:129.9793,x:341.15,y:494.6},0).wait(1).to({skewX:-50.8651,skewY:129.1349,x:294.9,y:482.2},0).wait(1).to({skewX:-51.7094,skewY:128.2906,x:248.25,y:470.85},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,skewX:-52.5538,skewY:127.4462,x:201.4,y:460.5},0).wait(1).to({scaleX:1.1976,scaleY:1.1976,skewX:-53.3982,skewY:126.6018,x:154.4,y:451.25},0).wait(1).to({skewX:-54.2425,skewY:125.7575,x:107.15,y:442.9},0).wait(1).to({skewX:-55.0869,skewY:124.9131,x:59.75,y:435.75},0).wait(1).to({skewX:-55.9313,skewY:124.0687,x:12.2,y:429.6},0).wait(1).to({skewX:-56.7756,skewY:123.2244,x:-35.45,y:424.7},0).wait(1).to({skewX:-57.62,skewY:122.38,x:-83.3,y:421.2},0).wait(1).to({skewX:-58.4644,skewY:121.5356,x:-131.2,y:419.2},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,skewX:-59.3087,skewY:120.6913,x:-179.15,y:419.55},0).wait(1).to({scaleX:1.1976,scaleY:1.1976,skewX:-60.1531,skewY:119.8469,x:-226.55,y:425.5},0).wait(20).to({_off:true},1).wait(60));

	// Символ_2
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-430,1046.7,0.4463,0.4463,0,0,0,221.4,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:245.7,regY:113.5,scaleX:0.4622,scaleY:0.4622,rotation:2.6296,x:-402.15,y:1005.1},0).wait(1).to({scaleX:0.4781,scaleY:0.4781,rotation:5.0452,x:-383.45,y:981.15},0).wait(1).to({scaleX:0.494,scaleY:0.494,rotation:7.2314,x:-363.1,y:956.9},0).wait(1).to({scaleX:0.5099,scaleY:0.5099,rotation:9.2229,x:-341.15,y:932.55},0).wait(1).to({scaleX:0.5259,scaleY:0.5259,rotation:11.0494,x:-317.55,y:907.95},0).wait(1).to({scaleX:0.5418,scaleY:0.5418,rotation:12.7356,x:-292.45,y:883.25},0).wait(1).to({scaleX:0.5577,scaleY:0.5577,rotation:14.3024,x:-266,y:858.5},0).wait(1).to({scaleX:0.5736,scaleY:0.5736,rotation:15.7677,x:-238.05,y:833.75},0).wait(1).to({scaleX:0.5895,scaleY:0.5895,rotation:17.1466,x:-208.9,y:809.05},0).wait(1).to({scaleX:0.6055,scaleY:0.6055,rotation:18.4521,x:-178.35,y:784.4},0).wait(1).to({scaleX:0.6214,scaleY:0.6214,rotation:19.6956,x:-146.6,y:759.9},0).wait(1).to({scaleX:0.6373,scaleY:0.6373,rotation:20.8869,x:-113.75,y:735.55},0).wait(1).to({scaleX:0.6532,scaleY:0.6532,rotation:22.0346,x:-79.8,y:711.4},0).wait(1).to({scaleX:0.6691,scaleY:0.6691,rotation:23.1465,x:-44.8,y:687.55},0).wait(1).to({scaleX:0.685,scaleY:0.685,rotation:24.2295,x:-8.75,y:664},0).wait(1).to({scaleX:0.701,scaleY:0.701,rotation:25.2898,x:28.1,y:640.9},0).wait(1).to({scaleX:0.7169,scaleY:0.7169,rotation:26.3331,x:65.85,y:618.15},0).wait(1).to({scaleX:0.7328,scaleY:0.7328,rotation:27.3648,x:104.4,y:595.85},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,rotation:28.3898,x:143.7,y:574.05},0).wait(1).to({scaleX:0.7646,scaleY:0.7646,rotation:29.413,x:183.65,y:552.85},0).wait(1).to({scaleX:0.7805,scaleY:0.7805,rotation:30.439,x:224.2,y:532.25},0).wait(1).to({scaleX:0.7965,scaleY:0.7965,rotation:31.4722,x:265.35,y:512.25},0).wait(1).to({scaleX:0.8124,scaleY:0.8124,rotation:32.517,x:307,y:493.05},0).wait(1).to({scaleX:0.8283,scaleY:0.8283,rotation:33.578,x:349.05,y:474.5},0).wait(1).to({scaleX:0.8442,scaleY:0.8442,rotation:34.6596,x:391.5,y:456.8},0).wait(1).to({scaleX:0.8601,scaleY:0.8601,rotation:35.7664,x:434.3,y:439.95},0).wait(1).to({scaleX:0.8761,scaleY:0.8761,rotation:36.9031,x:477.25,y:424.05},0).wait(1).to({scaleX:0.892,scaleY:0.892,rotation:38.0748,x:520.45,y:409.1},0).wait(1).to({scaleX:0.9079,scaleY:0.9079,rotation:39.2868,x:563.8,y:395.1},0).wait(1).to({scaleX:0.9238,scaleY:0.9238,rotation:40.5444,x:607.25,y:382.25},0).wait(1).to({scaleX:0.9397,scaleY:0.9397,rotation:41.8536,x:650.65,y:370.4},0).wait(1).to({scaleX:0.9556,scaleY:0.9556,rotation:43.2207,x:693.95,y:359.8},0).wait(1).to({scaleX:0.9716,scaleY:0.9716,rotation:44.6523,x:737.2,y:350.35},0).wait(1).to({scaleX:0.9875,scaleY:0.9875,rotation:46.1558,x:780.2,y:342.25},0).wait(1).to({scaleX:1.0034,scaleY:1.0034,rotation:47.7389,x:823,y:335.45},0).wait(1).to({scaleX:1.0193,scaleY:1.0193,rotation:49.4098,x:865.5,y:330.05},0).wait(1).to({scaleX:1.0352,scaleY:1.0352,rotation:51.1774,x:907.55,y:326.05},0).wait(1).to({scaleX:1.0512,scaleY:1.0512,rotation:53.0511,x:949.2,y:323.65},0).wait(1).to({scaleX:1.0671,scaleY:1.0671,rotation:55.041,x:990.35,y:322.75},0).wait(1).to({scaleX:1.0528,scaleY:1.0528,rotation:58.189,x:1027.1,y:325.1},0).wait(1).to({scaleX:1.0385,scaleY:1.0385,rotation:60.5549,x:1063.55,y:328.25},0).wait(1).to({scaleX:1.0242,scaleY:1.0242,rotation:62.8726,x:1099.7,y:332.75},0).wait(1).to({scaleX:1.0099,scaleY:1.0099,rotation:65.1346,x:1135.5,y:338.7},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,rotation:67.3343,x:1171.05,y:345.9},0).wait(1).to({scaleX:0.9813,scaleY:0.9813,rotation:69.4665,x:1206.25,y:354.35},0).wait(1).to({scaleX:0.9671,scaleY:0.9671,rotation:71.5268,x:1241.25,y:364.05},0).wait(1).to({scaleX:0.9527,scaleY:0.9527,rotation:73.5119,x:1275.95,y:374.9},0).wait(1).to({scaleX:0.9385,scaleY:0.9385,rotation:75.4196,x:1310.4,y:386.85},0).wait(1).to({scaleX:0.9242,scaleY:0.9242,rotation:77.2484,x:1344.6,y:399.9},0).wait(1).to({scaleX:0.9099,scaleY:0.9099,rotation:78.9976,x:1378.6,y:414},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,rotation:80.6675,x:1412.35,y:429.15},0).wait(1).to({scaleX:0.8813,scaleY:0.8813,rotation:82.2585,x:1445.85,y:445.2},0).wait(1).to({scaleX:0.867,scaleY:0.867,rotation:83.7718,x:1479.15,y:462.2},0).wait(1).to({scaleX:0.8527,scaleY:0.8527,rotation:85.2088,x:1512.2,y:480.15},0).wait(1).to({scaleX:0.8384,scaleY:0.8384,rotation:86.5714,x:1545,y:498.85},0).wait(1).to({scaleX:0.8241,scaleY:0.8241,rotation:87.8614,x:1577.7,y:518.4},0).wait(1).to({scaleX:0.8098,scaleY:0.8098,rotation:89.0811,x:1610.15,y:538.7},0).wait(1).to({scaleX:0.7956,scaleY:0.7956,rotation:90.2327,x:1642.35,y:559.75},0).wait(1).to({scaleX:0.7813,scaleY:0.7813,rotation:91.3183,x:1674.4,y:581.5},0).wait(1).to({scaleX:0.767,scaleY:0.767,rotation:92.3403,x:1706.2,y:603.95},0).wait(1).to({scaleX:0.7527,scaleY:0.7527,rotation:93.3009,x:1737.85,y:626.95},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,rotation:94.2021,x:1769.25,y:650.6},0).wait(1).to({scaleX:0.7241,scaleY:0.7241,rotation:95.0461,x:1800.5,y:674.7},0).wait(1).to({scaleX:0.7098,scaleY:0.7098,rotation:95.8348,x:1831.5,y:699.4},0).wait(1).to({scaleX:0.6955,scaleY:0.6955,rotation:96.57,x:1862.35,y:724.45},0).wait(1).to({scaleX:0.6812,scaleY:0.6812,rotation:97.2534,x:1892.9,y:750.05},0).wait(1).to({scaleX:0.6669,scaleY:0.6669,rotation:97.8867,x:1923.3,y:775.9},0).wait(1).to({scaleX:0.6527,scaleY:0.6527,rotation:98.4712,x:1953.6,y:802.2},0).wait(1).to({scaleX:0.6384,scaleY:0.6384,rotation:99.0083,x:1983.55,y:828.75},0).wait(1).to({scaleX:0.6241,scaleY:0.6241,rotation:99.4989,x:2013.35,y:855.6},0).wait(1).to({scaleX:0.6098,scaleY:0.6098,rotation:99.9443,x:2043,y:882.6},0).wait(1).to({scaleX:0.5955,scaleY:0.5955,rotation:100.345,x:2072.35,y:909.8},0).wait(1).to({scaleX:0.5812,scaleY:0.5812,rotation:100.702,x:2101.55,y:937.15},0).wait(1).to({scaleX:0.5669,scaleY:0.5669,rotation:101.015,x:2130.5,y:964.55},0).wait(1).to({scaleX:0.5526,scaleY:0.5526,rotation:101.286,x:2159.3,y:992.1},0).wait(1).to({scaleX:0.5383,scaleY:0.5383,rotation:101.513,x:2187.8,y:1019.55},0).wait(1).to({scaleX:0.524,scaleY:0.524,rotation:101.698,x:2216.15,y:1047},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,rotation:101.839,x:2244.3,y:1074.4},0).wait(1).to({scaleX:0.4954,scaleY:0.4954,rotation:101.937,x:2272.2,y:1101.65},0).to({_off:true},1).wait(60));

	// Слой_4
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(1011.5,1346.6,1,1,0,0,0,1081.5,250.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({y:1297},0).wait(1).to({y:1247.4},0).wait(1).to({y:1197.8},0).wait(1).to({y:1148.2},0).wait(1).to({y:1098.6},0).wait(1).to({y:1049},0).wait(1).to({y:999.4},0).wait(1).to({y:949.8},0).wait(1).to({y:900.2},0).wait(1).to({y:850.6},0).wait(61));

	// колесо_2
	this.instance_3 = new lib.машинауком();
	this.instance_3.setTransform(2857.3,1096.5,1,1,0,0,0,1051.9,501.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).wait(1).to({regX:532.6,regY:254.1,rotation:0.0746,x:2294.35,y:845.55},0).wait(1).to({rotation:0.1492,x:2250.8,y:842},0).wait(1).to({rotation:0.2238,x:2207.2,y:838.4},0).wait(1).to({rotation:0.2984,x:2163.65,y:834.85},0).wait(1).to({rotation:0.373,x:2120.05,y:831.3},0).wait(1).to({rotation:0.4476,x:2076.4,y:827.75},0).wait(1).to({rotation:0.5222,x:2032.85,y:824.2},0).wait(1).to({rotation:0.5968,x:1989.2,y:820.65},0).wait(1).to({rotation:0.6714,x:1945.65,y:817.15},0).wait(1).to({rotation:0.746,x:1902.1,y:813.6},0).wait(1).to({rotation:0.8205,x:1858.5,y:809.95},0).wait(1).to({rotation:0.8951,x:1814.95,y:806.4},0).wait(1).to({rotation:0.9697,x:1771.3,y:802.9},0).wait(1).to({rotation:1.0443,x:1727.7,y:799.35},0).wait(1).to({rotation:1.1189,x:1684.15,y:795.8},0).wait(1).to({rotation:1.1935,x:1640.6,y:792.25},0).wait(1).to({rotation:1.2681,x:1597,y:788.75},0).wait(1).to({rotation:1.3427,x:1553.4,y:785.15},0).wait(1).to({rotation:1.4173,x:1509.85,y:781.55},0).wait(1).to({rotation:1.4919,x:1466.25,y:778.05},0).wait(1).to({rotation:1.5665,x:1422.7,y:774.5},0).wait(1).to({rotation:1.6411,x:1379.15,y:771},0).wait(1).to({rotation:1.7157,x:1335.55,y:767.45},0).wait(1).to({rotation:1.7903,x:1291.95,y:763.95},0).wait(1).to({rotation:1.8649,x:1248.4,y:760.35},0).wait(1).to({rotation:1.9395,x:1204.8,y:756.8},0).wait(1).to({rotation:2.0141,x:1161.2,y:753.25},0).wait(1).to({rotation:2.0887,x:1117.7,y:749.75},0).wait(1).to({rotation:2.1633,x:1074.05,y:746.15},0).wait(1).to({rotation:2.2379,x:1030.55,y:742.65},0).wait(1).to({rotation:2.3687,x:977.2,y:736},0).wait(1).to({rotation:2.4995,x:923.9,y:729.35},0).wait(1).to({rotation:2.6304,x:870.6,y:722.75},0).wait(1).to({rotation:2.7612,x:817.25,y:716.05},0).wait(1).to({rotation:2.8921,x:764,y:709.4},0).wait(1).to({rotation:3.0229,x:710.65,y:702.8},0).wait(1).to({rotation:3.1538,x:657.35,y:696.15},0).wait(1).to({rotation:3.2846,x:604.05,y:689.55},0).wait(1).to({rotation:3.4155,x:550.75,y:682.9},0).wait(1).to({rotation:3.5463,x:497.6,y:676.25},0).wait(1).to({rotation:3.6772,x:444.25,y:669.65},0).wait(1).to({rotation:3.808,x:390.95,y:663},0).wait(1).to({rotation:3.9389,x:337.7,y:656.4},0).wait(1).to({rotation:4.0697,x:284.35,y:649.75},0).wait(1).to({rotation:4.2006,x:231.1,y:643.1},0).wait(1).to({rotation:4.3314,x:177.8,y:636.45},0).wait(1).to({rotation:4.4623,x:124.6,y:629.9},0).wait(1).to({rotation:4.5931,x:71.3,y:623.3},0).wait(1).to({rotation:4.724,x:18,y:616.65},0).wait(1).to({rotation:4.8548,x:-35.25,y:610},0).wait(1).to({rotation:4.9857,x:-88.5,y:603.45},0).wait(1).to({rotation:5.1165,x:-141.8,y:596.8},0).wait(1).to({rotation:5.2473,x:-195.05,y:590.2},0).wait(1).to({rotation:5.3782,x:-248.25,y:583.6},0).wait(1).to({rotation:5.509,x:-301.55,y:577},0).wait(1).to({rotation:5.6399,x:-354.8,y:570.35},0).wait(1).to({rotation:5.7707,x:-408.05,y:563.75},0).wait(1).to({rotation:5.9016,x:-461.3,y:557.15},0).wait(1).to({rotation:6.0324,x:-514.5,y:550.55},0).wait(1).to({rotation:6.1633,x:-567.8,y:544},0).wait(1));

	// л1
	this.instance_4 = new lib.л();
	this.instance_4.setTransform(962.3,245.8,1,1,0,0,0,1271.3,206.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:1288,regY:173.9,x:979,y:212.9},0).wait(69).to({y:164.1},0).wait(1).to({y:115.25},0).wait(1).to({y:66.45},0).wait(1).to({y:17.6},0).wait(1).to({y:-31.2},0).wait(1).to({y:-80.05},0).wait(1).to({y:-128.85},0).wait(1).to({y:-177.7},0).wait(1).to({y:-226.5},0).wait(1).to({y:-275.35},0).wait(61));

	// Слой_3
	this.instance_5 = new lib.Символ18();
	this.instance_5.setTransform(967.8,664.3,1,1,0,0,0,978.8,906.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({y:615.5},0).wait(1).to({y:566.7},0).wait(1).to({y:517.9},0).wait(1).to({y:469.1},0).wait(1).to({y:420.3},0).wait(1).to({y:371.5},0).wait(1).to({y:322.7},0).wait(1).to({y:273.9},0).wait(1).to({y:225.1},0).wait(1).to({y:176.3},0).wait(61));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#587E69").s().p("EicOAPxIAA/hME4dAAAIAAfhg");
	this.shape.setTransform(948.925,25.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},80).wait(60));

	// фон
	this.instance_6 = new lib.фон2();
	this.instance_6.setTransform(-34,-61,0.2406,0.2406);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},80).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-156.9,-190,3027.5,1787.3);
// library properties:
lib.properties = {
	id: 'E79AACAA1D3AE641A72847D6AED03DB7',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/кусты_.png", id:"кусты"},
		{src:"images/л1.png", id:"л1"},
		{src:"images/л2.png", id:"л2"},
		{src:"images/л3.png", id:"л3"},
		{src:"images/л6pngкопия.png", id:"л6pngкопия"},
		{src:"images/л7pngкопия.png", id:"л7pngкопия"},
		{src:"images/фон2.png", id:"фон2"},
		{src:"images/фон3.png", id:"фон3"},
		{src:"images/Задание_3_HTML5 Canvas_atlas_1.png", id:"Задание_3_HTML5 Canvas_atlas_1"},
		{src:"images/Задание_3_HTML5 Canvas_atlas_2.png", id:"Задание_3_HTML5 Canvas_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E79AACAA1D3AE641A72847D6AED03DB7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;