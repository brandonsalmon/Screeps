var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var boss = require('room');
var spawner = require('spawner');

module.exports.loop = function () {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester') {
            harvester(creep);
        }
        if (creep.memory.role == 'guard') {
            guard(creep);
        }
        if (creep.memory.role == 'builder') {
            builder(creep);
        }
        if (creep.memory.role == 'boss') {
            boss(creep);
        }
    }
    for (var name in Game.spawns) {
        var spawn = Game.spawns[name];
        spawner(spawn);
    }
}