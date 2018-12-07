import * as $ from 'jquery';
import 'bootstrap-progressbar/bootstrap-progressbar';

export default (function(){
    var progressbarSimple = $('.js-progressbar-simple');
    progressbarSimple.each(function () {
        var that = $(this);
        var executed = false;
        $(window).on('load', function () {

        that.waypoint(function () {
            if (!executed) {
            executed = true;
            /*progress bar*/
            that.progressbar({
                update: function (current_percentage, $this) {
                $this.find('.js-value').html(current_percentage + '%');
                }
            });
            }
        }, {
            offset: 'bottom-in-view'
            });

        });
    });
}())