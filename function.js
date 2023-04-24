$(window).on('load',function(){
	$(".panel-heading a").on('click',function(){
		console.log('a');
		$(".in-ul").css('display','none');
		$("#collapse-1").slideToggle('fast');
	});
})

$(function(){

		const button = document.getElementsByClassName("grd")[0];

		button.addEventListener("mousemove", (e) => {
		const rect = button.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / button.clientWidth) * 100;
		const y = ((e.clientY - rect.top) / button.clientHeight) * 100;

		button.style.background = `radial-gradient(circle closest-corner 
			at ${x}% ${y}%,
			var(--ripple-color), var(--bg-color))`;
		});

		button.addEventListener("mouseleave", (event) => {
		button.style.removeProperty("background");
		});

	$(".chino").on('mouseover',function(){
		$(this).removeClass('chino');
	});

    $(".xs-ul").on('click',function(){
            let mi;
            let ni;
            mi=$(this).index();
            $(".xs-ul").each(function(){
                ni=$(this).index();
                if(ni!==mi){
                $(this).find('.in-ul').css('display','none');
                }
            });
                $(this).find('.in-ul').fadeToggle();
    });

    $(".menu-item").on('mouseover',function(){
        $(this).find('.sub-menu').addClass('op');
    });
    $(".menu-item").on('mouseout',function(){
        $('.sub-menu').removeClass('op');
    })
    
	$(".disp1").on('click',function(){
		if($(this).hasClass('move')){
			$(this).removeClass('move');
			$(this).addClass('shosite');
		}else{
			$(this).addClass('move');
			$(this).removeClass('shosite');
		}
		if($('.disp2').hasClass('mv_down')){
			$('.disp2').removeClass('mv_down');
		}else{
			$('.disp2').addClass('mv_down');
		}
		if($(".site_works").hasClass('sho')){
			$(".site_works").fadeOut('slow');
			$(".site_works").removeClass('sho');
		}else{
			$(".site_works").css('display','block');
			$(".site_works").addClass('sho');		

			const delay=300;
			let timer;
			clearTimeout(timer);
			timer=setTimeout(function(){
				$(".site_works li").each(function(i){
					$(this).delay(i*delay).queue(function(){
						$(this).addClass('long_li').dequeue();				
					});
					$(this).delay(i*delay*2).queue(function(){
						$(this).children('a').addClass('mv_a').dequeue();
						$(this).children('a').css('padding-left',i*10).dequeue();
					});
				});
			},1000);

		}

	});

	$(".disp2").on('click',function(){
		if($(this).hasClass('move3')){
			$(this).removeClass('move3');
			$(this).addClass('move_left');
			$(this).addClass('shoecsite');
		}else{
			$(this).addClass('move3');
			$(this).removeClass('move_left');
			$(this).removeClass('shoecsite');
			$(this).css('text-align','right');
		}
		if($(".ec_works").hasClass('sho_ec')){
			$(".ec_works").fadeOut('slow');
			$(".ec_works").removeClass('sho_ec');
		}else{
		$(".ec_works").css('display','block');
		$(".ec_works").addClass('sho_ec');
		}
	});

	/*$(".uebu").on('mouseover',function(){
		if($(this).hasClass('pon')){
			$(this).removeClass('pon');
			$(this).children('a').removeClass('ponmg');
		}else{
			$(this).addClass('pon');
			$(this).children('a').addClass('ponmg');
		}
	});
	$(".uebe").on('mouseleave',function(){
		$(this).removeClass('pon');
		$(this).children('a').removeClass('ponmg');	
	})
*/
    $(window).scroll(function () {
        let x=$(this).scrollTop();
        if(x>280){
            $(".pc-nav").addClass('menu_fix');
            $(".pc-nav ul li a").addClass('menu_text');
        }else{
            $(".pc-nav").removeClass('menu_fix');
            $(".pc-nav ul li a").removeClass('menu_text');

        }

		let lf=$(".sld_left").offset();
		let ri=$(".sld_right").offset();


		let elemOffset=$(".cn").offset();
		let wh = $(window).height();
		let scrollPos = $(window).scrollTop();
		if(scrollPos>elemOffset.top - wh){
			$(".cn").addClass('chino');
		}else if(scrollPos>elemOffset.top+300){
			$(".cn").removeClass('chino');
		}else{
			$(".cn").removeClass('chino');
		};

		if(scrollPos>lf.top - wh){
			$(".sld_left").addClass('sldLin');
		}else if(scrollPos>lf.top+300){
			$(".sld_left").removeClass('sldLin');
		}else{
			$(".sld_left").removeClass('sldLin');
		};

		if(scrollPos>ri.top - wh){
			$(".sld_right").addClass('sldRin');
		}else if(scrollPos>ri.top+300){
			$(".sld_right").removeClass('sldRin');
		}else{
			$(".sld_right").removeClass('sldRin');
		};

    $('.flipRightTrigger').each(function(){ //flipRightTriggerというクラス名が
        var elemPos = $(this).offset().top-10;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipRight');// 画面内に入ったらflipRightというクラス名を追記
        }else{
        $(this).removeClass('flipRight');// 画面外に出たらflipRightというクラス名を外す
        }
        });

    $('.rotateLeftZTrigger').each(function(){ //rotateLeftZTriggerというクラス名が
        var elemPos = $(this).offset().top-10;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('rotateLeftZ');// 画面内に入ったらrotateLeftZというクラス名を追記
        }else{
        $(this).removeClass('rotateLeftZ');// 画面外に出たらrotateLeftZというクラス名を外す
        }
    });
    $('.rotateRightZTrigger').each(function(){ //rotateRightZTriggerというクラス名が
        var elemPos = $(this).offset().top-10;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('rotateRightZ');// 画面内に入ったらrotateRightZというクラス名を追記
        }else{
        $(this).removeClass('rotateRightZ');// 画面外に出たらrotateRightZというクラス名を外す
        }
        }); 
      
      // ボンッ
    
    $('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
    var elemPos = $(this).offset().top-10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
    }else{
    $(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
    }
    });

    $('.flipLeftTopTrigger').each(function(){ //flipLeftTopTriggerというクラス名が
        var elemPos = $(this).offset().top-10;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopというクラス名を追記
        }else{
        $(this).removeClass('flipLeftTop');// 画面外に出たらflipLeftTopというクラス名を外す
        }
        });

        
    })

    /* separate text */
    $('.visual .line').children().addBack().contents().each(function(){
        if (this.nodeType == 3) {
          var $this = $(this);
          $this.replaceWith($this.text().replace(/(\S)/g, '<span class="letter">$&</span>'));
        }
      });
     
      /* animation delay */
      $('.visual .letter').each(function () {
        var letters = $(this).closest('.txt').find('.letter');
        var index = $(letters).index(this);
        var time = index * 0.03;
        $(this).css('animation-delay', time + 's');
      });
    
    if ( navigator.userAgent.indexOf('iPhone') > 0 ) {
        $("body").addClass("iPhone");
    };
    
    function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
    
$(window).on('load', function(){
    $('.visual').addClass('is-visible');
});

$(".ribon_bg").on('mouseover',function(){
    $(this).find('.has-background-dim-80').css('opacity','0.1');
	$(this).find('.move2').addClass('off');
	$(this).find('.move2').removeClass('move2');
    $('.z1').css('color','#fff');
})
$(".ribon_bg").on('mouseout',function(){
	$(this).find('.off').addClass('move2');
	$(this).find('.move2').removeClass('off');
	$(".z1").css('transition','1s');
    $('.z1').css('color','#000');
    $('.move2').css('color',"#0bbbb3");
	$(this).find('.has-background-dim-80').css('transition','1s');
	$(this).find('.has-background-dim-80').css('opacity','0.8');

})
$(".rib").on('mouseover',function(){
	$(this).removeClass('move');
})
$(".rib").on('mouseout',function(){
	$(this).addClass('move');
})
$(".ml").on('mouseover',function(){
    $('.fly').addClass('go');
    $('.fly').removeClass('move2');

})
$(".ml").on('mouseout',function(){
    $('.fly').addClass('move2');
    $('.fly').removeClass('go');
})



var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#0bbbb3']);
	// 各キャンバスの初期化
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
		// 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 1, 3, 0);//drawWave(canvas, color[0],0.5, 3, 0);とすると透過50%の波が出来る
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();

});

//ボタン
$(function() {
	// Vars
	var pointsA = [],
		pointsB = [],
		$canvas = null,
		canvas = null,
		context = null,
		vars = null,
		points = 8,
		viscosity = 20,
		mouseDist = 70,
		damping = 0.05,
		showIndicators = false;
		mouseX = 0,
		mouseY = 0,
		relMouseX = 0,
		relMouseY = 0,
		mouseLastX = 0,
		mouseLastY = 0,
		mouseDirectionX = 0,
		mouseDirectionY = 0,
		mouseSpeedX = 0,
		mouseSpeedY = 0;

	/**
	 * Get mouse direction
	 */
	function mouseDirection(e) {
		if (mouseX < e.pageX)
			mouseDirectionX = 1;
		else if (mouseX > e.pageX)
			mouseDirectionX = -1;
		else
			mouseDirectionX = 0;

		if (mouseY < e.pageY)
			mouseDirectionY = 1;
		else if (mouseY > e.pageY)
			mouseDirectionY = -1;
		else
			mouseDirectionY = 0;

		mouseX = e.pageX;
		mouseY = e.pageY;

		relMouseX = (mouseX - $canvas.offset().left);
		relMouseY = (mouseY - $canvas.offset().top);
	}
	$(document).on('mousemove', mouseDirection);

	/**
	 * Get mouse speed
	 */
	function mouseSpeed() {
		mouseSpeedX = mouseX - mouseLastX;
		mouseSpeedY = mouseY - mouseLastY;

		mouseLastX = mouseX;
		mouseLastY = mouseY;

		setTimeout(mouseSpeed, 50);
	}
	mouseSpeed();

	/**
	 * Init button
	 */
	function initButton() {
		// Get button
		var button = $('.btn-liquid');
		var buttonWidth = button.width();
		var buttonHeight = button.height();

		// Create canvas
		$canvas = $('<canvas></canvas>');
		button.append($canvas);

		canvas = $canvas.get(0);
		canvas.width = buttonWidth+100;
		canvas.height = buttonHeight+90;
		context = canvas.getContext('2d');

		// Add points

		var x = buttonHeight/2;
		for(var j = 1; j < points; j++) {
			addPoints((x+((buttonWidth-buttonHeight)/points)*j), 0);
		}
		addPoints(buttonWidth-buttonHeight/5, 0);
		addPoints(buttonWidth+buttonHeight/10, buttonHeight/2);
		addPoints(buttonWidth-buttonHeight/5, buttonHeight);
		for(var j = points-1; j > 0; j--) {
			addPoints((x+((buttonWidth-buttonHeight)/points)*j), buttonHeight);
		}
		addPoints(buttonHeight/5, buttonHeight);

		addPoints(-buttonHeight/10, buttonHeight/2);
		addPoints(buttonHeight/5, 0);

		let url=location.href;
		if(url=='https://s-resonance.co.jp/site_works/'){
			renderCanvas();
		}

	}


	function addPoints(x, y) {
		pointsA.push(new Point(x, y, 1));
		pointsB.push(new Point(x, y, 2));
	}

	function Point(x, y, level) {
	  this.x = this.ix = 50+x;
	  this.y = this.iy = 50+y;
	  this.vx = 0;
	  this.vy = 0;
	  this.cx1 = 0;
	  this.cy1 = 0;
	  this.cx2 = 0;
	  this.cy2 = 0;
	  this.level = level;
	}

	Point.prototype.move = function() {
		this.vx += (this.ix - this.x) / (viscosity*this.level);
		this.vy += (this.iy - this.y) / (viscosity*this.level);

		var dx = this.ix - relMouseX,
			dy = this.iy - relMouseY;
		var relDist = (1-Math.sqrt((dx * dx) + (dy * dy))/mouseDist);

		// Move x
		if ((mouseDirectionX > 0 && relMouseX > this.x) || (mouseDirectionX < 0 && relMouseX < this.x)) {
			if (relDist > 0 && relDist < 1) {
				this.vx = (mouseSpeedX / 4) * relDist;
			}
		}
		this.vx *= (1 - damping);
		this.x += this.vx;

		// Move y
		if ((mouseDirectionY > 0 && relMouseY > this.y) || (mouseDirectionY < 0 && relMouseY < this.y)) {
			if (relDist > 0 && relDist < 1) {
				this.vy = (mouseSpeedY / 4) * relDist;
			}
		}
		this.vy *= (1 - damping);
		this.y += this.vy;
	};


	/**
	 * Render canvas
	 */
	function renderCanvas() {
		// rAF
		rafID = requestAnimationFrame(renderCanvas);

		// Clear scene
		context.clearRect(0, 0, $canvas.width(), $canvas.height());
		context.fillStyle = '#fff';
		context.fillRect(0, 0, $canvas.width(), $canvas.height());

		// Move points
		for (var i = 0; i <= pointsA.length - 1; i++) {
			pointsA[i].move();
			pointsB[i].move();
		}

		// Create dynamic gradient
		var gradientX = Math.min(Math.max(mouseX - $canvas.offset().left, 0), $canvas.width());
		var gradientY = Math.min(Math.max(mouseY - $canvas.offset().top, 0), $canvas.height());
		var distance = Math.sqrt(Math.pow(gradientX - $canvas.width()/2, 2) + Math.pow(gradientY - $canvas.height()/2, 2)) / Math.sqrt(Math.pow($canvas.width()/2, 2) + Math.pow($canvas.height()/2, 2));

		var gradient = context.createRadialGradient(gradientX, gradientY, 300+(300*distance), gradientX, gradientY, 0);
		gradient.addColorStop(0, '#102ce5');
		gradient.addColorStop(1, '#E406D6');

		// Draw shapes
		var groups = [pointsA, pointsB]

		for (var j = 0; j <= 1; j++) {
			var points = groups[j];

			if (j == 0) {
				// Background style
				context.fillStyle = '#fff';
			} else {
				// Foreground style
				context.fillStyle = gradient;
			}

			context.beginPath();
			context.moveTo(points[0].x, points[0].y);

			for (var i = 0; i < points.length; i++) {
				var p = points[i];
				var nextP = points[i + 1];
				var val = 30*0.552284749831;

				if (nextP != undefined) {
						p.cx1 = (p.x+nextP.x)/2;
						p.cy1 = (p.y+nextP.y)/2;
						p.cx2 = (p.x+nextP.x)/2;
						p.cy2 = (p.y+nextP.y)/2;

						context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
				} else {
						nextP = points[0];
						p.cx1 = (p.x+nextP.x)/2;
						p.cy1 = (p.y+nextP.y)/2;

						context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
				}
			}

			// context.closePath();		
			context.fill();
		}

		if (showIndicators) {
			// Draw points
			context.fillStyle = '#000';
			context.beginPath();
			for (var i = 0; i < pointsA.length; i++) {
				var p = pointsA[i];

				context.rect(p.x - 1, p.y - 1, 2, 2);
			}
			context.fill();

			// Draw controls
			context.fillStyle = '#f00';
			context.beginPath();
			for (var i = 0; i < pointsA.length; i++) {
				var p = pointsA[i];

				context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
				context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
			}
			context.fill();
		}
	}

	// Init
	initButton();
});