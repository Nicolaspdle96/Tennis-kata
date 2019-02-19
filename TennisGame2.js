var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.isTie(this.P1point,this.P2point)) {
        if (this.isLove(this.P1point))
            score = "Love";
        if (this.isFifteen(this.P1point))
            score = "Fifteen";
        if (this.isThirty(this.P1point))
            score = "Thirty";
        score += "-All";
    }

    if (this.isDeuce(this.P1point,this.P2point))
        score = "Deuce";

    if (this.P1point > 0 && this.P2point === 0) {
        if (this.isFifteen(this.P1point))
            this.P1res = "Fifteen";
        if (this.isThirty(this.P1point))
            this.P1res = "Thirty";
        if (this.isForty(this.P1point))
            this.P1res = "Forty";

        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > 0 && this.P1point === 0) {
        if (this.isFifteen(this.P2point))
            this.P2res = "Fifteen";
        if (this.isThirty(this.P2point))
            this.P2res = "Thirty";
        if (this.isForty(this.P2point))
            this.P2res = "Forty";

        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
        if (this.isThirty(this.P1point))
            this.P1res = "Thirty";
        if (this.isForty(this.P1point))
            this.P1res = "Forty";
        if (this.isFifteen(this.P2point))
            this.P2res = "Fifteen";
        if (this.isThirty(this.P2point))
            this.P2res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (this.isThirty(this.P2point))
            this.P2res = "Thirty";
        if (this.isForty(this.P2point))
            this.P2res = "Forty";
        if (this.isFifteen(this.P1point))
            this.P1res = "Fifteen";
        if (this.isThirty(this.P1point))
            this.P1res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    score += this.whoHasAdvantage(this.P1point,this.P2point);

    score = this.whosTheWinner(this.P1point,this.P2point, score);

    return score;
};

TennisGame2.prototype.isDeuce = function(player1Point, player2Point){
    if (player1Point === player2Point && player1Point > 2)
        return true;
    else
        return false;
};

TennisGame2.prototype.isTie = function(player1Point, player2Point) {
    if (player1Point === player2Point && player1Point < 3)
        return true;
    else
        return false;
};

TennisGame2.prototype.isLove = function(point) {
    if (point === 0)
        return true;
    else
        return false;
};

TennisGame2.prototype.isFifteen = function(point) {
    if (point === 1)
        return true;
    else
        return false;
};

TennisGame2.prototype.isThirty = function(point) {
    if (point === 2)
        return true;
    else
        return false;
};

TennisGame2.prototype.isForty = function(point) {
    if (point === 3)
        return true;
    else
        return false;
};

TennisGame2.prototype.whoHasAdvantage = function(player1Point, player2Point) {
    if (player1Point > player2Point && player2Point >= 3) {
        return 'Advantage player1';
    }
    if (player2Point > player1Point && player1Point >= 3) {
        return 'Advantage player2';
    }
    return '';
};

TennisGame2.prototype.whosTheWinner = function(player1Point, player2Point, score) {
    if (player1Point >= 4 && player2Point >= 0 && (player1Point - player2Point) >= 2) {
        return 'Win for player1';
    }
    if (player2Point >= 4 && player1Point >= 0 && (player2Point - player1Point) >= 2) {
        return 'Win for player2';
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
