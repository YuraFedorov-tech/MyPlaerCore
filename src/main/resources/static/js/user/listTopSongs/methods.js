var numberOfList;
$(document).ready(function () {
    alert(jQuery.fn.jquery);

    $(document).on('click touchstart', '.js-numberOfList', function () {
        $(this).css({border: '2px solid red'});
        numberOfListIt = $(this).val();
        console.log(numberOfListIt);
        getListSongAjax(numberOfListIt);
    });

});




function getListSongAjax(numberOfListIt) {
    $.ajax({
        contentType: "application/json;",
        url: "/api/v1/getTopSongs/" + numberOfListIt,
        type: "POST",
  //      data: JSON.stringify(newUser),
 //       async: true,
        cache: false,
        success: function (data) {
            alert("data");
            console.log(numberOfListIt);
            insertListOfTopSongs();
            numberOfList=  numberOfListIt;
        },
        error: function () {
            alert("Не удалось получить записи песен");
        }
    });

    function insertListOfTopSongs() {

    }
}