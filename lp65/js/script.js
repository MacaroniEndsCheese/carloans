$(document).ready(function () {

  var currDate = new Date();
  var currYear = currDate.getFullYear();
  var footerYearWrap = $('#footerYear');

  $( footerYearWrap ).html(currYear);

  (function initStepbox() {

    var 
    $stepBox = $(".stepbox"),
    $stepBoxStep = $stepBox.children(".step");

    $stepBoxStep.find(".next").click(function (e) {
      e.preventDefault();
      changeStep();
    });

    function changeStep() {
      var $currentStep = $stepBoxStep.filter('.current');
      $currentStep.removeClass('current');
      $currentStep.next().addClass('current');
      if ( $currentStep.next().is('.step-loader') ) {
        setTimeout(function(){
          changeStep();
        }, 750)
      }
      $('.progress .bar').animate({
        width: '+=30%'
      });
    }

    function prevStep() {
      var $currentStep = $stepBoxStep.filter('.current');
      $currentStep.removeClass('current');
      $currentStep.prev().addClass('current');
      $('.progress .bar').animate({
        width: '-=30%'
      });
    }

    $('.btn-back').on('click', function () {
      prevStep();
    });

  })();

});
