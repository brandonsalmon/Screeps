module.exports = function (creep) {

    if (creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find(FIND_SOURCES);
        
        creep.memory.source = creep.memory.source || 0;
        if (creep.moveTo(sources[creep.memory.source]) == ERR_NO_PATH & creep.harvest(sources[creep.memory.source]) == ERR_NOT_IN_RANGE) {
            creep.memory.source = getRandomInt(0, sources.length);
        }
    }
    else {
        if (creep.transferEnergy(Game.spawns.SpawnGato) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns.SpawnGato);
        }
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}