module.exports = function (creep) {
    if (creep.carry.energy == 0) {
        if (Game.spawns.SpawnGato.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns.SpawnGato);
        }
    }
    else {
        if (creep.room.controller) {
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
}