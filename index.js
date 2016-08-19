AFRAME.registerComponent('sprite', {
    
    schema: {
        src: {
            default: ''
        },
        resize:{
            default: '1 1 1'
        }
    },


    init: function()
    {
        this.textureLoader = new THREE.TextureLoader();
    },


    play: function()
    {
        console.log( this.data.src );

        this.map = this.textureLoader.load(this.data.src);

        this.material = new THREE.SpriteMaterial({
            map: this.map
        });

        this.sprite = new THREE.Sprite(this.material);

        resizeData = this.data.resize.split(' ');
        this.sprite.scale.set( resizeData[0], resizeData[1], resizeData[2] );

        this.el.setObject3D('mesh', this.sprite);
    },


    remove: function() {
        console.log('remove sprite');
        if (this.mesh) this.el.removeObject3D('mesh');
    }

});

AFRAME.registerPrimitive('a-sprite', {
    defaultComponents: {
        sprite: {}
    },
    mappings: {
        src: 'sprite.src',
        resize: 'sprite.resize'
    }
});
