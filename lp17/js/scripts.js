$(document).ready(function () {

    var fieldsets = $('#shortForm .formPart');

    var formProgressBar = $('#formProgress .progressBar');
    var formProgressNumber = $('#formProgress .progressBar .progressNumber');

    var activeStep = 0;

    $(formProgressBar).css('width', (activeStep + 1) / $(fieldsets).length * 100 + '%');
    $(formProgressNumber).text(Math.trunc((activeStep + 1) / $(fieldsets).length * 100) + '%');

    $(fieldsets).each(function (i) {

        $(this).css('z-index', 10 - i);

        if (i != 0) {
            $(this).css('opacity', 0);
        }

    })


    $('#shortForm .formPart button').each(function (j) {

        $(this).click(function (e) {

            e.preventDefault();

            activeStep++;

            if (activeStep < $(fieldsets).length) {

                $(formProgressBar).css('width', (activeStep + 1) / $(fieldsets).length * 100 + '%');
                $(formProgressNumber).text(Math.trunc((activeStep + 1) / $(fieldsets).length * 100) + '%');

                $(fieldsets[activeStep - 1]).css({
                    'opacity': 0,
                    'z-index': parseInt($(fieldsets[activeStep - 1]).css('z-index')) - (j + 1),
                    'transform': 'translateX(-' + (activeStep - 1) * 100 + '%)'
                });


                setTimeout(function () {
                    $(fieldsets[activeStep]).css({
                        'opacity': 1,
                        'z-index': parseInt($(fieldsets[activeStep]).css('z-index')) + (j + 1),
                        'transform': 'translateX(-' + (activeStep) * 100 + '%)'
                    });
                }, 250)

            }


        })

    })

})