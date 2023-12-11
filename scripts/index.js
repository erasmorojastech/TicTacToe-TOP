const game = (function () {
    const Gameboard = (function () {
        const board = [];

        const playRound = function (player, position) {
            board[position] = player.marker;
        }

        const checkWin = function (player) {
            let win = false;

            if (
                board[0] === player.marker && board[1] === player.marker && board[2] === player.marker ||
                board[3] === player.marker && board[4] === player.marker && board[5] === player.marker ||
                board[6] === player.marker && board[7] === player.marker && board[8] === player.marker ||
                board[0] === player.marker && board[3] === player.marker && board[6] === player.marker ||
                board[1] === player.marker && board[4] === player.marker && board[7] === player.marker ||
                board[2] === player.marker && board[5] === player.marker && board[8] === player.marker ||
                board[0] === player.marker && board[4] === player.marker && board[8] === player.marker ||
                board[2] === player.marker && board[4] === player.marker && board[6] === player.marker
            ) {
                win = true;
            }
        }

        return { board, playRound, checkWin };
    })();

})();
