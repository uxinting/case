$(function(){
    $('<div id="themes" class="btn-group pull-right">\
        <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">\
        Themes <span class="caret"></span>\
        </button>\
        <ul class="dropdown-menu" role="menu">\
            <li><a href="#">Classic</a></li>\
            <li><a href="#">Warm</a></li>\
            <li><a href="#">Health</a></li>\
            <li><a href="#">Courage</a></li>\
        </ul>\
    </div>').appendTo('body');
    
    $('#themes>ul>li').click(function(e){
        var theme = $(e.target).text().toLowerCase();
        less.modifyVars({
            '@theme': theme
        });
        $.cookie('theme', theme);
    });
    
    $('.loading').fadeOut(600);
    less.modifyVars({
        '@theme': $.cookie('theme')
    });
});