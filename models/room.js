const Room = function(area) {
    this.area = area;
    this.painted = 0;
};

Room.prototype.getPainted = function () {
    return this.painted++;
}







module.exports = Room;