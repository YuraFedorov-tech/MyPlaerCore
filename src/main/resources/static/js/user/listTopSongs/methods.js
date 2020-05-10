var numberOfList;
var item;
var s;
$(document).ready(function () {
    alert(jQuery.fn.jquery);

    $(document).on('click touchstart', '.js-numberOfList', function () {
        $(this).css({border: '2px solid red'});
        numberOfListIt = $(this).val();
        alert(numberOfList);
        item = this;
        getListSongAjax(numberOfListIt);
    });

    function getBtn() {
        return "";
    }

    function getStringList(data) {
        console.log(data);
        var ans = "";
        $.each(data, function (index, value) {
            ans += '<div>' + value.name + '  ' + value.authorName + '  ' + value.amount +'  '+getBtn()+ '  </div>';
        });
        return ans;
    }

    function borderedBtn() {
        $('.js-numberOfList').css({border: 'none'});
        $(item).css({border: '2px solid blue'});

    }

    function insertListOfTopSongs(data) {
        borderedBtn();
        $('.js-textSongDelete div').remove();
        var insert = getStringList(data);
        $('#js-textSongDelete').append(insert);
    }

    function getListSongAjax(numberOfListIt) {
        $.ajax({
            contentType: "application/json;",
            url: "/api/music/getTopSongs/" + numberOfListIt,
            type: "POST",
            //      data: JSON.stringify(newUser),
            //       async: true,
            cache: false,
            success: function (data) {
                alert(data);
                console.log(data);
                insertListOfTopSongs(data);
                numberOfList = numberOfListIt;
            },
            error: function () {
                alert("Не удалось получить записи песен");
            }
        });
    }
});
