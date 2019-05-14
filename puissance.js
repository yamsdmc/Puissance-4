(function ($) {
    $.fn.puissance = function (nb_y, nb_x) {

        let currentPlayer = 1;
        let player = "";
        let scoreRed = 0;
        let scoreYellow = 0;
        let win = new Audio('win.mp3');

        $('#submit').click(function () {
            const nb_y = $('#nb_y').val();
            const nb_x = $('#nb_x').val();

            if (nb_x > 3 && nb_y > 3) {
                $('table').remove();
                $("body").puissance(nb_y, nb_x);
                $('#message_error').css('visibility', 'hidden');
            } else {
                $('#message_error').css('visibility', 'visible');
            }
            $('#restart').css('visibility', 'visible');
        });

        $('#restart').click(function(){
            $('td.red').removeClass('red');
            $('td.yellow').removeClass('yellow');
            $('td').css('pointer-events', '');
        });

        $("body").append("<table></table>");

        for (var i = 0; i < nb_y; i++) {
            $("table").append("<tr id='" + i + "tr'></tr>");
            for (var j = 0; j < nb_x; j++) {
                let td = $("<td></td>").attr("data-position", i + "-" + j);
                $("#" + i + "tr").append(td);
            }
        }
        $('td').click(function () {
            const position = $(this).data('position');
            const [y, x] = position.split('-').map(v => parseInt(v));
            let maxY = parseInt(nb_y - 1);
            let son = new Audio('2781.mp3');

            while (maxY >= 0) {
                if ($("td[data-position='" + maxY + "-" + x + "'").css('background-color') == 'rgb(224, 224, 224)' || $("td[data-position='" + maxY + "-" + x + "'").css('background-color') == 'rgb(186, 186, 186)') {
                    if (currentPlayer == 1) {
                        $("td[data-position='" + maxY + "-" + x + "'").addClass('red');
                        currentPlayer = 2;
                        player = "yellow";
                        checkWinX(maxY, x);
                        checkWinY(maxY, x);
                        checkWinDiagonalRight(maxY, x);
                        checkWinDiagonalLeft(maxY, x);
                        son.play();
                        $('#enCours').css('color', 'yellow');
                    } else {
                        $("td[data-position='" + maxY + "-" + x + "'").addClass('yellow');
                        currentPlayer = 1;
                        player = "red";
                        checkWinX(maxY, x);
                        checkWinY(maxY, x);
                        checkWinDiagonalRight(maxY, x);
                        checkWinDiagonalLeft(maxY, x);
                        son.play();
                        $('#enCours').css('color', 'red');
                    }
                    $('#enCours').text(`Au tour de ${player} de jouer !`);
                    break;
                } else {
                    --maxY;

                }
            }
        });



        function checkWinX(maxY, x) {
            let countRed = 0;
            let countYellow = 0;
            let nbr = 0;
            let red = "red";
            let yellow = "yellow";
            x = x + 3;
            while (nbr <= 7) {

                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('red')) {
                    countRed++;
                    console.log(countRed);
                    if (countRed == 4) {
                        win.play();
                        alert(`Bravo ! ${red}`);
                        scoreRed++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreRed').text(`${scoreRed}`);
                        return;
                    }
                } else {
                    countRed = 0;
                }

                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('yellow')) {
                    countYellow++;
                    console.log(countYellow);
                    if (countYellow == 4) {
                        win.play();
                        alert(`Bravo ! ${yellow}`);
                        scoreYellow++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreYellow').text(`${scoreYellow}`);
                        return;
                    }
                } else {
                    countYellow = 0;
                }
                x--;
                nbr++;
            }
        }
        function checkWinY(maxY, x) {
            let countRed = 0;
            let countYellow = 0;
            let nbr = 0;
            let red = "red";
            let yellow = "yellow";
            while (nbr <= 3) {
                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('red')) {
                    countRed++;
                    console.log(countRed);
                    if (countRed == 4) {
                        win.play();
                        alert(`Bravo ! ${red}`);
                        scoreRed++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreRed').text(`${scoreRed}`);
                        return;
                    }
                } else {
                    countRed = 0;
                }
                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('yellow')) {
                    countYellow++;
                    console.log(countYellow);
                    if (countYellow == 4) {
                        win.play();
                        alert(`Bravo ! ${yellow}`);
                        scoreYellow++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreYellow').text(`${scoreYellow}`);
                        return;
                    }
                } else {
                    countYellow = 0;
                }
                maxY++;
                nbr++;
            }
        }
        function checkWinDiagonalRight(maxY, x) {
            let countRed = 0;
            let countYellow = 0;
            let nbr = 0;
            let red = "red";
            let yellow = "yellow";
            x = x - 3;
            maxY = maxY + 3;
            while (nbr <= 7) {
                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('red')) {
                    countRed++;
                    console.log(countRed);
                    if (countRed == 4) {
                        win.play();
                        alert(`Bravo ! ${red}`);
                        scoreRed++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreRed').text(`${scoreRed}`);
                        return;
                    }
                } else {
                    countRed = 0;
                }
                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('yellow')) {
                    countYellow++;
                    console.log(countYellow);
                    if (countYellow == 4) {
                        win.play();
                        alert(`Bravo ! ${yellow}`);
                        scoreYellow++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreYellow').text(`${scoreYellow}`);
                        return;
                    }
                } else {
                    countYellow = 0;
                }
                ++x;
                maxY--;
                nbr++;
            }
        }
        function checkWinDiagonalLeft(maxY, x) {
            let countRed = 0;
            let countYellow = 0;
            let nbr = 0;
            let red = "red";
            let yellow = "yellow";
            x = x + 3;
            maxY = maxY + 3;
            while (nbr <= 7) {
                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('red')) {
                    countRed++;
                    console.log(countRed);
                    if (countRed == 4) {
                        win.play();
                        alert(`Bravo ! ${red}`);
                        scoreRed++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreRed').text(`${scoreRed}`);
                        return;
                    }
                } else {
                    countRed = 0;
                }
                if ($("td[data-position='" + maxY + "-" + x + "'").hasClass('yellow')) {
                    countYellow++;
                    console.log(countYellow);
                    if (countYellow == 4) {
                        win.play();
                        alert(`Bravo ! ${yellow}`);
                        scoreYellow++;
                        $('td').css('pointer-events', 'none');
                        $('#scoreYellow').text(`${scoreYellow}`);
                        return;
                    }
                } else {
                    countYellow = 0;
                }
                --x;
                maxY--;
                nbr++;
            }
        }
    };
})(jQuery);
$("body").puissance();

