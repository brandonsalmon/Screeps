module.exports = function (creep) {
    var targets = creep.room.find(FIND_HOSTILE_CREEPS);
    if (targets.length) {
        console.log(targets[0]);
        if (creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);
        }
    } else {
        var direction = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT][getRandomInt(0, 7)]
        creep.move(direction);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}