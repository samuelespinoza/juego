/*------------------- 
a player entity
-------------------------------- */
var PlayerEntity = me.ObjectEntity.extend({
 
doWalk : function(left) {
    this.flipX(left);
    this.vel.x += (left) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
},
 
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
 		this.startX = x;
		this.startY = y;
        // set the walking & jumping speed
        this.setVelocity(3, 15);
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
            this.doWalk(true);
        } else if (me.input.isKeyPressed('right')) {
            this.doWalk(false);
        } else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('jump')) {
			
			if(this.doJump()) {
				
            me.audio.play("jump");
			      
			}
        }
	
        // check & update player movement
        this.updateMovement();
 
 		// check for collision
    var res = me.game.collide(this);
 
    if (res) {
        // if we collide with an enemy

		
        if (res.obj.type == me.game.ENEMY_OBJECT) {
            // check if we jumped on it
            if ((res.y > 0) && ! this.jumping) {
                // bounce
				me.audio.play("stomp");
                this.forceJump();
            } else {
                // let's flicker in case we touched an enemy
                this.flicker(45);
				
				 
				 /*Para devolver al inicio
				 this.pos.x = this.startX;
				  this.pos.y = this.startY;*/
            }
        }
	
    }
	
		if (this.pos.y >= 480){

			me.game.viewport.fadeIn("#000", 500);
			this.pos.x = this.startX;
			this.pos.y = this.startY-202;
		}
	
 
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
	

});

/*----------------
 a Infobox Entity lvl02_01
------------------------ */

var finEntity = me.InvisibleEntity.extend({
	  // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
	$(document).ready(function (){
		$('#fin').css({display: 'block'}); /*url(../image/continuara.png)*/
		$('#jsapp').css({display: 'none'});
	});
	}
});

/*----------------
 a Infobox Entity lvl02_01
------------------------ */
var InfoboxEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
		
		$(document).ready(function (){
			var ocupado = 0;
			$('#info_juego p').html("<h2>MADREVIEJA VIDELES</h2>Espejo de Agua y Vaso Regulador del R&iacute;o Cauca, queda ubicada  en el corregimiento de Guabas a 5 kms del casco urbano de Guacarí&iacute;, con una extensión de 15 hect&aacute;reas,  donde se puede desarrollar turismo sostenible y recorridos por los senderos ecol&oacute;gicos que se han establecido.<br>Se practica la observaci&oacute;n de avifauna, paisajes naturales y gran variedad de especies forestales, además de pesca artesanal y deportiva.");
			
			$('#info_juego').css({
				//Aparece (ya que estaba en display none)
				display: 'block',
				opacity: 0,
			}).animate({
				//Sube 20px y pasa a ser opaco
				opacity: 1,
			}, 'normal',
			function (){
				ocupado = 0;
			});
		});
    }
 
});


/*----------------
 a Infobox Entity lvl02_01
------------------------ */
var InfoboxEntity2 = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
		
		$(document).ready(function (){
			var ocupado = 0;
			$('#info_juego p').html("<h2>HACIENDA TIERRA GRATA</h2>Por el Callej&oacute;n de Canangu&aacute; y cerca del r&iacute;o Cauca, se encuentra un bosque seco tropical de aproximadamente de 500  hectareas  clasificado como un relictus natural. Alli se observan animales t&iacute;picos de humedales como los chiguiros, cocl&iacute;es, garcetas, patos. La gran labor de reforestación de bamb&uacute;es al lado de los diques que protegen la hacienda y que en una forma pintoresca embellecen el paisaje el cual  sirve de refugio a los animales traidos de otra parte del pa&iacute;s.");
			
			$('#info_juego').css({
				//Aparece (ya que estaba en display none)
				display: 'block',
				opacity: 0,
			}).animate({
				//Sube 20px y pasa a ser opaco
				opacity: 1,
			}, 'normal',
			function (){
				ocupado = 0;
			});
		});
    }
 
});

/*----------------
 a Infobox Entity lvl01_01
------------------------ */
var InfoboxEntity3 = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
		
		$(document).ready(function (){
			var ocupado = 0;
			$('#info_juego p').html("<h2>Algo de Historia</h2>Guacar&iacute;, Municipio c&aacute;lido y cordial de bosques poblados entretejidos con cultivos de ca&ntilde;a y una hermosa vegetaci&oacute;n. Est&aacute; ubicado a tan s&oacute;lo 45 kil&oacute;metros de Cali, Nuestra Capital.<br> A base de lucha y tes&oacute;n, San Juan Bautista de Guacari ha logrado ubicarse como uno de los municipios m&aacute;s pr&oacute;speros del departamento, pues seg&uacute;n relata la historia desde su fundaci&oacute;n, esta localidad ha tenido que abrirse paso para lograr ubicarse en el sitial que hoy ocupa.");
			
			$('#info_juego').css({
				//Aparece (ya que estaba en display none)
				display: 'block',
				opacity: 0,
			}).animate({
				//Sube 20px y pasa a ser opaco
				opacity: 1,
			}, 'normal',
			function (){
				ocupado = 0;
			});
		});
    }
 
});

/*----------------
 a Infobox Entity lvl01_02
------------------------ */
var InfoboxEntity4 = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
		
		$(document).ready(function (){
			var ocupado = 0;
			$('#info_juego p').html("<h2>PARQUE PRINCIPAL SAAVEDRA GALINDO</h2>El sam&aacute;n fue sembrado por don Ram&oacute;n Becerra Vaca el 14 de junio de 1914 en homenaje al totujandi, saman gigantesco que era santuario y nido de las garzas.  El Saman  ten&iacute;a una altura de 30 mts y un di&acute;metro de 60 mts que cobijaba todo el parque, su tronco ten&iacute;a un grosor de 6 metros. El 16 de agosto de 1989 a sus 75 años cay&oacute; el testigo mudo de despertares, nostalgias, conspiraciones  y amores prohibidos de los Guacariceños");
			
			$('#info_juego').css({
				//Aparece (ya que estaba en display none)
				display: 'block',
				opacity: 0,
			}).animate({
				//Sube 20px y pasa a ser opaco
				opacity: 1,
			}, 'normal',
			function (){
				ocupado = 0;
			});
		});
    }
 
});

/*----------------
 a Coin entity
------------------------ */
var CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
		
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
		
		// do something when collide
    me.audio.play("cling");
		// give some score
    me.game.HUD.updateItemValue("score", 1);
       // make sure it cannot be collected "again"
    this.collidable = false;
    // remove it
    me.game.remove(this);
    }
 
});

/* --------------------------
an enemy Entity
------------------------ */
var EnemyEntity2 = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // define this here instead of tiled
        settings.image = "caucho_indio";
        settings.spritewidth = 52;
 
        // call the parent constructor
        this.parent(x, y, settings);
 
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;
 
        // walking & jumping speed
        this.setVelocity(1, 4);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;
 
    },
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
 
        // res.y >0 means touched by something on the bottom
        // which mean at top position for this one
        if (this.alive && (res.y > 0) && obj.falling) {
			
            this.flicker(25, function()
			{
				 this.collidable = false;
				 me.game.HUD.updateItemValue("score", 10);
   				 // remove it
   				 me.game.remove(this);
				});
				}
        
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            this.doWalk(this.walkLeft);
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
});


/* --------------------------
El Jefe Caucho Entity
------------------------ */
var EnemyEntity3 = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // define this here instead of tiled
        settings.image = "caucho_jefe";
        settings.spritewidth = 104;
		this.golpe = 0;
 
        // call the parent constructor
        this.parent(x, y, settings);
 
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;
 
        // walking & jumping speed
        this.setVelocity(1, 4);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;
 
    },

    onCollision: function(res, obj) {
 		
        if (this.alive && (res.y > 0) && obj.falling) {
            this.flicker(25, function()
			{
				
				 this.golpe = this.golpe + 1;
				 
				 me.game.HUD.updateItemValue("score", 200);
   				 // borrelo a los 5 golpes
				 if(this.golpe>=5){ 
   				 me.game.remove(this);
				 this.collidable = false;
				 }
				}); 
			
        }
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            this.doWalk(this.walkLeft);
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
});


/* --------------------------
an enemy Entity
------------------------ */
var EnemyEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // define this here instead of tiled
        settings.image = "wheelie_right";
        settings.spritewidth = 52;
 
        // call the parent constructor
        this.parent(x, y, settings);
 
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;
 
        // walking & jumping speed
        this.setVelocity(2, 4);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;
 
    },
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
 
        // res.y >0 means touched by something on the bottom
        // which mean at top position for this one
        if (this.alive && (res.y > 0) && obj.falling) {
		
            this.flicker(25, function()
			{
				 this.collidable = false;
				 me.game.HUD.updateItemValue("score", 10);
   				 // remove it
   				 me.game.remove(this);
				});
        }
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            this.doWalk(this.walkLeft);
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
});


/*-------------- 
a score HUD Item
--------------------- */
 
var ScoreObject = me.HUD_Item.extend({
    init: function(x, y) {
        // call the parent constructor
        this.parent(x, y);
        // create a font
        this.font = new me.BitmapFont("32x32_font", 32);
    },
 
    /* -----
 
    draw our score
 
    ------ */
    draw: function(context, x, y) {
        this.font.draw(context, this.value, this.pos.x + x, this.pos.y + y);
    }
 
});




