/**
 * Created by Konstantin on 17.05.2017.
 */

var $ = require('jquery');
var str = require('./constant');
require('./less');

var App = function() {
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Heading</h3></div>');
};

var app = new App();
app.get = function() {};
