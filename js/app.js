$(document).ready(function(){$("body").scrollspy({target:".navbar"})});$("#tabs a").click(function(e){e.preventDefault();$(this).tab("show")});$(document).ready(function(){responsive_resize()});$(window).resize(function(){responsive_resize()});function responsive_resize(){var current_width=$(window).width();if(current_width>=481)$("img.right").attr("data-toggle","modal");else if(current_width<481)$("img.right").removeAttr("data-toggle","modal")}$(document).ready(function(){checkWidth(true);$(window).resize(function(){checkWidth(false)})});
$(document).ready(function(){$(function(){$("#resume-content").accordion({collapsible:false,header:"h3",active:0,icons:false,heightStyle:"content",animate:200})})});