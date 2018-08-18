$("#screen").focus();
$("#screen").keypress(function(e){
      if(e.which===13){
        $("#equals").click();
        e.preventDefault();
      }
    });
