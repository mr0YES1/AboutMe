(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.фондень = function() {
	this.initialize(img.фондень);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4501,7226);


(lib.фонночь = function() {
	this.initialize(img.фонночь);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4501,7176);


(lib.фонутро = function() {
	this.initialize(img.фонутро);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4501,6301);


(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4584,8053);// helper functions:

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


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.фонночь();
	this.instance.setTransform(0,0,0.2401,0.2401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,1080.8,1723.1), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.фондень();
	this.instance.setTransform(0,0,0.2402,0.2402);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,1081.2,1735.7), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.фонутро, null, new cjs.Matrix2D(0.24,0,0,0.24,-540.8,-757)).s().p("EhUfB2SMAAAjskMCo/AAAMAAADskg");
	this.shape.setTransform(540.775,757.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,1081.6,1514.1), null);


// stage content:
(lib.Задание_5_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1___копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ7VqIAAlwIz2AAIAAFwItrAAIAAw+IBbAAIAAgDQBxgEBDg7QBKg/AnhlQAmhlAJiCQAJiDAAiMIAAu5MAivAAAIAAaVIFmAAIAAQ+gAjIivQAAENgpDOIIKAAIAAvEInhAAg");
	this.shape.setTransform(539.075,381.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3jVrIAAwhIBjAAIAAgEQB4gDBMg6QA4gqAqg7QASgbAQgeQAag2ARg9QAQg5AJhBIAHhCQAKhhABhmIAAgZQgBhXgFhWQgFhhgJhdQgJhggLhaIgvmZIDmgIIWTAAQEXgBEWAEIABANQAIEOAHERQAGERAEESQAEEcAAEeIFZAJQgBDfgCDeIgIJzIiOACQloAGlpAFIgBgvIgHkzQjzABjzAAIsDAAIgJFkItjAAg");
	this.shape_1.setTransform(539.175,381.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3gVtIAAwGIBqAAIABgDQB/gDBUg4QA/goAwg6QAWgZASgfQAgg1AXhAQAVg6ANhCIAMhGQAPhnAAhvIAAgaQgBhegJhbQgLhngShgQgRhhgXhYIhemLIDegQIWSAAQEYABEVAHIABAMQAREJANEOQANEOAIESQAHEcAAEdIFNARQgCDdgEDbQgGE3gKE0IiMAFQlhAMllAHIgCgsIgOkmQjxADjxAAIr7AAIgRFYItbAAg");
	this.shape_2.setTransform(539.275,381.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A3cVuIAAvpIBxAAIABgDQCGgEBdg1QBEgnA2g4QAagZAVgdQAmg1AdhBQAbg9AQhEQAJgkAHgmQAUhtABh2IAAgdQgChlgOhgQgQhsgbhiQgahkghhUIiPl9IDWgYIWTAAQEYAAEUALIACAMQAZEDAUELQATEMALERQALEbAAEeIFAAZQgCDbgGDZQgKEzgOEvIiKAHQlbASlgALIgEgqIgVkZQjtAEjvAAIr0AAIgaFMItRAAg");
	this.shape_3.setTransform(539.375,381.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A3ZVvIAAvNIB5AAIABgDQCNgDBlgzQBLgmA8g1QAdgZAYgdQAtg0AihDQAgg+AUhIQALglAJgnQAZhzACh/IgBgeQgChsgThkQgVhzgkhkQgjhmgshSIi+luIDOggIWSAAQEZAAETAOIACAMQAiD9AaEKQAaEIAPEQQAOEbAAEfIE0AhQgDDYgJDWQgMEvgTErIiHAKQlWAYlcAOIgEgnIgdkNQjqAFjtABIrrAAIgjE/ItJAAg");
	this.shape_4.setTransform(539.5,381.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A3WVwIAAuwICAAAIACgDQCUgDBugyQBQgkBDgzQAggXAbgdQAzgzAnhFQAmg/AZhLQANgnALgqQAeh5ABiGIAAggQgEhygXhrQgah4gthmQgshpg4hOIjslhIDGgnIWSAAQEZAAESASIACALQArD4AhEGQAgEGASEQQATEZAAEfIEmAqQgEDWgKDUQgPErgZElIiEANQlPAelYATIgGgnIgjj+QjoAGjqAAIrkAAIgsEzItAAAg");
	this.shape_5.setTransform(539.6,381.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A3TVyIAAuVICHAAIAEgCQCagEB2gvQBWgiBKgyQAjgWAfgdQA5gyAshGQArhBAdhPQAQgoAMgsQAjh+ACiOIgBgiQgEh5gchvQgfh/g2hpQg1hqhDhMIkclSIC/gwIWRAAQEaABERAVIACAMQA0DyAnEDQAnEDAWEQQAWEYABEgIEaAxQgGDUgMDRQgSEpgdEgIiDAPQlIAklUAVIgHgkIgqjxQjmAHjoABIrcAAIg0EnIs4AAg");
	this.shape_6.setTransform(539.7,381.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A3PVzIAAt4ICPAAIACgDQCigDB/gtQBcghBQgwQAmgVAigcQA/gyAyhIQAxhCAhhSQASgqANgtQApiEABiWIgBgkQgEiAggh1QgmiEg+hrQg+hshNhJIlMlEIC2g4IWSAAQEaABERAYIACALQA8DuAuEAQAtEBAaEPQAZEXABEfIENA7QgGDRgPDPQgVEkgiEbIh/ASQlDAqlPAaIgIgiIgxjlQjjAJjlAAIrWAAIg8EbIsvAAg");
	this.shape_7.setTransform(539.8,381.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A3MV0IAAtcICWAAIADgDQCpgCCHgsQBiggBWgtQAqgVAlgbQBFgxA3hKQA3hEAlhUQAUgsAPgwQAuiJACieIgBgmQgFiGgmh6QgqiLhHhtQhHhuhYhGIl8k1ICvhAIWRAAQEaAAEQAcIADALQBFDnA0D+QA0D/AdENQAdEXABEgIEBBDQgIDPgQDMQgYEhgnEVIh9AVQk9AwlLAdIgJgfIg4jYQjgAKjjABIrNAAIhGEOIsmAAg");
	this.shape_8.setTransform(539.925,381.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A3IV1IAAtAICcAAIAEgCQCwgCCQgqQBngfBdgrQAtgTAogcQBLgxA9hKQA8hGAphXQAWguASgyQAziPABilIgBgoQgGiNgph/QgwiQhQhwQhQhwhjhDImrkoICmhHIWSAAQEaAAEPAgIAEAKQBNDiA6D8QA7D7AhENQAhEWAAEgID0BMQgIDMgSDJQgcEegrEQIh7AXQk2A3lHAhIgKgeIhAjLQjcAMjiAAIrFAAIhOECIsdAAg");
	this.shape_9.setTransform(540.025,381.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A3FV3IAAskICkAAIAEgDQC3gCCYgoQBugcBjgpQAwgTAsgbQBRgxBChLQBBhHAuhbQAYgvATg0QA4iVACitIgBgqQgHiUguiEQg1iXhZhwQhZh0hug/InakaICehPIWSAAQEaAAEPAjIADALQBWDcBBD4QBBD5AlENQAkEUABEhIDnBUQgJDKgVDHQgeEZgwEMIh4AZQkxA9lDAlIgKgcIhHi+QjaANjfAAIq+AAIhWD3IsVAAg");
	this.shape_10.setTransform(540.125,381.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A3CV4IAAsHICsAAIAEgDQC+gCChgmQBzgbBqgnQA0gSAugbQBXgvBIhNQBGhJAyheQAbgxAVg2QA9ibABi1IgBgrQgHibgziJQg6ichih0Qhhh1h6g8IoKkMICXhYIWRAAQEbABEOAmIAEAKQBeDYBHD1QBID2AoENQAoETABEhIDbBcQgKDJgXDDQghEWg1EHIh2AcQkqBDk/AoIgLgaIhOixQjYAPjcAAIq2AAIhfDqIsNAAg");
	this.shape_11.setTransform(540.225,381.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A2+V5IAArrICyAAIAFgCQDFgCCpgkQB5gaBxglQA2gRAygaQBegvBMhPQBNhKA2hhQAcgyAXg5QBCigABi9IgBgtQgHiig4iPQg/ihhrh2Qhqh4iFg5Io6j+ICPhfIWSAAQEbABENAqIAEAKQBmDRBOD0QBODyAtENQAsESAAEiIDPBkQgLDGgZDBQgkETg7EBIhyAeQklBJk7AsIgMgYIhVijQjVAPjaABIqvAAIhnDdIsDAAg");
	this.shape_12.setTransform(540.35,381.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A27V6IAArOIC5AAIAGgCQDMgCCxgiQCAgZB2gjQA7gQA1gaQBjgvBThQQBRhLA5hjQAgg1AYg6QBIimACjGIgCguQgJipg7iTQhFiph0h3Qh0h6iPg3IppjvICHhnIWRAAQEcAAEMAuIAEAJQBwDMBUDxQBUDwAxELQAvESAAEiQBmA4BcA1QgMDEgbC+QgnEPg/D8Qg3ARg6AQQkeBQk2AvIgNgWQgthHgwhPQjRARjZAAIqmAAIhwDRIr7AAg");
	this.shape_13.setTransform(540.45,381.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A24V7IAAqyIDBAAIAGgCQDTgCC6ggQCFgXB+ghQA9gPA4gZQBpguBYhSQBXhNA+hmQAhg2Aag9QBNisACjNIgCgwQgJiwhAiZQhKith9h7Qh8h7ibg0IqYjhIB/hvIWQAAQEdABELAwIAFAKQB4DGBbDuQBaDuA1EKQAyERABEiQBfA9BWA5QgNDBgdC8QgqELhED4Qg2ASg4ARQkYBVkyAzIgOgTQgxhBgyhJQjQASjWABIqfAAIh4DEIrzAAg");
	this.shape_14.setTransform(540.55,381.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A21V8IAAqVIDJAAIAGgCQDagCDDgeQCLgWCDgeQBBgOA7gZQBwguBdhTQBchPBChpQAkg3Acg/QBQi0ADjTQAAgZgCgZQgKi3hEieQhPiziGh9QiFh9ilgxIrIjUIB3h3IWQAAQEdABEKA1IAFAJQCBDBBhDrQBiDrA3EKQA2EQABEjQBZBABPA9QgNDAgfC5QgtEHhJDyQg1AUg3ASQkRBbkuA3IgQgRQgzg6g3hDQjMAUjUABIqXAAIiCC3IrqAAg");
	this.shape_15.setTransform(540.65,380.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A2xV+IAAp6IDQAAIAHgCQDggBDLgcQCRgUCLgdQBDgNA+gZQB2gtBjhUQBhhRBHhsQAkg5AehBQBXi5ACjbQAAgbgCgaQgKi9hKijQhUi5iOh/QiOiAixgtIr2jGIBvh/IWQAAQEdABEJA4IAFAJQCKC8BoDoQBnDoA7EKQA7EOABEjQBTBFBIBBQgPC9ggC3QgxEEhNDtIhpAoQkMBikpA6IgRgPQg3gzg6g9QjKAVjSABIqPAAIiKCsIrhAAg");
	this.shape_16.setTransform(540.75,380.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A2uV/IAApdIDXAAIAIgCQDngBDUgaQCXgTCQgbQBHgMBBgZQB8gsBphVQBnhTBJhvQAog6AghEQBbi+ADjjQAAgcgCgaQgLjFhPioQhai/iWiBQiXiCi8gqIsmi4IBniHIWQAAQEeACEIA6IAGAJQCSC2BuDmQBuDlBAEKQA9ENACEjQBMBKBCBFQgPC6gkC1QgzEAhSDoIhmArQkHBnklA+IgSgNQg6gsg9g2QjIAWjPAAIqHAAIiUCgIrYAAg");
	this.shape_17.setTransform(540.85,380.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A2qWAIAApBIDdAAIAIgCQDvgBDcgYQCegRCWgYQBKgMBFgYQCBgsBvhXQBrhUBPhyQApg8AihFQBhjFACjrIgBg4QgMjLhUitQhfjFifiEQifiDjIgoItViqIBfiOIWQAAQEeABEHA/IAGAIQCbCxB0DiQB1DjBDEJQBCEMABEkQBGBOA7BJQgQC4glCxQg2D9hXDkQgyAXgyAWQkABtkhBCIgTgLQg+glhBgxQjFAYjNAAIp/AAIibCUIrQAAg");
	this.shape_18.setTransform(540.95,380.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A2nWBIAAolIDlAAIAIgBQD2gBDlgWQCjgQCdgWQBNgLBIgYQCIgrBzhZQBxhVBTh1QAsg+AjhHQBmjKADjzIgCg6QgNjRhYizQhkjLioiGQipiGjSglIuFibIBYiWIWPAAQEfABEGBCIAHAIQCjCrB7DhQB7DgBHEHQBFEMABEkQBBBSA0BOQgRC2gnCuQg5D5hdDfQgvAYgyAXQj6B0kcBFIgUgJQhBgfhGgpQjBAZjLAAIp4AAIikCHIrHAAg");
	this.shape_19.setTransform(541.075,380.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A2kWCIAAoIIDtAAIAIgBQD9gBDtgUQCpgOCkgVQBRgKBKgYQCOgqB4haQB3hXBXh3QAvhBAlhIQBrjRACj7IgCg7QgNjZhci3QhqjRiyiIQiwiIjdgiIu1iNIBPieIWQAAQEfABEFBGIAHAHQCsCmCBDdQCCDeBKEHQBJELABElQA7BWAuBRQgSC0gpCrQg9D2hhDaQguAZgxAYQjzB6kYBKIgVgIQhFgXhJgkQi/AajIABIpxAAIisB6Iq/AAg");
	this.shape_20.setTransform(541.175,380.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A2hWEIAAnsID0AAIAJgCQEEgBD2gRQCvgNCqgTQBUgJBOgXQCUgqB9hbQB9hZBbh7QAwhBAnhLQBwjWADkDIgCg9QgOjfhhi9QhvjXi7iKQi5iLjogeIvkh/IBHinIWQAAQEfACEEBJIAIAHQC0ChCIDaQCIDbBOEHQBMEKACEkQA1BbAnBVQgUCygrCpQg/DyhmDVQgtAbgvAZQjuCAkUBMIgWgEQhIgShMgdQi9AcjGAAIpoAAIi2BvIq2AAg");
	this.shape_21.setTransform(541.275,380.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A2dWFIAAnQID7AAIAJgBQELgBD+gQQC1gLCxgRQBXgHBRgXQCZgqCEhcQCChbBfh9QAzhDAphNQB1jcACkLQAAgggCgfQgOjmhmjCQh0jdjEiMQjCiNjzgbIwUhyIBAiuIWPAAQEgACEDBMIAIAHQC9CcCODXQCPDYBSEHQBQEIABEmQAvBfAgBZQgUCwgtClQhCDvhrDQQgsAcguAbQjnCGkQBQIgXgDQhMgLhQgWQi5AcjEABIphAAIi+BiIqtAAg");
	this.shape_22.setTransform(541.375,380.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A2aWGIAAm0IECAAIAKgBQESAAEGgOQC7gLC3gOQBbgHBUgWQCfgpCJheQCIhcBjiBQA1hEAqhPQB7jjADkSQgBghgBggQgPjshrjIQh5jijNiPQjMiPj+gYIxDhjIA4i2IWQAAQEfABEDBQIAIAHQDGCVCVDWQCVDVBVEFQBTEJACElQApBjAaBeQgVCtgwCkQhFDqhvDLQgrAdgtAcQjhCMkMBUIgXAAQhQgEhTgRQi3AejCABIpZAAIjGBWIqlAAg");
	this.shape_23.setTransform(541.5,380.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("A2XWIIAAmYIEKAAIAKgBQEZAAEPgNQDAgJC+gLQBegHBXgVQCmgpCOhfQCOheBmiDQA4hHAshRQB/joAEkaQgBgigCghQgQjzhvjNQh+jojWiRQjViRkIgVIxzhVIAwi/IWPAAQEgACECBUIAJAGQDNCQCcDTQCbDSBaEFQBXEHABEmQAkBnASBjQgVCqgyCiQhIDmh1DFQgpAfgsAeQjaCSkIBYIgZABQhSADhYgLQi0Agi/ABIpSAAIjPBKIqcAAg");
	this.shape_24.setTransform(541.6,380.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A2TWJIAAl8IEQAAIALAAQEggBEXgKQDHgHDEgKQBhgGBagVQCsgoCUhhQCShfBsiGQA5hIAuhTQCFjuADkiQgBgjgCgiQgQj6h0jSQiDjujfiTQjeiTkTgTIyihGIAojHIWOAAQEhACEBBXIAJAGQDXCLCiDQQChDQBdEEQBcEGABEmQAdBsAMBmQgXCpgzCeQhLDjh5DBQgpAggqAeQjVCYkDBbIgaAEQhWAKhbgFQiyAhi9ABIpJAAIjYA+IqTAAg");
	this.shape_25.setTransform(541.7,380.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A2QWKIAAlfIEYAAIAMgBQEmAAEggIQDMgGDLgIQBkgEBdgWQCzgnCZhiQCYhhBviJQA8hJAwhWQCKj0ADkpQgBglgCgiQgRkBh5jXQiIj0joiVQjmiWkfgPIzRg5IAfjOIWPAAQEhACEABbIAJAFQDfCGCpDNQCoDNBhEEQBeEEADEnQAWBwAGBqQgYCmg1CcQhPDgh9C7QgnAigpAfQjQCej+BfIgcAGQhYARhfABQivAji7AAIpCAAIjhAyIqKAAg");
	this.shape_26.setTransform(541.8,380.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("A2NWLIAAlDIEfAAIAMAAQEuAAEpgGQDSgFDRgGQBngDBggVQC5gnCehkQCehiB0iMQA9hLAyhXQCPj6ADkyQgBgkgCgkQgRkIh9jcQiPj6jwiXQjwiYkpgNI0BgqIAYjWIWPAAQEhACD/BeIAKAGQDnB/CvDLQCvDKBlEDQBiEEACEnQARB1gBBuQgZCkg4CZQhRDciDC2QglAjgoAhQjJCkj7BjIgcAHQhdAYhiAIQisAji5ABIo6AAIjpAlIqCAAg");
	this.shape_27.setTransform(541.9278,380.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A2LWMIAAkmIEnAAIAMgBQE0AAEygEIGvgHQBqgDBkgUQC+gmClhlQCjhkB3iPQBBhNAzhZQCUkAADk5QAAgmgDglQgSkOiCjhQiTkAj6iaQj4iak0gJI0xgcIAQjeIWPAAQEhABD/BiIAKAFQDwB6C1DIQC2DIBoECQBmEEABEnQALB5gHByQgaCig5CWQhVDYiICyQgkAkgnAiQjCCqj2BnIgeAJQhgAfhmAOQipAli2ABIozAAIjyAYIp5AAg");
	this.shape_28.setTransform(542.177,380.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A2LWOIAAkLIEuAAIAMAAQE8AAE6gCIG7gEQBugCBmgTQDFgmCqhnQCohlB8iSQBDhOA1hcQCZkFADlCQAAgmgDglQgTkWiGjmQiZkHkCibQkBiclAgGI1fgPIAIjlIWOAAQEiACD9BkIALAGQD4B0C8DGQC8DEBsECQBpECACEoQAFB+gOB2QgbCfg7CTQhXDWiNCsQgjAlgmAkQi8CwjyBpIgeANQhkAkhqAVQimAmi0ABIorAAIj6ANIpxAAg");
	this.shape_29.setTransform(542.6408,380);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A2OWPIAAjuIWOAAQFMgEEKieQELieCekLQCekMAElKQgElJiekLQiekMkLieQkKielMgEI2OAAIAAjuIWOAAQEpACEBBuQEBBvDDDCQDCDDBwEBQBtEBACEoQgCEphtEBQhwEBjCDDQjDDCkBBwQkBBtkpACg");
	this.shape_30.setTransform(543.325,379.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A1rWMIAAjoIVWgWQE9gIEAidQEAicCYkGQCYkFADlCQgDlBiYkFQiYkGkAidQkAick9gII1WgWIAAjoIPZAAQDRAADOACQBrACBlAQQCvAdCeBHQB7A4BrBLQBuBNBeBiQC7DCBrD+QBpD+ABEjQgBEkhpD+QhrD+i7DBQhfBjhvBOQhqBLh6A3QihBIiyAdQhiAPhoACQjOACjRAAIvZAAg");
	this.shape_31.setTransform(543.175,379.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("A1JWKIAAjiIUdgsQEwgOD1ibQD2iaCSkAQCRkAADk5QgDk4iRkAQiSkAj2ibQj1iakwgNI0dgsIAAjiIPKAAQDOgBDKAFQBpADBjARQCrAgCZBIQB3A5BmBMQBpBNBbBiQCzDBBnD5QBkD7ACEfQgCEghkD6QhnD6izDBQhbBihqBOQhmBMh2A4QicBKiuAeQhgARhlACQjLAFjOABIvKAAg");
	this.shape_32.setTransform(543.075,379.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A0mWHIAAjcITkhCQEjgSDqiaQDriZCLj5QCLj6AEkxQgEkwiLj6QiLj6jriZQjqiZkjgSIzkhCIAAjcIO7AAQDLAADGAHQBnAEBhATQCnAhCTBKQBzA6BiBMQBlBOBXBhQCrDABiD3QBgD4ABEZQgBEbhgD3QhiD3irC/QhYBihlBPQhiBMhyA5QiWBLiqAhQheAShjAEQjHAHjLAAIu7AAg");
	this.shape_33.setTransform(542.925,379.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A0EWEIAAjWISshYQEVgWDfiZQDhiXCFj0QCFjzADkpQgDkniFj1QiFj0jhiXQjfiYkVgWIyshYIAAjXIOsAAQDIAADCAKQBlAFBfAVQCjAjCOBLQBvA6BeBOQBgBPBSBgQCkC/BdDzQBcD0ACEVQgCEWhcD0QhdD0ikC+QhTBhhhBPQhdBNhuA6QiRBNimAiQhcAUhhAFQjCAJjJAAIusAAg");
	this.shape_34.setTransform(542.825,379.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AzhWCIAAjRIRyhuQEJgbDUiXQDWiWB/jtQB+juADkgQgDkfh+jvQh/jtjWiWQjUiWkJgbIxyhuIAAjRIOcAAQDGAAC+AMQBjAHBcAVQCgAlCJBNQBqA7BZBPQBcBOBPBgQCbC+BaDwQBXDxABEQQgBERhXDxQhaDwibC+QhPBghdBPQhZBOhpA7QiMBOiiAlQhaAUhfAGQi/ANjGAAIucAAg");
	this.shape_35.setTransform(542.675,378.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ay/V/IAAjKIQ6iEQD7ggDKiVQDLiVB4jnQB4jpADkXQgDkXh4joQh4jojLiUQjKiWj7gfIw6iDIAAjMIONAAQDDAAC6APQBhAHBaAXQCcAnCEBPQBmA8BVBPQBXBPBLBfQCUC9BUDsQBTDvACELQgCEMhTDuQhUDsiUC9QhLBghYBQQhVBOhlA8QiGBPifAnQhXAWheAHQi6AQjEgBIuNAAg");
	this.shape_36.setTransform(542.575,378.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AycV9IAAjFIQAiaQDugkDAiUQDAiTByjiQByjhACkQQgCkPhyjiQhyjijAiSQjAiTjugkIwAiaIAAjGIN+AAQDAAAC2ARQBfAJBYAYQCYAqB+BQQBjA9BQBOQBSBQBHBfQCMC8BRDpQBODrABEGQgBEHhODrQhRDpiMC8QhHBghTBQQhQBOhiA9QiBBRiaAqQhVAWhcAJQi2ARjBAAIt+AAg");
	this.shape_37.setTransform(542.425,378.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ax6V7IAAjAIPIivQDggqC1iSQC2iSBrjbQBsjcACkHQgCkGhsjdQhrjci2iRQi1iRjggpIvIiwIAAi/INvAAQC+AACxASQBdALBWAZQCUAsB5BRQBeA+BMBQQBOBQBDBeQCEC7BMDlQBKDoACECQgCEDhKDnQhMDmiEC6QhDBfhPBRQhLBPheA+Qh7BSiXAsQhTAXhZAKQizAVi+AAItvAAg");
	this.shape_38.setTransform(542.325,378.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AxXV4IAAi5IOPjGQDTguCqiRQCriQBljVQBljXADj+QgDj+hljXQhljViriQQiqiQjTgtIuPjGIAAi6INgAAQC6AACuAWQBbALBTAbQCQAuB1BSQBaA/BHBRQBJBQBABeQB8C6BHDiQBGDkABD9QgBD+hGDkQhHDih8C6QhABehKBRQhHBQhZA+Qh3BUiSAuQhRAahXALQivAWi7AAItgAAg");
	this.shape_39.setTransform(542.175,377.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Aw1V1IAAizINWjcQDHgzCeiPQChiOBfjQQBfjQACj2QgCj2hfjRQhfjPihiOQieiPjHgyItWjbIAAi0INRAAQC4AACqAXQBYANBRAcQCMAwBwBUQBWBABDBRQBEBQA7BeQB1C5BDDeQBBDiACD4QgCD5hBDhQhDDeh1C5Qg7BehFBRQhDBRhVA/QhxBWiOAwQhQAahVANQiqAYi5AAItRAAg");
	this.shape_40.setTransform(542.075,377.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AwSVzIAAiuIMdjyQC5g3CUiOQCWiNBZjJQBYjKACjuQgCjuhYjLQhZjJiWiMQiUiNi5g3IsdjxIAAivINCAAQC1AAClAaQBXAOBPAeQCIAyBqBVQBSBBA/BSQBABQA3BdQBtC4A+DcQA9DdABD0QgBD0g9DeQg+DbhtC4Qg4BdhABSQg+BRhSBAQhrBXiLAzQhNAbhTANQimAci2AAItCAAg");
	this.shape_41.setTransform(541.925,377.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AvwVwIAAioILkkHQCsg8CKiNQCLiLBSjDQBSjFACjlQgCjlhSjFQhSjEiLiKQiKiMisg7IrkkIIAAioIMzAAQCyAACiAcQBUAQBNAfQCEA0BlBXQBOBBA6BSQA8BRAzBdQBlC3A6DYQA5DaABDvQgBDvg5DbQg6DYhlC3Qg0Bdg8BRQg5BShOBBQhmBYiGA1QhLAdhRAPQijAdizAAIszAAg");
	this.shape_42.setTransform(541.825,377.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AvNVuIAAiiIKrkeQCfhBCAiLQB/iJBMi9QBMjAABjcQgBjdhMi/QhMi+h/iIQiAiLifhAIqrkdIAAijIMjAAQCvAACeAfQBTARBLAgQCAA2BfBYQBKBDA2BTQA3BRAvBcQBeC2A1DUQA0DYABDqQgBDqg0DYQg1DUheC2QgvBcg4BTQg1BShJBCQhhBaiDA2QhIAfhQAQQifAgiwAAIsjAAg");
	this.shape_43.setTransform(541.675,377.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AurVrIAAicIJyk0QCShGB1iJQB1iHBFi4QBGi5ABjUQgBjVhGi5QhFi3h1iHQh1iJiShFIpykzIAAidIMUAAQCsAACbAhQBQASBJAiQB8A3BaBbQBGBCAxBVQAzBRArBcQBWC1AxDQQAwDVABDlQgBDlgwDVQgxDQhWC2QgrBbgzBTQgxBThFBDQhcBbh+A5QhHAghNARQicAiitAAIsUAAg");
	this.shape_44.setTransform(541.575,376.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AuIVpIAAiXII5lJQCFhLBqiIQBqiFA/iyQA/izACjMQgCjMg/i0Qg/ixhqiGQhqiHiFhJIo5lKIAAiXIMFAAQCpAACWAkQBPATBGAjQB5A6BVBcQBCBEAsBUQAuBSAoBbQBNC0AtDOQAsDRAADgQAADhgsDRQgtDNhNC0QgoBcguBTQgtBThABDQhXBdh7A8QhEAghLATQiYAliqAAIsFAAg");
	this.shape_45.setTransform(541.425,376.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AtmVmIAAiRIIAlfQB4hPBfiHQBhiEA4irQA5iuABjDQgBjEg5iuQg4irhhiEQhfiGh4hOIoAlfIAAiRIL2AAQCnAACSAmQBMAUBEAkQB1A9BQBdQA+BEAoBVQApBTAjBaQBGCzApDKQAnDOABDcQgBDcgnDOQgpDKhGCzQgjBbgqBTQgoBUg8BEQhSBfh2A9QhDAihJAUQiTAnioAAIr2AAg");
	this.shape_46.setTransform(541.325,376.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AtDVjIAAiKIHHl2QBqhTBViGQBWiCAzimQAyinABi7QgBi7gyipQgzilhWiCQhViEhqhTInHl1IAAiLILnAAQCjAACPAoQBJAWBDAlQBwA/BLBeQA6BGAkBVQAkBSAgBbQA+CyAkDHQAjDKAADXQAADXgjDLQgkDGg+CyQggBbglBUQgjBUg5BFQhMBghyBAQhBAjhHAVQiPApilAAIrnAAg");
	this.shape_47.setTransform(541.175,376.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AshVhIAAiFIGPmMQBchYBLiEQBLiAAsigQAsiiABiyQgBizgsiiQgsighLiAQhLiDhchXImPmLIAAiGILYAAQChAACKArQBIAXBAAmQBsBBBGBfQA2BHAfBXQAgBSAcBaQA2CxAfDDQAfDIABDSQgBDSgfDIQgfDCg2CyQgcBZggBVQgfBVg1BFQhHBihuBCQg+AlhFAWQiMAsiiAAIrYAAg");
	this.shape_48.setTransform(541.075,376.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ar+VfIAAh/IFVmiQBQhdBAiDQBAh/AmiZQAmicABiqQgBirgmicQgmiZhAh/QhAiBhQhcIlVmhIAAiBILJAAQCeABCGAtQBFAYA+AoQBpBDBBBhQAxBIAbBWQAcBUAXBYQAvCxAbC/QAaDFAADNQAADOgaDEQgbC/gvCxQgYBZgbBVQgbBVgwBHQhCBjhqBEQg8AlhDAYQiIAvifAAIrJAAg");
	this.shape_49.setTransform(540.925,375.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ArcVcIAAh5IEdm4QBChiA1iAQA2h+AfiUQAgiWABihQgBiiggiXQgfiTg2h9Qg1iAhChgIkdm4IAAh6IK6AAQCbAACCAwQBEAZA7ApQBlBFA8BjQAtBIAXBXQAWBVAUBYQAnCvAWC8QAWDBABDJQgBDJgWDBQgWC7gnCwQgUBZgXBUQgWBXgsBIQg9BkhmBHQg6AnhBAYQiDAxidAAIq6AAg");
	this.shape_50.setTransform(540.825,375.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Aq5VaIAAh0IDjnNQA2hnAqiAQArh7AZiOQAZiQABiZQgBibgZiQQgZiNgrh7Qgqh/g2hlIjjnOIAAh0IKqAAQCZAAB+AyQBBAbA6ArQBhBHA2BkQAqBJARBYQATBUAQBYQAfCuASC5QARC+AADEQAADEgRC9QgSC5gfCuQgQBZgTBVQgSBXgoBIQg3BnhiBIQg4Aog/AZQiAA1iaAAIqqAAg");
	this.shape_51.setTransform(540.675,375.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AqXVXIAAhuICrnjQAohsAfh9QAhh7ATiHQATiKAAiRQAAiSgTiLQgTiHghh6Qgfh8gohqIirnjIAAhvIKaAAQCXAAB6A0QBAAcA3AsQBdBJAxBmQAmBKANBZQAOBUALBXQAYCuANC1QANC7ABC/QgBC/gNC7QgNC1gYCtQgLBYgOBVQgOBYgkBJQgyBoheBLQg2Apg9AbQh7A2iZAAIqaAAg");
	this.shape_52.setTransform(540.575,375.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ap0VUIAAhnIByn6QAahwAVh9QAWh4AMiCQANiEAAiIQAAiKgNiFQgMiAgWh5QgVh7gahuIhyn5IAAhqIKLAAQCUAAB2A3QA9AeA1AtQBaBLAsBnQAhBLAJBZQAJBVAIBWQAPCtAJCyQAJC4AAC6QAAC6gJC4QgJCxgPCtIgRCtQgJBYggBKQgtBphaBNQg0Aqg7AdQh3A5iWgBIqLAAg");
	this.shape_53.setTransform(540.425,374.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ApSVSIAAhiIA5oPQANh1ALh7QALh3AGh8QAGh+AAiAQAAiBgGh/QgGh7gLh3QgLh5gNh0Ig5oPIAAhjIJ8AAQCRAAByA5QA8AfAyAuQBWBOAnBoQAdBMAEBaIAJCrQAICsAECuQAEC1ABC1QgBC1gEC1QgECugICrIgJCtQgEBZgcBLQgoBrhWBPQgxAsg5AdQh0A7iTAAIp8AAg");
	this.shape_54.setTransform(540.325,374.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AovVPMAAAgqdIJtAAQDZAACNCLQCMCJAADXIAAbHQAADXiMCLQiPCJjXAAgAk+R6IFBAAQCMAABZhQQBXhSAAiNIAA6ZQAAiGhUhRQhVhUiFAAIlPAAg");
	this.shape_55.setTransform(540.175,374.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},11).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(12));

	// Слой_1___копия___копия___копия
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgmRWQjqhoimisQilishYjZIgmhfIiKAAIAANOItuAAMAAAgliINuAAIAAMeICoAAQAEgHAEgLQBUjaCkiwQCjiyDshsQDqhrEngBQErAADqBrQDpBqCiCvQCkCvBVDdQBUDdAADkQAADvhUDaQhVDXikClQiiCkjpBhQjqBhkrAAQkhABjqhpgAE+moQhIApgyBGQg0BGgdBVQgbBUAABSQAABRAbBPQAdBPA0A/QAzBBBJAnQBKAmBYAAQBbAABMgkQBMgmA0g9QA0g/AbhRQAbhRAAhaQAAhWgbhVQgbhVg0hCQg0hChMgoQhMgqhbAAQhbABhJArg");
	this.shape_56.setTransform(538.25,802.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("A3YS2QhxgEhvgGIAAgLQgHkBgEkCQgDkLAAkNIAA0+IAmAAICxAvQAoALAsAJQAsAJAvAFQAwAFAyAAQAyAAAwgFQAvgFAsgJQAsgJAngLICvgvIAILaIAAAqICjACQAEgHADgLQBSjPCeioQCeiqDjhmQDkhlEdADQEgADDiBpQDiBpCdCtQCeCrBRDYQBSDZAADeQAADqhSDUQg8CchmCCQgkAtgpAqQidChjiBhQjjBgkhADQkYADjlhjQg7gag4geQiahWh2h4QihijhWjRIgmhbIiGABIgFKVIgBClQhnAFhpAEQh3ADh5AAQh5AAh5gDg");
	this.shape_57.setTransform(538.425,802.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("A23S5Qh2gHhygMIgBgLQgNj/gHkCQgIkLAAkNIAA1CIAtAAICsBfQAmAWAwASQAvASA3AKQA4ALA8AAQA7AAA5gLQA2gKAvgSQAxgSAmgWICphfIAPLBIAAAqICeADIAHgQQBPjGCYigQCZihDbhgQDcheETAFQEWAGDbBpQDaBoCXCpQCYCoBQDTQBPDUAADZQAADkhPDQQg7CYhjCAQgjAsgnApQiYCejaBgQjbBgkYAFQkQAGjdhdQg6gYg2gdQiVhQhzhzQidibhVjHIgkhYIiEADIgJKDIgDChQhpALhtAGQh8AIh/AAQh/AAh9gIg");
	this.shape_58.setTransform(538.6,802.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("A2WS9Qh7gLh1gTIgBgLQgTj8gMkCQgKkLgBkOIAA1EIA0AAIClCOQAmAhA0AbQAzAbA/AQQA/APBFABQBFgBBAgPQA+gQAzgbQA0gbAmghICiiOIAYKoIAAAoICYAFQADgGADgJQBNi8CTiYQCTiZDThZQDUhYEKAIQEMAJDSBoQDTBnCSCnQCTCkBMDPQBLDOAADVQAADdhLDMQg5CUhfB8QghAsgmAoQiSCcjUBeQjUBgkOAJQkGAHjYhWQg4gXg0gaQiQhNhwhsQiZiUhTi9IgkhUIh/AEIgOJyIgECcQhsARhxAKQiCALiEAAQiGAAiBgLg");
	this.shape_59.setTransform(538.75,802.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("A12TBQh/gPh4gZIgBgLQgaj5gPkDQgPkKAAkPIAA1HIA7AAICfC+QAkAsA4AjQA3AkBGAVQBHAVBPAAQBPAABHgVQBGgVA3gkQA4gjAkgsICci+IAgKPIAAAnICSAHIAHgPQBJizCOiPQCOiQDLhTQDMhSD/ALQEDAMDLBoQDKBmCNCiQCNCiBKDKQBJDJAADQQAADYhJDGQg2CShcB5QggArglAnQiNCZjMBeQjMBfkFAKQj+AMjQhQQg3gWgzgZQiLhHhthoQiUiLhRi0IgjhPIh8AEQgIExgLEwIgFCYQhvAWh2AOQiFAOiLAAQiMAAiGgOg");
	this.shape_60.setTransform(538.925,802.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("A1VTEQiFgSh6gfIgCgLQggj4gSkCQgTkKAAkQIAA1KIBCAAICZDtQAiA3A8AtQA7AtBOAaQBOAaBZABQBZgBBOgaQBOgaA7gtQA8gtAig3ICWjtIAoJ2IAAAmICNAJQAEgGADgIQBGipCIiHQCHiHDFhNQDEhMD2APQD5AODCBnQDDBlCHCgQCICeBHDEQBGDFAADKQAADThGDCQg1CNhYB3QgfAqgjAnQiICVjDBdQjFBfj9AOQj1ANjJhKQg0gTgygYQiGhChqhiQiQiDhQirIgihLIh4AFQgLEpgMEoIgGCTQhyAch6AQQiKATiSAAQiRAAiLgTg");
	this.shape_61.setTransform(539.1,803.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A01TIQiJgWh9gmIgCgKQgnj2gWkCQgWkJAAkSIAA1MIBIAAICTEdQAhBCBAA1QA/A2BWAfQBVAfBjABQBigBBWgfQBVgfBAg2QBAg1AhhCICQkdIAwJcIAAAmICHAKQADgGADgHQBDigCDh+QCCh+C8hHQC9hGDsASQDvARC7BmQC7BlCBCcQCDCaBEDAQBDDAAADFQAADNhDC9QgyCKhVB0QgeApgiAmQiCCTi9BcQi9BejzARQjsAQjChEQgzgSgwgWQiDg9hlhcQiLh8hPiiIgihHIh0AIQgMEggQEfIgICPQh0Ahh+AUQiPAWiXAAQiYAAiQgWg");
	this.shape_62.setTransform(539.275,803.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A0UTMQiOgaiAgsIgCgKQguj0gZkCQgakJAAkTIAA1PIBPAAICMFMQAhBNBDA/QBDA/BdAlQBeAkBsABQBsgBBegkQBcglBEg/QBDg/AghNICKlMIA4JEIAAAkICCAMIAFgMQBBiVB9h2QB9h3C0hAQC1g/DiAUQDlAUC0BlQCyBkB9CZQB9CYBBC6QBBC7gBDAQABDHhBC5QgxCGhRByQgcAoggAlQh+CPi0BbQi3BfjpATQjjATi8g9QgxgRgugUQh/g5hhhWQiHhzhOiZIgghDIhxAIQgOEYgTEWIgJCKQh2AniDAYQiUAaidAAQieAAiUgag");
	this.shape_63.setTransform(539.45,803.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Az0TPQiTgdiCgyIgDgKQgzjygekCQgdkJgBkTIAA1SIBWAAICHF8QAfBYBIBHQBHBHBkAqQBmArB1AAQB2AABlgrQBkgqBHhHQBIhHAfhYICEl8IA/IqIAAAjIB8APIAGgMQA+iMB3htQB3huCug7QCsg4DZAXQDaAXCsBlQCrBiB3CWQB4CUA+C2QA+C2AAC7QAADCg+CzQguCDhNBvQgcAngfAkQh3CNiuBaQivBejhAWQjZAWi1g4QgvgPgtgSQh6g0hfhQQiChshLiPIghg/IhtAJQgQEQgVENIgKCGQh6AsiHAbQiYAdikABQikgBiZgdg");
	this.shape_64.setTransform(539.6,803.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AzUTTQiWggiFg5IgEgKQg6jwgikCQggkIgBkUIAA1VIBeAAICAGrQAdBjBNBQQBKBQBsAwQBtAvB/ABQCAgBBtgvQBrgwBLhQQBMhQAehjIB+mrIBHIRIAAAiIB3AQIAEgLQA7iCBzhlQBxhmCmg0QCkgxDPAZQDRAaCjBlQCkBhBxCSQBzCRA7CxQA7CxAAC2QAAC8g7CvQgsB/hKBsQgaAmgeAkQhyCJimBaQinBejYAYQjQAZiugyQgugNgrgRQh1gvhchKQh+hkhJiGIghg7IhoALQgTEHgXEEIgMCCQh8AyiMAeQidAhipAAQirAAieghg");
	this.shape_65.setTransform(539.75,804.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AyzTWQicgkiIg+IgDgKQhBjuglkCQgkkIgBkVIAA1XIBkAAIB7HaQAcBuBPBZQBPBZB0A1QB0A1CJAAQCJAAB0g1QB0g1BPhZQBQhZAchuIB4naIBPH3IAAAhIBwASIAFgKQA4h4BthdQBthdCdguQCdgsDFAdQDHAdCcBkQCcBhBsCOQBtCOA4CsQA4CsAACxQAAC2g4CqQgqB8hGBqQgZAkgcAkQhtCGifBZQigBdjOAcQjHAbiogsQgrgMgqgPQhwgqhahEQh6hdhHh8Igfg3IhlAMQgVD+gaD8IgNB9Qh/A4iQAhQiiAlivAAQiwAAijglg");
	this.shape_66.setTransform(539.925,804.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AyTTaQiggoiLhEIgDgLQhIjrgpkCQgokIAAkWIAA1aIBrAAIB0IKQAbB5BUBiQBTBiB7A6QB7A6CTABQCTgBB8g6QB7g6BThiQBThiAbh5IBzoKIBWHfIAAAgIBrATIAFgJQA1huBnhVQBohUCVgoQCVglC8AfQC8AgCUBjQCUBgBnCMQBnCJA2CoQA1CnAACrQAACyg1ClQgnB4hDBnQgYAkgbAiQhoCDiXBZQiYBcjFAfQi/AeiggmQgqgKgngNQhtgmhWg/Qh1hUhHhzIgegzIhhANQgXD2gcDzIgOB5QiCA9iVAlQimAoi2ABQi2gBiogog");
	this.shape_67.setTransform(540.1,804.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AxyTeQilgriOhLIgEgLQhOjpgskCQgskHgBkXIAA1dIByAAIBvI5QAZCEBYBrQBXBrCCA/QCEA/CcACQCcgCCEg/QCCg/BXhrQBYhrAaiEIBso5IBeHFIAAAgIBlAVIAFgJQAzhlBihMQBihMCNghQCNgfCxAiQC0AjCMBjQCMBeBhCJQBiCGAzCjQAzCiAACmQAACsgzCgQglB1hABkQgWAjgaAhQhiCBiQBYQiRBci7AhQi2AhiaggQgogIgmgMQhnghhUg5QhxhMhFhqIgdgvIhdAOQgZDugfDqIgQB1QiEBDiZAoQirAsi8AAQi8AAisgsg");
	this.shape_68.setTransform(540.275,805.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AxRThQiqguiRhRIgEgLQhVjngwkCQgvkHgBkYIAA1gIB5AAIBoJpQAYCPBcB0QBbB0CKBFQCLBECmACQCmgCCLhEQCKhFBbh0QBbh0AZiPIBlppIBnGtIAAAeIBgAXIAEgHQAxhcBchEQBchDCGgbQCFgZCoAlQCpAmCEBiQCEBdBdCGQBcCDAwCdQAwCdAACiQAACngwCbQgkBwg7BiQgWAigXAhQheB+iIBWQiJBdizAjQisAjiTgZQgmgHgkgKQhkgdhQgyQhshFhEhgIgdgqIhaAOQgaDmgiDiIgRBvQiHBJicArQixAwjBAAQjDAAiwgwg");
	this.shape_69.setTransform(540.45,805.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AwxTlQivgyiThYIgFgKQhajlg0kBQgzkIgBkZIAA1iIB/AAIBjKZQAXCZBfB9QBfB9CSBKQCSBJCwACQCwgCCShJQCShKBfh9QBfh9AXiZIBgqZIBvGTIAAAdIBaAaIAEgIQAthRBXg8QBXg7B+gUQB9gSCeAoQCfAoB9BhQB8BdBXCCQBXCAAtCYQAtCZAACcQAAChgtCWQghBtg5BgQgUAhgWAfQhYB7iBBWQiCBcipAmQikAniMgUQgkgFgjgIQhegYhNgtQhpg8hBhYIgdgmIhWAQQgdDdgkDYIgRBsQiKBPiiAuQi1AzjHABQjJgBi1gzg");
	this.shape_70.setTransform(540.625,805.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AwQTpQi0g2iWheIgFgLQhhjig3kCQg4kGgBkbIAA1kICHAAIBcLHQAWClBjCGQBjCGCaBOQCZBPC6ACQC6gCCZhPQCahOBiiGQBjiGAWilIBarHIB3F6IAAAcIBVAbIADgHQArhHBSg0QBRgyB2gPQB2gLCTArQCVArB1BgQB1BcBRB/QBSB9AqCUQAqCTAACXQAACbgqCRQgfBqg1BcQgTAhgVAfQhTB4h5BVQh6BbigApQibApiFgNQgigEgigGQhagThKgnQhjg1hBhOIgbgjIhSASQggDUgnDRIgTBnQiMBUilAyQi6A3jOAAQjPAAi5g3g");
	this.shape_71.setTransform(540.8,805.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AvwTsQi4g6iZhkIgFgKQhojgg7kCQg7kGgBkbIAA1oICOAAIBVL3QAWCwBmCPQBoCOChBVQChBTDDACQDDgCCihTQChhVBliOQBniPAWiwIBTr3IB/FhIAAAbIBPAcQACgBACgEQAog+BLgrQBNgpBugKQBugECKAuQCLAuBtBgQBtBbBMB7QBMB5AnCPQAoCOAACSQAACWgoCNQgdBmgxBaQgSAfgUAeQhNB1hyBUQhzBbiWAsQiSAsh+gHQghgDgfgEQhXgPhGggQhfgtg/hFIgbgfIhOATQgiDMgpDHIgVBjQiOBaiqA1Qi/A7jTABQjVgBi/g7g");
	this.shape_72.setTransform(540.95,806.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AvQTwQi8g9ichrIgGgKQhujeg/kCQg+kFgBkdIAA1qICUAAIBQMmQAUC7BrCYQBqCXCpBZQCpBZDNACQDNgCCphZQCphZBpiXQBriYAUi7IBOsmICHFHIAAAbIBJAeIADgFQAlg0BHgiQBHgiBmgDQBmACCAAxQCBAxBlBfQBmBaBGB4QBHB2AkCKQAlCKAACMQAACQglCJQgbBiguBXQgQAfgTAdQhHByhrBTQhrBbiNAuQiJAvh4gBQgfgBgegDQhRgJhDgbQhbglg9g8IgbgbIhKAVQgkDDgrC+IgXBfQiRBfiuA5QjDA+jaABQjbgBjEg+g");
	this.shape_73.setTransform(541.125,806.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AuvTzQjChBiehwIgGgLQh1jbhCkCQhCkFgBkeIAA1sICbAAIBKNVQASDGBvChQBvCfCwBfQCwBfDXACQDWgCCxhfQCwhfBuifQBvihASjGIBItVICPEuIAAAZIBEAgIADgDQAhgrBCgaQBBgZBfADQBeAJB2AzQB3A0BeBeQBdBaBBB0QBCBzAhCFQAiCFAACHQAACLgiCDQgZBfgqBUQgPAegRAcQhCBvhkBTQhkBaiEAxQh/AyhxAEQgeABgcgBQhMgEhAgWQhXgdg8gyIgZgWIhHAVQgmC7guC1IgXBbQiVBliyA7QjIBCjgACQjhgCjIhCg");
	this.shape_74.setTransform(541.3,806.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AuPT3QjGhEihh3IgGgLQh7jahHkBQhFkFgBkeIAA1wICiAAIBDOFQARDSBzCpQBzCoC4BkQC4BkDgACQDggCC4hkQC3hkBzioQBzipARjSIBCuFICXEVIAAAZIA9AhIADgCQAfgiA8gRQA8gQBWAJQBXAPBsA2QBtA3BWBeQBWBYA7BxQA8BwAfCAQAfCAAACBQAACHgfB9QgXBcgnBSQgNAcgQAcQg9BshcBSQhcBah7A0Qh3AzhqAMQgbADgbAAQhIAAg9gQQhSgVg6gpIgZgTIhDAXQgoCzgxCtIgZBWQiXBqi2A/QjNBGjmABQjngBjNhGg");
	this.shape_75.setTransform(541.475,806.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AtvT7QjKhIikh9IgGgLQiDjXhKkCQhIkEgBkgIAA1yICpAAIA8O0QAQDcB3CzQB3CxDABpQC/BqDqACQDpgCDAhqQC/hpB3ixQB2izAQjcIA8u0ICfD8IAAAXIA4AkIADgCQAcgYA3gJQA2gIBPAQQBOAVBiA5QBjA6BPBdQBOBXA2BvQA2BsAcB7QAcB6ABB9QgBCBgcB5QgUBYgkBPQgNAcgOAaQg4BqhUBRQhVBZhxA3QhuA2hjASIgzAGQhEAFg5gKQhOgNg5ggIgXgOIhAAXQgqCrgzCkIgbBRQiZBwi8BDQjRBJjrABQjtgBjThJg");
	this.shape_76.setTransform(541.65,807.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AtOT+QjPhLiniEIgHgKQiIjWhOkBQhNkEgBkgIAA12ICwAAIA3PkQAPDnB6C7QB7C7DHBvQDHBuD0ACQDzgCDGhuQDIhvB6i7QB7i7AOjnIA3vkICmDjIAAAWIAzAmIACgCQAZgNAxgBQAyABBGAVQBHAcBYA8QBaA9BGBdQBGBVAxBsQAxBoAZB2QAaB3AAB3QAAB7gaB0QgTBVgfBMQgMAbgNAaQgyBnhNBPQhOBahnA5QhmA5hcAXIgvAKQg/AKg2gEQhKgGg3gWIgXgKIg8AZQgsChg2CcIgbBNQidB2jABFQjVBOjyABQjzgBjXhOg");
	this.shape_77.setTransform(541.825,807.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AstUCQjUhPiqiKIgHgKQiPjThRkCQhRkEgBkhIAA14IC3AAIAxQTQANDyB/DEQB+DEDPB0QDPB0D9ADQD9gDDOh0QDPh0B+jEQB/jEANjyIAwwTICvDKIAAAVIAtAnIACAAQAWgEAsAHQAsAKA+AbQA/AiBPBAQBPA/A/BcQA+BVArBoQAsBlAWByQAXBxAAByQAAB2gXBvQgQBRgdBKQgJAagMAZQgtBjhFBPQhHBZheA8QhdA8hVAeIgrANQg7ANgzADQhGACg1gNIgXgGIg3AaQgvCZg4CTIgdBJQifB7jFBJQjaBRj4ABQj5gBjbhRg");
	this.shape_78.setTransform(541.975,807.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AsNUGQjZhTisiQIgHgKQiVjShWkBQhTkDgCkiIAA17IC+AAIArRDQAMD9CCDMQCDDNDWB5QDXB5EGADQEHgDDVh5QDXh5CCjNQCDjMAMj9IAqxDIC2CwIAAAVIAoAoIABABQAUAGAmAPQAmASA3AiQA3ApBFBBQBGBDA2BcQA3BUAmBkQAmBiAUBtQATBrAABuQAABwgTBrQgPBNgZBGQgIAagLAYQgnBhg+BOQg/BYhWA/QhTA/hOAjIgoARQg2ATgwAIQhBAKg0gEIgWgCIg0AbQgxCRg6CKIgfBFQihCAjJBNQjfBUj/ABQj/gBjghUg");
	this.shape_79.setTransform(542.125,807.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("ArsUKQjehXiuiWIgIgKQidjPhYkCQhXkDgCkjIAA1+IDFAAIAkRzQALEHCHDWQCGDWDdB+QDfB/EQACQEQgCDdh/QDfh+CGjWQCGjWALkHIAkxzIC+CYIAAATIAiArIACABQARAQAhAYQAgAaAwAoQAuAvA7BFQA8BFAvBbQAuBTAhBhQAhBfAQBoQASBmgBBpQABBrgSBlQgMBKgVBEQgHAYgJAYQgjBdg2BOQg4BYhMBBQhKBChIAqIglAUQgxAXgsAOQg+ASgyAFIgVACIgwAdQgzCIg9CBIgfBAQilCGjNBRQjlBXkEACQkEgCjlhXg");
	this.shape_80.setTransform(542.3,808.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ArMUOQjihbiyicIgIgLQiijMhdkCQhbkCgCklIAA2AIDMAAIAfSiQAJESCLDfQCKDfDlCDQDmCEEaADQEZgDDmiEQDliDCKjfQCLjfAJkSIAfyiIDGB+IAAATIAcAsIABACQAOAZAcAgQAbAkAnAuQAnA2AyBGQAxBJAnBaQAnBTAbBdQAcBcAOBiQAOBiAABkQAABlgOBhQgLBFgRBCIgOAuQgdBbgvBNQgwBXhDBEQhBBFhBAvIghAYQgtAcgqATQg4AbgxAOIgVAGIgsAeQg1CAhAB4IghA8QinCMjRBUQjqBakJACQkLgCjqhag");
	this.shape_81.setTransform(542.475,808.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AqrURQjohei0ijIgJgKQiojLhgkBQhfkCgCklIAA2DIDSAAIAZTRQAIEdCPDoQCODnDtCJQDuCJEjADQEigDDuiJQDtiJCOjnQCOjoAJkdIAYzRIDOBkIAAASIAXAuIABADQALAjAWApQAVArAgA1IBHCGQAnBLAgBaQAfBRAWBbQAVBXAMBeQALBdAABeQAABggLBdQgJBBgOA/IgLAtQgXBXgoBMQgpBXg5BIQg5BHg6A1IgdAbQgpAhgmAZQg0AigvAYIgUAKIgpAfQg3B4hCBvIgjA4QipCRjWBXQjuBfkQABQkRgBjuhfg");
	this.shape_82.setTransform(542.65,808.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AqLUVQjshii3ipIgJgKQivjJhkkBQhikCgCkmIAA2GIDZAAIATUBQAHEoCSDxQCSDxD1COQD1COEtADQEsgDD1iOQD1iOCSjxQCSjxAHkoIAS0BIDXBMIAAARIAQAwIABADQAJAtAQAxQAQA0AYA7QAXBCAeBNQAeBOAXBZQAYBQAQBYQAQBUAJBZQAIBYAABZQAABagIBZQgHA+gKA8IgJAqQgSBVggBLQghBXgxBKQgvBKgzA7IgaAeQgkAmgkAfQgvAqgtAhIgUAOIglAgQg5BwhFBmIgjA0QitCWjaBbQjzBikWACQkXgCjzhig");
	this.shape_83.setTransform(542.825,809.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("ApqUZQjxhmi6ivIgJgKQi2jGhnkCQhmkBgCknIAA2JIDgAAIAMUwQAGEzCWD6QCXD6D8CTQD8CTE3AEQE2gED8iTQD9iTCWj6QCWj6AGkzIAM0wIDeAzIAAAPIALAxIABAFQAGA2AKA6QALA8AQBCQAQBIATBQQAUBRAQBZQAPBPALBUQALBRAGBUQAFBTAABUQAABUgFBUQgEA7gHA4IgGApQgNBSgZBLQgaBWgnBNQgmBMgsBCIgXAhQggArggAlQgrAxgsArIgSASIghAiQg8BmhHBfIglAuQivCdjfBeQj3BlkcACQkegCj3hlg");
	this.shape_84.setTransform(542.975,809.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ApKUcQj1hoi9i2IgJgKQi9jEhrkBQhqkCgCkoIAA2MIDoAAIAGVgQAEE/CaECQCbECEDCZQEECZFCADQE+gDEEiZQEEiZCakCQCakCAGk/IAG1gIDlAaIAAAPIAGAzIABAGQACBAAGBBQAFBFAIBIQAHBOAKBTQAKBVAIBXQAIBOAGBRQAFBOADBPQACBPABBOQgBBPgCBPIgGBtIgDAoQgIBPgRBJQgSBWgeBPQgdBPgmBJIgTAkQgbAvgdArQgnA6gqAzIgSAXIgeAiQg8BfhLBUIgmArQiyCijjBhQj8BqkiACQkjgCj9hqg");
	this.shape_85.setTransform(543.15,809.55);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AopUgQkBhwjDjCQjCjDhvkBQhukBgCkpIAA2OIDuAAIAAWOQAEFKCeEMQCeELELCeQEMCeFJAEQFKgEEMieQELieCekLQCekMAElKIAA2OIDuAAIAAWOQgCEphtEBQhwEBjCDDQjDDCkBBwQkBBtkpACQkogCkBhtg");
	this.shape_86.setTransform(543.325,809.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AmbVTQhIgVhEgeIgVgKQhPgkhGguQiSheh4h+Qi7jEhqkBQhpkAgCkmIAA2IIDsAAIACWGQADFHCYEMQCXELEBCiQBpBDBzApQCtA2DBACQC8gCCogyQB5grBuhFQEBiiCXkMQCYkMADlGIAC2GIDsAAIAAWIQgCEmhoEBQhrEAi7DEQh0B6iMBcQhHAvhPAlIgeAOQhAAchEAUQjHA7jdABQjXgBjEg4g");
	this.shape_87.setTransform(543.175,809.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AmZVSQhIgThDgfIgVgKQhOglhEgvQiLhghziAQizjGhmkAQhlkAgCkkIAA2BIDsAAIACAjIAAVbQADFFCSELQCREMD2CmQBlBFBuAsQCsA0DBACQC6gCCngxQB0gtBqhHQD2inCRkLQCSkMADlFIAA1PIADguIDrABIAAWAQgCElhkEAQhnEAizDGQhvB7iGBeQhEAwhOAmIgeAPQg/AchEATQjHA5jbABQjWgBjDg3g");
	this.shape_88.setTransform(543.025,809.625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AmXVSQhIgShDgfIgUgKQhNgmhBgyQiFhihviAQirjJhij/QhgkAgCkiIAA15IDrAAIAEAhIAAVUQADFDCLEMQCLELDrCqQBgBGBpAvQCtAyC/ACQC5gCCnguQBvgwBlhKQDriqCLkLQCLkNADlCIAA1IIAFgsIDhAAIAJABIAAV6QgCEhhgEAQhiD/irDJQhrB8iABgQhBAyhNAmIgeAQQg/AbhDATQjGA3jaAAQjVAAjCg1g");
	this.shape_89.setTransform(542.875,809.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AmVVSQhJgShCgfIgUgKQhMgng9gyQiAhlhpiDQijjKhej+Qhcj/gBkgIAA1yIDpAAIAFAfIAAVNQADFACFENQCFEKDgCwQBcBIBkAxQCsAwC+ACQC4gCCngsQBpg0BhhLQDgivCFkLQCFkMADlBIAA1AIAHgqIDfAAIAIABIAAVyQgBEhhcD/QheD+ijDKQhmB9h6BjQg+AzhMAoIgeAPQg+AchDASQjGA0jYABQjTgBjCgyg");
	this.shape_90.setTransform(542.725,809.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AmUVSQhIgRhBggIgUgKQhLgng7g1Qh5hohkiDQicjLhZj+QhXj/gCkeIAA1rIDoAAIAHAeIAAVGQADE9B+EOQB+EKDWC0QBYBJBfA1QCsAtC8ACQC3gBCmgqQBlg3BchNQDWi0B+kLQB+kMADk+IAA06IAJgoIDeAAIAIABIAAVrQgCEfhXEAQhZD9icDLQhgB/h1BlQg7A2hLAnIgdAPQg+AdhDARQjGAxjWABQjSgBjCgvg");
	this.shape_91.setTransform(542.575,809.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AmSVSQhIgRhBgfIgUgLQhJgog4g2QhzhqhgiFQiTjNhVj8QhTj/gCkdIAA1kIDnAAIAIAdIAAU/QADE8B4EMQB4ELDLC4QBTBMBbA3QCrArC7ABQC2gBCmgoQBgg6BXhPQDLi3B4kLQB4kNADk8IAA0zIAKgmIDdAAIAIACIAAVkQgCEchTEAQhVD8iTDOQhcB/hvBoQg4A3hKAoIgdAQQg9AdhDAQQjFAvjVABQjRgBjBgtg");
	this.shape_92.setTransform(542.425,809.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AmQVSQhJgQg/ghIgUgKQhJgpg1g3QhththaiFQiMjQhQj8QhPj/gBkZIAA1dIDlAAIAKAbIAAU4QACE5ByENQByELDAC8QBPBNBWA6QCrApC6ACQC0gCClglQBbg9BThQQDAi9BykLQBykNACk5IAA0sIAMgkIDcAAIAHADIAAVcQgBEbhPD+QhQD8iMDPQhXCBhpBpQg1A5hJAqIgdAPQg8AdhEAQQjEAsjTABQjQgBjAgqg");
	this.shape_93.setTransform(542.275,809.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AmPVSQhIgPg/ghIgTgLQhIgpgyg6QhnhuhViHQiFjRhLj8QhLj+gBkYIAA1VIDlAAIAKAZIAAUxQADE3BrENQBsELC1DAQBLBPBRA+QCqAmC5ABQCzgBClgkQBWg/BOhTQC1jABskLQBrkNADk3IAA0lIAOgiIDaAAIAHACIAAVWQgBEYhLD/QhLD7iFDRQhSCChjBsQgyA6hIAqIgcAQQg8AehEAOQjDAqjSAAQjOAAjBgog");
	this.shape_94.setTransform(542.125,808.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AmNVRQhIgNg/giIgTgLQhGgqgvg7QhhhxhRiIQh8jThHj7QhGj9gCkXIAA1OIDkAAIAMAYIAAUqQACE1BlENQBlELCrDEQBGBRBNBAQCqAkC3ACQCygCClghQBQhDBKhUQCrjFBlkLQBlkNACk1IAA0eIAQggIDZAAIAHADIAAVOQgCEXhGD+QhHD7h8DSQhOCDhdBvQgvA8hHAqIgcAQQg7AehEAOQjDAnjQABQjNgBjAgmg");
	this.shape_95.setTransform(541.975,808.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AmLVRQhJgNg9ghIgTgMQhGgrgsg8Qhbh0hLiJQh1jUhCj7QhCj9gBkUIAA1HIDiAAIANAWIAAUjQACEyBfEOQBfELCgDJQBCBSBIBDQCpAiC2ABQCxgBCkggQBMhFBFhWQCgjJBfkLQBfkOACkyIAA0XIARgeIDYAAIAGADIAAVHQgBEVhBD+QhDD5h1DVQhJCEhXBxQgsA9hGAsIgcAQQg6AehEANQjCAljPAAQjMAAi/gkg");
	this.shape_96.setTransform(541.825,808.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AmKVRQhIgMg9giQgJgFgJgHQhFgrgpg/QhVh2hGiKQhtjWg+j6Qg+j9gBkSIAA1AIDhAAIAPAVIAAUcQACEwBYEOQBZEKCVDOQA+BUBCBGQCqAfC0ABQCwgBCkgdQBGhJBBhYQCVjNBZkLQBYkOACkwIAA0QIATgcIDXAAIAGAEIAAVAQgBESg9D+Qg/D5htDWQhDCFhSB0QgpA/hFAsIgbAQQg6AfhEAMQjCAijNABQjLgBi/ghg");
	this.shape_97.setTransform(541.675,808.675);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AmIVRQhIgLg8gjIgTgMQhDgsgnhAQhOh5hCiLQhljYg5j5Qg5j8gBkRIAA04IDfAAIAQATIAAUVQACEtBSEPQBSEKCLDSQA5BWA+BIQCpAeCzABQCvgBCjgcQBChLA8haQCLjSBSkKQBSkOACkuIAA0JIAUgaIDWAAIAFAEIAAU4QgBERg4D9Qg6D5hlDYQg/CGhMB2QgmBAhEAtIgbARQg5AfhEALQjBAgjMAAQjKAAi+gfg");
	this.shape_98.setTransform(541.525,808.575);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AmGVRQhJgKg7gjIgSgMQhDgtgjhCQhJh7g8iMQhdjag2j4Qg0j9gBkOIAA0yIDeAAIASATIAAUNQABEsBMEOQBMEKCBDWQA0BYA5BMQCoAbCzABQCtgBCjgZQA9hPA2hcQCBjWBMkKQBMkPABkrIAA0DIAXgYIDUAAIAFAFIAAUxQgBEPg0D9Qg2D4hdDZQg6CIhGB4QgkBDhCAtQgNAJgOAHQg5AghDAKQjBAdjKABQjIgBi+gcg");
	this.shape_99.setTransform(541.375,808.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AmEVRQhJgKg7gjIgSgMQhBgugghDQhDh+g3iNQhWjcgxj3Qgwj8gBkNIAA0qIDdAAIATARIAAUGQACEpBFEPQBGEKB2DaQAvBaA1BOQCoAZCxABQCsgBCjgXQA3hRAyheQB2jaBGkLQBFkOACkpIAAz8IAYgWIDTAAIAFAFIAAUqQgBENgwD9QgxD2hWDcQg1CJhAB6QghBEhBAuQgNAJgOAIQg4AghDAJQjBAbjIAAQjHAAi9gag");
	this.shape_100.setTransform(541.225,808.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AmDVRQhIgJg6gkIgSgMQhAgugehFQg8iAgziPQhNjegtj2Qgsj8AAkLIAA0jIDcAAIAUAQIAAT/QABEnA/EPQBAEKBrDeQArBcAwBRQCnAXCwAAQCrAACigVQAzhVAthgQBrjeBAkKQA/kPABknIAAz1IAagUIDSAAIAEAGIAAUjQAAELgsD8QgtD2hNDdQgxCKg6B9QgeBGhAAuIgaARQg4AghEAJQi/AYjIABQjFgBi9gXg");
	this.shape_101.setTransform(541.075,808.225);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AmBVRQhJgIg5gkIgRgNQhAgvgahHQg3iCgtiQQhGjfgoj2Qgnj8gBkIIAA0cIDbAAIAVAOIAAT4QACEkA4EQQA5EKBhDjQAnBdArBUQCnAUCuABQCqgBCigTQAthXAphiQBhjjA5kKQA4kPACkkIAAzuIAbgSIDRAAIAEAGIAAUbQgBEJgnD8QgoD2hGDfQgsCLg0B/QgbBHg/AwIgaARQg3AghEAIQi/AWjGAAQjEAAi8gVg");
	this.shape_102.setTransform(540.925,808.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Al/VQQhJgHg4gkIgSgNQg+gwgYhIQgwiFgoiRQg+jhgkj1Qgjj7gBkHIAA0VIDaAAIAXANIAATxQABEiAyEPQAzELBWDnQAiBfAnBWQCmATCtAAQCpAAChgRQAphbAkhjQBWjnAzkKQAykQABkiIAAznIAdgQIDQAAIAEAHIAAUUQgBEHgjD8QgkD0g+DhQgnCMguCCQgYBJg+AwQgNAJgNAIQg2AhhEAHQi+ATjFABQjDgBi7gTg");
	this.shape_103.setTransform(540.775,808.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Al+VQQhIgGg4gkIgRgOQg9gwgVhKQgqiHgkiSQg2jkgfj0Qgfj6AAkFIAA0OIDYAAIAYALIAATqQABEgAsEPQAtEKBLDsQAeBhAiBaQCmAPCrABQCogBChgPQAjhdAghmQBLjrAtkJQAskQABkgIAAzgIAfgOIDOAAIADAHIAAUNQAAEFgfD8QgfD0g2DiQgiCNgpCEQgVBKg9AxQgMAKgNAIQg2AhhEAFQi+ASjDAAQjBAAi8gRg");
	this.shape_104.setTransform(540.625,807.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Al8VQQhJgFg3gmIgQgMQg9gygRhLQgliLgeiSQgvjlgaj0Qgaj7gBkCIAA0HIDXAAIAaAJIAATkQABEdAmEQQAlEKBBDwQAaBiAcBdQCmANCrABQCmgBChgMQAehhAbhmQBBjxAlkJQAmkQABkdIAAzZIAhgNIDOAAIACAHIAAUGQgBEEgaD7QgaDzgvDkQgdCOgjCHQgSBMg8AyIgZASQg1AghEAFQi9APjCABQjAAAi7gPg");
	this.shape_105.setTransform(540.475,807.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Al6VQQhJgFg2glIgRgNQg7gzgPhMQgeiNgZiUQgnjngWj0QgWj5gBkBIAAz/IDWAAIAbAHIAATdQABEcAgEPQAfEKA2D0QAVBkAYBgQCmALCpAAQClAACggKQAZhkAXhpQA2j0AfkKQAgkQABkbIAAzSIAigKIDNAAIACAHIAAT/QgBECgWD6QgWDygnDnQgYCPgdCJQgPBOg7AyIgZASQg0AihEADQi9ANjAAAQi/AAi6gMg");
	this.shape_106.setTransform(540.325,807.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Al5VQQhIgDg2gnIgQgNQg6gzgMhPQgYiPgUiVQggjpgRjzQgSj5AAj/IAAz3IDVAAIAcAFIAATWQAAEZAaEQQAZEKArD4QARBmATBjQClAICoABQCkgBCggHQAUhnAShrQArj4AZkLQAakPAAkZIAAzLIAkgIIDMAAIABAHIAAT4QAAD/gSD6QgRDyggDoQgTCRgXCLQgMBPg6AzQgMAKgMAIQg0AihEAEQi9AJi+AAQi+AAi6gJg");
	this.shape_107.setTransform(540.175,807.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("Al3VQQhJgDg0gnIgRgNQg5g0gJhQQgSiRgPiXQgXjrgNjyQgOj4AAj+IAAzwIDUAAIAdAEIAATOQABEYATEQQATEKAgD8QANBoAOBmQClAGCmABQCjgBCfgGQAQhpANhtQAgj9ATkKQATkQABkXIAAzEIAmgGIDKAAIABAIIAATwQAAD+gND6QgODxgXDqQgPCSgRCNQgJBRg5A0QgMAJgMAJQgzAihEADQi8AGi9ABQi8gBi6gGg");
	this.shape_108.setTransform(540.025,807.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Al1VQQhJgCg0gnIgQgOQg4g0gGhSQgMiUgKiXQgQjtgJjxQgIj5AAj7IAAzpIDSAAIAfADIAATHQAAEUANERQAMEKAWEBIASDRQCkAFClAAQCiAACfgEIATjcQAWkBAMkJQANkRAAkUIAAy9IAogEIDJAAIAATxQAAD8gID5QgJDxgQDrQgKCTgLCQQgGBTg4A0IgYASQgzAjhEABQi7AFi8AAQi6AAi5gEg");
	this.shape_109.setTransform(539.875,807.375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AlzVPQhJAAg0goIgPgOQg3g1gDhTIgLkvQgIjvgFjwQgEj5AAj5IAAziIDxACIAATAQAAESAHERQAGEJALEGIAJDWQCkACCkAAQCgAACfgCIAJjgQALkFAGkKQAHkQAAkTIAAy2IDxgCIAATrQAAD6gED5QgFDwgIDtQgECUgGCSQgDBUg3A1QgLAKgNAJQgyAjhEAAQi6ADi7AAQi5AAi4gDg");
	this.shape_110.setTransform(539.725,807.275);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AlyVPQhVAAg2g2Qg2g1AAhWMAAAgncIDyAAMAAAAnIIKDAAMAAAgnIIDyAAMAAAAncQAABWg2A1Qg4A2hVAAg");
	this.shape_111.setTransform(539.575,807.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56}]}).to({state:[{t:this.shape_56}]},14).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_86}]},11).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).wait(12));

	// Слой_1___копия___копия
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AC5SyIAAtPIlxAAIAANPItuAAMAAAgljINuAAIAAMfIFxAAIAAsfINuAAMAAAAljg");
	this.shape_112.setTransform(538.825,1240.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("ADbS1IAAnfQgBhqgFhoQgFhngJhiIgBgKQhigFhkAAQhjAAhiAEIgBAOQgJBhgFBlQgFBogBBqIAAHfItYAAIAA5xQAAlKAElJIABhSQESgIEUgFIE6gGIAIExIAOHLIC5AAIC2AAIAOnLIAIkxIE9AGQETAFEQAIIABBSQAEFJAAFLIAAZwItYAAg");
	this.shape_113.setTransform(538.975,1240.575);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AD8S5IAAoAQAAhygLhuQgKhsgShlIgCgKQhogKhrAAQhrAAhmAKIgDANQgSBjgKBrQgLBuAAByIAAIAItDAAIAA5qQAAlJAIlGIAChSQEMgPEQgLQCbgHCcgFIAQEiIAaG4IC5gBIC1ABIAbm4IAQkiQCdAFCdAHQEPALEKAPIACBSQAIFHAAFJIAAZpItDAAg");
	this.shape_114.setTransform(539.125,1240.975);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AEdS8IAAohQAAh5gQh0QgQhxgahnIgDgKQhugOhygBQhyAAhsAOIgEAOQgaBlgQBwQgQB0AAB5IAAIhIsuAAIAA5iQAAlHALlEIADhRQEGgXENgQQCZgKCbgIIAYETQASDPAVDWIC4gBIC1ABIAnmlIAYkTQCcAICaAKQEMAQEFAXIADBRQALFEAAFIIAAZhIsuAAg");
	this.shape_115.setTransform(539.275,1241.35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AE/S/IAApBQgBiBgVh5QgVh3gkhpIgDgLQhzgTh6AAQh5AAhyATIgEAOQgkBngVB2QgVB5gBCBIAAJBIsYAAIAA5ZQABlHAOlCIAEhQQEAgdEJgXQCYgNCYgKQAPCBASCDQAYDFAcDMIC3gBIC0ABQAbjMAZjFQASiEAOiAQCbAKCYANQEIAXD/AdIAEBQQAOFCABFIIAAZYIsYAAg");
	this.shape_116.setTransform(539.425,1241.725);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AFgTDIAApiQgBiKgah+Qgah9gthrIgFgKQh4gZiBAAQiAAAh3AXIgGAOQgtBqgaB8QgaB+gBCKIAAJiIsDAAIAA5SQABlGASk/IAFhQQD6glEGgcQCVgQCXgMQATB4AVB8QAfC7AjDCIC2gBICzABQAjjCAfi7QAVh8ATh4QCYAMCXAQQEEAcD5AlIAFBQQASE/ABFHIAAZRIsDAAg");
	this.shape_117.setTransform(539.575,1242.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AGBTGIAAqCQgBiRgfiEQggiDg1htIgGgLQh+gdiIAAQiHAAh9AcIgHAOQg1BsggCCQgfCEgBCRIAAKCIruAAIAA5KQABlFAWk8IAFhQQD1grECgiQCTgUCWgPQAWBxAaB1QAlCwAqC6QBbgCBaAAQBZAABZACQAqi7AlivQAah1AWhxQCXAPCUAUQEBAiD0ArIAGBQQAVE9ABFFIAAZJIruAAg");
	this.shape_118.setTransform(539.725,1242.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AGiTJIAAqjQAAiYgliKQgliJg+huIgHgMQiDggiQgBQiPABiBAfIgJAPQg+BuglCHQglCKAACYIAAKjIrZAAIAA5CQABlDAZk7IAHhOQDvgzD+goQCRgWCVgSQAaBpAeBtIBcFXQBagCBaAAQBZAABYACQAxiyArilQAehtAahpQCWARCSAXQD9AoDuAzIAHBOQAZE7ABFEIAAZBIrZAAg");
	this.shape_119.setTransform(539.875,1242.925);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AHETMIAArCQgBihgqiQQgqiNhIhwIgHgMQiJgmiXgBQiWABiHAkIgJAPQhIBvgqCNQgqCQgBChIAALCIrDAAIAA46QABlCAdk4IAIhOQDpg6D6gtQCPgaCTgVQAeBhAiBnIBqFEQBZgDBaAAQBYAABYADIBqlEQAihnAehhQCUAVCPAaQD6AtDoA6IAIBOQAdE4ABFDIAAY5IrDAAg");
	this.shape_120.setTransform(540.025,1243.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AHlTQIAArkQgBiogviVQgwiUhQhyIgIgLQiOgrifgBQidABiNApIgKAPQhQBxgwCTQgvCVgBCoIAALkIquAAIAA4yQABlCAhk1IAJhNQDjhBD3gzQCNgeCRgXQAiBaAmBfIB2EwQBagCBZgBQBYABBXACIB3kwQAmhgAihZQCSAXCOAeQD2AzDjBBIAIBNQAhE2ABFBIAAYyIquAAg");
	this.shape_121.setTransform(540.175,1243.675);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AIGTTIAAsEQgBiwg0ibQg1iYhZh1IgJgMQiUgwimgBQikABiSAuIgMAQQhZB0g1CXQg0CbgBCwIAAMEIqZAAIAA4qQABlAAkkzIAKhNQDehIDzg5QCLghCQgZQAlBRArBYICDEdQBZgDBZAAQBXAABXADQBGiYA+iFQArhYAlhRQCRAZCMAhQDyA5DdBIIAKBNQAkEzABFAIAAYqIqZAAg");
	this.shape_122.setTransform(540.325,1244.075);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AIoTWIAAskQgCi3g5ihQg6ifhih2IgLgNQiZgzitgCQirABiYAzIgNAPQhiB2g6CeQg5ChgCC3IAAMkIqDAAIAA4iQABk/AokxIALhMQDYhPDvg/QCJgjCOgdIBYCbQBFB6BMCQQBYgDBZgBQBXABBWADQBNiQBFh6IBYibQCPAcCJAkQDvA/DXBPIALBMQAoExABFAIAAYhIqDAAg");
	this.shape_123.setTransform(540.475,1244.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AJJTaIAAtFQgBi/hAimQg/ilhrh5IgLgMQieg5i1gBQiyABidA3IgOAQQhrB4g/CkQhACmgBC/IAANFIpuAAIAA4bQABk+AsktIAMhMQDShXDrhEQCHgnCNgeIBgCLQBLBwBTCGQBYgDBXgBQBYABBVADQBUiGBLhwIBgiMQCOAfCHAnQDrBEDSBXIALBMQAsEuABE+IAAYaIpuAAg");
	this.shape_124.setTransform(540.625,1244.825);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AJqTdIAAtmQgBjGhFisQhEiqh0h7IgMgMQikg+i8gCQi6ACiiA8IgPAQQh0B6hECpQhFCsgBDGIAANmIpZAAIAA4TQABk8AwksIAMhLQDNheDohJQCEgrCMghIBoB8QBRBmBaB9QBXgDBXgBQBXABBWADQBah9BRhmIBoh8QCMAhCGArQDnBJDMBeIANBLQAvEsABE9IAAYSIpZAAg");
	this.shape_125.setTransform(540.775,1245.225);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AKMTgIAAuFQgCjPhKixQhJiwh9h9IgNgNQiqhDjDgBQjBABinBBIgRAQQh9B8hJCwQhKCxgCDPIAAOFIpDAAIAA4LQABk7AzkpIAOhKQDHhlDkhQQCDgtCJgkIBxBtQBXBbBhB0QBWgDBXAAQBXAABVADQBhh1BXhaIBwhtQCLAjCDAuQDkBQDGBlIAOBKQAzEpABE8IAAYKIpDAAg");
	this.shape_126.setTransform(540.925,1245.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AKtTkIAAunQgCjWhPi2QhPi3iFh/IgOgNQivhHjLgCQjIACitBFIgRARQiGB+hPC2QhPC2gCDWIAAOnIouAAIAA4EQABk6A3kmIAPhKQDBhtDghVQCBgwCIgnQA4AqBAA1QBeBQBoBsQBWgFBWAAQBWAABVAFQBohtBehPQBAg1A4gqQCJAmCBAxQDgBVDBBtIAOBKQA3EmABE7IAAYDIouAAg");
	this.shape_127.setTransform(541.075,1246.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("ALOTnIAAvIQgCjdhUi8QhUi8iPiBIgOgNQi1hMjSgCQjPACizBKIgSAQQiPCBhUC7QhUC8gCDdIAAPIIoZAAIAA37QABk6A7kkIAPhJQC7h0DehaQB+g0CHgpQA8AiBEAuQBjBFBvBjQBWgFBWAAQBWAABUAFQBvhjBkhFQBEguA8giQCHAoCAA1QDcBaC7B0IAQBJQA6ElABE5IAAX7IoZAAg");
	this.shape_128.setTransform(541.225,1246.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("ALwTqIAAvnQgCjmhajBQhZjCiYiDIgQgOQi6hQjZgCQjWACi4BOIgUARQiYCDhZDBQhaDBgCDmIAAPnIoDAAIAA3zQABk4A+kiIARhIQC1h7DahhQB8g3CFgrQBAAaBJAmQBpA7B2BaQBVgFBWAAQBVAABUAFQB2hbBqg6QBJgmA/gaQCGArB9A3QDZBhC1B7IARBIQA+EiABE4IAAXzIoDAAg");
	this.shape_129.setTransform(541.375,1246.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AMRTuIAAwJQgCjshfjIQhfjHigiGIgRgNQi/hWjhgCQjeACi9BTIgVARQigCFhfDHQhfDIgCDsIAAQJInuAAIAA3sQABk3BCkfIAShIQCviCDWhmQB6g7CEguQBEATBMAfQBwAwB9BRQBVgFBVAAQBVAABTAFQB9hSBxgvQBMgfBEgTQCEAuB7A7QDVBmCvCCIASBIQBCEfABE3IAAXsInuAAg");
	this.shape_130.setTransform(541.525,1247.175);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AMyTxIAAwpQgCj0hkjOQhkjNiqiHIgRgOQjFhajogCQjlACjCBYIgWARQiqCHhkDMQhkDOgCD0IAAQpInZAAIAA3kQACk1BFkdIAThHQCpiKDShrQB5g/CCgvQBHAKBRAXQB2AmCEBJQBUgGBVAAQBVAABSAGQCEhJB3gmQBRgXBHgLQCDAwB5A/QDRBrCqCKQAKAjAIAkQBFEdACE1IAAXkInZAAg");
	this.shape_131.setTransform(541.675,1247.55);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("ANUT0IAAxJQgDj8hpjTQhpjTiziJIgSgOQjKhfjwgCQjsACjIBcIgXASQizCJhpDSQhpDTgDD8IAARJInDAAIAA3cQACk0BJkaQAJgkAKgjQCkiRDPhxQB2hBCAgzQBLADBWAQQB8AbCLBAQBTgFBVgBQBUABBSAFQCLhAB9gbQBWgRBKgCQCBAzB3BBQDOBxCkCRIAUBHQBIEaACE1IAAXbInDAAg");
	this.shape_132.setTransform(541.825,1247.925);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AN1T5IAAxqQgDkEhujZQhvjYi7iMIgTgOQjQhjj3gDQjzADjNBgIgZASQi7CLhvDYQhuDZgDEEIAARqImuAAIAA3VQACkzBMkYIAVhFQCeiZDLh3QB0hEB/g1QBPgGBZAKQCDAQCSA3QBTgGBUAAQBUAABRAGQCSg4CEgPQBZgKBPAFQB/A2B1BEQDKB3CeCZIAVBFQBMEYACE0IAAXUImuAAg");
	this.shape_133.setTransform(541.975,1248.2388);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AOWUAIAAyKQgCkLh0jfQh0jejEiOIgUgOQjWhoj+gDQj6ADjTBlIgaASQjECNh0DeQh0DfgCELIAASKImZAAIAA3MQACkyBQkVQAKgjAMgjQCYifDHh9QByhHB+g4QBSgNBeACQCJAFCYAvQBTgGBUgBQBTABBRAGQCZgvCKgFQBegDBSANQB+A4BzBIQDGB9CZCfQALAjAKAjQBQEVACEyIAAXMImZAAg");
	this.shape_134.setTransform(542.125,1248.1548);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AO4ULIAAyqQgDkTh5jkQh5jkjOiQIgVgOQjahukGgCQkBACjZBqIgaATQjOCPh5DkQh5DkgDETIAASqImDAAIAA3EQACkxBUkTQAKgiAMgiQCTinDDiCQBwhLB8g7QBXgVBigFQCPgFCfAmQBSgGBUgBQBTABBRAGQCfgmCQAFQBiAFBWAVQB9A7BwBLQDECCCSCnIAXBEQBTETACExIAAXEImDAAg");
	this.shape_135.setTransform(542.275,1247.7656);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("APZUZIAAzMQgDkah+jqQh/jqjWiSIgWgOQjghykNgDQkJADjdBuIgcATQjWCRh/DqQh+DqgDEaIAATMIluAAIAA29QACkwBXkQIAYhEQCNiuDAiIQBuhOB6g9QBagdBngMQCVgQCmAdQBSgGBTgBQBSABBRAGQCmgdCWAQQBnAMBZAcQB7A+BvBOQDACICMCuQANAiALAiQBXEQACEwIAAW9IluAAg");
	this.shape_136.setTransform(542.425,1247.1687);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AP6UoIAAzsQgDkiiDjvQiEjwjfiTIgXgPQjmh3kUgDQkQADjjBzIgdATQjfCUiEDvQiDDvgDEiIAATsIlZAAIAA20QACkvBbkOQAMgiANghQCHi1C8iOQBshRB5hAQBeglBqgTQCcgbCtAVQBRgHBTAAQBSAABQAHQCtgVCdAbQBqATBeAkQB5BABsBSQC9COCHC1QANAhALAiQBbEOACEvIAAW0IlZAAg");
	this.shape_137.setTransform(542.575,1246.3235);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AQbU8IAA0MQgDkriIj1QiJj1joiVIgYgPQjrh8kcgDQkXADjoB4IgfATQjoCWiJD0QiID1gDErIAAUMIlEAAIAA2tQACktBfkMIAZhCQCCi9C4iTQBqhVB4hCQBhgtBvgaQCiglC0AMQBQgIBTAAQBRAABQAIQC1gNCiAmQBvAaBhAtQB4BCBqBVQC5CTCBC9IAaBCQBeEMACEtIAAWtIlEAAg");
	this.shape_138.setTransform(542.725,1245.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AQ9VRIAA0tQgDkyiPj7QiOj7jxiXIgYgPQjxiBkjgDQkeADjuB9IgfATQjxCYiOD6QiPD7gDEyIAAUtIkuAAIAA2lQACktBjkJQAMghAOghQB8jDC0iZQBohYB2hFQBlg0B0giQCogwC7ADQBQgHBRgBQBSABBPAHQC8gDCoAwQB0AhBkA1QB3BEBoBZQC1CZB7DDQAOAhANAhQBiEJACEtIAAWlIkuAAg");
	this.shape_139.setTransform(542.875,1243.725);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AReVlIAA1NQgDk6iUkAQiTkAj6iaIgZgPQj2iFkrgEQklAEj0CAIggAUQj6CaiTEAQiUEAgDE6IAAVNIkZAAIAA2dQACkrBmkHQANghAPggQB1jLCyieQBlhbB1hIQBpg8B3gpQCug7DDgFQBPgIBRAAQBSAABOAIQDDAFCvA7QB3AoBpA9QB0BHBmBcQCyCeB2DLQAOAgANAhQBmEHACErIAAWdIkZAAg");
	this.shape_140.setTransform(543.025,1242.375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AR/V6IAA1uQgDlBiZkGQiYkGkDicIgbgQQj7iJkygEQktAEj4CFQgRAJgRALQkDCciYEGQiZEGgDFBIAAVuIkEAAIAA2VQACkqBqkEQAOghAPggQBvjSCuilQBkheBzhKQBshEB8gwQC0hFDJgOQBPgJBRAAQBRAABOAJQDKANC1BGQB8AwBsBEQBzBKBkBeQCuClBwDSQAPAgANAhQBqEEACEqIAAWVIkEAAg");
	this.shape_141.setTransform(543.175,1241.025);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AShWPIAA2PQgElJiekLQiekMkLieQkMielKgEQlJAEkMCeQkLCeieEMQieELgEFJIAAWPIjuAAIAA2PQACkoBukBQBvkBDCjDQDDjCEBhvQEBhuEogCQEpACEBBuQEBBvDDDCQDCDDBwEBQBtEBACEoIAAWPg");
	this.shape_142.setTransform(543.325,1239.675);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("ASBV5IgM13QgGlEibkIQiakIkDifQkEifk+gLQgzgBgxADQkDAejYCGQkBCfiYEJQiXEJgEFEIAAV5IjtAAIAA2SQACkqBpkDQBnj5CxjCIAOgNQA2gzA5gsQCXhxC4hFQD7heEhAKQEiARD8B4QBHAiBCApQCbAwCBBUIARARQBmBiBRBzQBEBuAzB7QBoEFACErIAAWZIjrAAg");
	this.shape_143.setTransform(543.175,1241.6062);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("ARiVlIgZ1gQgJk+iWkEQiXkFj7igQj8igk0gSQgxgCgwACQj4AijPCIQj2ChiREFQiREGgEE/IAAVkIjtAAIAA2XQACkpBlkGQBij6CqjGIAPgNQA2gwA7grQCUhjCzg6QD0hOEaAVQEcAhD3CDQBGAlBBAsQCUAEB7AoIARAQQBnBeBSBvQBBBvAxB9QBkEIACEtIAAWlIjoAAg");
	this.shape_144.setTransform(543.025,1243.3927);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("ARCVSIgl1JQgLk3iTkCQiTkBjzihQj0ihkpgZQgwgEguABQjtAojGCJQjrCiiLEDQiLEDgDE5IAAVPIjtAAIAA2bQACkqBgkIQBej8CijJIAPgMQA4gvA8gpQCQhWCvguQDug+ESAgQEWAwDyCPQBFAoA/AuQCPgmB1gEIARAPQBnBaBTBpQA+ByAvB+QBgEMABEuIAAWxIjlAAg");
	this.shape_145.setTransform(542.875,1245.0161);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AQiVBIgx0xQgNkyiQj/QiPj9jriiQjsiikeghQgugEgtgBQjiAui9CKQjhCjiFEAQiEEAgDE0IAAU6IjtAAIAA2gQACkqBckKQBaj9CbjNIAPgMQA5gsA9gnQCNhJCqgkQDoguELAtQEOA/DvCaQBDArA+AxQCIhSBwgwIARAOQBnBWBTBlQA8BzAtCAQBbEPACEwIAAW9IjjAAg");
	this.shape_146.setTransform(542.725,1246.4559);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AQDUyIg90aQgRksiMj7QiLj7jjiiQjjijkVgoQgsgGgrgCQjYA0i0CLQjWClh+D8Qh+D+gDEuIAAUlIjsAAIAA2kQABkrBYkMQBWj/CTjQIAQgMQA6gqA9glQCKg8ClgYQDjgeEDA4QEIBPDqCkQBBAuA+A0QCBh8BrhdIARANQBnBSBUBgQA6B2AqCBQBXETABEyIAAXIIjfAAg");
	this.shape_147.setTransform(542.575,1247.7017);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("APjUlIhJ0CQgTkniIj3QiIj3jbijQjbilkKgvQgrgHgpgDQjNA5irCMQjLCnh4D5Qh4D7gDEpIAAUPIjsAAIAA2oQACkrBTkOQBRkACNjVIAQgLQA7goA+gjQCHgvCggMQDdgOD7BDQECBeDlCwQBAAxA8A2IDgkxIASANQBnBOBVBbQA3B4AoCCQBSEXACE0IAAXTIjdAAg");
	this.shape_148.setTransform(542.425,1248.7048);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("APDUcIhVzrQgVkhiFj0QiEj0jTikQjTilkAg2QgpgIgngGQjCA/iiCOQjBCnhyD3QhyD4gCEjIAAT7IjrAAIAA2tQABksBPkPQBNkCCFjZIAQgKQA8gmBAghQCDghCcgCQDWACD0BPQD8BtDgC7QA/A0A7A5QB0jSBgi2IASAMQBnBKBWBWQA0B6AlCEQBPEZABE2IAAXgIjaAAg");
	this.shape_149.setTransform(542.275,1249.425);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AOkUVIhizUQgYkbiBjxQiAjwjLilQjLimj1g+QgngJgngHQi3BFiZCPQi2CphrDzQhsD1gCEfIAATlIjrAAIAA2xQACktBKkRQBJkEB9jcIARgJQA9gkBAggQCBgUCXAKQDQASDsBaQD1B9DcDGQA+A3A5A7QBuj8BbjjIASAMQBnBFBXBSQAxB8AjCFQBLEdABE4IAAXrIjXAAg");
	this.shape_150.setTransform(542.125,1249.8583);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AOEUTIhuy9QgakVh+juQh8jsjDimQjDinjrhFQglgKglgIQisBKiQCQQirCqhlDxQhmDygCEZIAATQIjqAAIAA22QABksBGkUQBFkFB2jgIARgJQA+giBBgdQB9gHCTAVQDKAhDkBnQDvCMDXDQQA8A6A5A/QBnkoBWkPIARALQBoBCBYBMQAuB+AhCHQBGEgABE6IAAX3IjUAAg");
	this.shape_151.setTransform(541.975,1249.814);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("ANlUWIh6ylQgekQh5jqQh5jpi7imQi7ipjghMQgkgMgjgJQiiBPiHCSQigCshfDtQhfDvgCEUIAAS7IjqAAIAA26QACktBBkWQBBkGBujkIARgJQBAgfBCgcQB6AGCOAhQDEAxDcByQDpCbDSDcQA7A9A4BBQBglSBRk8IARAKQBoA+BZBIQArCAAfCIQBCEkABE7IAAYDIjRAAg");
	this.shape_152.setTransform(541.825,1249.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("ANFUaIiGyOQggkJh2joQh1jlizinQiziqjVhTQgjgNghgLQiXBVh+CTQiWCthYDqQhZDtgCEOIAASmIjpAAIAA2/QABktA9kYQA8kIBojnIARgIQBBgeBCgaQB3AUCKAsQC+BBDUB9QDjCrDNDnQA6BAA2BEQBbl+BKloIASAKQBoA5BaBDQAoCCAdCKQA9EnABE+IAAYOIjOAAg");
	this.shape_153.setTransform(541.675,1248.625);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AMlUeIiSx3QgikEhzjkQhxjhirioQirisjLhZQgggPgggMQiMBah1CUQiLCvhTDnQhSDqgCEJIAASRIjpAAIAA3DQACkvA4kZQA4kJBgjsIASgHQBBgcBEgXQB0AgCFA3QC4BRDMCKQDdC5DIDyQA4BEA2BGQBUmoBFmVIASAJQBoA2BbA9QAlCEAbCMQA5EqABFAIAAYaIjMAAg");
	this.shape_154.setTransform(541.525,1248);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AMFUhIiexfQglj+hvjhQhujeiiipQijirjBhjIg9gdQiBBhhsCVQiBCwhLDkQhMDngCEEIAAR7IjoAAIAA3HQAAkuA1kcQAzkLBZjwIASgGQBDgZBEgWQBxAtCABDQCyBhDFCUQDWDKDED9QA3BGA0BJQBNnTBAnBIASAIQBoAxBcA6QAjCGAZCMQA0EvABFAIAAYmIjJAAg");
	this.shape_155.setTransform(541.425,1247.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("ALmUlIirxIQgoj4hrjeQhqjaiaiqQibiti2hpQgdgRgdgPQh3BmhjCXQh1CxhGDiQhFDjgCD+IAARnIjoAAIAA3MQABkvAwkeQAvkMBRjzIATgGQBDgXBGgUQBtA6B8BPQCsBwC9ChQDQDYC/EIQA1BJAzBMQBHn+A7ntIASAHQBoAtBdA1QAgCIAXCOQAwEyABFCIAAYyIjGAAg");
	this.shape_156.setTransform(541.275,1246.775);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("ALGUpIi3wxQgqjzhojZQhmjXiSirQiSiuithwIg2gjQhsBshaCYQhrCyg/DfQg/DhgCD5IAARRIjnAAIAA3QQAAkwAskfQArkOBKj3IATgFQBEgVBHgTQBqBIB3BaQCmCAC1CsQDJDoC7ETQA0BMAyBPQBBopA1oaIASAHQBoApBeAwQAdCKAVCPQArE1ABFFIAAY9IjDAAg");
	this.shape_157.setTransform(541.125,1246.125);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AKmUtIjDwaQgsjthkjWQhjjUiKirQiKiviih4IgzglQhhByhRCZQhhC0g5DbQg4DegCDzIAAQ9IjnAAIAA3VQABkwAnkhQAnkQBCj6IATgGQBGgSBHgRQBnBVBzBlQCfCRCuC3QDDD3C2EfQAzBOAxBSQA6pUAwpHIASAGQBoAlBfAsQAaCMATCRQAnE4ABFHIAAZJIjBAAg");
	this.shape_158.setTransform(540.975,1245.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AKHUxIjQwCQgvjohgjTQhfjQiCisQiCiwiXh/IgwgoQhXB3hICaQhVC2gzDYQgyDagCDvIAAQoIjmAAIAA3aQAAkwAjkkQAjkQA7j/IATgEQBHgRBIgPQBkBiBuBxQCZCgCmDDQC9EHCxEpQAxBSAwBUQA0p/ArpzIASAGQBoAhBgAmQAXCOARCTQAiE8ABFIIAAZVIi9AAg");
	this.shape_159.setTransform(540.825,1244.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AJnU1IjcvsQgxjihdjPQhbjMh6itQh6iyiNiGIgtgqQhLB9g/CbQhLC3gsDVQgsDXgBDrIAAQSIjnAAIAA3fQABkwAekmQAekSA0kCIAUgEQBIgPBJgNIDKDsQCTCwCeDOQC3EWCsE0QAwBVAvBWQAtqoAlqgIATAFQBoAdBhAhQAUCRAPCUQAeE/ABFKIAAZhIi7AAg");
	this.shape_160.setTransform(540.675,1244.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AJHU5IjnvUQg0jchajMQhXjJhyiuQhyiyiCiOIgqgtQhACCg2CdQhBC4gmDSQgmDVAADkIAAP+IjmAAIAA3jQAAkxAakoQAakTAskGIAUgEICUgXIDCEEQCNDACWDZQCxEmCnE/QAvBXAtBZQAnrTAgrMIATAEQBoAZBiAdQARCSAMCWQAbFCAAFMIAAZtIi4AAg");
	this.shape_161.setTransform(540.525,1243.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AIoU8Ij0u8Qg3jWhVjJQhUjFhpiwQhrizh4iUIgmgwQg2CIgtCeQg1C5ggDQQggDRAADfIAAPoIjmAAIAA3nQABkxAVkqQAWkVAlkKIAUgCICVgUIC7EcQCHDQCODmQCqE1CjFJQAuBbAsBcQAgr/Abr4IASAEQBpAUBjAYQAOCUAKCYQAWFFABFOIAAZ4Ii1AAg");
	this.shape_162.setTransform(540.375,1242.975);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AIIVAIkAulQg5jQhSjHQhQjBhhiwQhji0hticIgjgyQgrCNgkCfQgrC7gZDNQgaDPAADaIAAPSIjlAAIAA3rQAAkyASksQARkXAdkNIAVgCICXgQICzE1QCADgCHDxQCkFECeFUIBXC9QAaspAWslIASADQBoAQBlAUQALCWAICYQASFJAAFQIAAaEIiyAAg");
	this.shape_163.setTransform(540.225,1242.35);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AHpVEIkNuOQg8jLhOjDQhMi9hZixQhbi1hiijIggg1QghCTgbCgQggC9gTDJQgTDMAADUIAAO+IjlAAIAA3wQAAkyAOkuQAMkYAXkRIAVgCICZgMICrFNID6HtQCdFUCaFfIBUDCQATtUAQtRIATACQBoAMBlAPQAJCYAGCaQANFNABFRIAAaQIivAAg");
	this.shape_164.setTransform(540.075,1241.725);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AHJVIIkZt2Qg+jFhLjBQhHi5hSiyQhTi2hYiqIgcg4QgWCZgSChQgVC+gNDFQgNDKAADPIAAOpIjkAAIAA30QAAkzAJkwQAIkaAPkUIAVgCICbgIICkFmIDsIIQCXFjCVFqIBSDJQANt/AKt+IATABIDOASQAGCbAECbQAJFQAAFUIAAabIisAAg");
	this.shape_165.setTransform(539.925,1241.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AGpVMIkktgQhBi+hGi9QhFi3hKiyQhLi4hNixIgag6QgKCegJCjQgLC/gGDCQgHDHAADKIAAOUIjkAAIAA35QAAkzAFkyQAEkbAHkZIAWgBICdgDICcF+IDeIkQCQFyCRF1IBPDOQAHuqAFuqIATAAIDPAJIAFE6QAFFUAAFUIAAaoIiqAAg");
	this.shape_166.setTransform(539.775,1240.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AGKVPIrW/OIAAfOIjjAAMAAAgqdIC1AAILHerIAA+rIDjAAMAAAAqdg");
	this.shape_167.setTransform(539.625,1239.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112}]}).to({state:[{t:this.shape_112}]},14).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},11).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).wait(12));

	// Слой_1___копия
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AGFSyIh4kxIoYAAIh7ExIu1AAMAMQgljIRWAAMAMSAljgAieEZIE/AAIihnrg");
	this.shape_168.setTransform(538.85,1678.55);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AEiOSIojAAIgSAnIh1D+IhQgBQixgEiwgGQiwgHitgIIingJIA4i8QA3ixA6iwQA5iqA7inQA7inA9ilQA/iqBAimIE/tDIQyAIIB1H3IA0DkQAbBxAeB1QAfB5AjB5QAlB5AqB4QAoB1AsByQAtB0AwBvIDSH0IuXAIIiFkngAgrgqIg1CbQgbBPgZBQICjAEQBLACBIgPIgvidIgyifQgYhOgdhDIg3Ccg");
	this.shape_169.setTransform(539.05,1678.25);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AE3OkIotAAIgTAlIiCDzIhQgCQi0gIiwgNQixgNisgRIikgRQAahfAchhQA1i1A8iyQA6iuBAioQBAioBEijQBFinBIihIFmsmIQMAQIA/HmQAOBrARB2QAQBzAXB6QAZB+AjCAQAjCBAuB9QAsB6A0BzQA1B1A5BrID9HkIt3APIiTkcgAgdgvQgdBKgbBOQgcBOgYBQQBOAFBQADQBKADBJgOIgqiZQgUhPgahQQgXhNgehCIg4CUg");
	this.shape_170.setTransform(539.25,1677.95);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AFLO1Io3AAIgUAkQhHB4hGBwIhRgEQi4gLiwgUQixgTipgaIiigZQAYhhAahjQA0i5A+i2QA7ivBFipQBFiqBKihQBNilBQicIGLsIIPoAYIAKHUQAABnAIB4QAGB1ARB/QASCDAhCHQAjCIAxCCQAwCAA8B0QA8B2BDBoIEnHSItYAYIigkTgAgRg0QgeBHgcBOQgcBMgYBQQBMAIBPAFQBJAEBJgMQgRhJgShNQgThPgYhPQgXhNgehCIg8CNg");
	this.shape_171.setTransform(539.45,1677.65);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AFgPGIpBAAIgXAkQhNByhKBqIhTgFQi6gPixgaQiygaingiQhRgRhNgRQAVhjAahkQAxi+BAi5QA+iyBJirQBJipBSifQBTikBYiVIGxrsIPCAfIgqHDQgLBkgEB5QgEB2ALCFQALCHAgCPQAhCPA2CHQA1CEBDB3QBEB4BNBkIFQHAIs4AhIitkKgAgEg4QggBFgdBLQgdBMgXBQQBJAKBOAHQBJAGBIgMQgNhGgQhMQgQhOgXhPQgWhNgfhCIg+CHg");
	this.shape_172.setTransform(539.675,1677.35);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AF1PZIpLAAIgZAgQhSBvhQBkIhUgIQi9gSiyghQiyggilgrQhPgUhMgWQAThlAZhmQAwjDBBi7QBAi1BOirQBNirBZieQBaihBfiPIHYrQIOdAoIhfGxQgYBggNB7QgPB4AECJQAGCNAeCVQAgCXA5CMQA5CKBLB4QBMB6BXBgIF5GvIsYAoIi6j+gAAJg9QgiBCgdBLQgeBLgWBPQBGANBNAJQBHAHBJgLQgJhEgNhLQgOhMgWhPQgVhMgghCIhBB/g");
	this.shape_173.setTransform(539.85,1677.05);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AGKPqIpVAAIgbAgQhZBqhUBdIhVgJQjAgWizgnQizgnijg0QhOgYhKgaQAShmAYhqQAtjFBDi+QBCi5BTisQBSirBficQBgifBpiLIH9qyIN4AwIiUGfQgkBdgYB8QgYB5gDCPQgBCSAdCcQAfCeA9CSQA9COBTB5QBTB8BhBcIGkGeIr5AwIjHj0gAAVhBQgjBAgeBJQgfBKgVBPQBDAPBMALQBHAJBJgLQgGhBgLhKQgLhLgVhPQgUhNghhBIhEB5g");
	this.shape_174.setTransform(540.075,1676.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AGeP8IpeAAIgcAeQhgBmhZBVQgsgEgqgGQjDgaizgtQi0gtihg8QhNgchIgfQAQhoAXhsQArjKBFjAQBEi8BYisQBXitBliaQBnieBxiEIIjqWINTA4IjJGPQgxBYghB+QgjB6gJCVQgICWAcClQAeClBBCWQBBCUBaB6QBcB+BqBYIHNGNIrZA3IjVjpgAAihGQgkA9ggBJQgfBIgUBQQBAARBLANQBFAKBKgKQgDg+gIhJQgJhLgThOQgUhNghhAIhHBxg");
	this.shape_175.setTransform(540.25,1676.45);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AGzQNIppAAIgeAdQhlBiheBPIhYgMQjFgdi0g1Qi1gziehEQhMghhGgjQAOhqAVhuQAqjNBHjEQBFi/BcitQBciuBtiYQBticB5h+IJJp5IMuA/Ij/F+Qg8BWgsB9QgtB9gPCZQgPCdAbCrQAcCrBGCcQBFCaBiB8QBjB9BzBVIH4F8Iq5BAIjijggAAvhLQgnA7gfBHQggBIgUBPQA+AVBJANQBFANBKgKQABg7gGhJQgGhIgThPQgThMgihBIhJBqg");
	this.shape_176.setTransform(540.475,1676.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AHIQeIpzAAIggAcQhrBdhkBJIhYgNQjIgii1g6Qi1g6ichOQhLgkhEgnQALhsAVhwQAojSBJjGQBHjCBhiuQBgivBziWQB1iZCAh5IJupcIMLBHIk0FsQhJBSg2B/Qg3B+gWCfQgVChAZCyQAcCzBJChQBJCfBqB9QBrCAB9BRIIhFrIqZBHIjvjWgAA8hQQgpA5ggBGQghBHgSBPQA6AXBJAPQBDAOBLgJQAEg5gDhHQgEhIgShPQgShLgjhAQgiAqgpA4g");
	this.shape_177.setTransform(540.675,1675.875);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AHdQwIp+AAIghAbQhxBYhpBCQgtgGgtgJQjKgki2hCQi1hAiahWQhKgohDgsQAKhuAUhxQAmjWBKjJQBKjGBliuQBlixB6iUQB7iXCIhzIKVo/ILlBPIlpFaQhVBPhACAQhBCAgcCkQgcCmAYC6QAaC6BOCmQBNCjBxB/QByCCCHBNIJMFaIp6BOIj8jLgABJhUQgrA1ggBGQgiBGgSBPQA3AZBJARQBCAQBKgJQAIg2gBhHQAAhGgShOQgRhMgkhAQgiAmgrA2g");
	this.shape_178.setTransform(540.875,1675.55);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AHyRBIqIAAIgjAaQh3BUhuA7QgugHgtgJQjNgpi2hHQi3hHiYhfQhJgshAgwQAIhwAShzQAljbBMjMQBLjHBqiwQBqixCBiTQCBiUCRhvIK6oiILABXImeFJQhhBLhKCDQhLCAgjCqQgUBhgBBqQgdAdgkApQgsA0gjBEQgiBEgRBPQA1AdBHASQA+AQBIgGQAWBDAfA/QBRCpB5CBQB6CDCRBKIJ1FIIpaBXIkJjCg");
	this.shape_179.setTransform(541.075,1675.25);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AIGRTIqSAAIgkAYQh9BPhzA1QgvgIgugJQjQgti2hOQi3hNiWhnQhIgxg+g0QAGhxARh2QAjjfBNjPQBOjJBuiyQBviyCHiRQCJiTCYhoILgoFIKbBfInSE4QhuBGhUCEQhWCDgpCuQghCOAHCdQgkArgdA3QgiBEgRBPQAyAeBHAUQAZAHAaAEQAZBMAjBIQBVCuCBCCQCBCECbBGIKfE3Io7BfIkWi3g");
	this.shape_180.setTransform(541.3,1674.975);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AIbRkIqbAAIgnAXQiDBLh4AuQgvgIgvgLQjSgwi4hUQi4hUiThwQhHg0g8g5QADhzARh4QAhjjBPjSQBPjMB0izQBzizCOiPQCPiQChhjIMGnpIJ2BnIoIEnQh6BDhfCFQhfCEgwC0QguC1ATDPIADAcQgdA8gOBGQAiAYAtASQAcBiAtBbQBaCzCICEQCJCFClBDILIElIobBoIkjiug");
	this.shape_181.setTransform(541.475,1674.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AIwR2IqmAAIgoAWQiJBGh9AoQgxgKgvgKQjVg1i4haQi4hbiSh4QhFg5g7g9QACh1AQh6QAejmBSjVQBRjQB4i0QB4izCViNQCViPCphcIMsnNIJRBvIo9EVQiGBAhpCHQhpCFg2C5Qg2C6ATDXQAVDWBdC6QBdC5CRCFQCRCHCuA/ILzEUIn8BvIkwijg");
	this.shape_182.setTransform(541.7,1674.35);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AJFSIIqwAAIgqAUQiPBCiCAgQgxgJgvgMQjYg4i5hhQi5hhiPiBQhFg9g4hBQgBh3APh8QAdjrBTjXQBTjTB8i0QB9i1CbiLQCdiNCxhXINSmvIIsB3IpyEEQiTA7hzCIQhyCHg9C+Qg8DAARDdQAUDeBiC/QBgC+CYCHQCZCIC4A7IMcEDIncB3Ik9iYg");
	this.shape_183.setTransform(541.8992,1674.075);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AJaSZIq6AAIgsATQiVA9iIAaQgxgKgwgNQjbg7i5hoQi6hoiNiJQhDhAg3hGQgCh5ANh+QAcjvBUjaQBVjWCBi1QCBi2CjiJQCjiLC5hRIN5mTIIGB/IqnDzQifA3h9CKQh8CJhEDDQhCDEAPDlQAUDlBlDEQBlDDCfCJQCgCKDCA3INGDyIm8B/IlKiPg");
	this.shape_184.setTransform(542.0555,1673.775);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AJvSrIrEAAIguARQiaA5iNAUQgygLgxgNQjdhAi6huQi6hviLiRQhDhFg0hKQgFh6ANiBQAZjzBXjbQBWjbCGi2QCGi3CpiHQCqiIDBhMIOfl2IHhCHIrcDhQirA0iHCLQiHCKhKDJQhJDJAODsQASDtBqDJQBpDICnCKQCoCMDLAzINwDhImcCGIlYiEg");
	this.shape_185.setTransform(542.2404,1673.45);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AKES9IrOAAIgvAQQihA0iSANQgygMgygOQjghDi6h1Qi7h0iJibQhBhJgzhNQgHh9AMiDQAYj3BYjfQBYjcCLi4QCKi3CwiFQCxiHDJhGIPFlZIG8CPIsRDQQi4AviQCOQiSCLhQDNQhQDPANDzQARD0BuDOQBtDOCuCLQCwCMDVAwIOZDQIl8COIllh5g");
	this.shape_186.setTransform(542.3576,1673.15);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AKZTOIrYAAIgxAOQimAwiYAHQgzgMgxgQQjjhGi8h7Qi7h8iHiiQhAhNgxhTQgIh+AKiFQAWj7BajiQBajgCPi4QCQi4C2iEQC4iEDRhAIPrk9IGXCXItGC/QjEAsibCOQicCNhWDTQhXDUAMD6QAQD7ByDTQBxDTC2CNQC3CODfAsIPDC+IldCXIlyhwg");
	this.shape_187.setTransform(542.5099,1672.875);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AKvTfIriAAIgzAOQisAridAAQgzgNgzgQQjlhKi8iCQi9iCiEirQg/hRgvhXQgLiAAKiHQAUj/BcjlQBcjiCUi6QCUi5C9iCQC+iCDZg7IQRkfIFzCeIt8CuQjQAoilCQQimCPhdDYQhdDYAKECQAPECB2DYQB1DYC/CPQC+CPDpApIPsCsIk9CfIl/hmg");
	this.shape_188.setTransform(542.6049,1672.575);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("ALFTxIrsAAIg1AMQiyAniigHQg0gNgzgRQjohOi9iIQi9iJiCizQg+hWgthaQgNiCAJiJQASkEBdjnQBfjmCYi6QCYi7DFh/QDEiBDhg1IQ4kDIFNCoIuxCbQjbAliwCRQiwCRhkDcQhjDeAJEJQANEJB6DeQB6DdDGCQQDFCRDzAkIQXCcIkeCnImMhcg");
	this.shape_189.setTransform(542.728,1672.25);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("ALbUCIr2AAIg3ALQi4AjingOQg1gOgzgSQjrhRi9iPQi+iPiBi8Qg8hZgrhgQgPiDAHiLQARkIBfjqQBhjpCdi7QCci7DMh+QDLh+DpgwIRdjmIEoCvIvlCKQjnAhi6CTQi7CShrDiQhpDjAHEQQANEQB+DjQB9DiDOCSQDNCSD9AhIRACKIj+CvImZhSg");
	this.shape_190.setTransform(542.8,1671.975);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("ALxUUIsBAAIg4AJQi+AeisgUQg2gPg0gSQjuhVi+iWQi+iVh+jFQg7hdgphkQgRiFAGiNQAPkLBhjuQBijsChi8QCii8DSh8QDSh8DxgqISDjJIEEC2IwbB6Qj0AdjECUQjFCThwDoQhxDoAGEXQAMEXCCDoQCBDnDWCUQDVCTEGAeIRqB5IjeC2ImmhHg");
	this.shape_191.setTransform(542.9101,1671.675);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AMHUlIsLAAIg5AIQjFAaixgbQg2gPg1gTQjwhZi/icQi/ich7jNQg7hhgnhpQgTiHAFiPQANkPBjjxQBkjvCmi9QCni9DYh6QDZh6D5gkISpitIDfC/IxQBoQkAAajPCVQjOCVh3DtQh3DtAEEeQALEeCGDtQCFDtDeCVQDdCVEPAaISUBnIi+C/Im0g+g");
	this.shape_192.setTransform(542.9718,1671.375);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AMdU3IsWAAIg6AHQjLAVi2giQg3gQg1gUQjzhcjAijQi/iih6jWQg5hlglhtQgViIAEiSQALkTBlj0QBljyCri+QCsi+Dfh4QDfh4ECgeITPiQIC5DGIyFBXQkMAWjZCXQjZCWh9DyQh+DyAEEmQAJEmCKDyQCKDxDlCWQDlCXEYAWIS+BXIieDGInBgzg");
	this.shape_193.setTransform(543.0603,1671.075);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AMzVJIsgAAIg8AFQjQARi8gpQg3gQg2gVQj2hhjAioQjAiph3jeQg5hqgjhxQgXiKADiUQAKkYBmj2QBnj1Cwi+QCwi/Dmh3QDmh2EKgYIT1hzICUDOIy6BFQkZATjiCYQjjCYiED3QiED3ACEsQAIEuCOD3QCND3DtCXQDtCZEiASIToBFIh/DOInOgog");
	this.shape_194.setTransform(543.1074,1670.775);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("ANJVaIspAAIg+AEQjXAMjAgvQg4gRg3gVQj4hljBivQjBivh1jnQg3htgih2QgZiMADiWQAHkcBoj5QBqj4C0i/QC0jADth1QDthzERgTIUchXIBvDXIzvA0QklAOjtCaQjtCZiLD9QiKD8ABEzQAGE1CSD8QCSD8D1CZQD0CaEsAPIUSAzIhgDXInbgfg");
	this.shape_195.setTransform(543.1886,1670.475);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("ANgVsIs0AAIhAACQjcAIjGg1Qg5gSg3gXQj7hojBi1QjCi2hzjwQg2hxgfh6QgbiOABiYQAFkgBqj8QBsj6C5jBQC5jBDzhzQD0hxEZgOIVCg5IBKDeI0kAjQkxALj4CbQj3CbiREBQiRECgBE6QAGE8CWEBQCWEBD8CbQD8CbE2ALIU7AjIg/DeInogUg");
	this.shape_196.setTransform(543.2232,1670.175);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AN2V9Is+AAIhBACQjjADjLg8Qg5gTg3gXQj/hsjCi8QjBi8hyj4Qg1h2gdh+QgdiPAAibQAEkkBsj+QBtj+C9jCQC+jCD7hwQD6hwEhgIIVogcIAlDmI1aARQk9AHkBCdQkCCciXEHQiYEGgCFCQAEFDCbEHQCaEGEECcQEECdE/AHIVlARIggDmIn1gKg");
	this.shape_197.setTransform(543.2996,1669.875);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAAWPQkogCkBhtQkBhwjDjCQjCjDhvkBQhukBgCkpQACkoBukBQBvkBDCjDQDDjCEBhvQEBhuEogCIWPAAIAADuI2PAAQlJAEkMCeQkLCeieEMQieELgEFJQAEFKCeEMQCeELELCeQEMCeFJAEIWPAAIAADugADdB/QgzgzgBhMQABhLAzgzQAygyBMgCQBNACAyAyQAzAzABBLQgBBMgzAzQgyAyhNACQhMgCgygyg");
	this.shape_198.setTransform(543.325,1669.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgQWMIgfAAQkMgNjqhqQj2hyi7jCQi7jBhqj+Qhqj9gCkkQACkkBqj+QBqj9C7jCQC7jBD2hxQDxhtEVgMIAPAAIV3AAIAADtIt2AAIn4APQk9AMkBChQhwBGhcBbQhyBvhRCRQhsDEgXDnQgJBJgBBNQABBKAIBGQAWDrBuDGQBLCHBnBpQBjBlB6BMQEBChE9ANIH+APINxAAIAADtI14AAg");
	this.shape_199.setTransform(543.275,1669.675);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AghWJIgfAAQkAgTjhhtQjsh0izjAQizjBhmj5Qhkj7gDkfQADkeBkj8QBmj5CzjBQCzjADsh0QDnhvEKgTIAPAAIVhAAIAADtItsAAInjAeQkwAUj2CkQhsBHhYBbQhoBrhICKQhhC8gPDdQgIBKgBBMQABBIAHBGQANDhBjC+QBDCABdBmQBgBkB1BOQD2CkEwAWIHpAeINnAAIAADsI1iAAg");
	this.shape_200.setTransform(543.25,1669.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgyWHIgeAAQj2gajWhvQjih3isi/Qiri/hhj3Qhhj3gCkaQACkaBhj3QBhj2CrjAQCsi/Dih2QDchyD+gZIAPAAIVLAAIAADrItiAAInNAtQkjAejsCmQhnBIhUBbQheBmhACFQhVC0gHDTQgIBIgBBMQABBHAHBFQAGDXBWC2QA7B7BVBhQBaBlBwBPQDsCnEjAeIHTAvINeAAIAADrI1MAAg");
	this.shape_201.setTransform(543.225,1669.925);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AhDWFIgegBQjrggjMhyQjYh5iki9Qiji/hdjzQhcjzgCkWQACkUBcj1QBdjzCji+QCki+DYh5QDSh0DzgfIAOAAIU2AAIAADqItYAAIm5A7QkVAnjhCoQhiBKhRBcQhUBhg3B+QhKCsABDKQgIBIgBBJQABBHAHBFQgDDNBLCuQAyB2BMBbQBXBmBrBQQDhCpEVAoIG+A/INVAAIAADqI02AAg");
	this.shape_202.setTransform(543.2,1670.05);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AhUWCIgdgBQjggmjDh0QjNh7ici9Qici9hYjvQhYjxgCkQQACkQBYjxQBYjwCci9QCci9DNh6QDJh4DngmIAOAAIUgAAIAADpItOAAImkBLQkIAvjWCsQhdBLhNBbQhLBcgvB5Qg+CkAKDAQgIBGgBBKQABBGAGBEQgKDDA+CmQArBvBCBYQBTBlBmBSQDWCsEIAxIGpBOINLAAIAADpI0gAAg");
	this.shape_203.setTransform(543.15,1670.15);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AhlV/IgdAAQjUgti5h2QjEh+iUi8QiTi8hVjsQhTjtgBkLQABkLBTjuQBVjrCTi8QCUi9DEh9QC+h6DcgtIANAAIUKAAIAADpItEAAImOBaQj7A4jLCuQhZBMhJBbQhBBZgmByQgzCbASC3QgIBFAABJQAABFAHBEQgUC5AzCdQAjBqA5BUQBPBmBhBSQDLCvD7A6IGUBdINAAAIAADoI0JAAg");
	this.shape_204.setTransform(543.125,1670.25);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("Ah2V9IgcgBQjKgzivh5Qi5h/iMi8QiMi6hQjpQhPjqgCkGQACkGBPjrQBQjoCMi7QCMi7C5h/QC0h9DRgzIAMAAIT0AAIAADnIs5AAIl5BpQjuBBjBCxQhUBNhFBbQg2BTgfBtQgnCTAaCtQgHBFgBBIQABBEAGBDQgbCvAmCVQAbBlAwBPQBKBmBcBUQDBCyDuBDIF+BtIM4AAIAADnIz0AAg");
	this.shape_205.setTransform(543.1,1670.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AiHV6IgcAAQi+g5imh8QiviCiEi6QiEi6hMjlQhKjngBkBQABkBBKjnQBMjlCEi6QCEi6CviCQCqh/DFg5IANAAITeAAIAADmIsvAAIllB4QjgBKi2CzQhQBOhBBcQgtBOgVBnQgcCLAiCjQgHBEAABHQAABDAGBDQgkClAbCNQATBfAnBLQBGBmBXBVQC2C1DgBMIFqB9IMtAAIAADlIzdAAg");
	this.shape_206.setTransform(543.075,1670.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AiYV4IgcAAQizhBibh9QiliEh8i6Qh9i5hHjhQhGjjgBj9QABj8BGjkQBHjhB9i5QB8i5CliEQCgiBC5hBIANAAITIAAIAADlIslAAIlQCHQjTBTirC2QhLBPg+BcQgiBKgNBgQgQCDApCaQgGBEgBBFQABBDAFBBQgsCcAPCEQALBaAeBGQBCBnBSBWQCrC4DTBUIFUCNIMkAAIAADlIzHAAg");
	this.shape_207.setTransform(543.025,1670.625);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AipV1IgbAAQiohGiSiBQiaiGh1i4Qh1i4hCjeQhCjggBj4QABj3BCjgQBCjeB1i4QB1i4CaiGQCWiECuhHIAMAAISyAAIAADkIsaAAIk7CWQjGBcigC4QhHBQg5BcQgZBGgEBaQgFB7AxCQQgFBDgBBEQABBCAFBAQg1CTADB8QADBUAVBCQA+BmBNBYQCgC7DGBdIE/CcIMaAAIAADkIyxAAg");
	this.shape_208.setTransform(542.975,1670.725);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("Ai7VzIgagBQidhMiIiDQiQiJhti2Qhti4g+jaQg9jcgBjzQABjzA9jdQA+jaBti2QBti4CQiJQCMiGCihOIANAAISbAAIAADkIsQAAIklCkQi5BliWC7QhCBRg1BcQgPBBAEBVQAHByA5CHQgFBBgBBEQABBBAEBAQg8CIgJB1QgFBOAMA9QA6BnBHBZQCWC9C5BnIEpCrIMRAAIAADkIycAAg");
	this.shape_209.setTransform(542.975,1670.85);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AjMVwIgaAAQiRhTh+iFQiGiLhli2Qhli2g6jXQg5jZgBjuQABjuA5jaQA6jWBli2QBli2CGiLQCCiJCWhUIAMAAISGAAIAADiIsGAAIkQC0QisBtiLC+Qg9BSgyBdQgFA8ANBOQASBrBBB9QgFBBAABCQAABAAFA/QhFB/gVBsQgNBJADA5QA2BnBCBaQCLDACsBwIEUC7IMHAAIAADiIyGAAg");
	this.shape_210.setTransform(542.925,1670.975);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AjdVuIgZAAQiGhah2iIQh6iNhei1Qhdi1g1jTQg1jWgBjpQABjpA1jWQA1jTBdi1QBei1B6iNQB5iMCKhbIAMAAIRxAAIAADiIr8AAIj7DDQifB2iBDAQg3BTgvBdQAFA4AVBIQAeBiBKB0QgFBAgBBCQABA/AEA+QhNB1ggBkQgVBDgHA1QAxBnA9BbQCBDDCfB5ID+DLIL+AAIAADhIxwAAg");
	this.shape_211.setTransform(542.9,1671.075);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AjtVrIgZAAQh7hghsiKQhxiQhWizQhVi1gxjPQgwjTgBjkQABjkAwjTQAxjPBVi0QBWi0BxiPQBuiPCAhhIALAAIRbAAIAADgIrzAAIjmDSQiRB/h2DDQgzBUgqBdQAOA0AeBBQApBbBRBqQgEA/AABAQAAA/AEA+QhVBrgsBbQgdA9gQAxQAtBnA4BdQB2DGCRCBIDpDbIL1AAIAADgIxZAAg");
	this.shape_212.setTransform(542.85,1671.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("Aj/VpIgZgBQhwhmhhiMQhniShNizQhOizgtjMQgrjPgBjgQABjfArjQQAtjLBOizQBNizBniSQBliQBzhpIALAAIREAAIAADgIrnAAIjRDhQiFCHhqDGQgvBVgnBeQAZAuAmA8QA2BSBYBgQgDA/AABAQgBA9AEA9QhdBig4BSQglA4gZAsQApBoAzBeQBqDICFCLIDUDqILrAAIAADgIxEAAg");
	this.shape_213.setTransform(542.85,1671.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AkQVmIgYAAQhkhshYiQQhdiUhGixQhGiygojJQgojMAAjaQAAjaAojNQAojIBGiyQBGiyBdiUQBaiTBohvIALAAIQuAAIAADeIrdAAIi8DwQh3CRhhDIQgpBWgjBeQAiAqAvA2QBBBKBhBWQgDA+gBA/QAAA8AEA9QhmBYhEBKIhPBaQAlBoAtBfQBhDLB3CUIC+D6ILiAAIAADeIwuAAg");
	this.shape_214.setTransform(542.8,1671.425);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AkhVkIgYAAQhZh0hOiRQhSiWg+ixQg+ixgkjFQgjjJgBjVQABjVAjjKQAkjFA+iwQA+ixBSiWQBQiWBdh2IAKAAIQZAAIAADdIrTAAIinEAQhqCZhWDLQglBXgeBfIBjBUQBMBCBpBNQgDA9AAA+QAAA8ADA7QhuBOhQBDQg1AsgsAkQAiBoAoBgQBWDOBqCdICpEJILYAAIAADeIwYAAg");
	this.shape_215.setTransform(542.75,1671.55);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AkyVhIgXAAQhOh5hFiUQhIiZg2iwQg2iwggjBQgejFgBjRQABjQAejGQAgjBA2ivQA2ixBIiZQBHiXBQh9IALAAIQCAAIAADdIrIAAIiSEOQhdCihLDNQghBZgbBeQA2AgBAAqQBYA6BxBDQgDA8AAA9QAAA7ADA7Qh2BEhcA6Qg9Ang0AfQAcBoAkBiQBLDRBdCmICUEZILOAAIAADcIwCAAg");
	this.shape_216.setTransform(542.725,1671.65);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AlDVfIgXgBQhDiAg7iWQg9iagviwQguiugbi+QgbjCAAjMQAAjMAbjCQAbi9AuivQAvivA9ibQA8ibBGiDIALAAIPsAAIAADcIq+AAIh+EcQhPCshBDQQgcBagWBeQA/AbBJAkQBjAyB4A6QgCA7AAA8QAAA6ACA6IjlBsQhFAig+AbQAZBoAeBiQBBDUBPCvICAEpILEAAIAADcIvsAAg");
	this.shape_217.setTransform(542.7,1671.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AlUVcIgXAAQg3iGgxiZQg0idgmiuQgnitgXi7QgVi/gBjHQABjGAVjAQAXi6AnitQAmiuA0ieQAyicA6iKIAKAAIPWAAIAADaIqzAAIhpEsQhCC1g2DSQgXBbgTBeQBJAXBRAeIDvBZQgCA7AAA7QAAA5ACA6Ij5BaQhNAchHAWQAVBpAZBkQA2DWBCC5IBqE3IK7AAIAADbIvWAAg");
	this.shape_218.setTransform(542.675,1671.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AllVZIgWAAQgtiLgnidQgpifgfisQgfitgSi3QgRi8gBjBQABjCARi8QASi3AfirQAfiuApifQAoigAviRIAKAAIPAAAIAADaIqpAAIhUE7Qg1C9grDVQgSBcgQBfQBUASBZAYQB6AhCJAmIgCB0IABByQiNAniAAhQhVAWhQASQARBpAUBlQArDaA1DBIBVFHIKxAAIAADZIvAAAg");
	this.shape_219.setTransform(542.625,1672);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("Al2VXIgWAAQghiTgeieQgeihgYisQgXisgOizQgNi4ABi9QgBi9ANi5QAOizAXirQAYisAeiiQAfiiAjiXIAJAAIOqAAIAADZIqfAAIg/FKQgnDFggDYQgOBdgLBfQBcAOBjASQCFAYCRAdIgBByIABBwQiYAdiKAZQhdARhZANQANBpAPBnQAgDcAnDKIBAFXIKoAAIAADZIuqAAg");
	this.shape_220.setTransform(542.6,1672.125);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AmHVVIgVgBQgXiYgTihQgVikgPiqQgQirgJiwQgJi1AAi4QAAi4AJi1QAJivAQirQAPirAVikQAUilAXieIAJAAIOVAAIAADYIqVAAIgqFZQgaDPgWDaIgRC9QBoAJBqAMQCRARCZATIgBBxIABBtQifAUiXAQQhlAMhiAIQAIBqAKBoQAWDfAaDTIArFnIKeAAIAADYIuUAAg");
	this.shape_221.setTransform(542.575,1672.25);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AmZVSIgUAAIgVlDQgLimgHipQgIiqgFisQgDiyAAizQAAizADiyQAFisAIipQAHiqALinQAKinALikIAKAAIN/AAIAADXIqLAAIgVFoQgNDXgLDdIgJC+IDlALIE9ASIAABuIAABtIlKASIjYAKIAJDTQALDiANDcIAVF2IKVAAIAADXIt/AAg");
	this.shape_222.setTransform(542.55,1672.375);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("Am9VPMAAAgqdINxAAIAADVIqAAAIAAP3IJHAAIAADYIpHAAIAAQkIKLAAIAADVg");
	this.shape_223.setTransform(542.5,1672.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168}]}).to({state:[{t:this.shape_168}]},14).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_198}]},11).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).wait(12));

	// _
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("Anwg2QHYB1ABo2QAkIIHkiaQn+DRFtF7QlmlcjsGQQDZmnnXiGg");
	this.shape_224.setTransform(263.025,1108.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFE").s().p("AjLEpQgSjuk8hvQEqA0B7jaQBGh7ANjLQANBVAaBFQBhENEkgUQBDgDBLgTQi4BchCB3QhpC7DQD0IgbgVQj7jGjJB6QhXA0hMBvQA6iIgJhwg");
	this.shape_225.setTransform(267.5,1101.875);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFEFD").s().p("AjqFLQghj6k2iEQEkAdCJjmQBPiDAajLQAUBSAhBEQB1EIEvgDQBGABBOgOQiuBnhBCFQhmDMC+D/IgdgSQkGizjcB4QhfAzhTBqQAtiKgRh2g");
	this.shape_226.setTransform(272.025,1095.325);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FEFEFC").s().p("AkJFsQgvkEkxiZQEfAGCWjyQBYiMAnjLQAaBPAoBCQCLEEE5ANQBJAFBQgIQiiByhACTQhlDdCtEKIgegQQkRiejvB0QhoAzhbBkQAjiLgbh9g");
	this.shape_227.setTransform(276.5,1088.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FEFDFC").s().p("AknGOQg/kQkriuQEagRCjj+QBhiTA0jLQAhBLAwBBQCfD/FDAdQBNAKBRgDQiWB9g/ChQhjDvCcEUIgggNQkciMkCB0QhwAxhiBfQAWiMgjiEg");
	this.shape_228.setTransform(280.975,1082.25);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FEFDFB").s().p("AlFGvQhPkckljBQEUgpCxkJQBqicBBjLQAoBIA3BAQCzD6FPAtQBPAOBTADQiLCIg9CvQhhEACLEfIgjgKQknh5kUBxQh5AxhqBaQALiOgriLg");
	this.shape_229.setTransform(285.475,1075.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FEFCFA").s().p("AlkHQQheknkgjWQEPg/C/kWQB0ijBNjLQAvBEA+A+QDID1FZA+QBTATBVAHQiACUg8C9QhfERB5EpIgkgHQkzhlknBvQiBAvhxBVQgBiPg0iSg");
	this.shape_230.setTransform(289.975,1069.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FDFCF9").s().p("AmCHyQhukzkajqQEKhXDMkhQB9isBajLQA1BBBFA9QDeDwFjBOQBWAXBXANQh0Cfg7DKQhdEjBnE1IglgFQk+hSk6BtQiKAuh4BQQgNiRg8iYg");
	this.shape_231.setTransform(294.45,1062.675);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FDFBF8").s().p("AmgITQh9k+kVj+QEFhvDZktQCGi0BnjKQA8A9BNA7QDxDsFuBeQBaAcBYASQhpCqg6DYQhbE0BXE/IgogCQlJg/lMBrQiTAuh/BKQgYiShFifg");
	this.shape_232.setTransform(298.95,1056.15);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FDFBF7").s().p("Am/I1QiMlKkPkTQD/iGDnk5QCPi8B0jKQBDA6BUA6QEGDnF4BuQBdAgBaAYQhdC0g4DmQhaFGBGFKIgqABQlUgrlfBoQibAtiHBFQgkiUhOilg");
	this.shape_233.setTransform(303.425,1049.625);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FDFAF6").s().p("AndJWQidlVkJknQD6idD1lFQCYjECBjLQBJA3BcA5QEaDiGDB+QBgAlBcAdQhSC/g2D0QhZFYA1FUIgrADQlggXlyBmQikAsiNBAQgxiWhVisg");
	this.shape_234.setTransform(307.95,1043.075);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FCFAF6").s().p("An8J4QirlhkEk7QD1i1EClRQChjMCOjKQBQAzBiA4QEwDdGNCOQBkApBeAjQhHDKg2ECQhWFoAjFgIgsAGQlsgEmEBjQisAriWA7Qg7iXhfiyg");
	this.shape_235.setTransform(312.425,1036.55);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FCF9F5").s().p("AoaKZQi7ltj+lPQDvjLERldQCpjVCcjKQBWAwBpA3QFEDYGYCeQBnAuBgAoQg6DVg2EQQhTF6ARFqIguAIQl3APmXBjQi1AqidA1QhHiYhni6g");
	this.shape_236.setTransform(316.9,1030);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FCF9F4").s().p("Ao5K7QjKl5j4ljQDqjjEelpQCyjcCpjLIDOBiQFYDUGiCuQBqAzBiAsQgvDhg0EeQhSGLAAF1IgwALQmCAimqBgQi8ApilAxQhTiahwjAg");
	this.shape_237.setTransform(321.4,1023.475);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FCF8F3").s().p("ApXLcQjamEjyl4QDkj6Erl1QC8jlC1jKQBlApB3A1QFtDPGuC+IDQBpQgjDrgzEtQhRGcgRF/IgxAPQmNA1m9BeQjFAnisAtIjXljg");
	this.shape_238.setTransform(325.9,1016.95);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FCF8F2").s().p("Ap1L9QjqmOjtmNIIZqSQDFjsDBjLQBrAmCAAzQGBDKG4DOIDWB0QgZD2gxE5QhPGvgiGKIgzARQmZBInPBcQjOAnizAmQhridiAjOg");
	this.shape_239.setTransform(330.375,1010.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FBF7F1").s().p("AqTMfQj6mbjnmgQDakpFHmMQDOj2DOjKQByAjCGAyQGWDFHDDeQB0BABnA9QgNECgwFHQhNHAg0GUIg1AUQmkBcniBZImRBIQh2ifiIjUg");
	this.shape_240.setTransform(334.875,1003.875);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FBF7F0").s().p("AqyNBQkImnjim0QDVlAFUmZQDXj9DcjKQB4AfCOAxQGqDAHNDvQB3BEBpBCQgBENgvFVQhLHRhFGfIg3AXQmvBvn2BXQjeAljBAcQiDifiRjbg");
	this.shape_241.setTransform(339.35,997.325);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FBF6F0").s().p("ArRNiQkYmyjcnJQDPlXFimkQDhkGDojKQB/AbCVAwQG/C8HYD/QB6BIBrBIQAKEXguFkQhJHihWGqIg5AZQm7CDoIBVQjmAkjKAXQiNihiajig");
	this.shape_242.setTransform(343.9393,990.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FBF6EF").s().p("AryODQkom9jWndQDKlvFvmwQDqkOD1jKQCGAZCcAuQHTC3HjEPQB9BNBtBNQAVEigsFyQhHHzhoG1Ig6AcQnGCWobBTQjvAjjRASQiYijijjpg");
	this.shape_243.setTransform(348.7002,984.275);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FAF6EE").s().p("AsUOlQk3nJjRnyQDFmFF9m8QDzkWECjKQCMAVCjAtQHpCyHtEfQCABSBvBSQAhEtgsGAQhFIEh5HAIg8AfQnRCpouBQQj3AjjYAMQilikirjvg");
	this.shape_244.setTransform(353.5368,977.725);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FAF5ED").s().p("As3PGQlHnUjLoGQDAmdGKnIQD8keEPjKQCTARCrAsQH9CtH3EwQCEBWBxBYQAsE4gqGOQhEIViKHLIg9AhQndC9pBBOQkAAijfAHQiwimi0j2g");
	this.shape_245.setTransform(358.4506,971.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FAF5EC").s().p("AtaPoQlWngjFoaQC6m1GYnUQEFkmEcjKQCaAOCxArQISCoICFAQCHBbByBdQA4FDgpGbQhBIoicHVIg/AkQnoDQpUBMQkIAhjnABQi8ini8j8g");
	this.shape_246.setTransform(363.4332,964.65);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FAF4EB").s().p("AnxW1QjIipjEkDQlmnsjAouQC1nMGmngQEOkuEpjJQCgAKC5AqQImCjINFQQCKBfB0BiQBEFOgoGpQhAI5itHgIhBAnQnzDjpmBKQj5AdjcAAIgqAAg");
	this.shape_247.setTransform(368.4192,958.163);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FAF4EA").s().p("AoAXeQjUiqjNkKQl1n3i6pEQCvniG0nsQEXk2E1jKQCoAHDAAoQI7CfIXFgQCNBkB2BnQBPFagnG2Qg9JLi+HqIhDAqQn/D2p4BIQjfAZjJAAQg0AAgzgCg");
	this.shape_248.setTransform(373.4195,951.7081);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F9F3EA").s().p("AoQYGQjfirjWkRQmEoCi1pYQCqn6HBn3QEgk/FDjJQCuADDHAnQJQCaIiFwQCQBoB4BtQBaFlglHEQg8JcjPH1IhFAsQoKEKqLBGQjHAUi2AAQhTAAhPgEg");
	this.shape_249.setTransform(378.4765,945.2869);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F9F3E9").s().p("AogYuQjritjekXQmUoOivpsQCloRHPoEQEplGFPjKQC1AADPAmQJkCVIsGAQCUBtB6ByQBmFwglHSQg6JtjgIAIhHAvQoVEeqeBDQi2ASioAAQhsAAhlgIg");
	this.shape_250.setTransform(383.531,938.9103);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F9F2E8").s().p("AowZWQj2iujnkeQmjoaiqqAQCgooHcoQQEylOFdjKQC7gDDWAkQJ5CRI3GQQCXBxB7B3QByF7gkHgQg4J/jyIKQgjAZglAZQogExqxBBQinAPibAAQiDAAh6gLg");
	this.shape_251.setTransform(388.5729,932.5498);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#F9F2E7").s().p("ApAZ+QkCiwjvkkQmzomikqUQCapAHqobQE7lXFqjJQDCgHDdAkQKNCLJCGgQCaB2B9B8QB9GGgiHvQg2KQkDIVQgkAagmAaQosFErEA/QiXANiPAAQiZAAiPgPg");
	this.shape_252.setTransform(393.6635,926.1756);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F8F1E6").s().p("ApQanQkNiyj4krQnDoxieqpQCVpXH3onQFFlfF2jKQDJgJDkAiQKiCHJMGwQCeB6B/CCQCIGRghH8Qg0KhkUIgQglAcgnAbQo3FYrWA8QiMAMiFAAQiuAAiggTg");
	this.shape_253.setTransform(398.7222,919.7997);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F8F1E5").s().p("ApgbOQkZizkBkyQnSo8iYq9QCQpuIEozQFOlnGDjKQDQgNDrAhQK3CCJWHAQChB/CBCHQCUGcggIKQgyKzkmIrQglAdgoAcQpDFrrpA7QiAAKh7AAQjBAAiygZg");
	this.shape_254.setTransform(403.8272,913.4135);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F8F0E4").s().p("Apwb3Qkli1kJk4QnhpIiTrSQCKqFITo/QFXlvGQjKQDWgQDzAfQLLB9JhHRQCkCDCDCMQCfGngfIZQgwLEk3I1QgmAfgpAdQpOF+r8A5Qh3AJhyAAQjUAAjBgdg");
	this.shape_255.setTransform(408.8955,907.0368);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F8F0E3").s().p("AqAcfQkxi2kRk/QnxpUiNrlQCFqdIgpLQFgl3GdjKQDdgUD6AfQLfB4JsHhQCnCICFCRQCrGygeImQguLVlJJBQgnAggqAfQpZGRsOA2QhwAIhsAAQjkAAjOgig");
	this.shape_256.setTransform(413.992,900.6322);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F7EFE3").s().p("AqRdHQk8i3kalGQoBpfiHr6QCAq0ItpXQFpl/GqjKQDkgXEBAdQL0BzJ2HxQCrCNCHCWQC2G9gcI1QgtLmlaJLQgoAhgqAhQplGlshA0QhnAGhlAAQj1AAjdgng");
	this.shape_257.setTransform(419.1117,894.2306);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F7EFE2").s().p("AqgdwQlJi5kilNQoQpqiCsPQB6rLI8pjQFymHG2jKQDrgbEIAcQMJBvKBIBQCuCRCICcQDCHIgbJCQgrL4lrJWQgpAigrAiQpwG4s0AyQhgAGhdAAQkGAAjqgsg");
	this.shape_258.setTransform(424.1903,887.8209);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F7EEE1").s().p("AqxeYQlUi6krlUQofp2h8siQB1rjJJpvQF7mPHDjJQDxgfEQAbQMeBqKLIRQCxCVCKChQDNHUgZJQQgqMJl8JgQgpAkgtAjQp7HMtGAwQhaAFhXAAQkVAAj4gyg");
	this.shape_259.setTransform(429.2911,881.4298);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#F7EEE0").s().p("ArCfAQlfi8k0laQouqBh3s3QBwr6JWp7QGEmXHRjJQD4giEXAZQMyBlKWIhQC0CaCMCnQDZHegZJeQgnMbmOJrQgqAlguAlQqGHetZAuQhSAFhRAAQklAAkGg4g");
	this.shape_260.setTransform(434.4041,875.0148);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F7EDDF").s().p("ArSfpQlri9k8lhQo+qNhxtLQBqsSJkqGQGNmgHejJQD+glEfAYQNGBgKhIyQC3CeCOCsQDkHpgXJsQgmMsmeJ2QgsAnguAlQqSHytsAsQhMAEhLAAQk0AAkSg9g");
	this.shape_261.setTransform(439.5098,868.598);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F6EDDE").s().p("EgLiAgRQl3i+lEloQpOqZhrtfQBlspJyqSQGWmoHqjJQEFgpEmAYQNbBbKrJBQC7CjCQCxQDvH1gWJ5QgkM+mwKAQgsApgvAnQqdIFt/ApQhIAEhHAAQlBAAkdhDg");
	this.shape_262.setTransform(444.5966,862.1605);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F6EDDD").s().p("EgLyAg6QmDjAlNluQpdqkhmt0QBgtAJ/qeQGfmwH4jJQEMgsEsAWQNwBWK2JSQC+CnCRC2QD7IAgVKHQghNPnCKLQgtAqgwApQqoIYuSAnQhCADhDAAQlOAAkphIg");
	this.shape_263.setTransform(449.7311,855.7486);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F6ECDD").s().p("EgMDAhjQmOjClWl1QpsqwhguIQBatXKNqqQGpm4IEjJQESgwE0AVQOFBSLAJhQDBCsCUC8QEGIKgUKWQggNgnSKWQguArgxAqQq0IsukAlQg9ACg+AAQldAAk1hNg");
	this.shape_264.setTransform(454.8209,849.3106);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#F6ECDC").s().p("EgMTAiLQmajDlel7Qp8q8hbucQBVtvKbq2QGynAIRjJQEZgzE7AUQOZBNLLJyQDECwCWDBQESIVgTKkQgeNxnkKhQguAsgyAsQq/I/u3AjQg5ACg4AAQlrAAlBhUg");
	this.shape_265.setTransform(459.9366,842.8812);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F5EBDB").s().p("EgMkAi0QmljFlnmCQqMrHhUuxQBPuGKorBQG7nJIejJQEgg2FCASQOuBILVKCQDIC1CXDGQEeIhgSKxQgcOEn1KrQgvAtgzAtQrKJSvKAhQg0ACg0AAQl5AAlMhZg");
	this.shape_266.setTransform(465.0755,836.4504);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F5EBDA").s().p("EgM0AjcQmxjGlwmJQqbrShPvFQBLudK1rOQHEnQIrjJQEng6FJARQPCBDLgKTQDMC5CYDMQEpIrgQK/QgaOVoHK2QgwAvg0AuQrVJmvdAeIhhABQmFAAlWhfg");
	this.shape_267.setTransform(470.1684,830.0067);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F5EAD9").s().p("EgNEAkFQm9jHl4mQQqrrehJvZQBFu0LDraQHNnZI4jJQEtg9FRAQQPXA/LrKiQDOC+CbDRQE0I2gPLNQgZOmoXLBQgxAwg1AvQrhJ6vvAcIhXABQmTAAlihlg");
	this.shape_268.setTransform(475.2848,823.5671);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#F5EAD8").s().p("EgNVAkuQnJjJmAmWQq6rqhEvuQBAvLLRrmQHWnhJEjIQE0hBFZAPQPrA6L1KyQDSDDCcDWQFAJBgOLbQgXO3opLMQgxAyg2AwQrsKNwCAaIhOABQmgAAluhrg");
	this.shape_269.setTransform(480.4044,817.1144);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F5E9D7").s().p("EgNlAlXQnVjLmImdQrKr1g+wCQA6viLfryQHfnpJRjJQE7hEFgAOQP/A1MALCQDVDHCeDcQFMJMgNLpQgVPJo6LWQgzAzg2AyQr4KgwUAYIhGAAQmuAAl4hwg");
	this.shape_270.setTransform(485.5245,810.6761);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F4E9D7").s().p("EgN2AmAQngjMmRmkQrZsBg5wWQA2v6Lsr9QHonyJejIQFChHFmAMQQVAwMKLTQDYDLCgDhQFXJXgML3QgSPapMLhQgzA0g4A0QsCKzwoAWIg+AAQm6AAmEh2g");
	this.shape_271.setTransform(490.6203,804.243);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F4E8D6").s().p("EgOGAmoQnsjOmamqQrpsMgywrQAwwRL5sJQHxn6JsjIQFIhLFuALQQpArMVLjQDbDQCiDmQFiJjgKMFQgRPrpdLrQg0A2g4A1QsPLGw6AUIg2ABQnHAAmOh9g");
	this.shape_272.setTransform(495.7651,797.802);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F4E8D5").s().p("EgOXAnRQn3jPmimxQr5sYgtw+QArwpMHsVQH6oCJ5jIQFPhOF1AKQQ9AmMgLzQDeDUCkDsQFuJtgJMTQgPP9pvL2Qg1A3g5A2QsZLaxNARIgyABQnTAAmXiDg");
	this.shape_273.setTransform(500.8858,791.3376);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F4E7D4").s().p("EgOnAn6QoEjRmqm3QsIsjgnxUQAlw/MVsiQIDoJKFjJQFWhRF8AIQRSAiMqMDQDiDZCmDxQF5J4gIMhQgNQOqAMBQg2A5g6A3QskLtxgAPIgqABQnfAAmiiJg");
	this.shape_274.setTransform(506.0094,784.874);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#F3E7D3").s().p("EgO4AojQoPjSmzm/QsXsugixoQAgxXMjstQIMoSKSjIQFchVGEAHQRnAdM0MTQDlDeCoD2QGFKDgHMvQgMQfqQMMQg3A6g7A5QswMAxyANIgkAAQnrAAmtiOg");
	this.shape_275.setTransform(511.1312,778.4332);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F3E6D2").s().p("EgPIApMQoajUm8nFQsns6gcx8QAaxuMws5QIWoaKfjIQFjhZGLAGQR7AYM/MkQDpDiCpD7QGQKPgGM8QgJQxqiMWQg3A8g8A5Qs8MUyFALIgcAAQn4AAm3iUg");
	this.shape_276.setTransform(516.2294,771.9874);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F3E6D1").s().p("EgPZAp1QomjWnEnLQs2tGgXyQQAVyGM+tFQIfoiKrjIQFqhcGSAFQSQATNKM0QDsDmCrEBQGbKagENKQgIRCqzMhQg4A9g9A7QtHMnyYAJIgWAAQoEAAnBiag");
	this.shape_277.setTransform(521.3774,765.5409);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F3E5D1").s().p("EgPpAqdQoyjWnNnTQtFtRgRylQAQycNLtRQIooqK4jIQFxhgGZAEQSlAONUNEQDvDrCtEGQGnKlgENYQgFRTrFMsQg5A+g+A9QtSM6yqAHIgPAAQoRAAnLihg");
	this.shape_278.setTransform(526.4764,759.0938);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F2E5D0").s().p("EgP6ArHQo9jYnWnaQtVtcgLy5QALy0NYtdQIxoyLGjIQF3hjGgACQS6AKNfNUQDyDvCuELQGzKwgCNmQgERlrWM3Qg6A/g/A+QtdNOy9AEIgLAAQobAAnVimg");
	this.shape_279.setTransform(531.6005,752.5992);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F2E4CF").s().p("EgQKArvQpJjZnengQtltogFzOQAFzLNmtoQI6o7LTjIQF+hmGnABQTOAFNqNkQD1D0CxEQQG+K7gCN0QgBR2roNCQg6BAhABAQtpNhzPACIgGAAQomAAnfitg");
	this.shape_280.setTransform(536.7253,746.1498);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F2E4CE").s().p("EghWAhXQt0t1AAziQAAziN0t0QN1t0ThAAQTiAAN0N0QN1N0AATiQAATit1N1Qt0N0ziAAQzhAAt1t0g");
	this.shape_281.setTransform(541.85,739.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EFE2CD").s().p("EgLzAtiQnDhgmFjxQiXhciPh1QhwhehqhrQtvtyAAzfQAAzdNvtzQBnhoBthbQMuqxRJgEQErgCEVAxQFqBAFHCXQFICWEkDsQB/BmB4B2QB8B6BqCBQCtDRB+DiQBGCBAzCGQCSFzAhGjQAOCngFCwQgLG2h7GNQjYK7o0IyQgyAxgyAuQqDJSsvChQkJA1kZAHIhXABQlMAAkwhBg");
	this.shape_282.setTransform(547.0313,731.2525);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EDE1CC").s().p("EgMCAtPQm2hRl3jcQiRhUiJhtQhvhfhqhqQtqtxAAzaIAAgBQAAzZNqtxQBnhoBshcQMrqwREgJQEogDEWAwQFnA+FJCUQFHCUElDpQB/BlB4B1QB8B4BrB/QCvDQB9DgQBBB7AtCBQCCFlAVGWQAICjgJCqQgXGriCGEQjkKto0IvQgxAxgyAuQqCJPseCxQkEA6kSAOQhZAFhWAAQkTAAj+gug");
	this.shape_283.setTransform(552.3132,722.8959);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EADFCB").s().p("EgMTAs5QmphAlojJQiLhLiDhmQhvhehphqQtltvAAzXQAAzWNltvQBmhoBshcQMnqxQ+gNQEogDEVAuQFmA8FICSQFHCRElDmQCABkB4BzQB9B3BrB+QCxDOB9DeQA8B2AmB8QBzFWAIGKQADCdgOClQgiGfiKF8QjvKfozIrQgyAxgyAuQp/JOsPDAQj+A/kMAWQiGAKiAAAQjbAAjMgeg");
	this.shape_284.setTransform(557.7523,714.6818);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E8DDCA").s().p("EgMkAsiQmcgwlai1QiGhCh9hfQhuhfhohpQtgtuAAzTQAAzSNfttQBmhnBrhcQMkqxQ5gSQEmgFEVAtQFkA6FJCQQFGCPEmDjQCABiB4ByQB9B1BsB9QCyDMB9DcQA4BxAfB2QBkFIgFF9QgCCZgTCgQgtGTiRF0Qj8KQoyIpQgxAwgyAuQp+JMr/DPQj5BFkFAcQi3AUitAAQifAAiWgRg");
	this.shape_285.setTransform(563.3369,706.6138);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#E5DBC9").s().p("EgM4AsKQmPghlLihQiAg4h3hZQhuhehnhpQtbtsAAzPQAAzONatsQBlhnBrhcQMgqxQ0gWQEkgGEVAqQFiA5FJCNQFHCOEmDfQCABhB5BwQB9B0BsB8QC0DKB9DaQAzBsAYBxQBVE6gSFwQgHCTgXCcQg5GGiZFsQkHKCoyImQgxAwgyAuQp8JKruDfQj0BJj+AkQjqAgjWAAQhmAAhhgHg");
	this.shape_286.setTransform(569.0994,698.6999);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E3DAC8").s().p("EgNOArwQmBgRk9iOQh6gvhxhSQhuhehmhpQtVtpgBzMIAAAAQAAzKNVtqQBkhnBrhcQMcqxQugbQEkgHEUAqQFgA2FKCMQFGCKEnDcQCABgB5BvQB+ByBtB6QC1DJB9DYQAuBnARBrQBGEsgfFkQgNCOgbCXQhEF6ihFkQkSJzoxIjQgxAwgyAuQp6JIrfDuQjvBPj3ArQkcAwj/AAQgtAAgsgBg");
	this.shape_287.setTransform(575.0128,690.9928);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E0D8C7").s().p("EgYHApYQh0gmhshLQhthehlhpQtQtogBzHQAAzGNQtpQBkhnBqhcQMYqxQpgfQEigIEUAoQFfA0FKCKQFFCIEnDZQCBBeB5BtQB+ByBuB4QC3DIB8DVQAqBiAKBlQA2EegrFXQgSCJggCTQhPFtioFdQkfJlowIgQgxAvgyAuQp4JGrOD9QjpBVjyAyQlFBCkbADQl1gBkuh6g");
	this.shape_288.setTransform(581.0982,683.5005);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#DED6C6").s().p("EgYFApeQhugdhmhEQhshehlhpQtLtmAAzEQAAzCNKtmQBjhnBqhcQMVqyQjgjQEhgKEUAnQFcAyFLCIQFFCGEoDWQCBBdB5BrQB/BwBtB3QC6DGB7DUQAlBcADBgQAoEQg4FKQgXCEglCNQhaFiiwFVQkrJWovIdIhjBdQp2JEq+ENQjkBajrA5Qk8BLkSAQQguACgtAAQkxAAj7hZg");
	this.shape_289.setTransform(587.3919,676.1521);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DBD5C5").s().p("EgYFAphQhogUhgg9QhshdhkhoQtGtlAAzAIAAAAQAAy+NFtlQBihnBqhcQMRqyQegnQEfgLEUAlQFbAwFKCGQFGCDEnDTQCCBcB5BqQB/BuBvB2QC7DFB7DRQAgBXgEBbQAZEBhFE+QgdB/gpCIQhlFWi4FNQk2JHovIaQgxAwgxAtQp1JCquEcQjfBgjkBAQkzBVkHAcQhfAIhZAAQjtAAjHg8g");
	this.shape_290.setTransform(593.921,669.0473);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#D9D3C4").s().p("EgYIApiQhigLhag2QhrhehkhnQtAtjAAy8IAAgBQAAy6M/tjQBihmBphdQMOqyQYgsQEegMETAkQFZAvFMCDQFECBEoDQQCCBaB5BoQCBBtBuB1QC9DDB7DPQAbBSgKBVQAJD0hSExQghB5guCEQhxFLi/FEQlCI5ouIXQgxAvgxAtQpzJAqeEsQjaBljdBHQkqBej+ApQiPAUiBAAQisAAiUgkg");
	this.shape_291.setTransform(600.7451,662.1837);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D6D1C3").s().p("EgYPApgQhcgChVgvQhqhehjhnQs7thAAy5QAAy2M6tiQBhhmBphcQMKqyQTgxQEcgNETAiQFYAtFLCBQFFB/EoDMQCCBaB6BmQCABsBvBzQC/DBB6DNQAXBNgRBQQgGDlhfEkQgmB1gzB/Qh8E+jGE9QlOIqouIUIhiBcQpxI+qNE7QjVBqjXBOQkhBpjzA1Qi+AlikAAQhvAAhkgRg");
	this.shape_292.setTransform(607.9781,655.6174);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#D4D0C2").s().p("EgYWApbQhXAHhPgoQhphehihnQs3tgAAy0IAAAAQAAyzM1tfQBhhmBohdQMGqyQOg1QEbgOETAgQFVArFMB/QFEB9EpDJQCDBYB5BlQCBBqBwByQDADAB6DLQATBHgZBKQgVDYhrEXQgsBwg3B6QiHEyjOE1QlaIcotIRIhiBbQpvI8p9FLQjQBvjQBVQkYByjpBCQjuA9jAAAQg4AAgzgFg");
	this.shape_293.setTransform(615.298,649.3606);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#D1CEC1").s().p("Ega4Ao/QhphehihnQsxtdAAyxIAAAAQAAyvMvtdQBhhmBnhdQMDqyQIg6QEagPESAfQFUApFMB8QFEB7EqDGQCDBXB5BjQCCBpBwBwQDCC/B5DIQAOBDgfBFQglDJh3ELQgyBqg7B1QiTEmjWEtQllINosIPIhiBbQptI6ptFaQjLB1jJBcQkPB7jgBOQklBfjYgDQgaAFgaAAQg0AAgxgWg");
	this.shape_294.setTransform(622.6798,643.6779);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#CFCCC0").s().p("Ega2ApAQhohehhhmQsstcAAytIAAAAQAAyrMqtcQBghlBnhdQL/qzQDg9QEYgRESAeQFSAmFNB7QFEB4EpDDQCEBWB5BhQCCBoBxBvQDEC9B5DGQAJA+gmA/Qg0C7iED+Qg3BlhABxQieEajdElQlxH+osIMIhhBaQpsI4pcFqQjHB6jCBjQkGCFjVBbQkYBujKARQglAMgjAAQgkAAgigNg");
	this.shape_295.setTransform(630.1362,638.3678);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#CCCABF").s().p("Ega0ApAQhohdhghmQsntbAAypQAAynMltaQBghlBmhdQL8qzP9hCQEXgSESAcQFQAlFNB4QFDB2ErDAQCDBUB6BhQCCBmBxBtQDGC8B5DEQAEA4gtA6QhDCtiRDxQg7BhhFBrQipEOjlEeQl9HvorIIIhhBbQpqI2pNF5QjBB/i7BrQj9COjLBnQkLB/i8AkQgsAWgpAAQgXAAgWgHg");
	this.shape_296.setTransform(637.6455,633.1884);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#CAC9BE").s().p("EgayAo/QhohdhfhmQsitYAAylIAAgBQAAyjMftYQBghlBlhdQL4qzP5hHQEUgTESAbQFPAjFNB2QFEB0EqC8QCEBTB5BfQCEBkByBtQDHC6B4DCQAAAzg0A0QhSCfieDkIiLDDQi0EBjsEWQmJHhoqIFIhhBaQppI0o7GJQi9CFi0BxQj0CYjCB0Qj9COitA4QgxAigsAAQgNAAgMgDg");
	this.shape_297.setTransform(645.2,628.0928);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#C7C7BE").s().p("EgayAo9QhmhdhfhmQsctWAAyiIAAAAQAAyfMatXQBfhlBlhdQL0qzPyhLQEVgUERAZQFNAhFOB0QFCByEsC5QCDBSB7BdQCDBjByBrQDJC4B5DAQgGAug6AvQhiCRiqDXIiVC5Qi/D1j0EOQmUHSoqIDIhhBZQpmIzosGXQi4CLitB4QjrChi3CBQjxCeifBMQg0AwguAAIgJgBg");
	this.shape_298.setTransform(652.8,623.1151);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C4C5BD").s().p("Egd0Al4QsXtVgBydIAAgBQAAyaMWtVQBdhmBmhdQLwqzPthPQETgWERAYQFLAfFOByQFCBvEsC3QCEBQB6BbQCEBiBzBpQDLC3B4C+QgKAphCApQhwCDi4DLQhLBRhTBdQjLDqj7EGQmgHEopH/IhhBZQpkIxocGnQiyCPioCAQjhCqitCNQjkCviQBgQgzA9gsACQhmhdhehmg");
	this.shape_299.setTransform(660.375,618.1989);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#C2C4BC").s().p("EgdyAl2QsStTAAyaIAAgBQAAyWMQtUQBdhlBlhdQLtqzPnhUQERgXESAXQFJAdFOBwQFDBtErCzQCFBPB6BZQCFBhBzBoQDMC1B4C8QgOAkhJAjQh/B1jFC+QhRBMhXBZQjWDdkCD+QmtG1ooH9IhgBZQpiIuoNG3QitCVihCGQjYC0ikCaIlYEyQgsBGgnAJQhlhdhehlg");
	this.shape_300.setTransform(667.95,613.2937);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#BFC2BB").s().p("EgdvAlzQsNtSAAyVIAAgBQAAyTMLtRQBchlBlhdQLpq0PihYQEQgYERAVQFHAbFPBuQFBBqEtCwQCFBOB6BYQCFBfB0BnQDOC0B3C5QgTAfhPAeQiPBnjRCxQhWBHhcBUInrHHQm4GoooH4IhgBZQpgIsn9HGIlCEoQjPC+iZCmQjKDPhzCHQgnBPghAQQhkhdhdhlg");
	this.shape_301.setTransform(675.525,608.4278);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#BDC0BA").s().p("EgdsAlxQsItQAAySIAAgBQAAyPMFtQQBchkBkheQLmqzPchcQEPgaEQAUQFGAZFPBrQFCBpEsCsQCFBNB7BWQCFBeB1BlQDQCzB2C3QgXAZhWAZQifBZjdCkQhbBChhBPQjsDFkSDuQnEGaonH1IhgBYQpeIrntHVQiiCgiUCVQjFDHiQCyQi9DfhkCbQgiBYgaAXQhkhdhchkg");
	this.shape_302.setTransform(683.1,603.5275);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#BABEB9").s().p("EgdqAluQsCtOgByOIAAgBQAAyLMBtOQBbhkBkheQLiqzPXhhQENgbEQASQFEAXFQBqQFBBmEtCqQCGBLB6BVQCGBcB0BkQDTCxB2C1QgdAUhdATQitBLjqCYQhgA9hmBJQj4C5kZDmQnQGLomHzIhgBYQpcIondHlQidCliNCcQi9DQiFDAQivDuhXCvQgbBhgVAeQhjhdhchkg");
	this.shape_303.setTransform(690.675,598.611);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#B8BDB8").s().p("EgdnAlsQr9tNgByKIAAgBQAAyHL7tMQBbhkBjheQLeq0PShlQEMgcEQARQFCAVFQBnQFBBkEtCnQCHBJB5BUQCHBbB2BiQDTCwB2CzQghAPhkANQi8A9j4CLQhlA4hqBFQkDCtkhDeQnbF8omHwIhfBXQpbInnMH0QiZCriGCjQi0DZh7DMQiiD/hIDCQgVBrgQAkQhjhdhahjg");
	this.shape_304.setTransform(698.25,593.7191);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#B5BBB7").s().p("EgdkAlpQr5tKAAyHIAAAAQAAyEL2tKQBahkBjheQLaq0PNhpQEKgdEQAOQFAAUFQBlQFBBhEuCkQCGBIB7BSQCHBaB1BhQDWCtB1CxQglAKhrAIQjMAvkEB+QhqAzhvBAQkOChkpDWQnnFuolHtIhfBXQpZIkm8IEQiUCwh/CqQiqDjhyDZQiVEOg5DWQgQB0gJArQhjhchZhkg");
	this.shape_305.setTransform(705.825,588.8083);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B3B9B6").s().p("EgdiAlnQrztJgByDIAAAAQAAyALxtIQBahkBiheQLXq0PIhuQEIgeEQANQE9ASFSBiQFABgEuCgQCHBHB6BQQCIBYB2BgQDYCsB0CvQgqAFhxACQjbAhkRByQhwAthzA8QkaCUkwDPQnyFfolHrIhfBWQpXIimsITQiOC1h5CxQiiDthnDlQiHEfgsDqIgNCvQhhhdhahjg");
	this.shape_306.setTransform(713.4,583.9155);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B0B8B5").s().p("EgdfAllQrutHgBx/IAAgBQAAx7LrtHQBahkBhheQLUq0PChyQEHggEPAMQE9AQFRBgQFABdEuCdQCHBGB7BPQCIBXB3BeQDZCrB1CsIiogDQjqASkeBlQh0Aph4A3QklCIk4DGQn+FRokHoIheBWQpXIgmbIjQiKC6hxC4QiYD3heDxQh7EvgcD9QgECGACA5QhhhchYhjg");
	this.shape_307.setTransform(721,578.9845);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#AEB6B4").s().p("EgddAljQrptFAAx7IAAgBQAAx4LmtFQBYhjBiheQLQq1O9h3QEFggEPAKQE6AOFSBeQFABbEvCaQCHBFB7BNQCJBVB3BdQDbCpB0CrQg0gGh/gIQj5AEkrBYQh6Akh8AxQkwB9k/C+QoLFDoiHlIhfBWQpUIdmMIyQiEDAhrC/QiQEAhTD+QhtE/gPERQADCPAHBAQhghdhYhig");
	this.shape_308.setTransform(728.575,574.0468);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#ABB4B3").s().p("EgdaAlhQrktEAAx3IAAgBQAAx0LgtDQBZhjBhheQLLq1O4h7QEDgiEPAJQE6AMFSBcQE+BYEwCXQCIBDB7BMQCJBUB3BcQDdCnB0CoQg4gKiHgOQkIgKk3BLQh/AfiBAtQk8BwlGC3QoXE0ohHiIheBVQpUIcl7JBQh/DFhkDHQiHEJhJELQhgFOAAElQAICYANBHQhfhchXhig");
	this.shape_309.setTransform(736.15,569.139);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#A9B3B2").s().p("EgdYAleQretCAAxzIAAgBQAAxvLatCQBYhkBgheQLJq0OyiAQECgjEQAIQE2AJFTBbQE+BWEwCTQCJBCB7BKQCKBTB3BaQDfCmBzCmQg9gQiNgTQkYgYlEA/QiEAZiFAoQlHBklOCvQoiEmohHfIheBVQpRIZlsJRQh6DLheDNQh8EThAEXQhTFfAPE4QANChAUBOQhfhchXhig");
	this.shape_310.setTransform(743.75,564.2088);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#A6B1B1").s().p("EgdVAlcQrZtAgBxvIAAgBQAAxsLWtAQBXhjBgheQLFq1OtiEQEBgkEOAGQE1AHFTBZQE/BTEwCRQCJBBB7BIQCKBRB4BZQDhClBzCjQhCgViUgZQkngmlQAzQiKAUiKAjQlSBYlWCnQouEXogHcIheBVQpPIXlcJhQh1DPhWDVQh1Ecg1EkQhGFuAdFNQAUCqAZBVQhehchWhig");
	this.shape_311.setTransform(751.325,559.2571);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#A4AFB0").s().p("EgdSAlaQrVs+AAxsIAAgBQAAxnLRs/QBWhjBfheQLCq1OniIQD/gmEPAFQEzAGFUBWQE9BRExCNQCKBAB7BHQCKBPB5BYQDiCjBzCiQhGgbibgeQk2g0leAlQiOAQiPAeQleBMldCfQo6EIofHaIheBUQpNIXlMJuQhwDVhQDcQhrEmgrEwQg4F+ArFhQAZCzAfBcQhehdhUhhg");
	this.shape_312.setTransform(758.9,554.3259);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#A1ADAF").s().p("EgdQAlZQrPs9AAxoIAAgBQAAxkLLs8QBWhjBfheQK+q2OhiMQD/gnEOADQExAEFUBUQE+BPExCKQCJA+B7BFQCMBPB5BWQDkChByCgQhLgfiigkQlFhDlqAZQiUAKiTAaQlpA/llCYQpFD6ofHWQgvApgvArQpLIVk8J+QhqDahJDjQhiEvgiE9QgrGOA5F0QAgC8AlBjQhehchUhgg");
	this.shape_313.setTransform(766.475,549.3674);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#9FACAE").s().p("EgdNAlXQrKs8AAxjIAAgBQgBxgLHs7QBVhjBfheQK5q1OdiSQD8gnEOABQEwACFVBSQE8BNEyCHQCKA8B8BEQCLBNB6BVQDmCgBxCdQhPgkipgqQlVhQl2AMQiaAFiYAVQlzAzltCPQpPDsogHTIhdBUQpKITksKNQhlDghCDqQhaE4gXFKQgeGeBIGIQAlDFArBqQhdhchThgg");
	this.shape_314.setTransform(774.05,544.4473);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#9CAAAD").s().p("EgoQAG6QAAzhN0t1QN1t0ThAAQEuAAFVBQQE9BKEyCEQEnCADlCdQDnCeByCbQhUgpiwgvQlkhfmDAAQoigBoMC/QqRDwpHIRQpIIRkbKdQjiIXgYJXQgRGuBXGcQArDOAwBxQt0t0AAzjg");
	this.shape_315.setTransform(781.625,539.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_224}]}).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).wait(1));

	// Слой_2
	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#403433").s().p("EhOsA4nQECpRHyo8QH/pLMepdQJGmxPAmKQFWiMHkitQEQhiIBi0QGriaEEhwQFLiQDIiHQDiiYBbiiQBiiug2jGQhnkFnbjOQiUhAiogzI1VlqQlWhjlUiUQqokoAPjzQAPj1G3hyQCQglDOgaIEGggQFcg4CUhkQA8gpgHhZQgCgYgIgfQgGgWACABQBlAzJlEqQKtFMHcDjUAQfAH3AkkASMUABGAedgF6AuzMhulAAAQ01FUqeAAQp9AAglkzg");
	this.shape_316.setTransform(618.2219,1570.1448);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#423532").s().p("EhOAA4oQALgTAGgVQAjhfAmhdQAVg9Aeg7QAjhFAfhFQA1hqA8hpQBKiWBuiVIARgZQAsg3Avg3IArgzQH6pJMfpYIAjgaQF8kTIVkCQETiFE6iBQCOg6Clg/QDshaEZhlIDvhYIACgBQDXhQE6hxIALgEIADgBIDYhQQC7hFCVg8IBzgwIARgHQBGgeA/gdQDAhaCShXIAhgVIAkgXQC8h9BjiDQAVgdASgdQAMgVAKgVQAzhngEhwQgBg5gRg8QhJi3kDicQhrhBiLg8Ig4gXQh7gyiJgpIsijUIlJhXIjng9QjwhGjwheQhlgnhkgsQk/iLilh/IgcgWQgqgjgegiQgjgogTgmQgbg1AEgyQAFhVA6hGQBUhlDEhEQAzgSA6gPQBxgdCXgXIAfgEIA1gIIEBggIADAAQCSgYBvgfQCXgqBWg5QAhgXANgkQAKgdgDgnQgBgVgFgYIgDgKQgFgVACABIAAgBIAZANIAZANQCAA/FiCtIClBQIARAIQKhFGHaDjIAOAGIBjAvUAQnAH9Ai6ARXUABGAedgF6AuzMhtlAAAIgsAMQ0HFFqNAAQp3AAgmkxg");
	this.shape_317.setTransform(622.5719,1569.9104);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#443531").s().p("EhNVA4rQAPgVAEgVQAbhkAdhfQANhAAbg7QAghFAUhGQAqhqAwhpQAviYBniXQAHgNAJgOQArg3Aug3IArgzQH2pGMepVIAkgZQF6kRIVkAQESiEE5h/QCNg6Clg/QDthaEVhlIDthZIACgBQDNhSE5hxIALgEIADgBIDahSQC9hGCYg9IB2gwIARgHQBIgeBAgdQDAhZCXhZIAigVIAlgXQC/h9BmiDQAXgdASgdQANgUAKgWQA3hngChvQgBg6gSg9QhJi2kDibQhrhAiLg8Ig3gXQh7gyiJgpIsfjTIlJhXIjmg9QjxhFjuhdQhlgohkgrQlAiLijh/IgcgWQgqgjgegiQgigogTgmQgag0AEgyQAGhVA5hFQBUhlDDhEQAzgRA5gPQBwgdCXgYIAegEIA1gHQBrgPCVgSIADAAQCRgYBugfQCWgpBVg4QAigWANgkQALgdgDgmQgBgUgFgZIgCgJQgFgVACAAIAAAAIAZANIAZAMQCCBBFhCsIClBQIARAIQKdFEHeDlIAOAGIBjAvUAQnAH9Ai7ARYUABGAecgF6Au0MhsmAAAIgsALQz6FBqHAAQpyAAgnksg");
	this.shape_318.setTransform(626.9219,1569.6914);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#473631").s().p("EhMpA4sQARgVACgXIApjJQAEhCAYg7QAdhFAJhHQAfhrAkhoQAUiaBfiZQAHgOAJgPQAqg3Atg3IArgzQHxpEMfpQIAkgaQF5kOITj+QESiDE3h/QCOg5Cjg+QDvhaEShlQBpgnCAg0IACgBQDDhTE5hyIALgEIADgBQBvgsBtgoQC/hGCcg9IB4gxIARgHQBJgeBBgeQDBhZCchZIAjgWIAlgXQDCh9BriCQAXgdASgdQAOgUALgWQA7hmgBhxQABg6gUg+QhJi1kDiaQhrhAiLg7Ig3gXQh7gxiIgpQmOhqmPhoIlJhXIjlg9QjwhFjuhdQhlgnhkgrQlAiLiih/IgbgWQgqgjgdgiQgigogTgmQgZg0AEgxQAGhUA5hFQBVhkDBhDQAygSA5gPQBwgdCVgYIAegEIA1gIQBrgPCTgSIADAAQCRgYBtgeQCVgpBVg3QAhgWAOgjQALgcgCgmQgBgUgFgYIgCgJQgFgVACABIABgBIAZANIAZANQCEBBFfCrIClBQIARAIQKaFDHhDmIAOAGIBjAwUAQnAH8Ai8ARZUABGAecgF6Au0MhrmAAAIgrALQzuE+qBAAQpsAAgokqg");
	this.shape_319.setTransform(631.2719,1569.4605);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#493630").s().p("EhL+A4uQAUgVAAgZQAOhrAMhkQgFhFAVg7QAahFgChHQAVhsAXhoQgHicBYiaQAGgQAIgPQApg4Aug3IAqgyQHspDMgpMIAjgZQF5kMIRj8QESiCE2h9QCNg5Cjg+IH/i+QBpgpB9g0IACgBQC5hVE4hyIAKgEIADgCQBxgtBvgoQDBhHCfg+IB6gwIARgIQBLgeBCgeQDBhZChhaIAkgWIAmgXQDEh9BviCQAYgdATgcQAOgVAMgVQA/hnABhwQABg8gUg+QhKi0kDiZQhrg/iKg8Ig3gXQh7gwiIgpIsbjRIlIhXIjlg8QjwhFjthdQhlgnhjgrQlAiKihh/IgbgWQgqgjgdgiQghgogSgmQgZg0AEgxQAGhTA5hEQBVhkDAhDQAygRA5gPQBugeCVgXIAdgFIA1gIQBqgPCSgSIADAAQCQgYBtgeQCTgpBWg1QAhgWAOgiQALgcgCglQAAgUgEgXIgCgKQgFgUACAAIABAAIAZANIAZAMQCGBDFdCqICmBQIARAIQKXFCHjDnIAOAGIBkAwUAQmAH8Ai+ARZUABGAedgF6AuzMhqmAAAIgsALQzhE6p7AAQpnAAgpkmg");
	this.shape_320.setTransform(635.6219,1569.2231);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#4B372F").s().p("EhLSA4wQAXgWgDgaQAHhvADhmQgNhIASg7QAXhFgMhIQAJhsALhoQgiieBRidQAEgQAJgRQAog3Atg3IAqgyQHopAMfpIIAkgZQF4kLIPj5QESiBE0h8QCNg5Cig+IH+i9QBpgqB5g0IACgBQCwhXE2hzIALgEIADgCQBwguBygpQDDhHCjg+IB7gxIASgIQBNgfBCgdQDBhZCnhcIAkgVIAngXQDHh9BziCQAZgdAUgcQAPgVAMgVQBDhnAChwQADg9gWg/QhKiykCiZQhsg/iKg7Ig3gWQh6gxiIgoQmKhpmPhoIlHhWIjlg8QjvhFjthcQhlgnhjgrQlAiKifh+IgbgWQgqgjgcgjQghgngSgmQgZg0AEgxQAHhTA6hDQBUhjC+hDQAygRA5gPQBugeCTgYIAegEIA0gIQBqgQCRgSIADAAQCPgYBrgdQCTgoBWg1QAhgVAOgiQALgbgBglQAAgTgEgYIgCgIQgEgVACABIABgBIAZANIAZANQCHBDFdCqIClBQIARAIQKUFAHnDpIAOAGIBjAvUAQnAH9Ai+ARZUABGAedgF6AuzMhpmAAAIgrALQzVE3p1AAQphAAgqkjg");
	this.shape_321.setTransform(639.9719,1569.0042);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#4D372E").s().p("EhKaA4yQAagWgFgcQAAhygGhpQgVhLAPg7QAUhFgYhJIgDjUQg8ifBJifQAEgSAIgRQAng4Atg3IAqgyQHjo+MfpEIAkgYQF3kJIOj3QESh/Eyh8QCNg4Chg9IH8i+QBqgqB1g1IACgBQCmhZE1h0IALgEIADgBQBwgvB2gqQDEhICmg/IB+gxIASgHQBOgfBDgeQDChZCshdIAlgVIAngXQDKh9B3iCQAagcAVgdQAPgVAMgVQBIhmADhxQAEg9gXhAQhKixkDiYQhrg/iKg6Ig3gXQh6gwiHgoQmJhomPhoIlGhWIjkg7QjwhGjrhbQhlgnhigqQlBiKieh+IgbgWQgpgjgcgjQghgogRglQgZg0AFgwQAHhSA5hDQBUhiC+hDQAxgRA4gQQBugdCSgYIAdgFIA0gIQBqgQCQgSIADAAQCOgYBrgdQCRgoBWgzQAhgVAOghQAMgbgBgkQABgTgEgXIgCgJQgEgUACABQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAZANIAaAMQCJBEFbCqIClBQIARAIQKRE+HqDrIAOAGIBjAvUAQnAH9Ai/ARaUABGAecgF6Au0MhonAAAIgqAKQzIEzpwAAQpbAAgrkfg");
	this.shape_322.setTransform(643.076,1568.7959);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#4F382D").s().p("EhJEA40QAdgXgHgdQgHh3gOhrQgehNAMg8QARhFgihJIgbjUQhXihBBiiQAEgSAIgSQAmg4Asg3IAqgyQHeo8Mgo/IAkgZQF2kGIMj1QESh/Exh6QCMg4Chg9QDzhZEHhkQBqgrByg2IACgBQCchaEzh1IALgEIADgBQBxgwB4grIFwiHICAgyIASgHQBQggBDgeQDChYCyheIAmgVIAogYQDMh9B8iBQAagdAWgcQAPgVANgVQBMhmAFhxQAEg+gYhBQhKiwkDiXQhrg+iJg6Ig3gWQh6gwiHgoQmIhomOhnIlGhWIjjg7QjvhFjrhbQhlgnhigqQlBiKich9IgbgWQgpgkgcgiQgggogRgmQgYgzAFgwQAHhSA5hCQBUhhC8hDQAxgRA4gQQBtgdCRgZIAegEIAzgIQBpgQCPgTIADAAQCNgYBrgcQCQgoBWgyQAggUAPggQAMgbAAgkQABgSgEgXIgBgJQgFgUADABIABgBIAZANIAaANQCKBFFaCoICmBRIARAIQKNE8HtDsIAOAGIBkAwUAQmAH8AjBARbUABGAecgF6Au0MhnoAAAIgqAKQy7EwpqAAQpWAAgskcg");
	this.shape_323.setTransform(643.1198,1568.5543);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#52382D").s().p("EhHsA42QAggYgJgeQgOh6gXhuQgnhQAJg7QAOhGgthKQgYhtgZhnQhzijA7ijQACgUAIgTQAlg3Asg3IApgyQHao6Mgo7IAkgZQF1kEILjzQERh9Ewh6QCMg3Cgg9QD0hZEEhjQBrgsBug3IABgBQCThbEyh2IALgEIADgBQBxgyB7grIF2iJQBFgZA8gYIATgIQBRggBEgeQDDhYC3hfIAmgVIApgYQDPh9CAiBQAagcAXgdQAQgUAOgVQBPhmAHhyQAFg+gZhCQhLivkCiWQhrg+iKg5Ig2gXQh6gviHgoQmGhomNhnIlFhUIjjg8QjvhFjqhaQhlgnhigqQlBiJibh9IgbgWQgogkgcgjQgggngRgmQgXgzAFgwQAIhRA5hBQBUhhC7hCQAwgSA4gPQBsgeCQgYIAdgFIA0gIQBogRCOgSIADAAQCNgYBpgcQCPgnBWgxQAhgUAOggQANgaAAgjQABgSgDgXIgCgIQgDgUACABIABgBIAaANIAZAMQCMBGFZCoICmBRIARAIQKKE7HwDtIAOAGIBkAwUAQmAH8AjCARbUABGAedgF6AuzMhmoAAAIgqAKQyuEspkAAQpRAAgtkYg");
	this.shape_324.setTransform(643.0078,1568.3395);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#54392C").s().p("EhGSA44QAigZgLgfQgUh/ghhvQgvhTAGg8QALhFg3hLQgjhtgmhnQiOilAzilQACgVAIgUQAkg4Arg2IApgyQHWo4Mgo3IAjgZQF1kBIJjxQERh8Euh5QCMg3Cfg8QD1haEChiQBrgtBqg3IACgBQCIheEyh2IAKgEIADgBQBxgzB+gsIF7iJQBHgaA9gYIATgIQBTggBFgeQDChYC9hgIAngWIApgXQDSh9CEiBQAcgdAXgcQAQgUAPgVQBThmAIhyQAHg/gbhDQhLitkCiVQhrg+iJg5Ig3gXQh5gviHgoQmEhnmNhmIlFhVIjig7QjvhEjphaQhlgnhhgqQlBiJiah9IgbgWQgogjgbgjQgggogQgmQgXgyAFgwQAIhQA5hBQBUhgC5hCQAxgSA3gPQBsgeCPgYIAdgFIAzgIQBogRCMgTIADAAQCMgYBpgcQCOgmBWgwQAggTAPgfQANgaABgiQABgSgDgXIgBgIQgEgTADAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAaANIAZANQCOBGFXCoICmBQIARAIQKHE6H0DvIAOAGIBjAvUAQnAH8AjCARcUABGAedgF6AuzMhloAAAIgpAKQyjEppeAAQpLAAgtkVg");
	this.shape_325.setTransform(642.7713,1568.1085);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#563A2B").s().p("EhE4A46QAmgZgOghQgbiCgphyQg4hVADg9QAIhFhChMQguhtgzhnQioinAsinQABgWAHgVQAkg3Arg3IAogyQHRo2MgoyIAkgZQF0j/IHjvQERh7Eth3QCMg3Ceg8QD2hZD/hjQBrguBng3IABgCQB/heEwh3IALgFIADgBQBxg0CBgsIGAiLQBHgaA/gYIATgIQBVggBFgfQDDhXDChhIAngWIArgXQDVh9CIiBQAcgcAYgcQARgVAPgUQBXhnAKhxQAHhAgbhEQhMitkCiUQhrg9iJg5Ig2gWQh5gviHgnQmDhnmMhmIlEhUIjig7QjuhFjphZQhkgmhigqQlBiJiZh9IgagWQgogkgbgiQgfgogQgmQgWgyAFgwQAJhPA5hAQBThfC4hDQAwgRA3gPQBrgeCOgZIAdgFIAzgIQBngRCMgTIADAAQCLgZBogbQCNglBWgvQAggTAPgfQANgZABghQACgSgDgWIgBgJQgDgSADAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAZANIAaANQCQBHFWCmICmBRIARAIQKEE4H2DxIAOAGIBkAvUAQmAH8AjEARdUABGAecgF6Au0MhkpAAAIgpAJQyVElpaAAQpEAAgvkRg");
	this.shape_326.setTransform(642.4495,1567.8896);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#583A2A").s().p("EhDdA47QAogZgQgjQgiiFgxh1QhBhXABg9QAFhFhOhNQg5htg/hnQjDipAkipQAAgXAIgWQAjg3Aqg3IAogyQHMo0MhouIAkgYQFzj+IGjsQEQh6Erh2IEphyQD4haD7hiQBsgvBkg4IABgBQB1hgEvh4IAKgEIADgCQBxg1CEgtIGGiLICHgzIAUgIQBWggBHgfQDDhYDHhhIAogWIArgYQDYh9CMiAQAdgcAZgdQARgUAPgUQBchnALhxQAJhBgdhFQhMirkCiTQhrg9iIg5Ig3gWQh5guiGgoQmBhmmMhmIlDhTIjhg7QjvhFjnhYQhlgnhhgpQlCiJiXh8IgagWQgogkgagjQgfgogQgmQgWgyAGgvQAJhOA5hAQBThfC3hBQAwgSA2gPQBqgeCOgZIAcgFIAzgJQBngRCKgTIADAAQCKgYBogbQCMglBWguQAggTAPgdQAOgZABghQACgSgCgVIgBgJQgDgSACAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAZANIAaANQCSBIFUCmICmBRIARAIQKBE2H5DyIAOAGIBkAwUAQmAH8AjFARdUABGAecgF6Au0MhjpAAAIgoAJQyJEipTAAQo/AAgwkPg");
	this.shape_327.setTransform(642.0664,1567.6603);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#5A3B2A").s().p("EhCCA49QArgagSgjQgpiKg6h3QhJhagDg9QAChFhYhOQhEhthLhnQjeiqAdisQgBgXAHgYQAig3Aqg3IAngxQHIoyMhoqIAkgYQFyj7IEjrQERh5Eph1QCMg2Ccg7QD5hZD5hiQBsgwBgg5IABAAQBrhjEuh5IAKgEIADgBQBxg2CHguIGLiNICKgzIAUgHQBYghBHgfQDDhYDNhiIApgWIArgYQDah9CRiAQAdgcAagcQASgUAQgVQBghmAMhyQAKhCgehFQhMiqkDiSQhqg9iJg4Ig2gWQh4guiGgoQmAhlmMhmIlChTIjhg7QjuhEjnhYQhkgmhhgqQlCiIiWh8IgZgWQgogkgagjQgfgogPgmQgVgxAGgvQAJhOA4g/QBUheC1hCQAwgRA2gPQBpgfCNgZIAcgFIAygJQBngRCJgTIADAAQCJgZBogaQCKgkBWgtQAggSAQgdQANgYACghQADgRgCgWIgBgIQgDgSADAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAaANIAaANQCTBJFTClICmBRIARAIQJ+E1H8DzIAOAGIBkAwUAQmAH8AjGARdUABGAedgF6AuzMhipAAAIgoAJQx8EepOAAQo5AAgxkLg");
	this.shape_328.setTransform(641.6544,1567.4103);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#5D3B29").s().p("EhAmA4/QAugbgUglQgwiNhDh5QhShdgFg9QgBhGhjhOQhQhuhXhmQj5isAWiuQgCgZAHgYQAhg3Aqg3IAngxQHDowMhomIAkgYQFxj5IDjoQEQh4Eoh0QCMg2Cbg6QD6haD2hhQBsgxBdg4IABgCQBhhkEsh6IALgEIADgBQBxg4CKguIGRiNQBKgbBBgZIAUgHQBagiBIgfQDDhXDShkIAqgWIAsgXQDdh9CViAQAegcAagcQATgUAQgVQBkhmAOhyQALhDgfhGQhNipkCiRQhqg8iJg4Ig2gWQh4guiFgnQl/hlmMhlIlBhTIjgg7QjuhEjmhYQhlgmhggpQlCiIiVh8IgZgWQgngkgagjQgfgngPgmQgUgyAGguQAJhNA5g/QBUhdCzhCQAvgRA2gPQBpgfCMgZIAcgFIAygJQBmgSCIgSIADgBQCJgZBmgZQCJgkBWgsQAggSAQgcQAOgYACggQADgRgCgVIAAgIQgDgSADAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAZANIAaANQCVBKFSCkICmBRIARAIQJ7E0H/D1IAOAGIBkAvUAQmAH8AjHAReUABGAedgF6AuzMhhqAAAIgnAJQxwEbpIAAQo0AAgxkIg");
	this.shape_329.setTransform(641.1864,1567.2104);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#5F3C28").s().p("Eg/KA5BQAxgbgXgnQg2iRhMh7QhahggJg9QgEhGhuhOQhahvhjhmQkUiuAOiwQgDgZAIgaQAfg3Aqg3IAmgxQG/otMhoiIAkgYQFxj3IBjlQEQh3Emh0IEmhvQD7haDzhhQBtgxBZg5IABgCQBXhmErh6IALgEIADgCQBxg4CMgwIGXiOQBMgaBBgZIAVgIQBbghBJggQDDhXDYhlIAqgWIAtgYQDgh8CZiAQAfgcAbgcQATgUARgUQBohmAPhzQAMhDgghHQhNiokCiQQhrg8iIg4Ig2gVQh4guiFgnQl9hlmLhkIlBhTIjfg6QjuhEjlhXQhlgmhggpQlCiIiTh8IgagWQgngkgZgjQgegogPglQgUgyAGguQAKhMA5g/QBThcCyhBQAvgRA2gQQBogeCLgaIAcgFIAxgJQBmgSCHgTIADAAQCIgZBlgZQCIgjBXgrQAfgSAQgbQAPgXACggQAEgRgCgVIAAgHQgDgSADAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAaANIAaANQCWBKFRCkICmBRIARAIQJ4EyICD3IAOAGIBkAvUAQmAH8AjIARfUABGAecgF6Au0MhgqAAAIgnAIQxjEXpCAAQovAAgykEg");
	this.shape_330.setTransform(640.6881,1566.9729);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#613C27").s().p("Eg9uA5DQA0gcgYgoQg+iVhVh+QhihigMg9QgHhGh4hPQhmhvhvhmQkviwAHiyQgEgaAHgbQAfg3Apg3IAmgxQG7orMhoeIAkgXQFvj1IAjkQEQh2EkhyIEmhvQD8hZDwhhQBtgyBVg6IABgBQBOhoEqh7IAKgEIADgCQBxg5CQgwQDXhMDFhDQBNgbBCgZIAVgIQBdgiBJgfQDEhXDdhmIArgWIAugYQDih8CdiAQAggcAcgcQATgUASgUQBshmARhzQAMhEghhIQhNimkCiQQhrg7iHg4Ig2gVQh4gtiFgnQl7hlmLhkIlAhSIjfg6QjthEjlhXQhlgmhggoQlCiIiSh7IgZgWQgngkgZgjQgdgogPgmQgTgxAGguQAKhMA5g9QBThcCxhBQAvgRA1gQQBogeCJgaIAcgFIAxgJQBmgTCFgSIADgBQCHgZBlgZQCHgiBWgqQAggRAQgbQAPgXADgeQADgRgBgVIAAgHQgCgRADgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAaANIAaANQCYBMFPCjICnBRIARAIQJ0ExIGD3IAOAGIBkAwUAQmAH8AjJARfUABGAecgF6Au0MhfrAAAIgnAIQxWEUo8AAQopAAg0kBg");
	this.shape_331.setTransform(640.1385,1566.754);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#633D26").s().p("Eg8RA5FQA2gdgagpQhFiZhdiAQhrhlgPg9QgKhGiDhQQhwhvh8hmQlKiygBi0QgEgbAHgbQAeg3Aog3IAmgyQG2opMioZIAjgXQFvjzH+jhQEQh1EjhxIEkhvQD9hZDuhgQBtg0BSg6IABgBQBEhqEoh7IALgFIADgBQBxg7CSgxQDZhLDJhFQBOgbBDgZIAVgIQBfgiBJgfQDFhXDihnIAsgWIAvgYQDkh8CiiAQAggcAdgcQAUgTASgVQBwhmAShyQANhFghhJQhOilkCiPQhrg7iHg3Ig2gVQh3gtiFgnQl6hkmKhkIlAhRIjeg7QjthDjkhXQhkglhggpQlCiHiRh7IgZgWQgmgkgZgjQgegogNgmQgUgxAHgtQALhLA4g+QBThaCwhBQAugSA1gPQBngfCIgaIAcgFIAxgJQBlgTCFgTIACAAQCHgZBkgYQCGgiBWgpQAggRAQgaQAPgWAEgfQADgQAAgUIAAgIQgCgRADAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAaANIAaANQCaBMFNCjICnBRIARAIQJxEvIJD5IAOAGIBkAwUAQmAH8AjKARfUABGAedgF6AuzMherAAAIgmAJQxJEPo3AAQojAAg1j9g");
	this.shape_332.setTransform(639.5707,1566.5239);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#653E26").s().p("Eg60A5HQA5gdgcgrQhMidhmiCQh0hngRg+QgNhGiOhRQh8hviIhmQllizgIi2QgFgdAHgcQAdg3Aog3IAmgxQGxonMioVIAjgXQFujxH9jfQEPh0EihwIEjhtQD+hZDrhhQBug0BOg7IABgBQA6hrEnh9IAKgEIAEgCQBxg7CVgyQDbhMDMhFICTg0IAWgIQBggjBKgfQDFhXDohoIAsgWIAwgYQDnh8CmiAQAhgcAdgbQAUgUATgUQB0hmAUhzQAOhGgjhJQhOikkCiOQhqg7iHg3Ig2gVQh3gsiEgnQl5hkmKhjIk+hRIjeg6QjthDjjhWQhlgmhfgoQlCiIiQh6IgYgWQgngkgYgjQgdgogOgmQgSgxAHgtQAKhKA5g9QBThaCuhBQAugRA1gPQBmgfCHgaIAcgGIAwgJQBlgTCDgTIADAAQCGgZBkgYQCEgiBWgoQAggQARgZQAPgWAEgeQAEgQAAgUIAAgHQgCgRADAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAABIAaANIAaANQCcBNFMCiICnBRIARAIQJuEuIMD6IAOAGIBkAwUAQmAH8AjLARgUABGAecgF6Au0MhdrAAAIgmAIQw+EMowAAQoeAAg1j6g");
	this.shape_333.setTransform(638.9927,1566.2937);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#673E25").s().p("Eg5XA5JQA8gegfgsQhTihhuiEQh9hrgUg9QgQhGiZhSQiGhwiVhlQmAi1gPi5QgGgdAHgdQAcg3Aog3IAlgxQGsolMioRIAkgXQFtjuH7jdQEPhzEghvIEjhtQD/hZDohgQBug1BKg7IABgCQAxhsEmh+IAKgEIADgBQBxg9CYgzQDdhMDRhGICUg0IAWgIQBigjBLggIGyi/IAtgWIAwgZQDqh8Cqh/QAigcAegbIAogoQB5hmAVhzQAPhGgkhLQhOijkDiNQhqg6iHg2Ig1gVQh3gtiEgmQl3hjmKhjIk+hRIjdg6QjthDjihWQhkglhfgoQlDiHiOh6IgYgWQgnglgYgjQgcgogNgmQgTgwAIgtQALhKA4g8QBThZCthBQAugRA0gPQBmgfCGgbIAbgFIAwgJQBlgUCCgTIADAAQCEgZBkgYQCDghBWgmQAfgQASgZQAPgVAFgdQAEgQAAgUIAAgHQgCgQAEgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAaANIAaANQCeBOFLChICnBSIARAIQJrEsIOD7IAOAHIBlAwUAQlAH7AjNARhUABGAecgF6Au0MhcsAAAIgmAIQwwEIorAAQoYAAg2j2g");
	this.shape_334.setTransform(638.4279,1566.074);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#6A3F24").s().p("Eg37A5KQA/gdghguQhZilh4iGQiFhtgXg+QgThHikhSQiRhwihhlQmbi3gWi6QgHgfAGgeQAcg3Ang3IAlgxQGoojMioMIAkgXQFsjtH5jaQEPhyEfhuIEhhsQEBhZDlhfQBug2BHg9IABgBQAmhvElh9IAKgFIADgBQByg/CbgyQDfhNDUhGQBQgbBGgaIAWgIQBjgjBMggIG4jAIAugXIAxgYQDth8Cuh/QAigcAfgbQAVgUAUgUQB9hmAWhzQAQhHglhLQhOiikDiNQhqg5iGg2Ig2gVQh3gsiDgmQl2hjmJhjIk9hQIjdg5QjshDjihWQhkglhfgoQlDiHiMh5IgZgWQglglgYgjQgdgogMgmQgSgwAIgsQALhKA4g7QBThZCshAQAtgRA0gQQBlgfCFgaIAcgGIAvgKQBkgTCBgTIADAAQCEgaBjgXQCCggBWgmQAfgPARgZQAQgUAFgcQAFgQAAgUIABgHQgCgPADgCQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAaAOIAaAMQCfBPFKChICnBSIARAIQJoEqISD9IAOAHIBkAwUAQmAH7AjNARhUABGAecgF6Au0MhbsAAAIglAHQwkEGolAAQoSAAg4j0g");
	this.shape_335.setTransform(637.8529,1565.8498);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#6C3F23").s().p("Eg2eA5NQBCgfgjgvQhgipiBiJQiNhvgag/QgWhGivhTQidhwishlQm2i5gei8QgIggAHgfQAag3Ang3IAkgxQGkohMioIIAkgWQFrjrH4jYQEPhxEdhtIEghrQEChZDihfQBvg3BDg9IABgBQAdhwEjh/IAKgEIADgCQByg/Cdg0QDhhNDYhHQBSgbBGgaIAXgIQBkgjBNggIG+jBIAugXIAygYQDvh8Czh/QAjgcAfgbQAWgUAUgUQCBhlAYh0QARhIgmhMQhPigkCiMQhqg5iGg2Ig2gVQh3griDgmQl0hjmIhiIk9hQIjcg5QjshDjhhVQhkglhfgoQlDiGiLh6IgYgWQgmgkgXgkQgcgogNgmQgRgvAIgsQAMhJA4g7QBThYCqhAQAtgRAzgQQBlgfCEgaIAbgGIAwgJQBjgVCAgSIADgBQCDgZBigXQCBggBWglQAfgOASgYQAQgUAFgcQAFgPABgTIABgIQgCgPAEgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAbANIAaANQCgBQFJCgICnBRIARAIQJlEpIVD/IAOAGIBkAwUAQmAH8AjOARhUABGAedgF6AuzMhatAAAIgkAIQwXEBogAAQoMAAg5jvg");
	this.shape_336.setTransform(637.271,1565.6148);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#6E4022").s().p("Eg1BA5OQBFgfgmgwQhnitiJiLQiWhzgdg+QgZhGi5hUQiohxi5hkQnRi7gli/QgIggAGggQAZg3Ang3IAkgxQGfoeMioFIAkgWQFrjoH2jWQEOhwEchsIEfhqQEDhZDfhfQBwg4A/g9IABgCQAThxEiiAIAKgEIADgCQByhACgg1QDjhNDchHQBTgcBHgaIAXgIQBmgjBNghQDGhWD+hsIAvgWIAygZQDyh8C3h/QAjgbAhgbQAWgUAVgUQCFhlAZh0QAShIgnhOQhPifkCiLQhqg5iGg1Ig2gUQh2gsiDglQlzhjmIhhIk8hQIjbg5QjshDjghUQhlglhegoQlDiGiKh5IgYgWQglglgXgjQgcgpgMglQgRgvAIgsQAMhIA4g7QBThXCphAQAtgRAzgQQBkgfCDgbIAbgFIAvgKQBjgUB/gTIADgBQCCgZBhgWQCAggBXgjQAegPASgWQARgUAGgcQAFgPABgTIABgGQgCgQAEAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAaANIAaANQCjBRFHCfICnBSIARAIQJiEnIYEAIAOAHIBkAwUAQmAH7AjPARiUABGAedgF6AuzMhZtAAAIgkAIQwLD+oaAAQoHAAg5jtg");
	this.shape_337.setTransform(636.6977,1565.4084);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#704022").s().p("EgzkA5QQBHgggngxQhuixiSiNQifh1ggg/QgchGjEhVQizhxjFhkQnsi8gsjBQgJgiAFghQAZg3Amg3IAkgwQGaodMjoAIAkgWQFpjmH1jUQEOhuEahrIEfhqQEEhZDchfQBwg4A7g+IABgCQAJhzEhiAIAKgFIAEgBQBxhCCkg1QDlhODehIQBVgcBIgZIAXgIQBngkBPghQDGhWEDhtIAvgWIAzgZQD1h8C7h+IBFg3IAtgnQCJhlAbh1QAThJgphOQhPiekCiKQhqg5iGg0Ig1gVQh3griCglQlxhimIhiIk7hPIjbg5QjshCjfhUQhkglhegnQlEiGiIh5IgYgWQglglgXgjQgbgpgMglQgQgvAIgsQANhHA4g6QBThWCnhAQAsgRAzgQQBkgfCCgbIAagGIAvgKQBjgUB9gTIADgBQCCgaBggVQB/gfBXgjQAegNASgXQARgTAGgbQAGgOABgTIABgHQgBgPAEgBQAAAAAAgBQABAAAAAAQAAgBABABQAAAAABAAIAaANIAaANQCkBRFGCfICoBSIARAIQJeEmIbEBIAOAHIBlAwUAQlAH7AjRARjUABGAecgF6Au0MhYuAAAIgkAHQv9D7oVgBQoBAAg6jpg");
	this.shape_338.setTransform(636.1176,1565.1709);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#724121").s().p("EgyHA5SQBKgggqgzQh1i0iaiQQinh4gjg/QgfhGjPhVQi+hyjRhkQoHi+g0jDQgKgiAGgjQAXg2Amg3IAjgxQGWoaMjn8IAkgWQFpjkHzjSQEOhtEYhqIEehpQEFhZDZheQBwg6A4g+IABgCQAAh1EfiBIAKgEIAEgCQBxhCCmg2QDnhODjhJICeg2IAXgIQBqgkBPghQDGhWEIhtIAxgXIAzgZQD4h8C/h+QAlgbAigcIAtgmQCNhmAdh0QAUhKgqhPQhQidkCiJQhqg4iFg1Ig1gUQh2griCglQlwhimIhhIk6hOIjag5QjshDjehTQhlglhdgnQlEiGiHh4IgXgWQglglgXgjQgbgpgLgmQgQguAJgsQAMhGA4g5QBThWCmg/QAsgSAzgPQBjggCBgbIAagGIAvgKQBigVB8gTIADAAQCBgaBggVQB9geBXgiQAegNATgWQARgSAGgbQAGgOACgTIABgGQgBgPAEgBQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAbAOIAaANQCmBSFECeICoBSIARAIQJbEkIeEDIAOAHIBlAwUAQlAH7AjSARjUABGAedgF6AuzMhXuAAAIgkAHQvxD3oOAAQn8AAg7jmg");
	this.shape_339.setTransform(635.5344,1564.9288);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#754120").s().p("EgwrA5UQBOghgtg0Qh7i5ikiSQivh6gmg/QgihHjahVQjJhyjdhkQoijAg7jFQgLgjAFgkQAXg3Alg2IAjgxQGSoYMjn4IAjgWQFpjhHxjQQEOhsEXhpIEchoQEGhZDXheQBxg7A0g/IAAgBQgKh3EfiCIAKgEIADgCQByhECpg2QDphPDmhJQBXgcBKgaIAWgIQBrglBQggQDHhWENhvIAygWIA0gZQD6h8DDh+QAmgcAjgbIAugmQCRhmAeh0QAVhLgrhQQhQibkCiJQhpg4iGg0Ig1gUQh2gqiBglQluhimIhgIk5hPIjag4QjrhCjehTQhkglhegnQlDiFiGh4IgYgWQgkglgWgkQgbgogLgmQgPguAJgsQANhFA3g5QBThVClg/QAsgSAygPQBiggCAgbIAagGIAugKQBigVB8gTIACgBQCBgaBfgVQB8gdBXghQAegNASgUQASgTAHgZQAGgPACgSIABgGQAAgOAEgCQAAAAABgBQAAAAAAAAQABgBAAABQAAAAABAAIAbANIAaANQCnBTFECeICnBRIARAIQJYEjIiEFIAOAGIBkAwUAQlAH7AjTARkUABGAedgF6AuzMhWuAAAIgjAHQvlD0oJgBQn1AAg9jig");
	this.shape_340.setTransform(634.9552,1564.721);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#77421F").s().p("EgvOA5WQBQgigug1QiCi8isiVQi5h9gog/QglhGjlhXQjUhyjqhkQo9jChCjHQgMgkAFgkQAWg3Alg3IAjgwQGMoXMknzIAkgWQFnjfHwjOQENhrEWhoIEbhnQEIhZDTheQBxg7AxhAIAAgBQgTh4EdiDIAKgEIADgCQByhFCsg3QDrhPDphKQBYgcBLgaIAYgJQBsgkBQghQDHhWEThwIAygWIA1gZQD9h8DHh+QAngbAjgbQAZgTAWgUQCWhlAfh1QAWhLgshRQhQiakCiIQhqg3iFg0Ig1gUQh1gqiCglQlshhmHhgIk5hOIjZg5QjrhCjdhSQhlglhdgmQlEiGiEh3IgXgWQglglgVgkQgagpgLglQgPguAJgrQANhFA4g4QBThVCjg/QAsgRAxgQQBigfB/gcIAagGIAugKQBhgVB7gUIACAAIDeguQB7gdBXggQAegNATgUQASgRAHgaQAHgOACgRIABgHQAAgOAEgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAbAOIAaANQCqBUFBCdICoBRIARAIQJVEiIkEGIAOAGIBlAwUAQlAH7AjUARlUABGAecgF6Au0MhVvAAAIgiAGQvYDwoDAAQnxAAg9jfg");
	this.shape_341.setTransform(634.3711,1564.4789);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#79431E").s().p("EgtxA5YQBTgjgwg3QiKi/i0iXQjBiAgsg/QgohHjvhXQjfhzj2hjQpYjEhKjJQgNglAGgmQAUg2Alg3IAigwQGIoVMknvIAkgVQFmjeHujLQEOhqEUhnIEahnQEJhYDRheQBxg8AthAIAAgCQgdh6EciDIAKgEIADgCQByhGCug4QDthQDthKQBagcBLgaIAZgJQBtglBRghQDHhVEZhxIAygXIA2gZQEAh8DLh+QAngaAlgbQAZgTAXgUQCZhlAhh1QAXhMgthSQhRiZkCiHQhpg3iFgzIg1gUQh1gqiBgkQlrhhmHhgIk4hNIjZg5QjqhCjdhRQhkglhdgmQlEiFiDh4IgXgWQgkglgVgkQgagogKgmQgPguAKgqQANhEA4g4QBShUCig/QAsgRAxgQQBhgfB+gcIAagGIAtgKQBhgWB6gTIACgBIDdguQB6gcBWgfQAegMATgTQASgSAIgYQAHgOADgRIABgHQAAgNAEgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAIAbANIAaANIHrDxICoBSIARAIQJSEgInEHIAOAHIBlAwUAQlAH7AjVARlUABGAecgF6Au0MhUvAAAIgiAGQvLDsn+AAQnrAAg+jbg");
	this.shape_342.setTransform(633.7879,1564.2725);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#7B431E").s().p("EgsUA5aQBWgjgzg4QiQjEi+iZQjJiDgvg/QgrhHj6hYQjqhzkChjQpzjFhRjMQgOgmAFgmQAUg3Akg3IAigwQGEoSMknrIAjgVQFmjbHsjJQEOhqEShlIEahmQEJhZDOhdQByg9AphBIABgCQgoh7EbiEIAKgFIADgCQByhHCyg5QDvhPDwhLQBbgdBMgaIAZgIQBvgmBRghQDIhVEehyIAzgXIA2gZQEDh8DQh9QAogbAkgbQAagTAYgTQCdhlAjh2QAYhNgvhSQhRiYkCiGQhpg3iFgzIg0gTQh1gqiBgkQlqhgmGhgQiegmiZgnQhugchqgcQjrhCjchRQhkglhcgmQlEiFiCh3IgXgWQgkglgVgkQgZgogKgmQgOgtAKgrQANhDA4g4QBThSCgg/QArgRAxgQQBhggB8gcIAagGIAtgKQBhgWB4gTIACgBIDcguQB4gcBXgdQAegMATgSQATgRAIgYQAHgOADgRIACgGQAAgNAEgCQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAcAOIAaANQCsBWFACbICoBSIARAIQJOEeIrEJIAOAHIBlAwUAQlAH7AjWARlUABGAedgF6AuzMhTwAAAIgiAGQu/Dpn3AAQnlAAg/jYg");
	this.shape_343.setTransform(633.2043,1564.0415);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#7D441D").s().p("Egq3A5cQBZgkg1g6QiXjHjHicQjSiFgxg/QguhHkFhZQj1hzkPhjQqOjHhYjOQgOgnAEgnQATg3Akg3IAigwQF/oQMknnIAjgVQFljZHrjHQENhoERhkIEZhmQEKhYDMhdQByg+AlhCIABgBQgxh9EZiFIAKgFIADgCQByhIC1g5QDxhQD0hMICpg3IAYgIQBxgmBSghQDIhVEjhzIA0gXIA3gZQEGh8DUh+QAogaAmgbQAagTAYgTQCihlAkh2QAZhOgwhTQhRiWkCiFQhpg3iFgzIg0gTQh1gpiBglQlohfmFhfIk3hNQhtgchrgcQjqhCjbhRQhkgkhcgmQlEiEiBh3IgWgWQgkglgVgkQgZgpgJgmQgOgtAKgqQAOhDA4g2QBShSCfg/QArgRAwgQQBhggB7gcIAagGIAtgKQBggXB3gTIACgBIDagtQB4gbBWgdQAegLAUgSQASgQAJgYQAIgNADgRIACgGQAAgNAEgBQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABABIAbANIAaANQCvBXE+CbICoBRIARAIQJLEdIuELIAOAGIBlAwUAQlAH7AjXARmUABGAedgF6AuzMhSwAAAIgiAGQuyDmnyAAQnfAAhAjVg");
	this.shape_344.setTransform(632.6172,1563.8126);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#80441C").s().p("EgpaA5eQBbgkg3g8QiejLjPieQjaiHg1hAQgxhHkQhaQkAhzkbhjQqojJhgjQQgPgoAFgoQASg3Ajg3IAhgvQF7oOMknjIAkgVQFkjXHpjEQENhnEPhkIEYhlQEMhYDIhdQByg/AjhCIAAgCQg7h+EYiGIAKgEIADgCQByhKC3g6QDzhQD4hMQBcgdBPgbIAZgIQBygmBTgiQDIhUEph0IA1gXIA3gZQEIh8DZh9IBPg2IA0gmQCmhlAlh1QAahPgxhUQhRiWkCiEQhqg2iEgyIg0gTQh1gpiAgkQlnhgmFheIk2hNIjXg3QjqhCjahQQhkglhcgmQlFiEh/h2IgWgWQgjgmgVgkQgZgogJgmQgMgtAJgpQAPhCA3g3QBThRCdg+QArgRAwgQQBfggB7gdIAagGIAsgKQBggXB2gTIACgBIDYgtQB3gbBXgbQAdgLAUgRQATgQAJgXQAIgNAEgRIACgFQAAgNAEgCQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAbAOIAaANQCxBXE8CaICpBTIARAIQJIEbIxEMIAOAGIBlAwUAQkAH7AjZARnUABGAecgF6Au0MhRxAAAIghAFQulDinsAAQnaAAhBjRg");
	this.shape_345.setTransform(632.0344,1563.5852);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#82451B").s().p("Egn9A5fQBegkg5g9QiljPjYigQjiiKg4hBQg0hHkbhaQkLhzknhjQrEjLhnjSQgQgpAFgpQARg3Ajg3IAggvQF3oMMknfIAkgUQFjjVHojDQEMhlEOhjIEXhkQENhYDFhdQBzhAAfhDIAAgBQhFiAEXiHIAKgEIADgCQByhLC6g6QD1hRD7hNQBegdBPgbIAagIQBzgmBUgiQDJhVEuh1IA1gXIA4gZQELh8Ddh9IBRg1IA0gmQCqhlAnh1QAbhQgyhVQhSiUkCiDQhpg2iEgyIg0gTQh1goh/glQlmhfmFheIk1hMIjWg3QjqhCjZhQQhkgkhcgmQlFiDh9h3IgXgWQgjglgUgkQgYgpgJglQgMgtAKgpQAPhCA3g1QBShRCdg+QAqgRAwgQQBeggB6gdIAagGIAsgLQBfgXB1gTIACgBQB8gaBbgSQB1gaBXgbQAegKATgRQAUgPAJgXQAJgMAEgRIACgFQABgNAEgBQAAgBAAAAQABgBAAAAQABgBAAABQABAAABAAIAbANIAaANIHtDyICpBSIARAIQJFEaI0ENIAOAHIBlAwUAQkAH7AjaARnUABGAecgF6Au0MhQxAAAIghAFQuYDfnnAAQnUgBhCjOg");
	this.shape_346.setTransform(631.4463,1563.3562);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#84451B").s().p("EgmhA5iQBigmg8g+QirjTjhiiQjriNg7hAQg3hIkmhaQkWh0kzhjQrfjNhujTQgRgrAEgqQARg3Aig2IAggwQFyoKMlnaIAjgUQFjjTHmjAQEMhlENhiIEVhjQEOhYDDhdQBzhAAbhEIAAgBQhOiCEViHIAKgFIADgBQBzhMC9g8QD3hRD+hNQBfgdBQgbIAagJQB2gmBUgiQDIhUE0h2IA2gYIA5gZQENh8Dhh8IBSg2IA2glQCuhlAoh2QAchQgzhWQhSiTkCiCQhpg2iEgxIg0gUQh0gnh/glQlkhemFheIk0hMQhtgbhpgcQjqhBjYhQQhkgkhbglQlFiEh9h2IgWgWQgjglgUgkQgXgpgJgmQgLgsAKgpQAPhBA3g1QBThPCag+QAqgSAwgPQBeggB5gdIAZgHIAsgKQBfgYBzgTIACgBQB7gbBbgRQB0gaBXgZQAdgKAUgQQAUgPAKgWQAJgMAEgQIACgGQABgMAEgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAcAOIAaANQC0BZE6CZICoBSIARAIQJCEYI3EPIAOAHIBmAwUAQkAH7AjaARnUABGAedgF6AuzMhPxAAAIghAFQuMDbngAAQnPAAhDjKg");
	this.shape_347.setTransform(630.8579,1563.1253);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#86461A").s().p("EglEA5jQBlgmg+g/QizjXjpilQj0iPg+hBQg6hHkwhcQkhh0lAhiQr5jPh2jWQgSgrAFgrQAPg3Aig2IAggwQFtoIMlnVIAjgVQFijQHki+QENhkELhhIEUhiQEPhZDAhcQB0hBAXhEIAAgCQhYiDEUiIIAKgFIADgBQBzhNC/g9QD5hREChOQBggdBRgbIAagJQB4gnBVgiQDJhUE4h3IA3gXIA6gZQEQh8Dlh9IBUg1IA3glQCyhlAph2QAdhRg0hXQhSiSkCiBQhpg1iEgxIg0gTQh0goh/gkQlihemEhdIk0hMQhsgbhpgcQjqhBjYhPQhjgkhbglQlFiDh8h2IgVgWQgjgmgUgkQgXgogIgmQgLgsAKgpQAQhAA3g1QBShOCag+QApgSAvgPQBeggB4geIAZgGIArgLQBfgYBygTIACgBQB6gaBagSQBzgZBXgYQAdgJAVgQQAUgOAKgVQAJgMAFgQIACgGQABgLAFgCQAAgBABgBQAAAAAAAAQABgBABAAQAAAAABABIAbANIAaANQC2BaE5CYICoBTIARAIQI/EWI6ERIAOAGIBmAwUAQkAH7AjbARoUABGAedgF6AuzMhOxAAAIghAFQt/DYnbAAQnJAAhEjIg");
	this.shape_348.setTransform(630.2759,1562.9189);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#884719").s().p("EgjnA5lQBngmg/hBQi6jbjyinQj8iShBhBQg9hHk7hcQksh1lMhiQsVjQh9jYQgSgtAEgsQAOg2Aig3IAfgvQFpoGMlnSIAkgUQFgjOHji8QEMhjEKhfIEThiQERhYC9hcQBzhCAUhFIAAgCQhiiFETiIIAKgFIADgCQBzhODCg9QD7hSEGhOQBhgeBSgbIAagIQB6gnBVgjQDJhUE+h4IA3gXIA7gZQETh8Dph9QAsgaApgaIA4gmQC2hkArh3QAehRg1hYQhTiRkCiAQhpg1iDgxIg0gTQhzgnh/gkQlhhdmEhdIkzhLQhsgbhpgcQjphBjXhPQhkgjhagmQlGiDh5h1IgWgWQgigmgUgkQgXgpgHglQgLgsALgoQAPhAA4g0QBShOCYg+QApgRAvgQQBdggB3gdIAZgHIArgLQBegYBxgTIACgBQB5gbBagQQBxgZBXgXQAegJAUgPQAUgOALgVQAKgLAFgQIACgFQACgMAEgBQABgEADABIAcAOIAaANQC3BbE3CXICpBTIARAIQI8EVI9ESIAOAGIBmAwUAQkAH7AjcARpUABGAecgF6Au0MhNyAAAIggAFQtyDTnVAAQnEAAhFjEg");
	this.shape_349.setTransform(629.6855,1562.677);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#8B4718").s().p("EgiKA5nQBqgnhChCQjAjfj7ipQkFiVhDhBQhAhHlGhdQk4h1lYhiQsvjSiFjbQgTgtAEgtQANg3Aig2IAfgvQFkoEMlnNIAkgUQFgjNHhi5IIUjBIEShgQEShZC6hbQB0hCAQhHIAAgBQhsiHESiJIAKgFIADgCQBzhPDFg+QD9hSEJhPQBigdBTgcIAbgIQB7goBVgiQDKhUFEh5IA4gXIA7gaQEVh8Duh8IBXg0IA4gmQC7hkAsh3QAfhSg2hZQhTiPkCiAQhpg0iDgxIg0gSQhzgnh/gkQlfhdmDhdIkzhLQhrgahpgcQjphBjWhOQhkgkhaglQlGiCh4h1IgWgWQgigmgTglQgWgogIgmQgKgrALgoQAQg/A3g0QBShNCXg+QApgRAugQQBdggB1geIAZgGIArgLQBegYBwgUIACgBQB5gbBYgQQBxgYBXgWQAdgJAUgOQAVgNAMgUQAJgMAFgPIADgFQACgLAEgCQAAgBABgBQAAAAABAAQAAgBABAAQABAAABABIAbANIAaANQC5BcE2CXICpBSIARAIQI5EUJAETIAOAHIBmAwUAQkAH7AjdARpUABGAecgF6Au0MhMyAAAIggAEQtmDRnQAAQm9AAhGjBg");
	this.shape_350.setTransform(629.0947,1562.469);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#8D4817").s().p("EggtA5pQBtgohFhDQjHjjkDirQkOiYhGhBQhDhHlRheQlCh1llhiQtKjUiMjcQgUguAEgvQAMg2Ahg3QAPgYAQgXQFfoCMmnJIAjgTQFgjLHfi3IISi+IEShgQEShYC4hcQB0hDANhHIAAgBQh2iIERiLIAJgEIADgCQBzhRDIg+QD/hTENhPQBjgeBUgbIAbgJQB9goBXgiQDJhUFJh6IA5gXIA7gaQEZh8Dxh8QAugaArgaQAdgSAcgTQC/hlAuh2QAghUg4hZQhTiOkCh/Qhpg0iCgwIg0gTQhzgmh/gkQldhdmDhcIkyhKQhrgbhpgcQjohAjWhOQhkgjhaglQlFiDh3h0IgWgWQgigmgSglQgWgogHgmQgKgrALgoQAQg+A3gzQBShNCWg9QApgRAugQQBbggB1geIAZgHIAqgLQBdgZBvgTIACgBQB4gbBYgQQBvgXBXgVQAdgJAVgNQAVgNAMgTQAKgMAGgOIADgGQABgKAFgCQABgEADABIAcAOIAaANQC7BdE1CWICpBSIARAIQI1ESJDEVIAOAHIBmAwUAQkAH7AjfARpUABGAedgF6AuzMhLzAAAIgfAFQtZDMnKAAQm4AAhHi9g");
	this.shape_351.setTransform(628.5135,1562.2271);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#8F4817").s().p("EgfQA5rQBwgohHhFQjOjnkMitQkWiahKhCQhGhHlbhfQlOh1lwhhQtmjXiTjeQgVgvAEgvQALg3Ahg2IAegvQFboAMmnFIAjgUQFfjHHei2IIQi8IERhfQEThYC1hbQB1hEAJhIIgBgBQh/iKEQiLIAJgFIADgCQBzhRDLg/QEBhTEQhQQBlgeBUgcIAbgJQB/goBYgiQDJhUFOh7IA6gXIA8gaQEbh8D2h7IBag1IA7gkQDChlAwh3QAhhUg5haQhUiNkCh+Qhog0iDgwIgzgSQhzgmh+gkQlchcmDhcIkxhKIjTg2QjohAjVhOQhkgjhaglQlFiCh2h0IgVgWQgigmgSglQgWgogHgmQgJgrAMgoQAQg9A3gyQBShMCUg9QApgSAtgPQBbghB0geIAYgHIAqgLQBdgZBugTIACgBQB3gbBYgQQBugWBXgUQAdgIAVgNQAVgMAMgTQALgLAGgPIACgFQADgKAEgDQACgEADACIAcAOIAaANQC8BdE0CWICpBSIARAIQIyERJGEWIAOAHIBmAwUAQkAH6AjgARrUABGAecgF6Au0MhK0AAAIgeAEQtNDJnEAAQmyAAhIi6g");
	this.shape_352.setTransform(627.9214,1561.9897);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#914916").s().p("EgdzA5tQBzgphJhGQjVjrkViwQkfidhMhBQhJhIlnhfQlYh2l9hhQuAjYibjgQgVgwADgwQALg3Agg3IAeguQFWn+MmnBIAkgTQFdjGHdizIIOi6IEQhfQEVhYCxhaQB2hFAFhIIgBgCQiJiLEOiMIAKgFIADgCQBzhSDOhAQEDhUEUhQQBlgeBWgcIAbgJQCAgoBZgjQDJhTFUh8IA6gYIA9gZQEeh8D6h8IBbg0IA8gkQDHhlAxh3QAihVg6hbQhUiMkCh9QhpgziCgwIgzgSQhzgmh9gjQlbhcmDhcIkwhJIjSg2QjohAjUhNQhkgjhaglQlGiCh0h0IgVgWQghgmgSgkQgWgpgGgmQgJgqAMgoQARg8A3gyQBShLCSg9QAogRAugQQBaghBzgeIAYgHIAqgLQBcgZBtgUIACgBQB2gbBXgPIDEgpQAdgIAVgMQAWgMANgSQAKgLAGgOIADgFQADgKAEgCQACgEADABIAcAOIAaANQC/BeEyCVICpBTIARAIQIvEPJJEYIAOAGIBmAwUAQkAH7AjhARrUABGAecgF6Au0MhJ0AAAIgeAEQtADFm+AAQmtAAhJi2g");
	this.shape_353.setTransform(627.3285,1561.7832);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#934915").s().p("EgcWA5vQB1gqhKhHQjcjukeizQknifhQhCQhMhIlxhfQljh3mJhgQucjaiijjQgWgxADgxQAKg3Agg2QAOgYAPgXQFSn7Mmm9IAkgTQFcjEHbixIINi3IEPheQEWhYCuhbQB2hFAChJIgBgCQiSiNEMiMIAKgFIADgCQBzhUDRhAQEFhUEXhRQBngfBWgbIAcgJQCBgpBagjQDJhTFah9IA7gYIA9gZQEhh8D+h7IBdg0IA9glQDKhkAzh4QAjhVg7hcQhViLkBh8QhpgziCgvIgzgSQhzgmh9gjQlZhcmChbIkvhJQhrgahngcQjohAjUhMQhjgjhagkQlGiChzh0IgUgWQgigmgRgkQgVgpgGgmQgJgqAMgnQASg8A2gxQBShLCRg9QAogRAtgQQBaggBygfIAYgHIApgLQBcgaBsgTIACgBQB1gbBWgPIDDgnQAdgIAWgLQAWgLANgSQALgLAGgOIADgEQADgKAFgCQABgFAEACIAcAOIAaANQDABfEwCUICqBTIARAIQIsENJMEaIAOAGIBmAwUAQkAH7AjiARrUABGAedgF6AuzMhI0AAAIgeAEQs0DCm5AAQmnAAhJizg");
	this.shape_354.setTransform(626.7483,1561.5475);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#964A14").s().p("Ega6A5xQB5grhNhJQjjjykni0QkviihThCQhPhIl8hhQluh2mVhgQu3jcipjlQgXgyADgyQAJg3Afg2IAdgvQFOn5Mmm4IAjgUQFcjBHZivIIMi2IENhdQEXhYCshaQB2hGgChKIAAgBQidiPEMiNIAJgFIAEgCQBzhVDThBQEHhUEbhSQBogeBXgcIAcgJQCDgpBagjQDKhTFfh+IA7gYIA/gaQEjh8EDh7IBeg0IA+gkQDOhkA0h4QAkhWg8hdQhViJkBh8QhpgyiBgvIg0gSQhyglh9gjQlYhcmBhaIkvhJQhqgahngcQjog/jThMQhjgjhZgkQlGiChyhzIgVgWQgggmgSglQgVgpgFgmQgIgqAMgmQASg7A3gxQBRhKCQg8QAogSAsgQQBaggBwgfIAYgHIApgLQBcgaBqgUIACgBQB1gbBVgOIDCgmQAdgHAVgLQAXgKANgSQAMgKAHgOIADgEQADgKAEgCQACgFADACIAdAOIAaANQDBBgEwCUICpBSIARAIQIpEMJQEbIAOAHIBmAwUAQjAH6AjjARsUABGAedgF6AuzMhH1AAAIgeAEQsmC+myAAQmiAAhLivg");
	this.shape_355.setTransform(626.1546,1561.3231);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#984A13").s().p("EgZdA5yQB8gqhQhLQjpj2kvi3Qk5ilhVhBQhShImHhiQl5h3mihgQvRjdixjnQgYgzADgzQAIg3Afg3IAdguQFIn3Mnm0IAkgTQFbjAHXisIIKi0QCGgtCGgvQEZhYCohaQB3hHgGhKIAAgCQiniQELiOIAJgFIADgCQB0hWDWhCQEJhVEehSQBpgeBYgcIAdgJQCEgpBbgkQDKhTFlh/IA8gYIA/gZQEmh8EHh7IBfg0IA/gkQDThkA1h4QAlhXg9hdQhViJkCh7QhogyiBguIg0gSQhyglh8giQlXhbmBhbIkuhIIjQg1QjohAjShMQhjgjhZgjQlHiBhwh0IgUgWQghgmgRglQgUgpgFglQgIgqANgmQASg7A2gwQBShJCOg8QAogRAsgRQBZggBvgfIAYgHIApgMQBbgaBpgUIACAAQB0gcBVgOQBpgUBYgQQAcgGAWgKQAXgLAOgQQALgKAHgOIAEgEQADgJAFgDQABgEAEABIAcAPIAaAMQDEBhEuCTICpBTIARAIQImEKJSEdIAOAGIBnAwUAQjAH7AjkARsUABGAedgF6AuzMhG2AAAIgdAEQsZC7mtAAQmcAAhMitg");
	this.shape_356.setTransform(625.5601,1561.1037);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#9A4B13").s().p("EgYAA51QB/gshShMQjwj6k4i5QlBinhYhCQhVhImShiQmFh4mthfQvtjgi4jpQgZg0ADg0QAHg3Afg2IAcguQFEn2MnmvIAkgTQFai9HWirQEKhaD+hXIELhcQEahYCmhZQB3hIgKhLIAAgCQiwiSEJiPIAJgEIADgCQB0hYDZhCQELhVEihTQBqgfBYgcIAdgJQCGgpBcgkQDLhSFpiBIA9gYIBAgZQEph8ELh7IBggzIBAgkQDYhkA2h5QAmhXg+hfQhViHkCh6QhogxiCguIgzgSQhyglh8giQlVhbmAhaIkthIQhrgahmgbQjng/jRhLQhkgjhYgkQlHiBhvhzIgUgWQgggmgRglQgUgpgFglQgGgqAMgmQASg6A3gvQBShJCNg8QAngRArgQQBZghBugfIAYgHIAogLQBbgbBogUIACgBQBzgbBUgOQBpgUBXgOQAcgGAWgJQAXgKAPgQQAMgKAHgNIAEgFQADgIAFgDQACgFADACIAdAOIAaANQDFBiEtCSICpBTIARAIQIjEJJVEeIAOAGIBnAwUAQjAH7AjlARtUABGAecgF6Au0MhF2AAAIgdADQsNC3mnAAQmWAAhNiog");
	this.shape_357.setTransform(624.9808,1560.8732);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#9C4C12").s().p("EgWiA53QCAgshThOQj3j9lBi8QlKiqhbhCQhYhImchjQmQh4m6hfQwHjijAjqQgZg2ACg1QAGg2Aeg3IAdguQE/nzMnmsIAkgSQFZi7HVioQEKhZD8hXIEKhbQEbhYCjhZQB3hJgNhLIAAgCQi6iUEIiPIAJgFIADgCQB0hYDchEQENhVElhTQBrgfBagcIAdgKQCIgpBcgkQDLhSFviCIA9gYIBBgZQErh8EQh7IBigzIBBgkQDbhkA4h4QAnhZg/hfQhWiGkCh5QhogxiBguIgzgSQhxgkh8giQlUhamAhaIkshHQhqgahmgbQjnhAjQhKQhkgjhYgjQlHiBhthzIgUgWQgggmgRglQgUgpgEglQgGgqANglQASg5A3gwQBRhHCMg8QAngRArgQQBYghBtgfIAYgIIAogLQBagbBngUIACgBQBygcBUgMQBngUBXgNQAcgGAXgJQAXgJAPgQQAMgJAIgNIAEgEQADgJAFgCQACgFAEACIAcAOIAaANIHyD0ICqBTIARAIQIfEHJZEgIAOAGIBnAwUAQjAH7AjmARtUABGAedgF6AuzMhE3AAAIgcADQsAC0miAAQmQAAhNilg");
	this.shape_358.setTransform(624.3857,1560.644);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#9E4C11").s().p("EgVGA54QCEgshVhPQj/kBlJi+QlSithehCQhbhJmnhjQmbh4nGhfQwjjkjGjtQgbg2ACg2QAGg2Adg3IAcguQE7nxMnmnIAkgTQFYi5HTimQEKhYD7hVIEJhaQEchYCghZQB4hKgRhMIAAgBQjEiWEHiQIAJgFIADgCQB0hZDfhEQEPhWEohUQBtgfBagcIAdgKQCKgqBdgjQDLhTF0iCIA/gYIBBgaQEuh7ETh7IBkgzIBCgkQDghkA5h4QAohahAhgQhWiEkCh5QhogwiBguIgzgRQhxgkh8giQlRhamAhZIkshHQhqgahlgbQjnhAjQhKQhjgihYgjQlHiBhshyIgUgWQgggmgQglQgTgpgEgmQgGgpANglQATg5A2guQBShHCKg8QAngRArgQQBXghBsggIAXgHIAogMQBagbBmgUIACgBQBxgcBTgMQBmgTBXgMQAcgFAXgIQAYgJAPgPQAMgJAJgNIAEgEQADgIAFgDQACgFAEACIAdAOIAaANQDIBkEqCRICqBTIARAIQIcEGJcEgIAOAHIBnAwUAQjAH6AjnARuUABGAedgF6AuzMhD3AAAIgcADQrzCwmcAAQmLAAhPiig");
	this.shape_359.setTransform(623.7899,1560.4251);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#A04D10").s().p("EgTpA56QCHgthYhQQkFkFlTjAQlaiwhhhCQhehJmyhkQmmh4nShfQw+jljOjvQgbg3ACg4QAEg2Aeg3IAbguQE3nvMnmjIAkgSQFXi3HSijQEJhXD5hUQCGgtCDgtQEdhYCdhYQB4hLgUhNIgBgBQjNiXEFiRIAJgFIAEgCQBzhbDihFQERhWEshUQBuggBbgcIAegJQCLgqBdgkQDMhTF6iDIA/gYIBCgaQEwh7EYh7IBlgzIBDgjQDkhkA7h5QAohahBhhQhWiDkCh4QhogwiAgtIgzgSQhxgjh8giQlQhal/hYIkrhHQhqgahlgbQjng/jOhJQhkgjhXgjQlIiAhqhyIgUgWQgggmgPglQgTgqgEglQgFgpANglQATg4A2guQBShGCJg7QAmgRArgRQBWghBrgfIAYgIIAngMQBZgbBlgUIACgBQBxgcBSgMQBlgSBXgLQAcgFAXgHQAYgJAQgOQAMgJAJgMIAEgFQAEgHAFgDQACgFAEACIAdAOIAaANQDKBkEpCRICqBTIARAIQIZEEJfEiIAOAHIBmAwUAQjAH6AjpARvUABGAecgF6Au0MhC4AAAIgbACQrnCtmWAAQmFAAhQifg");
	this.shape_360.setTransform(623.2115,1560.1876);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#A34D0F").s().p("EgSMA58QCKguhbhRQkMkJlbjDQljiyhkhDQhhhIm8hlQmxh5nfheQxYjnjWjyQgcg4ACg4QAEg2Adg3QAMgXAPgXQEynsMnmfIAkgSQFXi1HPihQEKhWD3hUQCGgsCCgsQEehYCahYQB5hMgYhNIgBgCQjXiYEEiSIAJgFIADgCQB0hcDlhGQEThWEwhVQBugfBcgdIAegJQCNgrBegkQDNhSF+iEIBAgYIBDgbQEzh7Ech6IBngzIBEgjQDnhkA9h5QAphbhChiQhXiCkBh3QhogwiAgsIgzgRQhxgkh7ghQlPhal/hYIkqhGQhpgahlgbQjng/jOhJQhjgihXgjQlIiAhphxIgUgWQgfgngPglQgTgpgDgmQgFgoANglQAUg3A2guQBRhFCIg7QAmgRAqgRQBWghBqggIAXgHIAngMQBZgcBkgUIACgBQBwgcBRgLQBkgSBYgKQAbgFAXgGQAZgIAQgOQANgJAJgMIAEgDQAEgIAFgDQACgFAEACIAdAOIAaANQDMBlEoCQICqBTIARAIQIWEDJiEjIAOAHIBmAxUAQjAH6AjqARvUABGAecgF6Au0MhB4AAAIgbACQraCpmRAAQl/AAhRibg");
	this.shape_361.setTransform(622.6152,1559.9877);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#A54E0F").s().p("EgQvA5+QCNguhdhTQkTkNlkjFQlri1hnhCQhkhJnIhmQm8h5nqheQx0jpjcjzQgdg5ABg5QADg3Acg2IAbguQEunrMnmaIAkgSQFWizHOifQEJhVD2hSIEHhYQEfhYCYhYQB5hMgchOIgBgCQjhiaEDiTIAJgFIADgCQB0hdDohGQEVhXEzhVQBwggBdgcIAegKQCOgrBfgkQDNhSGEiFIBAgYIBEgbQE2h7Egh6IBogyIBFgkQDshjA+h6QAqhbhDhjQhXiBkCh2QhogviAgtIgygRQhxgjh6ghQlOhZl/hYQiYgjiRgjQhpgZhlgbQjmg/jNhJQhjgihXgiQlIiAhohxIgTgWQgfgngPglQgTgpgDgmQgEgoAOgkQAUg3A2gtQBRhECGg8QAmgRAqgQQBVghBpggIAXgIIAngMQBYgcBjgUIACgBQBvgcBRgLQBigRBYgJQAbgEAYgGQAYgIARgNQANgIAKgMIAEgEQAEgHAGgDQACgFAEACIAdAOIAaANQDNBmEnCPICqBTIARAIQISECJmEkIAOAHIBmAxUAQjAH6AjrARvUABGAedgF6AuzMhA5AAAIgaACQrOCmmLAAQl5AAhSiYg");
	this.shape_362.setTransform(622.0182,1559.7378);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#A74E0E").s().p("EgPSA6AQCPgvhehUQkakRlsjHQl1i4hphDQhnhInThnQnHh5n3heQyOjrjkj1Qgeg6ACg7QABg2Acg2IAbguQEonpMomWIAkgSQFViwHNidQEJhUD0hRQCFgsCBgsQEghXCVhYQB5hNgfhPIgBgBQjricECiUIAJgEIADgDQB0heDqhHQEXhXE3hWQBxggBegcIAegKQCQgrBggkQDNhSGJiGIBCgZIBEgaQE4h7Elh6IBpgzIBGgjQDwhjBAh6QArhchEhjQhYiAkBh1QhogwiAgsIgygRQhxgih6giQlMhYl+hXIkphGQhpgZhkgbQjmg/jMhIQhkgihWgiQlIiAhnhxIgTgWQgfgmgOgmQgSgpgDgmQgEgnAOgkQAUg2A2gtQBShECEg6QAmgSApgQQBVghBoggIAXgIIAmgMQBYgdBigUIACAAQBugdBQgKQBigRBXgIQAbgEAYgFQAZgHARgNQAOgIAKgLIAEgEQAEgHAGgDQACgFAEACIAdAPIAaAMQDQBnEkCPICrBTIARAIQIPEAJoEmIAOAHIBnAwUAQjAH6AjsARwUABGAedgF6AuzMg/5AAAIgaACQrBCjmFAAQl1AAhSiVg");
	this.shape_363.setTransform(621.4406,1559.5082);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#A94F0D").s().p("EgN1A6CQCSgwhhhVQkgkVl1jJQl9i6hthEQhqhIndhnQnSh6oEheQypjtjrj3Qgfg7ACg7QAAg2Acg3QAMgXAOgXQEknmMomSIAkgSQFUiuHLibQEJhTDzhQQCFgrCAgsQEhhXCShXQB6hPgjhPIgBgCQj0idEAiUIAJgFIADgCQB0hfDthIQEZhYE7hWQBxggBfgdIAfgKQCSgrBgglQDOhRGOiHIBCgZIBFgaQE7h7Eph6IBrgyIBHgjQD0hkBBh5QAshdhFhlQhYh/kCh0Qhoguh/gsIgygRQhwgih6ghQlLhYl+hXIkohFQhogahkgbQjmg+jMhIQhjgihWgiQlIh/hmhxIgSgWQgfgngOglQgSgpgCgmQgEgnAPgkQAUg1A2gsQBRhDCEg7QAlgRApgQQBUgiBnggIAXgIIAmgMQBYgdBggUIACgBQBtgcBQgKQBggQBXgHQAcgEAYgEQAZgHARgMQAOgIAKgLIAFgDQAFgHAFgDQACgFAEACIAdAOIAbANQDRBoEjCNICrBUIARAIQIMD+JrEoIAOAHIBnAwUAQjAH6AjtARxUABGAecgF6Au0Mg+6AAAIgZACQq0CemAAAQlvAAhTiRg");
	this.shape_364.setTransform(620.8434,1559.2893);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#AB500C").s().p("EgMYA6EQCVgxhjhXQknkYl+jMQmGi8hvhEQhthJnohoQndh5oQheQzEjvjzj5Qgfg8ABg8QAAg3Abg2IAZguQEgnkMomOIAkgRQFUitHJiYQEJhSDxhPQCFgrB/grQEihXCQhXQB5hQgmhPIgBgCQj+ifD/iVIAJgFIADgCQB0hgDwhJQEbhYE+hXQBzggBggdIAfgKQCTgrBhglQDOhRGUiJIBCgYIBGgbQE+h7Eth5IBsgyIBIgjQD4hkBDh5QAthehHhlQhYh+kBhzQhogvh/grIgygRQhwgih6ghQlJhXl9hXIkohFQhogZhkgbQjlg+jLhHQhjgihWgiQlIh/hkhwIgTgWQgegngOglQgSgqgBglQgDgoAOgjQAVg0A2gsQBRhCCCg7QAlgRApgQQBTgiBmggIAXgIIAlgMQBYgdBfgVIACAAQBsgdBPgKQBfgPBYgGQAbgDAYgEQAZgGASgLQAPgIAKgLIAFgDQAFgGAFgEQACgFAFACIAdAPIAaANQDTBoEiCNICrBTIARAIQIJD9JuEpIAOAHIBnAxUAQjAH6AjuARxUABGAecgF6Au0Mg96AAAIgZABQqpCcl5AAQlpAAhUiOg");
	this.shape_365.setTransform(620.2453,1559.0584);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#AE500C").s().p("EgK7A6GQCYgxhmhYQkukdmHjOQmOi/hyhEQhwhJnzhoQnoh6ocheQzfjwj6j8Qghg9ACg9QgCg2Abg3IAZgtQEcnjMomJIAkgSQFTipHHiXQEJhQDvhPQCFgqB+grQEkhXCMhXQB7hQgqhQIgCgCQkIihD+iVIAJgFIADgDQB0hhDzhJQEdhYFChYQB0ggBggeIAggJQCVgsBiglQDOhRGZiKIBDgYIBGgbQFBh7Exh5IBugyIBJgiQD8hkBEh6QAvhfhIhmQhZh8kBhyQhogvh/grIgygQQhvgih6ghQlHhXl9hWQiXgiiQgiQhogahjgaQjlg+jLhHQhjgihWghQlIh/hjhwIgSgWQgegngOgmQgRgpgBglQgDgnAPgkQAVgzA2grQBRhCCBg6QAkgRApgQQBSgiBmghIAWgIIAlgMQBXgeBegUIACgBQBsgcBOgKQBegOBYgFIAzgGQAagFASgLQAPgIALgKIAEgEQAGgFAFgEQACgGAFADIAdAOIAaANQDVBpEhCNICqBTIARAIQIGD8JyEqIAOAHIBnAxUAQiAH5AjvARyUABGAedgF6AuzMg86AAAIgZACQqcCXlyAAQlkAAhViKg");
	this.shape_366.setTransform(619.6679,1558.8419);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#B0510B").s().p("EgJeA6HQCagxhnhaQk1kgmQjQQmWjCh2hEQhzhJn9hpQn0h7oohdQz6jykBj+Qghg+ABg+QgCg2Aag3QAMgXANgWQEXnhMomFIAkgRQFSioHGiUQEIhQDuhNQCFgqB9gqQElhXCKhXQB6hRgthRIgCgCQkRiiD8iWIAJgFIADgDQB0hiD2hKQEfhZFFhYQB1ggBigeIAfgJQCXgtBjglQDOhRGeiKIBEgZIBHgaQFEh7E1h5IBvgyIBLgiQEAhkBFh6QAwhghJhmQhZh8kChxQhnguh/grIgygQQhvghh5ghQlGhXl9hWIkmhDQhogahjgaQjkg+jKhGQhjgihWghQlIh/hihwIgSgWQgegngNglQgQgpgCgmQgBgnAPgjQAVgzA2gqQBRhBB/g6QAkgRAogQQBSgiBlghIAWgIIAlgNQBWgdBdgUIACgBQBrgdBOgJQBcgOBYgEIAzgFQAagFATgKQAPgHALgKIAFgEQAGgFAFgEQADgFAEACIAdAPIAbANQDWBqEfCLICrBUIARAIQIDD6J1EsIAOAHIBnAwUAQiAH6AjwARyUABGAedgF6AuzMg76AAAIgZABQqPCVltAAQleAAhWiIg");
	this.shape_367.setTransform(619.0649,1558.6021);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#B2510A").s().p("EgIBA6KQCdgyhphcQk8kkmZjSQmfjFh4hEQh2hJoJhqQn+h7o0hdQ0Vj0kJkAQgig/ABg/QgDg2Aag3IAYgtQETneMomBIAkgRQFRimHFiSQEIhODshMQCFgqB8gqQEmhXCHhWQB7hSgxhSIgCgCQkbikD7iXIAJgFIADgCQB0hkD5hKQEhhZFJhZQB2ghBigdIAggKQCYgsBkgmQDOhQGkiMIBFgZIBHgaQFHh7E5h5IBxgyIBLgiQEFhjBGh7QAxhghLhoQhYh6kChwQhnguh/gqIgygQQhvghh5ghQlEhWl8hWIkmhDQhngZhjgaQjlg+jIhGQhjgihVghQlJh+hghwIgSgWQgegngNglQgQgqgBglQgBgnAPgiQAWgyA1gqQBRhAB+g6QAkgRAogRQBRgiBkghIAVgIIAlgMQBWgeBcgVIACgBQBqgdBNgIQBbgOBYgCIA0gEQAagEATgKQAQgHALgKIAFgDIAMgJQACgGAEADIAeAOIAaANQDYBrEeCLICrBUIARAIQIAD4J4EuIAOAHIBnAwUAQiAH6AjxARzUABGAecgF6Au0Mg67AAAIgYABQqDCQlnAAQlYAAhXiDg");
	this.shape_368.setTransform(618.4564,1558.3921);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#B45209").s().p("EgGkA6LQCggyhshdQlDkomhjVQmnjHh8hEQh5hKoThqQoJh7pBhdQ0wj2kQkCQgjhAABhAQgEg2Aag3IAYgtQEOncMol9IAkgRQFRijHCiQQEIhNDrhLQCFgqB7gpQEnhYCEhVQB8hTg1hSIgCgCQklimD6iYIAJgFIADgCQB0hlD8hLQEjhaFMhZQB3ghBjgdIAhgKQCZgtBkglQDPhRGqiMIBFgZIBIgbQFJh7E+h4IBygyIBNgiQEIhjBIh7QAyhhhMhoQhZh5kBhwQhogth+gqIgygQQhvghh4ggQlDhWl8hVQiWgiiOghQhogZhigaQjlg+jIhFQhjgihUghQlJh+hfhvIgSgWQgdgngNgmQgQgpAAgmQgBgmAPgiQAWgyA2gpQBRg/B8g6QAkgRAngRQBRgiBighIAWgIIAkgNQBWgeBbgUIACgBQBpgdBMgIQBbgNBYgCIAzgDQAbgEAUgJQAPgGAMgKIAFgDIAMgIQACgGAFACIAdAPIAbANQDZBrEdCLICrBUIARAIQH9D2J7EvIAOAHIBnAxUAQiAH5AjyAR0UABGAecgF6Au0Mg57AAAIgYABQp2CNljAAQlRAAhYiBg");
	this.shape_369.setTransform(617.8698,1558.1724);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#B65208").s().p("EgFHA6NQCjgzhuheQlKksmpjXQmxjKh+hEQh8hJoehsQoUh7pNhdQ1Lj4kYkEQgjhBAAhBQgFg2Aag2QALgXAMgWQEJnaMpl5IAkgRQFQihHBiOQEIhMDphKQCEgpB7gpQEohXCBhWQB8hUg4hSIgCgCQkvinD5iZIAJgFIADgCQB0hmD/hMQElhaFPhaQB5ghBkgeIAggKQCcgtBkglQDQhRGuiNIBGgZIBJgbIKOjzIB0gxIBNgiQENhkBJh6QAzhihNhqQhZh3kChvQhngth+gpIgygQQhughh4ggQlChVl8hVIkjhDQhngZhigaQjlg9jHhFQhjgihUggQlJh+hehvIgRgWQgegngMgmQgPgpAAgmQgBgmAQgiQAWgxA2goQBQg/B8g6QAjgRAngQQBQgiBhgiIAWgIIAkgNQBVgeBagVIACgBQBogdBMgHQBZgNBYAAIA0gCQAbgDAUgJQAQgGAMgKIAFgCIAMgJQACgGAFADIAeAOIAaANQDcBtEbCKICrBUIARAIQH6D1J9EwIAOAHIBoAxUAQiAH5AjzAR0UABGAedgF6AuzMg47AAAIgYABQppCJldAAQlMAAhZh9g");
	this.shape_370.setTransform(617.2559,1557.9357);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#B95308").s().p("EgDqA6PQCmg0hwhfQlQkwmzjZQm5jNiBhFQh/hJophsQofh8pZhcQ1mj6kfkGQgkhCAAhCQgGg2AZg2QALgXAMgWQEFnYMpl1IAkgQQFPifG/iMQEIhLDohJQCEgpB6gpQEphXB+hVQB8hUg8hUIgBgCQk5ioD3iaIAJgFIADgCQB1hoEBhMQEnhaFThbQB6ghBlgeIAggKQCdgtBmgmQDPhQG0iOIBHgZIBKgbIKUjzIB1gxIBPgiQERhjBLh8QAzhihNhqQhah3kChuQhngsh+gpIgxgQQhvggh3ggQlAhVl8hVIkjhCQhngZhhgaQjkg9jHhFQhjghhUggQlJh+hchuIgSgWQgdgogLgmQgPgpAAgmQAAglAQgiQAWgwA2goQBRg+B5g5QAjgSAngQQBQgiBggiIAVgIIAkgNQBVgfBYgUIACgBQBogeBLgGQBYgNBYABIAzAAQAcgDAUgJQARgGAMgJIAGgCIAMgIQACgHAFADIAeAPIAaANQDdBtEaCJICsBUIARAIQH2D0KBEyIAOAHIBnAwUAQiAH6Aj1AR0UABGAedgF6AuzMg38AAAIgXABQpdCGlXAAQlHAAhah6g");
	this.shape_371.setTransform(616.6473,1557.7063);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#BB5307").s().p("EgCNA6RQCog0hxhhQlYk0m7jbQnBjQiEhEQiChKo0htQoqh8pmhcQ2Bj7kmkJQglhDAAhDQgHg2AZg2IAXgtQEAnWMplwIAkgQQFOidG+iKQEHhKDnhIQCDgoB6goQEqhXB7hVQB9hWhAhUIgBgCQlDiqD2iaIAJgFIADgDQB1hoEEhNQEphbFWhbQB7ghBmgeIAhgKQCfguBmgmQDQhQG5iPIBHgZIBLgbIKbjzIB3gxIBPgiQEVhjBNh7QA0hjhPhsQhah1kBhtQhngsh+gpIgxgPQhuggh4ggQk+hVl7hUQiVghiNghQhngYhhgaQjkg9jGhEQhjgihUggQlJh9hbhuIgRgWQgdgogLgmQgPgpABgmQAAglAQghQAXgwA2gnQBQg+B5g5QAigRAngQQBPgjBfgiIAVgIIAjgNQBVgfBXgVIACgBQBngdBKgGQBXgMBYACIA0AAQAcgCAVgIQAQgFANgJIAGgDIAMgIQACgGAFADIAeAOIAbANQDfBvEYCIICsBUIARAIQHzDyKEE0IAOAHIBnAwUAQiAH6Aj2AR1UABGAecgF6Au0Mg29AAAIgWAAQpRCClSAAQlAAAhbh2g");
	this.shape_372.setTransform(616.0441,1557.4859);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#BD5406").s().p("EgAwA6TQCrg1h0hiQlek4nEjeQnKjSiHhFQiFhJo+huQo2h8pxhcQ2cj9kukLQgmhEAAhEQgHg2AYg2QDxn6NumDQFNibG9iHQGdhzFLhtQJiixiFilIgBgCQlSivEDidIADgDQB1hpEHhOQErhbFahcQB8ghBmgeQC3g0BygqQDQhQG/iRIBIgZQF6iJFziEQBmgpBjgqQEZhjBOh7QA1hkhQhsQhah0kChtQh7g0iagvQmUh0oKhzIkghCQlXhSkZhhQnpiihxiKIgRgWQgcgngLgmQgyiMCChfQBRg9B3g5QBpgzCMgzIAVgIQBlgoBogZQBogfBKgGQBvgOByAIQAygEAegTQAKgEAIgGQADgHAFADIAeAPIAaANQDhBvEXCIICsBUQH1DzKTE6IB1A4UAQiAH5Aj3AR2UABGAecgF6Au0Mg2TAAAQpEB/lMAAQk8AAhbhzg");
	this.shape_373.setTransform(615.4326,1557.2565);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#B85207").s().p("EAAuA6VQCngzhmhdIgKgJQlYkxm6jcIgggPQmbi7ibhMIgmgTQiGhHonhpIglgHQo5h7p2hbIgPgCQ24j/kzkNQgphFAAhFIgCgTQgBgsATgtQDvn5N0l/QDxhvEqhkQB1gnB9glQGihzFHhtQEbhUBthRQCGhahIhXIgBgCQlOirDsiZIAKgGIAEgDIABgBQB0hpEJhPIALgDQEnhaFYhaIATgFQBygfBfgcQC5g0BygqIAXgJQDRhPGsiJIAigMIAmgNQF9iJF3iEIDLhSQAvgQApgRQDQhVBEhmQA5hjhMhsQgigsg6gtQhehGiehDQh6g0ibgvQmRh0oKhzIhrgYIi2gpQlXhTkZhfQnoihhyiJIgRgWIgHgLQgXgigKggQgPgpABglQABhZBbhEIAegWQBHgxBhgvQBogzCLgzIAVgIIAQgGQBdglBfgYQBogeBKgGIAdgEQBfgJBkAIQAygEAdgSQAKgEAJgFQACgHAFADIAeAPIAbANIBRAoIGnDPIBKAkIBiAwQHyDxKWE9IB2A3IA3AbUAQlAH8Ai/ARaUABGAecgF6Au0Mg1UAAAQo2B7lGAAQk3AAhchwg");
	this.shape_374.setTransform(614.6712,1556.9626);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#B35007").s().p("EACMA6YQCrg0hpheIgKgKQlfk1nDjeIghgPQmki+idhMIgngSQiKhHowhqIglgHQpEh8qChaIgQgDQ3TkBk6kPQgshFAAhGIgCgTQAAgsATgtQDtn4N5l8QDxhtErhiQB2gnB9glQGohzFDhtQEbhVBfhTQB+hXhJhWIgBgCQlRiqDniZIAKgGIADgDIABgBQB1hqELhQIALgDQEphaFbhbIATgFQBzgfBggcQC6g0BzgqIAXgJQDRhOGxiLIAjgMIAmgNQF+iIF9iEQBngoBlgpQAvgQAqgQQDRhUBHhlQA9hjhJhrQgfgtg6gtQhchGiehEQh6g0iagvQmPh0oLhzIhrgYIi2gpQlYhSkXhfQnoifhyiIIgSgWIgIgLQgWghgKggQgPgpAAglQgBhaBahDIAegWQBGgxBhgvQBog0CKg0IAVgIIAPgGQBdgmBfgXQBngfBKgGIAcgDQBfgJBkAJQAxgDAegRQAKgEAIgFQADgHAEADIAeAPIAbANIBSAoQDCBgDlBvIBKAkIBiAwQHuDwKbE+IB1A4IA4AbUAQlAH7AjCARcUABGAecgF6Au0Mg0VAAAQoqB3lAAAQkwAAhehsg");
	this.shape_375.setTransform(613.9213,1556.6877);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#AE4F08").s().p("EADrA6aQCug0hshhIgKgJQlnk5nMjgIghgQQmsjBighLIgngTQiOhHo6hqIgmgHQpOh7qNhbIgSgCQ3vkDlAkRQgvhHAAhGIgBgUQAAgsATgsQDrn4N+l4QDyhsErhhQB4gmB9glQGthzFAhsQEahXBRhTQB2hXhKhUIgBgCQlUiqDiiXIAJgGIAEgDIABgBQB0hsEOhQIALgDQErhaFehcIATgFIDUg7QC8g1B0gqIAYgJQDQhOG3iLIAigMIAngNQGAiIGBiDQBpgoBlgoQAwgQAqgRQDThTBJhjQBBhihFhrQgegtg5guQhbhHidhDQh6g0iagwQmMh0oMhyIhqgYIi3gpQlYhSkXhdQnnifhziHIgSgVIgIgLQgWgigLgfQgPgpgBglQgBhZBYhEIAegWQBGgxBggwQBng0CKg0IAUgIIAPgGQBdgmBegYQBngfBJgGIAdgDQBegIBkAJQAwgDAegQQAKgDAIgFQADgGAFADIAeAOIAaANIBSAoQDDBhDlBvIBKAkIBiAwQHqDuKfFAIB2A4IA3AbUAQlAH7AjFARdUABGAedgF6AuzMgzWAAAQocB0k6AAQkrAAhehpg");
	this.shape_376.setTransform(613.1719,1556.4144);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#A94D08").s().p("EAFJA6dQCxg1huhiIgKgKQlvk8nUjjIgigQQm1jEiihLIgogSQiShIpDhqIgmgHQpZh8qZhaIgTgDQ4KkElGkUQgzhHABhHIgCgUQAAgsATgsQDpn3OEl1QDzhqErhgQB5gmB+gkQGyhzE8hsQEahZBChTQBvhWhLhSIgBgCQlWiqDbiVIAKgHIADgDIABgBQB0htERhRIALgDQEthaFhhcIATgFQB1ggBhgcQC+g1B1gqIAXgJQDQhNG8iNIAjgMIAmgNQGDiHGFiDIDQhPQAwgQArgQQDUhSBMhiQBFhihChqQgcgug4guQhZhHiehEQh4g0iagwQmKh0oMhyIhrgXIi3gpQlYhSkWhdQnnidh0iGIgSgWIgIgKQgXghgKggQgQgogBglQgDhZBXhEIAegWQBGgyBfgvQBng1CIg1IAVgIIAPgGQBdgmBdgYQBnggBIgGIAdgDQBdgIBkALQAvgCAfgPQAJgDAJgFQACgGAFADIAeAOIAbANIBSAoIGoDRIBKAkIBiAvQHmDsKjFDIB2A4IA4AaUAQlAH8AjIAReUABGAedgF6AuzMgyXAAAQoPBwk0AAQklAAhghlg");
	this.shape_377.setTransform(612.4219,1556.1329);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#A44B09").s().p("EAGoA6fQC0g1hxhkIgLgJQl1lBndjlIgjgQQm+jHikhLIgpgSQiWhHpMhsIgngHQpkh7qjhaIgVgDQ4mkGlMkWQg1hIAAhJIgBgTQAAgsATgsQDnn2OJlxQDzhpEshfQB7glB+gkQG3hzE4hsQEZhaA1hUQBnhUhLhRIgCgCQlZiqDWiUIAJgHIAEgDIABgBQB0huEThRIALgDQEuhbFlhdIATgFQB2gfBigcQC/g2B2gqIAXgJQDRhNHAiOIAkgMIAmgMQGFiIGJiBIDThPIBbggQDWhRBOhhQBKhhg/hqQgbgug3guQhYhIidhEQh4g0iagwQmHhzoNhzIhqgXIi3gpQlZhRkWhcQnmich1iFIgSgWIgIgKQgXghgLgfQgQgpgBgkQgFhaBXhDIAdgXQBFgxBfgwQBmg1CIg1IAUgIIAPgGQBdgnBcgZQBnggBIgFIAdgDQBbgIBlAMQAvgCAegOQAKgDAIgEQADgGAFADIAdAOIAbANIBSAoQDGBjDjBuIBKAkIBhAwQHkDqKnFEIB2A4IA3AbUAQlAH7AjLARgUABGAedgF6AuzMgxYAAAQoBBskuAAQkgAAhghig");
	this.shape_378.setTransform(611.6719,1555.839);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#9F490A").s().p("EAIGA6iQC3g3hzhlIgLgKQl9lEnmjnIgjgRQnHjJimhLIgpgTQibhHpUhrIgogHQpvh8qvhaIgWgDQ5CkIlSkYQg4hJABhJIgBgTQAAgsATgtQDkn0OPluQD0hoEshdQB8glB/gkQG8hzE1hsQEYhbAnhVQBehThLhPIgCgCQlbipDQiTIAJgHIAEgDIABgBQBzhvEWhSIALgEQEwhbFnhdIAUgFQB3gfBjgcQDAg2B3grIAYgIQDQhOHGiOIAjgMIAngNQGHiHGOiAIDUhOQAwgQAsgQQDXhQBRhgQBOhgg8hpQgZgvg2gvQhWhIidhEQh4g0iagxQmEhzoNhyIhqgXIi4gpQlZhRkVhbQnmibh2iEIgSgVIgIgLQgXgggLggQgRgogCgkQgFhZBVhEIAdgWQBFgyBegwQBlg2CHg1IAUgIIAPgHQBdgnBcgYQBmghBIgFIAdgDQBagHBkAMQAvgBAegNIATgHQACgFAFACIAeAPIAaANIBSAoQDIBjDiBuIBKAkIBhAwQHgDoKrFGIB2A4IA4AbUAQkAH7AjPARiUABGAecgF6Au0MgwZAAAQn1BokoAAQkaAAhhheg");
	this.shape_379.setTransform(610.9469,1555.5641);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#9A470A").s().p("EAJlA6kQC6g3h2hnIgLgJQmElJnvjpIgkgRIp4kXIgqgSQifhIpdhsIgpgHQp5h8q7hZIgXgDQ5dkKlYkaQg8hKABhKIgBgTQABgsASgtQDjnzOUlrQD0hmEthcQB9glCAgjQHBhzExhsQEYhcAYhWQBXhShMhNIgCgCQleipDKiSIAKgHIADgDIABgBQB0hwEYhTIALgDQEyhcFqhdIAUgFIDbg8QDDg2B3grIAYgIQDQhNHLiPIAkgMIAmgNQGKiHGSiAIDWhNQAwgQAsgQQDZhOBUhfQBShgg4hpQgXgvg2gwQhUhHidhFQh3g0iagxQmChzoOhyIhqgXIi4gpQlZhQkVhaQnliah3iDIgSgVIgIgLQgXgggMgfQgRgogCgkQgHhZBUhEIAdgXQBEgyBegwQBlg2CGg2IAUgIIAPgGQBcgoBbgZQBmggBIgGIAcgDQBagGBkANQAugBAfgMQAKgCAIgEQADgFAEACIAeAPIAbANIBSAoIGqDRIBKAkIBhAwQHcDmKwFJIB2A4IA4AbUAQkAH7AjRARjUABGAecgF6Au0MgvaAAAQnnBkkiAAQkUAAhihbg");
	this.shape_380.setTransform(610.1969,1555.2784);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#95460B").s().p("EALDA6nQC+g4h5hoIgMgKQmKlNn4jrIglgRIqDkaIgqgSQikhHpmhtIgpgHQqEh8rGhZIgZgDQ55kMlekdQg+hKABhLIgBgTQABgsASgtQDhnyOZlnQD1hlEthbQB/gkB/gjQHHhzEthsQEYheAKhXQBPhPhNhNIgCgBQlhipDFiRIAJgHIAEgDIABgBQBzhxEbhUIALgDQE0hcFtheIAUgFIDdg8QDEg2B4grIAZgJQDQhMHPiQIAkgMIAngNQGMiGGWiAIDYhMQAxgPAsgQQDbhOBWheQBWheg1hpQgVgwg1gwQhThIidhFQh2g0iagxQl/hzoPhxIhqgXIi4gpQlahQkThaQnliYh4iCIgSgVIgIgLQgYgggLgfQgSgngCgkQgJhaBThEIAdgWQBEgyBdgxQBkg2CFg2IAUgJIAPgGQBdgoBagZQBlghBIgFIAcgDQBYgGBlAOQAuAAAegLQAKgCAIgEQADgFAFACIAdAPIAbANIBSAoQDKBkDhBtIBKAkIBhAwQHYDlK0FKIB2A4IA4AbUAQkAH7AjVARlUABGAecgF6Au0MgubAAAQnaBhkcAAQkPAAhjhYg");
	this.shape_381.setTransform(609.4469,1554.997);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#90440C").s().p("EAMiA6pQDAg5h8hpIgLgKQmSlRoBjuIglgQIqOkdIgrgSQiohIpvhtIgqgHQqOh8rShYIgagEQ6UkOllkfQhBhLABhMQgBgJAAgKQACgsASgsQDenyOglkQD1hjEuhZQB/gkCAgjQHLhzEqhrQEXhggDhYQBHhOhOhKIgCgCQljioC/iQIAJgHIADgEIABgBQBzhyEehUIALgDQE1hcFxhfIAUgFQB6ggBlgcQDFg2B5grIAZgJQDQhMHViRIAkgMIAngNQGOiGGah/IDahMQAxgPAtgPQDchNBZhcQBahfgxhoQgUgwg1gxQhQhIidhGQh1g0iagxQl+hyoOhyIhrgXIi4goQlahQkShZQnliXh5iBIgSgVIgIgKQgYgggMgfQgRgngEgkQgJhZBShEQANgMAPgLQBEgyBcgxQBkg3CEg2IAUgJIAOgGQBdgpBZgZQBmghBHgGIAcgCQBXgGBlAPQAtABAfgKQAJgCAJgEQACgEAFACIAeAPIAbAMIBSApIGrDRIBKAkIBhAwQHVDjK3FMIB3A4IA4AbUAQkAH7AjXARmUABGAedgF6AuzMgtcAAAQnNBekWAAQkIAAhkhVg");
	this.shape_382.setTransform(608.6885,1554.7207);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#8B420C").s().p("EAOAA6sQDEg6h/hrIgLgKQmZlUoLjxIglgRIqZkfIgrgSQithIp4htIgrgHQqYh8rehYIgbgEQ6wkQlqkhQhFhMABhNQgBgJABgKQABgsATgsQDcnxOllgQD1hiEvhYIEBhGQHQhzEnhrQEWhhgShZQBAhMhPhKIgCgBQlmioC5iOIAJgIIAEgEIABgBQBzhzEghVIALgDQE3hcF0hfIAUgFQB7ggBmgdQDHg2B6grIAZgJQDPhMHaiSIAkgMIAogNQGPiFGgh/IDbhLIBfgeQDdhMBchbQBehdguhoQgSgxg0gxQhPhJichGQh1g0iagxQl7hyoPhxIhqgXIi4gpQlbhPkShYQnkiWh5iAIgTgVIgJgKQgXgggMgeQgSgngEgkQgLhaBRhEQANgLAPgLQBDgyBcgyQBjg3CEg3IATgIIAPgHQBcgpBZgZQBlgiBHgFIAcgDQBWgFBlAQQAsABAfgJIASgFQADgEAEACIAeAPIAbAMIBSApQDNBlDfBsIBKAlIBhAvQHRDiK8FOIB2A4IA5AbUAQjAH7AjbARnUABGAedgF6AuzMgseAAAQm/BakQAAQkDAAhlhRg");
	this.shape_383.setTransform(607.9385,1554.4268);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#86400D").s().p("EAPfA6uQDHg6iChtIgMgKQmflZoUjyIgngRQnyjYixhKIgsgSQixhIqBhuIgrgHQqjh8rphYIgcgEQ7MkSlxkjQhHhNABhNIgBgUQACgsASgrQDanwOrldQD2hhEvhWIEDhGQHVhzEjhrQEWhigghaQA4hLhQhHIgCgCQloinCziOIAJgHIADgEIABgBQBzh1EjhVIALgDQE5hdF3hfIAVgFQB7ghBmgcQDJg3B7grIAZgJQDQhLHeiTIAlgMIAngNQGSiFGkh+IDehKIBfgeQDfhLBehaQBihdgqhnQgQgxg0gyQhNhJichGQh1g0iZgxQl5hzoQhxIhqgWIi4gpQlbhPkRhXQnkiVh6h/IgUgVIgIgKQgXgfgNgeQgSgngEgjQgNhaBQhEIAcgXQBDgyBbgyQBjg3CCg4IAUgIIAOgHQBcgqBYgZQBlgiBHgFIAcgDQBVgFBlASQArABAggIQAJgCAJgDQACgDAFACIAdAOIAbANIBTAoQDNBmDfBsIBKAkIBhAwQHNDgLAFQIB3A4IA4AbUAQkAH7AjdARpUABGAecgF6Au0MgreAAAQmyBWkKAAQj+AAhlhOg");
	this.shape_384.setTransform(607.1885,1554.1536);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#813E0D").s().p("EAQ9A6yQDKg7iEhuIgMgLQmnlcodj1IgngRQn7jaizhLIgtgSQi1hHqJhuIgtgIQqth8r1hXIgdgEQ7okVl3klQhKhOABhOIAAgTQACgsASgsQDYnvOwlZQD2hgEwhUIEFhGQHahzEfhqQEWhkguhbQAvhJhQhGIgCgCQlrinCuiMIAIgHIAEgEIABgBQBzh2ElhWIALgDQE7hdF6hgIAVgFIDjg9QDKg3B8grIAZgJQDQhMHkiTIAkgMIAogNQGUiFGoh9IDghJIBggeQDghKBhhZQBmhcgnhnQgOgxgzgzQhMhJichGQhzg1iagxQl2hyoQhxIhqgXIi5goQlbhPkRhWQnjiUh7h9IgUgVIgIgKQgXgggNgdQgTgngFgjQgOhaBQhEQAMgMAPgLQBCgyBbgyQBig4CCg4IATgIIAOgHQBcgqBYgaQBkgiBHgFIAbgDQBUgEBlASQAsACAfgHIASgEQADgEAEACIAeAPIAbAMIBSApIGtDSIBKAkIBhAwQHJDeLFFSIB2A4IA5AbUAQjAH7AjhARqUABGAedgF6AuzMgqgAAAQmlBSkEAAQj3AAhnhKg");
	this.shape_385.setTransform(606.4385,1553.7085);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#7C3D0E").s().p("EAScA62QDNg7iHhwIgMgLQmulgomj3IgogRQoEjei2hKIgsgSQi5hIqThuIgtgHQq4h9sAhXIgfgEQ8EkWl8koQhOhOAChQQgBgJAAgKQADgsASgrQDWnuO1lWQD3hfEwhTIEGhEQHghzEchrQEUhlg8hcQAohHhRhFIgCgCQluimCoiLIAJgIIAEgEIABgBQByh3EohWIALgEQE8hdF+hgIAVgFQB9ghBogcQDMg4B8grIAagJQDPhLHpiVIAlgLIAogNQGWiFGsh8IDihJIBhgdQDhhJBkhYQBqhbgjhnQgNgxgygzQhKhKichHQhzg0iagyQlzhxoRhxIhpgXIi6goQlchPkPhVQniiSh9h9IgUgVIgIgKQgYgfgNgdQgTgngFgjQgPhaBOhEQAMgMAPgLQBCgyBagzQBig3CAg5IATgJIAPgGQBcgrBWgaQBkgiBGgFIAcgDQBTgEBlAUQArACAggGQAJgBAIgDQADgDAEACIAeAOIAbANIBTAoQDQBoDdBrIBKAkIBhAwQHGDcLIFUIB3A4IA4AbUAQjAH7AjkARsUABGAecgF6Au0MgpgAAAQmYBOj+AAQjyAAhnhHg");
	this.shape_386.setTransform(605.6885,1553.2621);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#773B0F").s().p("EAT6A66QDQg8iJhxIgNgLQm1lkouj5IgpgSQoNjgi4hLIgtgRQi9hIqchvIgugHQrCh9sMhWIgggFQ8fkYmDkqQhQhPABhQQgBgKABgJQADgsARgsQDUntO7lSQD4hdEwhSIEIhEQHlhzEYhqQEUhmhKheQAghGhShDIgCgBQlwimCiiKIAIgIIAEgEIABgBQByh4ErhXIALgEQE+hdGBhhIAVgFQB+ghBpgdQDNg3B9gsIAagJQDQhKHuiWIAlgMIAngMQGZiEGxh9IDjhHIBigdQDjhIBmhXQBuhagghnQgLgygxgzQhJhKibhHQhzg1iZgxQlxhyoRhwIhqgXIi6goQlchOkPhVQnhiRh+h8QgLgKgJgKIgIgKQgYgfgNgdQgUgmgFgjQgRhaBNhFIAbgXQBCgyBZgzQBhg4CAg5IATgJIAOgGQBcgsBWgaQBkgjBFgEIAcgDQBSgDBlAUQAqADAggFIASgDQADgEAEACIAdAPIAbAMIBTApQDSBoDcBrIBKAkIBhAvQHCDbLNFWIB2A4IA5AcUAQjAH6AjnARtUABGAedgF6AuzMgoiAAAQmKBLj4AAQjtAAhohEg");
	this.shape_387.setTransform(604.9385,1552.8016);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#72390F").s().p("EAVZA6+QDTg8iMh0IgNgKQm8loo4j8IgpgSQoWjji6hKIgtgSQjChHqlhwIgugHQrNh9sYhWIghgFQ87kZmIksQhUhRABhRIAAgTQADgsASgrQDSnsPAlQQD4hbExhRIEKhDQHqhzEUhqQEUhnhYheQAYhFhThCIgCgBQlzimCdiIIAIgIIAEgFIABgBQByh5EthYIALgDQFAheGEhhIAVgFIDog+QDQg4B+grIAagJQDPhLH0iWIAkgMIAogMQGbiEG1h8IDlhHQAzgOAvgPQDlhGBphVQByhbgchmQgKgygwg0QhHhKibhIQhyg0iagyQluhxoShxIhpgWIi7goQlchOkOhTQnhiRh/h6IgUgVIgIgKQgYgegOgdQgUgmgGgjQgShaBMhFIAbgXQBBgyBZgzQBhg5B/g5IASgJIAOgGQBcgsBVgbQBkgjBFgFIAcgCQBQgDBmAVQAqADAggEQAJAAAIgCQADgDAEACIAeAOIAbANIBTAoQDSBpDcBrIBKAkIBhAvQG+DZLRFYIB3A4IA5AcUAQiAH6AjqARvUABGAecgF6Au0MgniAAAQl9BHjyAAQjnAAhphBg");
	this.shape_388.setTransform(604.1844,1552.352);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#6D3710").s().p("EAW3A7DQDXg9iPh1IgNgLQnDlspBj+IgqgSQofjmi8hKIgugRQjGhIquhwIgvgHQrXh9sjhWIgjgFQ9WkcmPkuQhXhRAChSIAAgTQADgsASgrQDPnrPGlMQD5haExhPIEMhDQHvhzEQhqQEUhohnhgQARhDhUhAIgCgBQl1imCWiHIAIgIIAEgFIABgBQByh6EwhYIALgEQFCheGHhiIAVgFQCAghBqgdQDRg4B/grIAagJQDPhKH5iYIAlgLIAogNQGdiDG5h8IDnhGIBjgcQDmhGBshUQB2hZgZhmQgHgzgwg0QhGhLibhIQhxg0iZgyQlshxoThwIhpgXIi6goQldhNkOhTQngiPiAh5IgUgVIgIgKQgYgegOgdQgUglgHgjQgThaBLhFQAMgMAOgLQBBgzBYgzQBgg5B+g6IATgIIAOgHQBbgsBVgbQBjgjBFgFIAcgCQBPgDBmAWQApAEAggDIASgCQACgDAEACIAeAOIAbANIBTAoQDUBqDbBqIBKAkIBhAvQG6DXLVFaIB3A5IA5AbUAQjAH6AjtARxUABGAecgF6Au0MgmkAAAQlvBDjtAAQjhAAhqg9g");
	this.shape_389.setTransform(603.4344,1551.8956);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#693611").s().p("EAYWA7HQDZg+iRh3IgNgLQnKlvpKkBIgqgSQopjpi+hKIgugRQjLhIq3hwIgvgHQrih+svhVIgkgFQ9ykemVkwQhZhSABhTIABgTQADgsARgrQDOnqPLlJQD6hYExhOIEOhCQH0hzENhqQEThqh1hgQAJhChVg+IgBgCQl5ikCRiGIAIgJIAEgEIABgBQByh8EyhZIAMgDQFDhfGKhiIAVgFIDsg+QDSg4CAgsIAbgJQDPhKH+iYIAlgMIAngMQGgiEG9h6IDqhFIBjgdQDohEBuhTQB6hZgVhlQgGgzgvg2QhEhKibhIQhwg1iagyQlphxoThwIhpgWIi7goQldhOkNhRQngiOiAh4IgVgVIgIgKQgYgegPgcQgUgmgHgiQgVhaBKhFIAagXQBBgzBXg0QBgg5B9g6IASgJIAOgGQBcgtBUgbQBigkBFgFIAcgBQBOgDBmAXQAoAEAhgCQAJAAAIgBQADgDAEACIAeAOIAbANIBTAoQDVBqDaBqIBKAlIBhAvQG3DVLZFcIB3A5IA5AbUAQiAH6AjwARyUABGAecgF6Au0MglkAAAQliA/jnAAQjbAAhrg5g");
	this.shape_390.setTransform(602.6885,1551.4646);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#643411").s().p("EAZ1A7LQDcg+iUh4IgOgLQnRl0pTkDIgqgSQozjsi/hKIgvgRQjPhIrAhwIgwgIQrsh9s7hVIglgFQ+NkgmbkzQhdhSAChUQgBgKABgJQAEgsARgrQDMnpPQlFQD6hYEyhMIEQhBQH5hzEJhqQEShriChiQABhAhWg9IgBgBQl8ikCMiFIAIgJIADgEIABgBQByh9E0haIANgDQFEhfGOhjIAVgFQCCghBsgdQDUg4CAgsIAbgKQDPhJIDiZIAmgMIAngMQGhiDHCh6IDshEIBkgcQDphEBxhSQB+hYgRhlQgFgzgug2QhChLibhIQhwg1iZgyQlnhxoUhwIhpgWIi7goQldhNkNhRQnfiMiBh4QgMgKgJgKIgJgKQgYgegPgcQgUglgIgiQgWhaBJhGIAagXQBAgzBXg0QBfg5B8g7IATgJIANgGQBcguBTgbQBigkBFgEIAbgCQBNgCBnAYQAoAFAggBIARgBQADgDAEACIAeAOIAbANIBTAoIGwDVIBKAkIBhAvQGzDTLdFfIB3A4IA6AcUAQiAH5AjzAR0UABGAecgF6Au0MgkmAAAQlVA7jgAAQjWAAhrg2g");
	this.shape_391.setTransform(601.9385,1550.9963);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#5F3212").s().p("EAbTA7QQDfhAiWh5IgOgMQnYl3pckFIgrgTQo8jujBhKIgwgRQjThIrIhxIgxgIQr3h9tGhVIgngFQ+pkimhk1QhghTAChUQAAgKABgKQAEgrARgrQDJnpPWlBQD7hWEyhLIERhBQH/hzEFhpQEShtiRhjQgHg+hWg7IgBgCQl+ikCFiDIAIgJIAEgFIABgBQBxh9E3hbIANgDQFGhgGRhjIAVgFQCDghBtgdQDVg5CBgsIAbgJQDPhJIIiaIAmgMIApgMQGiiDHHh5IDthEIBlgbQDqhDB0hRQCChXgOhkQgDg0gtg3QhBhLibhJQhvg0iZgzQlkhxoUhvIhpgWIi8goQlehNkLhQQnfiLiCh2QgMgKgJgLIgJgKQgYgdgPgcQgVglgIgiQgXhaBIhFQALgMAOgLQBAg0BWg0QBeg5B8g8IASgJIAOgGQBbguBTgcQBigkBEgEIAbgCQBMgCBmAaQAoAFAgAAIASgBQADgCADACIAeAOIAbANIBTAoQDZBrDYBpIBKAlIBhAvQGvDRLiFhIB3A4IA5AcUAQiAH5Aj2AR1UABGAedgF6AuzMgjmAAAQlIA4jbAAQjPAAhtgyg");
	this.shape_392.setTransform(601.1885,1550.5383);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#5A3012").s().p("EAcyA7UQDihAiZh8IgOgLQnfl7plkIIgsgSQpEjyjEhJIgwgSQjYhIrRhxIgygHQsBh+tShUIgogGQ/Ekjmok3QhjhVAChVIABgUQAEgrARgqQDInoPbk/QD7hUEzhKIEThAQIDhzEDhpQERhuifhjQgPg9hXg6IgBgCQmBijCAiCIAIgJIADgFIABgBQByh/E5hbIANgEQFIhfGUhkIAVgFQCEghBtgdQDXg5CDgsIAbgKQDOhJIOiaIAmgMIAogMQGliDHLh4IDvhDIBmgcQDshBB2hPQCGhXgKhkQgCg0gsg4Qg/hLibhJQhug1iZgyQljhxoUhwIhpgVIi8goQlehNkLhOQneiLiDh1IgVgUIgJgKQgYgdgQgcQgVglgIghQgZhbBHhFQALgMAOgLQA/g0BWg0QBeg6B7g8IASgJIANgGQBbgvBSgcQBigkBEgFIAbgBQBLgBBmAaQAnAFAhABIARAAQADgBAEACIAeANIAbANIBTAoIGxDVIBKAlIBhAvQGsDPLlFjIB3A4IA6AcUAQiAH5Aj5AR3UABGAecgF6Au0MgioAAAQk6A0jVAAQjKAAhtgvg");
	this.shape_393.setTransform(600.4199,1550.085);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#552E13").s().p("EAeQA7YQDmhBidh9IgOgLQnmmApukJIgsgTQpNj0jHhKIgxgRQjbhIrahxIgygIQsMh+tehUIgpgFQ/gkmmtk5QhmhVAChWIABgUQAEgrARgrQDFnnPhk7QD8hTEzhIIEVhAQIIhyD/hpQERhwithkQgXg8hYg4IgBgBQmDijB6iCIAHgJIAEgFIABgBQBxh/E8hcIANgEQFKhgGXhkIAVgFQCFghBugeQDZg5CDgsIAbgJQDPhJISibIAmgMIApgNQGniBHPh5IDxhCIBngbQDthAB5hOQCKhWgHhkQABg1gsg4Qg+hLiahKQhug0iZgzQlghxoVhvIhogVIi9goQlehMkKhOQneiKiEh0QgMgKgJgKIgJgKQgYgdgQgbQgWgkgJgiQgahaBGhGQAMgMANgLQA/g0BVg0QBdg7B6g8IASgJIANgHQBbgvBSgbQBhglBEgFIAbgBQBKgBBmAbQAmAGAhACIASABQACgCAEACIAeAOIAbANIBTAoIGyDVIBKAkIBhAvQGoDOLpFlIB4A4IA6AcUAQhAH5Aj8AR4UABGAedgF6AuzMghoAAAQktAxjPAAQjEAAhvgsg");
	this.shape_394.setTransform(599.67,1549.6183);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#502D14").s().p("EAfvA7cQDohBifh/IgOgLQntmEp3kLIgtgUQpWj3jJhJIgxgRQjfhIrkhyIgzgIQsXh+tohTIgrgGQ/8knmzk8QhphWAChXIABgUQAFgrARgqQDDnmPmk4QD9hSEzhHIEXg+QINhzD7hpQEQhxi7hlQgeg6hYg3IgCgBQmGijB0iAIAIgJIAEgFIABgBQBwiBE/hcIANgEQFLhgGbhlIAVgFQCGghBvgeQDag5CEgtIAcgJQDOhIIXidIAngLIApgNQGpiBHTh4IDzhBIBogbQDvhAB7hMQCPhWgEhjQACg1grg4Qg8hMiahKQhug1iZgzQldhwoVhvIhogVIi+goQlehMkKhNQndiIiFhzQgMgKgJgKIgJgKQgZgdgQgbQgWgkgJgiQgbhaBEhGQAMgMANgLQA/g0BUg1QBdg6B5g9IARgJIAOgHQBbgvBQgcQBhglBDgFQAOgBAOAAQBIAABnAcQAmAGAhADIARABQADgBAEACIAdANIAbANIBUAoQDcBuDWBoIBKAkIBgAvQGlDMLuFnIB3A4IA6AcUAQhAH5AkAAR6UABGAecgF6Au0MggqAAAQkfAtjJAAQi/AAhvgpg");
	this.shape_395.setTransform(598.92,1549.1574);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#4B2B14").s().p("EAhNA7hQDshCiiiAIgOgMQn1mHp/kOIgugUQpfj6jLhJIgygRQjjhIrthyIgzgIQsih+t0hTIgsgGUggXgEqgG6gE+QhshWADhYIABgUQAFgrAQgqQDCnlPrk0QD9hRE0hFIEZg+QIShzD4hpQEPhyjJhnQgmg4hZg1IgCgBQmJijBvh+IAHgKIAEgFIABgBQBxiCFBhdIANgEQFNhgGehlIAVgGQCHghBwgdQDbg6CFgtIAcgJQDOhIIdidIAngMIAogMQGsiCHYh2ID0hBIBpgaQDwg/B+hMQCThUgBhjQAEg2gqg5Qg7hMiahKQhsg1iZgzQlbhwoWhvIhogVIi+goQlehLkJhNQndiGiGhyQgMgKgJgKIgJgKQgZgdgQgbQgWgkgKghQgdhaBEhGQALgMANgLQA+g0BUg1QBcg7B4g+IASgJIANgGQBbgwBQgdQBgglBDgEQAOgCANABQBIAABnAdQAlAHAhAEIARABQADgBAEACIAeANIAbANIBTAoIGzDWIBKAlIBgAvQGhDKLyFoIB4A5IA6AcUAQhAH4AkCAR8UABGAecgF6Au0I/qAAQkTApjDAAQi4AAhxglg");
	this.shape_396.setTransform(598.1691,1548.695);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#462915").s().p("EAisA7lQDvhDiliCIgPgLQn7mMqJkQIgugTQpoj9jNhJIgzgRQjnhIr2hzIg0gIQssh+t/hTIgtgGUgg0gErgG/gFAQhvhYAChZIABgTQAGgrAQgrQC/nkPxkwQD+hQE0hEIEbg9QIXhzD0hoQEPh0jXhnQgug3hag0IgCgBQmLiiBph+IAHgJIAEgFIABgBQBwiDFEheIANgEQFPhhGhhlIAWgGQCHghBwgeQDeg6CFgsIAcgKQDPhHIhieIAngMIApgMQGuiBHch3ID3g/IBogbQDyg9CBhLQCXhUADhiQAFg2gpg6Qg5hMiahKQhsg1iZgzQlYhwoXhvIhngVIi/goQlehLkJhLQnciGiHhxIgWgUIgIgKQgZgcgRgbQgWgjgLghQgehbBDhGQALgMANgLQA+g0BTg2QBcg7B3g+IARgJIANgGQBbgxBPgdQBhglBCgEQAOgCANABQBHAABnAeIBGAMIARACQADAAADABIAeAOIAbANIBUAoIGzDWIBKAkIBgAvQGeDJL2FqIB3A5IA6AcUAQhAH4AkGAR9UABGAedgF6AuzI+sAAQkFAmi8AAQi0AAhxgig");
	this.shape_397.setTransform(597.4191,1548.2386);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#412715").s().p("EAkKA7pQDyhDiniEIgPgMQoCmPqSkSIgvgUQpxkAjPhJIgzgRQjthIr+hzIg0gIQs3h+uLhSIgugHUghPgEtgHGgFCQhyhZADhZIABgUQAFgrARgqQC9njP2ktQD+hOE1hDIEcg9QIdhzDwhoQEPh1jmhoQg1g1hbgzIgCgBQmOihBjh9IAHgJIAEgGIABgBQBxiEFGhfIANgDQFRhhGkhmIAWgGQCIghBxgeQDfg6CHgtIAcgJQDOhIImifIAogLIApgNQGviAHhh2QB7ggB+gfIBpgaQD0g8CDhKQCbhTAGhiQAHg2gog6Qg4hNiZhLQhsg1iYgzQlWhwoXhuIhogVIi/goQlfhLkHhKQnciFiHhwQgNgKgKgKIgJgJQgYgcgRgbQgXgjgLghQgghbBChGQALgMANgLQA9g0BTg2QBbg7B2g/IASgJIANgHQBagxBPgcQBggmBCgEQAOgCANABQBFAABoAgIBFANIARADQADgBAEACIAdANIAbANIBUAoQDgBwDUBnIBKAkIBgAvQGaDHL6FsIB4A5IA6AcUAQhAH4AkIAR/UABGAecgF6Au0I9sAAQj4Ahi2AAQiuAAhzgeg");
	this.shape_398.setTransform(596.6681,1547.7696);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3C2516").s().p("EAlpA7tQD1hEiqiFIgPgMQoJmTqbkVIgwgUQp5kCjShJIgzgRQjyhIsGh0Ig2gIQtAh+uXhSIgwgGUghqgEwgHMgFEQh1hZAChbQAAgKACgKQAGgrAQgpQC7njP8kqQD+hME2hBIEeg9QIhhyDthoQEOh3j0hpQg9g0hcgwIgCgCQmQihBdh7IAHgKIAEgFIABgBQBxiGFJhfIAMgDQFThiGnhmIAWgGQCJghBygeQDhg7CHgsIAdgKQDOhHIrigIAogLIApgNQGyiAHlh1ID6g+IBrgaQD0g7CHhIQCehTAKhiQAJg2gog7Qg2hNiZhLQhrg1iYgzQlUhwoXhvIhogVIi/gnQlfhLkHhJQnbiEiJhuQgMgKgKgKIgJgKQgZgcgRgaQgXgjgMggQghhbBBhGQALgNANgLQA8g0BTg2QBag8B2g/IARgJIANgHQBagxBOgdQBggmBCgFIAaAAQBFABBnAgIBFAPIARADQADAAADACIAeANIAbANIBUAoIG0DXIBLAkIBgAvQGWDFL+FuIB4A5IA6AcUAQhAH4AkLASAUABGAedgF6AuzI8uAAQjrAeixAAQinAAhzgbg");
	this.shape_399.setTransform(595.8943,1547.3052);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#372417").s().p("EAnIA7yQD4hFitiGIgPgNQoQmXqkkXIgxgUQqCkFjUhJIg0gRQj1hIsQh0Ig2gIQtLh+ujhSIgxgHUgiGgExgHSgFHQh4hZADhcIABgUQAHgrAQgpQC5niQBkmQD/hLE2hAQCXgfCIgdQInhyDphoQEOh5kChqQhFgxhdgwIgCgBQmTihBYh6IAHgKIAEgFIABgBQBwiHFMhfIAMgEQFVhiGqhnIAWgFQCKgiBzgeQDig7CIgsIAdgKQDOhHIwihIAogLIAqgMQG0iAHph1ID9g9IBrgZQD2g7CJhHQCihSAOhhQAKg3gng7Qg0hOiZhLQhqg1iZg0QlRhvoYhuIhngVIjAgnQlghLkFhJQnbiCiKhuQgMgJgKgKIgJgKQgZgbgSgaQgXgjgMghQgihbA/hGQALgMANgLQA8g0BSg3QBag8B0hAIARgJIANgGQBagyBNgeQBggmBBgEIAbgBQBDACBoAhIBFARIAQADQADAAAEACIAdANIAcANIBUAoQDiBxDSBmIBLAkIBgAvQGSDEMCFwIB4A5IA7AcUAQgAH4AkPASBUABGAedgF6AuzI7vAAQjeAaiqAAQiiAAh0gXg");
	this.shape_400.setTransform(595.1443,1546.8487);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#322217").s().p("EAomA72QD8hGiwiIIgPgMQoYmbqskZIgygUQqLkIjWhJIg0gRQj6hIsZh1Ig3gIQtVh+uuhRIgzgHUgihgEzgHYgFJQh8hbADhcIACgUQAGgrAQgqQC3ngQHkjQEAhKE2g/QCZgeCIgdQIshyDlhoQENh6kPhqQhNgxhegtIgCgCQmVigBSh5IAGgKIAEgGIABgBQBwiHFPhhIAMgDQFWhiGuhoIAWgFQCLgiB0geQDkg7CJgtIAdgKQDNhGI2iiIAogLIApgMQG3iAHth0ID/g9IBrgZQD4g5CMhGQCmhRARhhQANg3gng8QgzhOiYhMQhqg1iYgzQlPhwoZhuIhngUIjAgnQlghLkFhHQnaiCiLhsIgWgUIgJgJQgZgcgSgZQgYgjgMggQgkhbA/hGQAKgNANgLQA8g0BRg3QBZg9B0hAIARgJIAMgGQBagzBNgeQBfgmBBgEIAbgBQBCACBoAiIBEASIARAEIAGACIAeAOIAbAMIBUApIG1DXIBLAkIBgAvQGODCMHFyIB4A5IA6AcUAQhAH4AkRASDUABGAecgF6Au0I6wAAQjQAWikAAQidAAh1gUg");
	this.shape_401.setTransform(594.3933,1546.3798);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#2D2018").s().p("EAqFA76QD+hGiyiKIgQgMQoemfq2kcIgygUQqUkLjYhJIg1gQQj+hJshh0Ig4gIQtgh/u6hRIg0gHUgi9gE1gHegFLQh+hcADhdQAAgKACgKQAGgrAQgpQC1ngQMkfQEAhJE3g9QCageCJgcQIxhzDihnQEMh8kehrQhVgvhegsIgBgBQmZigBMh4IAHgKIAEgGIABgBQBwiJFRhhIANgEQFXhiGxhoIAWgFQCMgiB1geQDlg7CKgtIAdgKQDOhGI6ijIAogLIAqgNQG4h/HzhzQB+gfCCgdIBsgZQD5g4CPhFQCqhQAVhhQAOg4gmg8QgxhOiZhMQhpg1iYg0QlMhvoZhuIhngVIjBgmQlghKkEhHQnaiAiLhsQgNgKgKgJIgKgKQgZgbgSgaQgYgigNggQglhbA+hGQAKgNANgLQA7g0BRg3QBYg9BzhBIARgJIANgHQBagzBLgdQBfgnBBgEIAbgBQBBADBnAjIBEATIARAFIAGACIAeANIAbANIBUAoIG2DYIBLAkIBgAvQGKDAMLF0IB4A5IA7AcUAQgAH4AkVASEUABGAedgF6AuzI5xAAQjEATifAAQiWAAh1gRg");
	this.shape_402.setTransform(593.6434,1545.9299);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#281E19").s().p("EArjA7/QEChHi1iLIgQgNQolmjq/kdIgzgVQqdkOjahJIg1gQQkDhIsqh2Ig5gIQtrh/vFhQIg1gHUgjZgE3gHkgFOQiBhcADheQAAgKACgKQAHgrAQgpQCynfQSkcQEBhHE3g8QCbgdCKgcQI2hzDehnQEMh9kshtQhdgthegrIgCgBQmbifBGh3IAHgKIAEgGIABgBQBviKFUhhIANgEQFZhjG0hoIAWgGQCNgiB1geQDng7CLguIAegJQDNhGI/ikIApgLIAqgMQG6h/H3hzIECg7IBtgYQD7g4CRhDQCvhQAXhgQAQg4glg9QgvhOiZhNQhog1iZg0QlJhvoahuIhmgUIjBgnQlhhKkEhGQnZh+iMhrQgNgKgKgJIgKgKQgZgbgSgZQgZgigNggQgmhbA8hHQAKgMANgLQA7g1BQg3QBYg9ByhBIAQgJIANgHQBag0BLgeQBegnBBgEQAOgBANABQA/ADBoAkIBEAVIARAFIAGACIAdANIAcANIBUAoQDmBzDQBlIBLAkIBfAvQGIC+MPF2IB4A5IA7AdUAQfAH3AkYASGUABGAedgF6AuzI4yAAQi2APiZAAQiQAAh3gNg");
	this.shape_403.setTransform(592.8935,1545.4492);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#231C19").s().p("EAtCA8DQEEhIi3iMIgQgNQotmnrHkgIg0gVQqmkQjchJIg2gQQkHhJszh1Ig5gIQt2iAvQhQIg2gHUgj1gE5gHqgFQQiFhdAEhfQAAgKACgJQAHgrAPgqQCxndQXkZQEBhGE4g6QCdgdCKgcQI7hzDahnQEMh+k6huIjEhUIgCgBQmeigBBh1QACgFAEgFIAEgGIABgBQBwiLFWhjIANgEQFbhiG3hpIAXgGQCNgiB2geQDpg8CLgtIAegKQDNhFJFilIApgLIApgMQG9h/H7hyQCAgeCEgcIBugYQD8g3CUhCQCzhPAbhgQARg5gkg9QguhOiYhNQhog1iYg0QlHhvoahuIhngUIjBgnQlhhJkDhGQnZh9iNhqQgNgJgLgKIgJgJQgZgbgTgZQgZgigNgfQgohcA7hGQAKgNANgLQA6g1BQg3QBXg+BxhCIARgIIAMgHQBag0BKgfQBfgnBAgEQAOgBAMABQA/ADBoAlIBDAXIARAFIAGACIAeAOIAbAMIBUApIG3DYIBLAkIBfAvQGEC8MTF4IB4A6IA7AcUAQgAH3AkbASIUABGAecgF6Au0I3zAAQioALiTAAQiMAAh3gKg");
	this.shape_404.setTransform(592.1424,1544.9928);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#1E1B1A").s().p("EAugA8HQEIhIi6iPIgRgMQozmrrRkiIg0gVQqukUjfhIQgYgIgfgJQkLhIs8h2Ig6gIQuAh/vchQIg3gIUgkRgE6gHwgFSQiHheADhgIACgUQAIgrAPgpQCvndQckVQEChFE4g5QCegcCLgcQJAhyDXhnQEKiAlIhuQhsgrhggnIgCgBQmhifA7h0IAHgLIAEgGIABgBQBviMFZhjIANgEQFchjG7hpIAXgGIEFhAQDqg8CMguIAegKQDOhFJJilIApgLIAqgMQG/h/H/hxQCCgeCEgcIBvgYQD+g1CWhBQC3hPAehfQATg5gjg+QgshPiYhNQhng1iZg0QlEhvobhtIhmgUIjCgnQlhhJkDhEQnYh9iOhoIgYgUIgJgJQgZgagTgZQgagigOgfQgphbA7hHQAJgNANgLQA6g1BPg4QBXg+BwhCIAQgJIANgGQBZg1BKgfQBegnBAgEQAOgBAMABQA+ADBoAmIBDAYIAQAGIAHADIAdANIAcANIBUAoIG3DZIBLAkIBfAvQGAC6MXF6IB5A6IA7AcUAQfAH3AkeASJUABGAedgF6AuzI20AAQiaAIiLAAQiHAAh6gHg");
	this.shape_405.setTransform(591.3686,1544.5189);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#19191A").s().p("EAv/A8LQELhJi9iQIgRgNQo6muraklIg1gVQq3kWjhhJIg3gQQkQhItFh3Ig6gIQuLh/vohQIg4gIUgksgE8gH3gFUQiKhfADhhIADgUQAHgqAQgpQCsncQikSQEDhDE4g4QCfgcCLgcQJGhyDThmQEKiClWhvQh0gphhgmIgCgBQmjieA1hzIAGgLIAEgGIABgBQBviNFchkIANgEQFehjG+hqIAXgGQCPgiB4gfQDrg8COgtIAegKQDNhFJOimIAqgMIAqgMQHBh9IEhyIEIg4IBvgYQD/g0CZhAQC7hOAihfQAVg5gjg/QgrhPiYhNQhmg1iYg1QlChuochtIhmgVIjCgmQlihJkBhDQnYh8iPhnQgNgKgLgJIgJgJQgagagTgZQgZghgPggQgrhbA6hHQAKgMAMgMQA6g1BOg4QBWg+BwhDIAQgJIAMgHQBag1BIgeQBegpBAgDQANgBANABQA9AEBoAnIBCAZIARAHIAGADIAdANIAcAMIBUApQDrB0DNBkIBLAlIBfAuQF8C5McF8IB4A6IA8AcUAQfAH3AkhASLUABGAecgF6Au0I11AAQiPAEiIAAQh/AAh4gEg");
	this.shape_406.setTransform(590.6176,1544.069);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#14171B").s().p("EAxdA8QQEOhKi/iRQpHm7ruksQruksjrhLQjshLuuiFQuviFwUhRUgxegGlABYgHNQB9qPaokmQaoklq8jeQq9jeByiQQBxiRFphmQFphmHPhuQHOhuDUhGQDUhHJ2ixQJ1iwL7iYQL7iZiGj+QiFj/z7j3Qz6j4i0i3Qi0i2CAh2QCAh3DniJQDniJByAJQByAJEYCLQEXCKDsBzQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_407.setTransform(589.8657,1543.5981);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#12172E").s().p("AvjmIQVsATRPgEUgmdAJzgISACOQGTi6BhpWg");
	this.shape_408.setTransform(214.15,1971.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_316}]}).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_408},{t:this.shape_407}]},1).wait(1));

	// Слой_1
	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#C98953").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_409.setTransform(555.9469,1543.465);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#CA8953").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_410.setTransform(555.9469,1543.465);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#CA8A53").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_411.setTransform(555.9469,1543.465);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#CB8A53").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_412.setTransform(555.9469,1543.465);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#CC8A53").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_413.setTransform(555.9469,1543.465);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#CC8B54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_414.setTransform(555.9469,1543.465);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#CD8B54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_415.setTransform(555.9469,1543.465);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#CE8B54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_416.setTransform(555.9469,1543.465);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#CE8C54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_417.setTransform(555.9469,1543.465);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#CF8C54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_418.setTransform(555.9469,1543.465);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#D08C54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_419.setTransform(555.9469,1543.465);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D08D54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_420.setTransform(555.9469,1543.465);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D18D54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_421.setTransform(555.9469,1543.465);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#D28D55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_422.setTransform(555.9469,1543.465);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#D28E55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_423.setTransform(555.9469,1543.465);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#D38E55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_424.setTransform(555.9469,1543.465);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#D48E55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_425.setTransform(555.9469,1543.465);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#D48F55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_426.setTransform(555.9469,1543.465);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#D58F55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_427.setTransform(555.9469,1543.465);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#D68F55").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_428.setTransform(555.9469,1543.465);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#D69055").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_429.setTransform(555.9469,1543.465);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#D79056").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_430.setTransform(555.9469,1543.465);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#D89056").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_431.setTransform(555.9469,1543.465);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#D89156").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_432.setTransform(555.9469,1543.465);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#D99156").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_433.setTransform(555.9469,1543.465);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#DA9156").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_434.setTransform(555.9469,1543.465);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#DA9256").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_435.setTransform(555.9469,1543.465);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#DB9256").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_436.setTransform(555.9469,1543.465);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#DC9256").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_437.setTransform(555.9469,1543.465);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#DC9357").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_438.setTransform(555.9469,1543.465);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DD9357").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_439.setTransform(555.9469,1543.465);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#DE9357").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_440.setTransform(555.9469,1543.465);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#DE9457").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_441.setTransform(555.9469,1543.465);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#DF9457").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_442.setTransform(555.9469,1543.465);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#E09457").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_443.setTransform(555.9469,1543.465);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#E09557").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_444.setTransform(555.9469,1543.465);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#E19557").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_445.setTransform(555.9469,1543.465);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#E29558").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_446.setTransform(555.9469,1543.465);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E29658").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_447.setTransform(555.9469,1543.465);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#E39658").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_448.setTransform(555.9469,1543.465);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E49658").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_449.setTransform(555.9469,1543.465);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#E49758").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_450.setTransform(555.9469,1543.465);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#E59758").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_451.setTransform(555.9469,1543.465);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#E69758").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_452.setTransform(555.9469,1543.465);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#E69858").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_453.setTransform(555.9469,1543.465);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#E79859").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_454.setTransform(555.9469,1543.465);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#E89859").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_455.setTransform(555.9469,1543.465);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#E89959").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_456.setTransform(555.9469,1543.465);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#E99959").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_457.setTransform(555.9469,1543.465);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#EA9959").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_458.setTransform(555.9469,1543.465);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#EA9A59").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_459.setTransform(555.9469,1543.465);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#EB9A59").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_460.setTransform(555.9469,1543.465);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#EC9A59").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_461.setTransform(555.9469,1543.465);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#EC9B5A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_462.setTransform(555.9469,1543.465);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#ED9B5A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_463.setTransform(555.9469,1543.465);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#EE9B5A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_464.setTransform(555.9469,1543.465);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#EE9C5A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_465.setTransform(555.9469,1543.465);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#EF9C5A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_466.setTransform(555.9469,1543.465);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#E39759").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_467.setTransform(555.9469,1543.465);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#DD9458").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_468.setTransform(555.9469,1543.465);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#D79158").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_469.setTransform(555.9469,1543.465);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#D18E57").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_470.setTransform(555.9469,1543.465);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#CB8C56").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_471.setTransform(555.9469,1543.465);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#C58956").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_472.setTransform(555.9469,1543.465);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#BF8655").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_473.setTransform(555.9469,1543.465);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#B98455").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_474.setTransform(555.9469,1543.465);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#B38154").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_475.setTransform(555.9469,1543.465);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#AD7E54").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_476.setTransform(555.9469,1543.465);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#A77C53").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_477.setTransform(555.9469,1543.465);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#A17952").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_478.setTransform(555.9469,1543.465);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#9B7652").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_479.setTransform(555.9469,1543.465);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#957351").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_480.setTransform(555.9469,1543.465);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#8F7151").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_481.setTransform(555.9469,1543.465);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#8A6E50").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_482.setTransform(555.9469,1543.465);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#846B4F").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_483.setTransform(555.9469,1543.465);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#7E694F").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_484.setTransform(555.9469,1543.465);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#78664E").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_485.setTransform(555.9469,1543.465);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#72634E").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_486.setTransform(555.9469,1543.465);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#6C604D").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_487.setTransform(555.9469,1543.465);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#665E4C").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_488.setTransform(555.9469,1543.465);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#605B4C").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_489.setTransform(555.9469,1543.465);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#5A584B").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_490.setTransform(555.9469,1543.465);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#54564B").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_491.setTransform(555.9469,1543.465);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#4E534A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_492.setTransform(555.9469,1543.465);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#48504A").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_493.setTransform(555.9469,1543.465);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#424E49").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_494.setTransform(555.9469,1543.465);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#3C4B48").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_495.setTransform(555.9469,1543.465);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#364848").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_496.setTransform(555.9469,1543.465);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#304547").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_497.setTransform(555.9469,1543.465);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#2A4347").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_498.setTransform(555.9469,1543.465);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#244046").s().p("EhYaA8RMAAbhPOQGChmRLocQRModVrroQVqrpCqAeQCpAfCrBZQCqBaGMDBQGMDCQfH4UAQfAH3AkkASMUABGAecgF6Au0g");
	this.shape_499.setTransform(555.9469,1543.465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_409}]}).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).wait(1));

	// Слой_5
	this.instance = new lib.Символ3();
	this.instance.setTransform(540.4,860.5,1,1,0,0,0,540.4,860.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(1).to({regY:861.5,y:861.5,alpha:0.0286},0).wait(1).to({alpha:0.0571},0).wait(1).to({alpha:0.0857},0).wait(1).to({alpha:0.1143},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0.1714},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2286},0).wait(1).to({alpha:0.2571},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.3143},0).wait(1).to({alpha:0.3429},0).wait(1).to({alpha:0.3714},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.4571},0).wait(1).to({alpha:0.4857},0).wait(1).to({alpha:0.5143},0).wait(1).to({alpha:0.5429},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6286},0).wait(1).to({alpha:0.6571},0).wait(1).to({alpha:0.6857},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.7429},0).wait(1).to({alpha:0.7714},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8286},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:0.8857},0).wait(1).to({alpha:0.9143},0).wait(1).to({alpha:0.9429},0).wait(1).to({alpha:0.9714},0).wait(1).to({alpha:1},0).wait(1));

	// фдень
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(540.5,866.9,1,1,0,0,0,540.5,866.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:540.6,regY:867.9,x:540.6,y:867.9,alpha:0.0021},0).wait(1).to({alpha:0.0042},0).wait(1).to({alpha:0.0063},0).wait(1).to({alpha:0.0084},0).wait(1).to({alpha:0.0105},0).wait(1).to({alpha:0.0126},0).wait(1).to({alpha:0.0147},0).wait(1).to({alpha:0.0168},0).wait(1).to({alpha:0.0189},0).wait(1).to({alpha:0.0211},0).wait(1).to({alpha:0.0232},0).wait(1).to({alpha:0.0253},0).wait(1).to({alpha:0.0274},0).wait(1).to({alpha:0.0295},0).wait(1).to({alpha:0.0316},0).wait(1).to({alpha:0.0337},0).wait(1).to({alpha:0.0358},0).wait(1).to({alpha:0.0379},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.0731},0).wait(1).to({alpha:0.1062},0).wait(1).to({alpha:0.1393},0).wait(1).to({alpha:0.1724},0).wait(1).to({alpha:0.2055},0).wait(1).to({alpha:0.2386},0).wait(1).to({alpha:0.2717},0).wait(1).to({alpha:0.3048},0).wait(1).to({alpha:0.3379},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.4041},0).wait(1).to({alpha:0.4372},0).wait(1).to({alpha:0.4703},0).wait(1).to({alpha:0.5034},0).wait(1).to({alpha:0.5366},0).wait(1).to({alpha:0.5697},0).wait(1).to({alpha:0.6028},0).wait(1).to({alpha:0.6359},0).wait(1).to({alpha:0.669},0).wait(1).to({alpha:0.7021},0).wait(1).to({alpha:0.7352},0).wait(1).to({alpha:0.7683},0).wait(1).to({alpha:0.8014},0).wait(1).to({alpha:0.8345},0).wait(1).to({alpha:0.8676},0).wait(1).to({alpha:0.9007},0).wait(1).to({alpha:0.9338},0).wait(1).to({alpha:0.9669},0).wait(1).to({alpha:1},0).wait(44));

	// футро
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(539.8,757.1,1,1,0,0,0,540.8,757.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:757,y:757,alpha:0.9881},0).wait(1).to({alpha:0.9762},0).wait(1).to({alpha:0.9644},0).wait(1).to({alpha:0.9525},0).wait(1).to({alpha:0.9406},0).wait(1).to({alpha:0.9287},0).wait(1).to({alpha:0.9169},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.8931},0).wait(1).to({alpha:0.8813},0).wait(1).to({alpha:0.8694},0).wait(1).to({alpha:0.8575},0).wait(1).to({alpha:0.8456},0).wait(1).to({alpha:0.8338},0).wait(1).to({alpha:0.8219},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.7981},0).wait(1).to({alpha:0.7863},0).wait(1).to({alpha:0.7744},0).wait(1).to({alpha:0.7625},0).wait(1).to({alpha:0.7506},0).wait(1).to({alpha:0.7387},0).wait(1).to({alpha:0.7269},0).wait(1).to({alpha:0.715},0).wait(1).to({alpha:0.7031},0).wait(1).to({alpha:0.6913},0).wait(1).to({alpha:0.6794},0).wait(1).to({alpha:0.6675},0).wait(1).to({alpha:0.6556},0).wait(1).to({alpha:0.6438},0).wait(1).to({alpha:0.6319},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.6081},0).wait(1).to({alpha:0.5962},0).wait(1).to({alpha:0.5844},0).wait(1).to({alpha:0.5725},0).wait(1).to({alpha:0.5606},0).wait(1).to({alpha:0.5487},0).wait(1).to({alpha:0.5369},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5131},0).wait(1).to({alpha:0.5013},0).wait(1).to({alpha:0.4894},0).wait(1).to({alpha:0.4775},0).wait(1).to({alpha:0.4656},0).wait(1).to({alpha:0.4538},0).wait(1).to({alpha:0.4419},0).wait(1).to({alpha:0.43},0).to({_off:true},1).wait(43));

	// фон
	this.instance_3 = new lib.фон();
	this.instance_3.setTransform(-10,-3,0.24,0.2399);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(530,957,591.9000000000001,1053.9);
// library properties:
lib.properties = {
	id: 'D5138E46605E024A93E5F52B5AEF5EE2',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/фондень_.png", id:"фондень"},
		{src:"images/фонночь_.png", id:"фонночь"},
		{src:"images/фонутро_.png", id:"фонутро"},
		{src:"images/фон_.png", id:"фон"}
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
an.compositions['D5138E46605E024A93E5F52B5AEF5EE2'] = {
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