import * as $ from 'jquery';

export default (function(){
    // tooltip
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });
});