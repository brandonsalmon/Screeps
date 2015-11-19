module.exports = function (spawner) {
    if (spawner.energy == spawner.energyCapacity) {
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
        } else if (!counts.guard || counts.total / 4 > counts.guard) {
            role = 'guard';
            body = [ATTACK, TOUGH, MOVE];
        } else if (!counts.builder) {
            role = 'builder';
        } else if (!counts.boss) {
            role = 'boss';
        }
        
        spawner.createCreep(body, role + counts.total, { role: role });
    }
}