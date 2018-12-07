import * as $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

export default (function(){
  var jscr1 = $('.js-scrollbar1');
  if(jscr1[0]) {
    const ps1 = new PerfectScrollbar('.js-scrollbar1');      
  }

  var jscr2 = $('.js-scrollbar2');
  if (jscr2[0]) {
    const ps2 = new PerfectScrollbar('.js-scrollbar2');
  }
}())