/*jshint esversion: 6 */

const { SwgohHelpApi, SquadUnitTypeEnum, ModSetEnum, ModUnitStatEnum, ModSlotEnum, CollectionsEnum } = require('../swgohhelp-api');

const assert = require('assert');

describe('Static methods', () => {
    it ('loadAcronyms', () => {
        /** @type {Map<string, string>} */
        const acronyms = SwgohHelpApi.loadAcronyms('./resources/toon_acronyms.json');

        assert.strictEqual(typeof acronyms, "object");
        assert.strictEqual(acronyms.size > 0, true);
    });

    it ('getGameData', () => {
        const gameData = SwgohHelpApi.getGameData();

        assert.strictEqual(typeof gameData, "object");
    });

    it ('getZetaCount', () => {
        const player = require('./player.973246862.json');
        const unit = SwgohHelpApi.getPlayerUnitFromUnits(player, 'UNIT_VADER_NAME');

        assert.strictEqual(SwgohHelpApi.getZetaCount(unit), 3);
    });

    it ('getZetas', () => {
        const player = require('./player.973246862.json');
        const unit = SwgohHelpApi.getPlayerUnitFromUnits(player, 'UNIT_VADER_NAME');

        const zetaSkills = [
            {
                id: 'leaderskill_VADER',
                isZeta: true,
                nameKey: 'LEADERABILITY_VADER_NAME',
                tier: 8,
                tiers: 8
            },
            {
                id: 'uniqueskill_VADER01',
                isZeta: true,
                nameKey: 'UNIQUEABILITY_VADER01_NAME_V2',
                tier: 8,
                tiers: 8
            },
            {
                id: 'specialskill_VADER03',
                isZeta: true,
                nameKey: 'SPECIALABILITY_VADER03_NAME',
                tier: 8,
                tiers: 8
            }
        ];

        assert.notStrictEqual(SwgohHelpApi.getZetas(unit), zetaSkills);
    });

    it ('getPlayerUnitFromUnits', () => {
        const player = require('./player.973246862.json');

        assert.strictEqual(SwgohHelpApi.getPlayerUnitFromUnits(player, 'DUMMY'), undefined);
        assert.strictEqual(SwgohHelpApi.getPlayerUnitFromUnits(player, 'UNIT_VADER_NAME').defId, 'VADER');
    });

    it ('getPlayerStatsSummary', () => {
        const player = require('./player.973246862.json');

        const stats = SwgohHelpApi.getPlayerStatsSummary(player);

        // counts
        assert.strictEqual(stats.chars.count + stats.ships.count, player.roster.length);
        assert.strictEqual(stats.chars.count, 190);
        assert.strictEqual(stats.ships.count, 50);

        // GLs
        assert.strictEqual(stats.chars.galacticLegendCount, 1);

        // zetas
        assert.strictEqual(stats.chars.zetas, 105);

        // levels
        assert.strictEqual(stats.chars.levels.reduce((a, b) => a + b), stats.chars.count);
        assert.strictEqual(stats.ships.levels.reduce((a, b) => a + b), stats.ships.count);

        // rarities
        assert.strictEqual(stats.chars.rarities.reduce((a, b) => a + b), stats.chars.count);
        assert.strictEqual(stats.ships.rarities.reduce((a, b) => a + b), stats.ships.count);

        // gear
        assert.strictEqual(stats.chars.gear.reduce((a, b) => a + b), stats.chars.count);
    });

    it ('isGL', () => {
        const player = require('./player.973246862.json');

        assert.strictEqual(SwgohHelpApi.isGL(SwgohHelpApi.getPlayerUnitFromUnits(player, 'UNIT_VADER_NAME')), false);
        assert.strictEqual(SwgohHelpApi.isGL(SwgohHelpApi.getPlayerUnitFromUnits(player, 'UNIT_SUPREMELEADERKYLOREN_NAME')), true);
    });

    it ('getGuildStats', () => {
        const guild = require('./guild.G1593911327.json');

        const stats = SwgohHelpApi.getGuildStats(guild);

        assert.strictEqual(stats.gpChar, guild.roster.map(player => player.gpChar).reduce((a, b) => a + b));
        assert.strictEqual(stats.gpShip, guild.roster.map(player => player.gpShip).reduce((a, b) => a + b));
    });

    it ('getGuildLeader', () => {
        const guild = require('./guild.G1593911327.json');

        const leader = SwgohHelpApi.getGuildLeader(guild);

        assert.strictEqual(leader.allyCode, 482472361);
        assert.strictEqual(leader.name, 'Land of Car Nissan');
    });

    it ('getGuildOfficers', () => {
        const guild = require('./guild.G1593911327.json');

        const officers = SwgohHelpApi.getGuildOfficers(guild);
        const allyCodes = officers.map(player => player.allyCode);

        assert.strictEqual(officers.length, 4);
        assert.notStrictEqual(allyCodes, [ 973246862, 428665619, 414348736, 997861347 ]);
    });

    it('getSquadUnitTypeString', () => {
        assert.strictEqual(SwgohHelpApi.getSquadUnitTypeString(SquadUnitTypeEnum.SquadUnitNormal), '');
        assert.strictEqual(SwgohHelpApi.getSquadUnitTypeString(SquadUnitTypeEnum.SquadUnitLeader), 'Leader');
        assert.strictEqual(SwgohHelpApi.getSquadUnitTypeString(SquadUnitTypeEnum.SquadUnitCapitalShip), 'Capital Ship');
        assert.strictEqual(SwgohHelpApi.getSquadUnitTypeString(SquadUnitTypeEnum.SquadUnitReinforcement), 'Reinforcement');
        assert.strictEqual(SwgohHelpApi.getSquadUnitTypeString(99), 'Unknown unit type: 99');
    });

    it('getModSetString', () => {
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetCritChance), 'Critical Chance');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetCritDamage), 'Critical Damage');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetDefense), 'Defense');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetHealth), 'Health');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetOffense), 'Offense');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetPotency), 'Potency');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetSpeed), 'Speed');
        assert.strictEqual(SwgohHelpApi.getModSetString(ModSetEnum.ModSetTenacity), 'Tenacity');
        assert.strictEqual(SwgohHelpApi.getModSetString(99), 'Unknown mod set: 99');
    });

    it('getModSlotString', () => {
        assert.strictEqual(SwgohHelpApi.getModSlotString(ModSlotEnum.ModSlotArrow), 'Arrow');
        assert.strictEqual(SwgohHelpApi.getModSlotString(ModSlotEnum.ModSlotSquare), 'Square');
        assert.strictEqual(SwgohHelpApi.getModSlotString(ModSlotEnum.ModSlotCircle), 'Circle');
        assert.strictEqual(SwgohHelpApi.getModSlotString(ModSlotEnum.ModSlotCross), 'Cross');
        assert.strictEqual(SwgohHelpApi.getModSlotString(ModSlotEnum.ModSlotDiamond), 'Diamond');
        assert.strictEqual(SwgohHelpApi.getModSlotString(ModSlotEnum.ModSlotArrow), 'Arrow');
        assert.strictEqual(SwgohHelpApi.getModSlotString(99), 'Unknown mod slot: 99');
    });

    it('getModUnitStatString', () =>  {
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatHealth), 'Health');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatMaxHealthPercentAdditive), '% Health');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatMaxShield), 'Protection');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatMaxShieldPercentAdditive), '% Protection');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatOffense), 'Offense');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatOffensePercentAdditive), '% Offense');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatDefense), 'Defense');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatDefensePercentAdditive), '% Defense');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatCriticalDamage), '% Crit Damage');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatCriticalChancePercentAdditive), '% Crit Chance');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatSpeed), 'Speed');
        assert.strictEqual(SwgohHelpApi.getModUnitStatString(ModUnitStatEnum.StatSpeedPercentAdditive), '% Speed');
    });
});

describe('Base methods', () => {
    it('Constructor', () => {
        const config = require('../config.json');
        const api = new SwgohHelpApi(config.user, config.password);
    });
});

describe ('API foundation', () => {
    const config = require('../config.json');
    const api = new SwgohHelpApi(config.user, config.password);

    it('fetchRetry(GET)', () => {
        const reply = api.fetchRetry('GET', 'https://postman-echo.com/get?foo1=bar1&foo2=bar2');

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.args.foo1, 'bar1');
        assert.strictEqual(jsonReply.args.foo2, 'bar2');
    });

    it('fetchRetry(POST)', () => {
        const reply = api.fetchRetry('POST', 'https://postman-echo.com/post?hand=wave');

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.args.hand, 'wave');
    });

    it('fetchRetry(POST payload)', () => {
       const reply = api.fetchRetry('POST', 'https://postman-echo.com/post', { id: 10, name: 'John' }, 3);

        const jsonReply = JSON.parse(reply.responseText);

        assert.strictEqual(jsonReply.data.id, 10);
        assert.strictEqual(jsonReply.data.name, 'John');
    });
});

describe('Local cache', () => {
    // default api object
    const config = require('../config.json');
    const api = new SwgohHelpApi(config.user, config.password);

    it('fetchUnits', () => {
        const units = api.fetchUnits();
    
        assert.strictEqual(units.size > 0, true);
        assert.strictEqual(units.has('VADER'), true);
        assert.strictEqual(units.get('VADER').baseId, 'VADER');
    });

    it('Build cache', () => {
        const config = require('../config.json');
        const api = new SwgohHelpApi(config.user, config.password);

        api.buildCache();

        assert.strictEqual(api.cache.units.size > 0, true);

        // force refresh
        const old = api.cache.updated;

        api.cache.updated = new Date(2010, 1, 1, 0, 0, 0, 0);
        api.buildCache();

        assert.strictEqual(api.cache.updated > old, true);
    });

    it('getUnit', () => {
        assert.strictEqual(api.getUnit('DUMMY'), undefined);
        assert.strictEqual(api.getUnit('VADER').baseId, 'VADER');
    });

    it('findUnit', () => {
        // not found
        assert.strictEqual(api.findUnit('DUMMY'), undefined);
        // acronym
        assert.strictEqual(api.findUnit('H1').baseId, 'CAPITALMONCALAMARICRUISER');
        // full name
        assert.strictEqual(api.findUnit('Chimaera').baseId, 'CAPITALCHIMAERA');
        // partial name
        assert.strictEqual(api.findUnit('Tooth').baseId, 'HOUNDSTOOTH');
    });

});

describe('API data', () => {
    // default api object
    const config = require('../config.json');
    const api = new SwgohHelpApi(config.user, config.password);

    it('getPlayers', () => {
        const players = api.getPlayers([ '232669733', '973246862']);
        
        var player = players[0];

        assert.strictEqual(Array.isArray(player.roster), true);
        assert.strictEqual(player.allyCode, 973246862);

        player = players[1];

        assert.strictEqual(Array.isArray(player.roster), true);
        assert.strictEqual(player.allyCode, 232669733);
    });

    it('getPlayer', () => {
        const player = api.getPlayer('232669733');

        assert.strictEqual(Array.isArray(player.roster), true);
        assert.strictEqual(player.allyCode, 232669733);
        assert.strictEqual(player.name, 'Sauron');
    });

    it('getGuild', () => {
        const guild = api.getGuild('232669733');

        assert.strictEqual(Array.isArray(guild.roster), true);
        assert.strictEqual(guild.id, 'G1593911327');
        assert.strictEqual(guild.name, 'Strikes PT');
    });

    it('getData', () => {
        const payload = {
            "collection": CollectionsEnum.CollectionUnitsList,
            "language": this.language,
            "match" : { 
                "rarity": 7, 
                "obtainable" : true, 
                "obtainableTime": 0
            }
         };

        const data = api.getData(payload);
        assert.strictEqual(Array.isArray(data), true);
    });

    it('getGuildPlayers', () => {
        const allyCode = '232669733';

        const guild = api.getGuild(allyCode);
        const guildPlayers = api.getGuildPlayers(allyCode);

        assert.strictEqual(guildPlayers.length, guild.roster.length);
        guildPlayers.forEach(guildPlayer => {
            assert.strictEqual(typeof guild.roster.find(player => player.allyCode == guildPlayer.allyCode) != "undefined", true);
        });
    });

    it('getGuildUnitStatsSummary', () => {
        const guildPlayers = api.getGuildPlayers('232669733');
        const stats = api.getGuildUnitStatsSummary(guildPlayers, 'VADER');

        assert.strictEqual(stats.count, stats.levels.reduce((a, b) => a + b));
        assert.strictEqual(stats.count, stats.rarities.reduce((a, b) => a + b));
        assert.strictEqual(stats.count, stats.gear.reduce((a, b) => a + b));
    });
});