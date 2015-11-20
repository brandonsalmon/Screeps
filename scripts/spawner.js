module.exports = function (spawner) {
    if (spawner.energy >= 200) {
        // Count creeps
        var counts = { total: 0 };
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];

            counts.total++;
            if (counts[creep.memory.role]) {
                counts[creep.memory.role]++;
            } else {
                counts[creep.memory.role] = 1;
            }
        }

        var role = 'harvester';
        var body = [WORK, CARRY, MOVE];
        if (!counts.harvester) {
            role = 'harvester';
        } else if (!counts.guard || counts.total / 5 > counts.guard) {
            role = 'guard';
            body = [RANGED_ATTACK, MOVE];
        } else if (Math.floor(counts.total / 5) > (counts.builder || 0)) {
            role = 'builder';
        } else if (!counts.boss && counts.total >= 10) {
            role = 'boss';
        }
        
        spawner.createCreep(body, null, { role: role });
    }
}