

function getListSong() {
    return "23:34:20.984  INFO 7676 - [nio-8080-exec-9]       s.a.c.r.UserPlayListRestController - GET request '/morning-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - POST request '/show_admin' from User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-4]       s.a.c.r.UserPlayListRestController - GET request '/midday-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - User doesn't have ADMIN role\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-4]       s.a.c.r.UserPlayListRestController - GET request '/midday-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - User doesn't have ADMIN role\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - GET request '/get/all-genre' for User = user\n" +
        "23:34:20.990  INFO 7676 - [nio-8080-exec-7]       s.a.c.r.UserPlayListRestController - GET request '/evening-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:21.075  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - Result has 5 lines\n" +
        "23:34:21.951  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - POST request '/show_admin' from User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-4]       s.a.c.r.UserPlayListRestController - GET request '/midday-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - User doesn't have ADMIN role\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - GET request '/get/all-genre' for User = user\n" +
        "23:34:20.990  INFO 7676 - [nio-8080-exec-7]       s.a.c.r.UserPlayListRestController - GET request '/evening-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:21.075  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - Result has 5 lines\n" +
        "23:34:21.951  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - POST request '/show_admin' from User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-4]       s.a.c.r.UserPlayListRestController - GET request '/midday-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - User doesn't have ADMIN role\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - GET request '/get/all-genre' for User = user\n" +
        "23:34:20.990  INFO 7676 - [nio-8080-exec-7]       s.a.c.r.UserPlayListRestController - GET request '/evening-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:21.075  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - Result has 5 lines\n" +
        "23:34:21.951  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - POST request '/show_admin' from User = user\n" +
        "23:34:20.985  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - GET request '/get/all-genre' for User = user\n" +
        "23:34:20.990  INFO 7676 - [nio-8080-exec-7]       s.a.c.r.UserPlayListRestController - GET request '/evening-playlist/get/all-song-compilation' for User = user\n" +
        "23:34:21.075  INFO 7676 - [nio-8080-exec-1]          s.a.c.r.UserGenreRestController - Result has 5 lines\n" +
        "23:34:21.951  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - POST request '/show_admin' from User = user\n" +
        "23:34:21.951  INFO 7676 - [nio-8080-exec-3]  s.a.c.restController.UserRestController - User doesn't have ADMIN role";
}

function getTopSongs() {
    return '<div class="container">\n' +
        '    <div class="row">\n' +
        '        <div class="js-textSongNameDelete">\n' +
        '            <div>\n' +
        '                <h4>топ песен за:</h4>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="col-md-5 ">\n' +
        '            <div class="layer">\n' +
        '                <div class="js-textSongDelete">\n' +
        '                    <div>\n' +
        '                        <h5>'+getListSong()+'</h5>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>    <!--     текст   песни-->\n' +
        '        <div class="col-md-2">\n' +
        '            <div class="layer">\n' +
        '                <div class="btn-group-vertical">\n' +
        '                    <div aria-label="Vertical button group" class="btn-group-vertical" role="group">\n' +
        '                        <button class="btn btn-light js-byDay js-numberOfList" value="1" type="button">топ за день</button>\n' +
        '                        <button class="btn btn-light js-byWeek js-numberOfList" value="2" type="button">топ за неделю </button>\n' +
        '                        <button class="btn btn-light js-byMonth js-numberOfList" value="3" type="button">топ за месяц </button>\n' +
        '                        <button class="btn btn-light js-byYear js-numberOfList" value="4" type="button">топ за год</button>\n' +
        '                    </div><!--        кнопки для выбора периода-->\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div><!--        top songs-->';
}