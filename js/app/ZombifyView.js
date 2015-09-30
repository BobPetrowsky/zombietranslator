define(['jquery', 'Zombify'], function($, Zombify) {

    var ZombifyView = function() {
        this.zombify = new Zombify();
        this.zombifyView;
        this.english();

    };

    ZombifyView.prototype.english = function() {
        var e = this;
        $('#english').on("keyup", function(event){
            e.zombifyView();
        });
    };

    ZombifyView.prototype.zombifyView = function() {
        $('#zombie').val(this.zombify.zombify($('#english').val()));
        console.log('zombifyView');
    };

    return ZombifyView;

});
