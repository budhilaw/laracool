import * as $ from 'jquery';
import 'select2/dist/js/select2';

export default (function(){
    $(".js-select2").each(function () {
        $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
        });
    });
}())