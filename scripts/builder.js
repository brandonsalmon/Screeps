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
        } else {
            for(var name in Game.creeps){
                var testCreep = Game.creeps[name];
                if (testCreep.memory.role == 'harvester' || testCreep.memory.role == 'boss'){
                    creep.room.createConstructionSite(testCreep.pos.x, testCreep.pos.y, STRUCTURE_ROAD);
                }
            }
        }
    }
}