"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor() {
        this.board = [];
        this.populateBoard();
    }
    populateBoard() {
        for (let x = 0; x < 8; x++) {
            this.board[x] = [];
            for (let y = 0; y < 8; y++) {
                let innerItem = 0;
                switch (x) {
                    case 0:
                    case 2:
                        if (y % 2)
                            innerItem = 1;
                        break;
                    case 1:
                        if (!(y % 2))
                            innerItem = 1;
                        break;
                    case 5:
                    case 7:
                        if (!(y % 2))
                            innerItem = 2;
                        break;
                    case 6:
                        if (y % 2)
                            innerItem = 2;
                        break;
                    default:
                        break;
                }
                this.board[x][y] = {
                    active: false,
                    target: false,
                    type: innerItem,
                    king: false
                };
            }
        }
    }
    getBoard() {
        return this.board;
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map