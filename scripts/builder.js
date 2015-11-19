module.exports = function (creep) {
    if (creep.carry.energy == 0) {
        if (Game.spawns.SpawnGato.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns.SpawnGato);
        }
    }
    else {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (targets.length) {
            if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
}