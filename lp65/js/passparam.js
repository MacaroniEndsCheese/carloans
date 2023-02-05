$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

$(window).on('load', function() {

    if ( $.urlParam('fbclid') != null && $.urlParam('fbclid') != '' ) {

        $('a[data-track]').each(function(i){

            var currHref = $(this).attr("href");

            if (currHref.match(/\?./)) {
                $(this).attr( "href",currHref+"&fbclid="+$.urlParam('fbclid') );
            } else {
                $(this).attr( "href",currHref+"?fbclid="+$.urlParam('fbclid') );
            }

        });

    }

});