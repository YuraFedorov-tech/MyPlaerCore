
$(document).ready(function () {
    $(document).on('click touchstart', '#js-modal', function () {
        alert('btnModal');
     //   let q=$(this).getAttribute(data-idsong);
        $(this).css({border: '2px solid blue'});
       let item=this;


        const idEdit =   $(this).val();
        alert(numberOfList);
        alert(idEdit);

        $.ajax({
            contentType: "application/json;",
            url: "/api/music/getTopSongs/" + sas,
            type: "POST",
            //      data: JSON.stringify(newUser),
            //       async: true,
            cache: false,
            success: function (data) {
                alert(data);
                console.log(data);
                insertListOfTopSongs(data);
                //  numberOfList = numberOfListIt;
            },
            error: function () {
                alert("Не удалось получить записи песен");
            }
        });



    });

});