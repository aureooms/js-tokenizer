
var t = function ( name , esc , raw , umap , emap , tokens , expected ) {

} ;

var PARENTHESES_OPEN  = 0 ;
var PARENTHESES_CLOSE = 1 ;
var BRACKETS_OPEN  = 2 ;
var BRACKETS_CLOSE = 3 ;
var BRACES_OPEN  = 4 ;
var BRACES_CLOSE = 5 ;
var OPTIONAL = 6 ;
var ZEROORMORE = 8 ;
var ONEORMORE = 9 ;
var ANY = 10 ;
var OR = 11 ;


var umap = {

	"." : ANY ,
	"|" : OR ,
	"(" : PARENTHESES_OPEN  ,
	")" : PARENTHESES_CLOSE ,
	"[" : BRACKETS_OPEN  ,
	"]" : BRACKETS_CLOSE ,
	"{" : BRACES_OPEN  ,
	"}" : BRACES_CLOSE ,

} ;

var emap = {

	""

} ;

[

	[ "abcd" ]




]
