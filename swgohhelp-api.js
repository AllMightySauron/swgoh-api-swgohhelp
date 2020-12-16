/*jshint esversion: 6 */

/**
 *  CombatTypeEnum is the enum value for an Unit combat type.
 */ 
const CombatTypeEnum = { 
    "CombatTypeChar": 1, 
    "CombatTypeShip": 2 
};

/**
 * SquadUnitTypeEnum is the enum value of an arena unit type.
 */
const SquadUnitTypeEnum = {
	"SquadUnitNormal": 1,
	"SquadUnitLeader": 2,
	"SquadUnitCapitalShip": 3,
	"SquadUnitReinforcement": 5
};

/**
 * ModSetEnum is the enum of possible bonus set values.
 */
const ModSetEnum = {
	"ModSetHealth": 1,
	"ModSetOffense": 2,
	"ModSetDefense": 3,
	"ModSetSpeed": 4,
	"ModSetCritChance": 5,
	"ModSetCritDamage": 6,
	"ModSetPotency": 7,
	"ModSetTenacity": 8
};

/**
 *  ModUnitStatEnum is the enum with mod unit stat values.
 */
const ModUnitStatEnum = {
	"StatHealth": 1,
	"StatStrength": 2,
	"StatAgility": 3,
	"StatIntelligence": 4,
	"StatSpeed": 5,
	"StatAttackDamage": 6,
	"StatAbilityPower": 7,
	"StatArmor": 8,
	"StatSuppression": 9,
	"StatArmorPenetration": 10,
	"StatSuppressionPenetration": 11,
	"StatDodgeRating": 12,
	"StatDeflectionRating": 13,
	"StatAttackCriticalRating": 14,
	"StatAbilityCriticalRating": 15,
	"StatCriticalDamage": 16,
	"StatAccuracy": 17,
	"StatResistance": 18,
	"StatDodgePercentAdditive": 19,
	"StatDeflectionPercentAdditive": 20,
	"StatAttackCriticalPercentAdditive": 21,
	"StatAbilityCriticalPercentAdditive": 22,
	"StatArmorPercentAdditive": 23,
	"StatSuppressionPercentAdditive": 24,
	"StatArmorPenetrationPercentAdditive": 25,
	"StatSuppressionPenetrationPercentAdditive" : 26,
	"StatHealthSteal": 27,
	"StatMaxShield": 28,
	"StatShieldPenetration": 29,
    "StatHealthRegen": 30,
	"StatAttackDamagePercentAdditive": 31,
	"StatAbilityPowerPercentAdditive": 32,
	"StatDodgeNegatePercentAdditive": 33,
	"StatDeflectionNegatePercentAdditive": 34,
	"StatAttackCriticalNegatePercentAdditive": 35,
	"StatAbilityCriticalNegatePercentAdditive": 36,
	"StatDodgeNegateRating": 37,
	"StatDeflectionNegateRating": 38,
	"StatAttackCriticalNegateRating": 39,
	"StatAbilityCriticalNegateRating": 40,
	"StatOffense": 41,
	"StatDefense": 42,
	"StatDefensePenetration": 43,
	"StatEvasionRating": 44,
    "StatCriticalRating": 45,
	"StatEvasionNegateRating": 46,
	"StatCriticalNegateRating": 47,
	"StatOffensePercentAdditive": 48,
	"StatDefensePercentAdditive": 49,
	"StatDefensePenetrationPercentAdditive": 50,
	"StatEvasionPercentAdditive": 51,
	"StatEvasionNegatePercentAdditive": 52,
	"StatCriticalChancePercentAdditive" : 53,
	"StatCriticalNegateChancePercentAdditive": 54,
	"StatMaxHealthPercentAdditive": 55,
	"StatMaxShieldPercentAdditive": 56,
	"StatSpeedPercentAdditive": 57,
	"StatCounterAttackRating": 58,
	"StatTaunt": 59
};

/**
 * ModSlotEnum is the mod slot enum.
 */
const ModSlotEnum = {
	"ModSlotSquare": 1,
	"ModSlotArrow": 2,
	"ModSlotDiamond": 3,
	"ModSlotTriangle": 4,
	"ModSlotCircle": 5,
	"ModSlotCross": 6
};

/**
 * Maximum unit levels.
 */
const MAX_UNIT_LEVELS = 85;

/**
 * Maximum unit stars.
 */
const MAX_UNIT_STARS = 7;

/**
 * Maximum character gear level.
 */
const MAX_CHAR_GEAR_LEVEL = 13;

/**
 * Maximum character zetas.
 */
const MAX_CHAR_ZETAS = 6;

/**
 * Maximum character relics (for gear 13).
 */
const MAX_CHAR_RELICS = 8;

/**
 * Valid collections for data gathering in APIs.
 */
const CollectionsEnum = { 
    "CollectionAbilityList": "abilityList",
    "CollectionBattleEnvironmentsList": "battleEnvironmentsList",
    "CollectionBattleTargetingRuleList": "battleTargetingRuleList",
    "CollectionCategoryList": "categoryList",
    "CollectionChallengeList": "challengeList",
    "CollectionChallengeStyleList": "challengeStyleList",
    "CollectionEffectList": "effectList",
    "CollectionEnvironmentCollectionList": "environmentCollectionList",
    "CollectionEquipmentList": "equipmentList",
    "CollectionEventSamplingList": "eventSamplingList",
    "CollectionGuildExchangeItemList": "guildExchangeItemList",
    "CollectionGuildRaidList": "guildRaidList",
    "CollectionHelpEntryList": "helpEntryList",
    "CollectionMaterialList": "materialList",
    "CollectionPlayerTitleList": "playerTitleList",
    "CollectionPowerUpBundleList": "powerUpBundleList",
    "CollectionRaidConfigList": "raidConfigList",
    "CollectionRecipeList": "recipeList",
    "CollectionRequirementList": "requirementList",
    "CollectionSkillList": "skillList",
    "CollectionStarterGuildList": "starterGuildList",
    "CollectionStatModList": "statModList",
    "CollectionStatModSetList": "statModSetList",
    "CollectionStatProgressionList": "statProgressionList",
    "CollectionTableList": "tableList",
    "CollectionTargetingSetList": "targetingSetList",
    "CollectionTerritoryBattleDefinitionList": "territoryBattleDefinitionList",
    "CollectionTerritoryWarDefinitionList": "territoryWarDefinitionList",
    "CollectionUnitsList": "unitsList",
    "CollectionUnlockAnnouncementDefinitionList": "unlockAnnouncementDefinitionList",
    "CollectionWarDefinitionList": "warDefinitionList",
    "CollectionXpTableList": "xpTableList"
};

/**
 * Valid guild member levels.
 */
const GuildMemberLevelEnum = {
    "GuildMemberLevelRegular": 2,
    "GuildMemberLevelOfficer": 3,
    "GuildMemberLevelLeader": 4
};

// file system access module
const fs = require('fs');

/**
 * Player titles.
 * @typedef {object} PlayerTitles
 * @property {string} selected Selected player title.
 * @property {string[]} unlocked Full list of unlocked player titles.
 */

/**
 * Player stats.
 * @typedef {object} PlayerStat
 * @property {string} nameKey Stat name key.
 * @property {number} value Stat value.
 * @property {number} index Stat index.
 */

/**
 * @typedef {object} ArenaSquadUnit
 * @property {string} id Unit id.
 * @property {string} defId Unit definition id.
 * @property {number} squadUnitType Squad unit type (1 - Normal unit, 2 - Squad leader, 3 - Capital ship, 5 - Ship reinforcement)
 */

/**
 * Arena data detail.
 * @typedef {object} ArenaDataDetail
 * @property {number} rank Arena rank.
 * @property {ArenaSquadUnit[]} squad List of squad units used in arena.
 */

/**
 * Player arena data.
 * @typedef {object} PlayerArena
 * @property {ArenaDataDetail} char Character arena data.
 * @property {ArenaDataDetail} ship Ship arena data.
 */

/**
 * Player portraits.
 * @typedef {object} PlayerPortraits
 * @property {string} selected Selected portrait.
 * @property {string[]} unlocked List of all unlocked player portraits.
 */

/** 
 * Player grand arena instance.
 * @typedef {object} PlayerGrandArenaInstance
 * @property {string} seasonId Grand arena season id.
 * @property {string} eventInstanceId Event instance id.
 * @property {string} league Grand arena league (AURODIUM, KYBER, ...).
 * @property {number} wins Number of player wins.
 * @property {number} losses Number of player losses.
 * @property {boolean} eliteDivision In elite division?
 * @property {number} seasonPoints Number of season points.
 * @property {number} division Player division for this instance.
 * @property {number} joinTime Grand arena join time (UTC milliseconds).
 * @property {number} endTime Grand arena end time (UTC milliseconds).
 * @property {boolean} remove Remove?
 * @property {number} rank Player rank in Grand Arena.
 */

/**
 * Player equipment.
 * @typedef {object} UnitEquipment
 * @property {string} equipmentId Equipment id.
 * @property {number} slot Equipped slot.
 * @property {string} nameKey Equipment name key.
 */

/**
 * Unit skill.
 * @typedef {object} UnitSkill
 * @property {string} id Skill id.
 * @property {number} tier Skill tier.
 * @property {string} nameKey Skill name key.
 * @property {boolean} isZeta Whether this skill is zeta.
 * @property {number} tiers Number of skill tiers.
 */

/**
 * Primary mod stat.
 * @typedef {object} PrimaryModStat
 * @property {ModUnitStatEnum} unitStat Mod unit stat.
 * @property {number} value Mod unit stat value.
 */

 /**
 * Secondary mod stat.
 * @typedef {object} SecondaryModStat
 * @property {ModUnitStatEnum} unitStat Mod unit stat.
 * @property {number} value Mod unit stat value.
 * @property {number} roll Mod unit stat roll.
 */

/**
 * Unit mod.
 * @typedef {object} UnitMod
 * @property {string} id Unit mod id.
 * @property {number} level Unit mod level.
 * @property {number} tier Unit mod tier.
 * @property {number} slot Unit mod slot.
 * @property {number} set Unit mod set.
 * @property {number} pips Unit mod pips.
 * @property {PrimaryModStat} primaryStat Unit mod primary stat.
 * @property {SecondaryModStat[]} secondayStat Unit mod primary stat.
 */

/**
 * @typedef {object} CrewSkillReference
 * @property {string} skillId Skill id.
 * @property {number} requiredTier Required tier for skill.
 * @property {number} requiredRarity Required rarity for skill.
 * @property {number} requiredRelicTier Required relic tier for skill.
 */

/**
 * Crew unit.
 * @typedef {object} CrewUnit
 * @property {string} unitId Crew unit definition id.
 * @property {number} slot Crew unit slot number.
 * @property {CrewSkillReference[]} skillReferenceList Crew skill reference list.
 * @property {string} skilllessCrewAbilityId Skillless crew ability id.
 * @property {number} gp Crew unit GP.
 * @property {number} cp Crew unit CP.
 * 
 */

/**
 * Unit relic.
 * @typedef {object} UnitRelic
 * @property {number} currentTier Current relic tier.
 */

/**
 * Unit.
 * @typedef {object} Unit
 * @property {string} id Unit id.
 * @property {string} defId Unit definition id.
 * @property {string} nameKey Unit name key.
 * @property {number} rarity Unit rarity (number of stars).
 * @property {number} level Unit level.
 * @property {number} xp Unit XP.
 * @property {number} gear Unit gear level.
 * @property {UnitEquipment[]} equipped List of equipment used by this unit.
 * @property {CombatTypeEnum} combatType Unit combat type (1 for toons, 2 for ships).
 * @property {UnitSkill[]} skills List of unit skills.
 * @property {UnitMod[]} mods List of unit mods.
 * @property {CrewUnit[]} crew List of unit in crew (for ships only)
 * @property {number} gp Unit GP.
 * @property {object} primaryUnitStat ???.
 * @property {UnitRelic} relic Unit relic.
 */

/**
 * Player data as returned by the swgoh.help/swgoh/player api.
 * @typedef {object} Player
 * @property {number} allyCode Player allycode.
 * @property {string} id Player id.
 * @property {string} name Player name.
 * @property {number} level Player level.
 * @property {PlayerTitles} titles Player titles.
 * @property {string} guildRefId Guild referential id.
 * @property {string} guildName Guild name.
 * @property {string} guildBannerColor Guild banner color.
 * @property {string} guildBannerLogo Guild banner logo.
 * @property {string} guildTypeId Guild type id.
 * @property {PlayerStat[]} stats Player stats.
 * @property {Unit[]} roster List of player units.
 * @property {PlayerArena} arena Player arena data.
 * @property {number} lastActivity Last activitiy moment (UTC milliseconds).
 * @property {number} poUTCOffsetMinutes Timezone offset information relative to UTC.
 * @property {PlayerPortraits} portraits Player portraits.
 * @property {PlayerGrandArenaInstance[]} grandArena List of player grand arena instance data.
 * @property {number} grandArenaLifeTime Lifetime in grand arena (milliseconds).
 * @property {number} updated Last update moment (UTC milliseconds).
 */

/**
 * Guild raid.
 * @typedef {object} GuildRaid
 * @property {string} rancor Rancor pit guild raid.
 * @property {string} aat HAAT guild raid.
 * @property {string} sith_raid HSR guild raid.
 */

/**
 * Guild player.
 * @typedef {object} GuildPlayer
 * @property {string} id Guild player id.
 * @property {GuildMemberLevelEnum} guildMemberLevel Guild member level ().
 * @property {string} name Guild player name.
 * @property {number} level Guild player level.
 * @property {number} allyCode Guild player ally code.
 * @property {number} gp Guild player GP.
 * @property {number} gpChar Guild player char GP.
 * @property {number} gpShip Guild player ship GP.
 * @property {number} updated Guild player info update moment (UTC milliseconds).
 */

/**
 * Guild data.
 * @typedef {object} Guild
 * @property {string} id Guild id.
 * @property {string} name Guild name.
 * @property {string} desc Guild description.
 * @property {number} members Number of guild members.
 * @property {number} status Guild status.
 * @property {number} required Guild required member level.
 * @property {string} bannerColor Guild banner color.
 * @property {string} bannerLogo Guild banner logo.
 * @property {string} message Guild message.
 * @property {number} gp Guild total gp.
 * @property {GuildRaid} raid Guild raids.
 * @property {GuildPlayer[]} roster Guild player roster.
 * @property {number} updated Guild update momement (UTC milliseconds).
 */

/**
 * Guild stats.
 * @typedef {object} GuildStats
 * @property {number} gpChar Guild total char GP.
 * @property {number} gpShip Guild total ship GP.
 */

 /**
 * Summary stats for characters.
 * @typedef {object} CharStats
 * @property {number}    count    Number of roster units for this unit type.
 * @property {number}    galacticLegendCount  Number of Galactic Legends.
 * @property {number[]}  levels   Number of characters per level.
 * @property {number[]}  rarities Number of characters per star level.
 * @property {number[]}  gear     Number of characters per gear level.
 * @property {number}    zetas    Number of zetas applied to characters.
 */

/**
 * Summary stats for ships.
 * @typedef {object} ShipStats
 * @property {number}    count    Number of roster units for this unit type.
 * @property {number[]}  levels   Number of ships per level.
 * @property {number[]}  rarities Number of ships per star level.
 */

/**
 * Summary stats from player roster.
 * @typedef {object} PlayerStats
 * @property {CharStats} chars     Number of ship with specific number of stars.
 * @property {ShipStats} ships Number of Galactic Legends on player roster.
 */

/** 
 * Main API helper class.
 * */
class SwgohHelpApi {
    
    /**
     * Default constructor.
     * @param {string} user swgoh.help login user.
     * @param {string} password swgoh.help login password.
     * @param {string} language swgoh.help supported localization (defaults to 'eng_us').
     */
    constructor(user, password, language = 'eng_us') {
        // setup logging
        const log4js = require("log4js");

        const loggerConfig = require('./log4jsconf.json');
        log4js.configure(loggerConfig);

        this.logger = log4js.getLogger();

        // authentication
    	this.user = user;
        this.password = password;
        this.clientId = 'client_id';
        this.clientSecret = 'client_secret';
    	    	    	
        this.token = null;

        // language
        this.language = language;
        
        // base URL for api calls
        this.urlBase = 'https://api.swgoh.help';

        // load character acronyms from file
        const ACRONYMS_FILE = module.path ? module.path + '/resources/toon_acronyms.json' : 'resources/toon_acronyms.json';
        this.acronyms = SwgohHelpApi.loadAcronyms(ACRONYMS_FILE);

        // add stats calculator module for swgoh.help 
        this.statsCalculator = require('swgoh-stat-calc');

        // init stats calculator with game data
        this.statsCalculator.setGameData(SwgohHelpApi.getGameData());
    }

    /**
     * Load all acronyms from JSON file.
     * @static
     * @param {string} file name.
     * @returns {Map<string, string>} Unit acronym map between acronym and unit name.
     */
    static loadAcronyms(fileName) {
        var tempAcronyms = JSON.parse(fs.readFileSync(fileName, 'utf8'));

        // create new acronym map
        const acronyms = new Map();

        // add entries to map
        tempAcronyms.forEach(acronym => acronyms.set(acronym.acronym, acronym.name));

        return acronyms;
    }

    /**
    * Get game data needed to init stats calculator (from the game data info available at glitch.com or local cache).
    * This will be required for statistic calculations on top of data retrieved from swgoh.help.
    * @returns {object} Game data for use in the stats calculator.
    */
    static getGameData() {
        const GAME_DATA_URL = 'https://swgoh-stat-calc.glitch.me/gameData.json';
        const GAME_DATA_CACHE = module.path ? module.path + '/cache/gameData.json' : './cache/gameData.json';        

        const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xhr = new XMLHttpRequest();

        // open syncronous
        xhr.open('GET', GAME_DATA_URL, false);

        // setting request headers
        xhr.setRequestHeader('Content-Type', 'application/json');
            
        // try to get game data from glitch
        xhr.send();

        var gameData;

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // cache game data
            fs.writeFileSync(GAME_DATA_CACHE, xhr.responseText, 'UTF-8');

            // use glitch.com game data
            gameData = JSON.parse(xhr.responseText);
        } else {
            /// use local cache
            gameData = require(GAME_DATA_CACHE);
        }

        return gameData;
    }

    /**
     * Get the number of achieved zetas for a combat unit.
     * @static
     * @param {Unit} unitData The unit data.
     * @returns {number} The number of active zetas for the unit.
     */
    static getZetaCount(unitData) {
        return unitData.skills.filter(skill => skill.isZeta && skill.tier == skill.tiers).length;
    }

    /**
     * Get array of zetas for a combat unit.
     * @static
     * @param {Unit} unitData The unit data.
     * @returns {UnitSkill[]} Array of zetas skills for the unit.
     */
    static getZetas(unitData) {      
        return unitData.skills.filter(skill => skill.isZeta && skill.tier == skill.tiers);
    }

    /**
     * Get a specific unit directly from the player unit roster.
     * @static
     * @param {Player} player The player data object.
     * @param {string} searchName The character name to search for (exact match).
     * @returns {Unit} The unit from player roster.
     */
    static getPlayerUnitFromUnits(player, searchName) {
        return player.roster.find(unit => unit.nameKey.toLowerCase() == searchName.toLowerCase());
    }

    /**
     * Checks if the unit is a GL.
     * @static
     * @param {Unit} unitData 
     * @returns {boolean} Whether this unit is a GL.
     */
    static isGL(unitData) {
        return unitData.skills.filter(skill => skill.id.includes('GALACTICLEGEND')).length > 0;
    }

    /**
     * Get the proper description from the unit type code.
     * @static
     * @param {SquadUnitTypeEnum} unitType The unit type enum integer.
     * @returns {string} The unit type description.
     */
    static getSquadUnitTypeString(unitType)  {
        switch (unitType) {
        case SquadUnitTypeEnum.SquadUnitNormal:
            return "";
        case SquadUnitTypeEnum.SquadUnitLeader:
            return "Leader";
        case SquadUnitTypeEnum.SquadUnitCapitalShip:
            return "Capital Ship";
        case SquadUnitTypeEnum.SquadUnitReinforcement:
            return "Reinforcement";
        default:
            return `Unknown unit type: ${unitType}`;
        }
    }

    /**
     * Gets the proper description from the modset code.
     * @static
     * @param {ModSetEnum} modSet The mod set code.
     * @returns {string} The mod set description.
     */
    static getModSetString(modSet) {
        switch (modSet) {
        case ModSetEnum.ModSetHealth:
            return "Health";
        case ModSetEnum.ModSetOffense:
            return "Offense";
        case ModSetEnum.ModSetDefense:
            return "Defense";
        case ModSetEnum.ModSetSpeed:
            return "Speed";
        case ModSetEnum.ModSetCritChance:
            return "Critical Chance";
        case ModSetEnum.ModSetCritDamage:
            return "Critical Damage";
        case ModSetEnum.ModSetPotency:
            return "Potency";
        case ModSetEnum.ModSetTenacity:
            return "Tenacity";
        default:
            return `Unknown mod set: ${modSet}`;
        }
    }

    /**
     * Get the proper description from the mod unit stat enum.
     * @static
     * @param {ModUnitStatEnum} modUnitStat Mod unit stat type enum.
     * @returns Mod unit stat description.
     */
    static getModUnitStatString(modUnitStat) {
        switch (modUnitStat) {
        case ModUnitStatEnum.StatHealth:
            return "Health";
        case ModUnitStatEnum.StatMaxHealthPercentAdditive:
            return "% Health";
        case ModUnitStatEnum.StatMaxShield:
            return "Protection";
        case ModUnitStatEnum.StatMaxShieldPercentAdditive:
            return "% Protection";
        case ModUnitStatEnum.StatOffense:
            return "Offense";
        case ModUnitStatEnum.StatOffensePercentAdditive:
            return "% Offense";
        case ModUnitStatEnum.StatDefense:
            return "Defense";
        case ModUnitStatEnum.StatDefensePercentAdditive:
            return "% Defense";
        case ModUnitStatEnum.StatCriticalDamage:
            return "% Crit Damage";
        case ModUnitStatEnum.StatCriticalChancePercentAdditive:
            return "% Crit Chance";
        case ModUnitStatEnum.StatSpeed:
            return "Speed";
        case ModUnitStatEnum.StatSpeedPercentAdditive:
            return "% Speed";
        case ModUnitStatEnum.StatAccuracy:
            return "% Potency";
        case ModUnitStatEnum.StatResistance:
            return "% Tenacity";
        case ModUnitStatEnum.StatEvasionNegatePercentAdditive:
            return "% Accuracy";
        case ModUnitStatEnum.StatCriticalNegateChancePercentAdditive:
            return "% Crit Avoidance";
        default:
            return `Mod unit stat: ${modUnitStat}`;
        }
    }

    /**
     * Get the proper description for the mod slot.
     * @static
     * @param {ModSlotEnum} modSlot The mod slot type.
     * @returns The mod slot description.
     */
    static getModSlotString(modSlot) {
        switch (modSlot) {
            case ModSlotEnum.ModSlotSquare:
                return "Square";
            case ModSlotEnum.ModSlotArrow:
                return "Arrow";
            case ModSlotEnum.ModSlotDiamond:
                return "Diamond";
            case ModSlotEnum.ModSlotTriangle:
                return "Triangle";
            case ModSlotEnum.ModSlotCircle:
                return "Circle";
            case ModSlotEnum.ModSlotCross:
                return "Cross";
            default:
                return `Unknown mod slot: ${modSlot}`;
            }
    }

    /**
     * Get guild stats (GP char and GP ships) from guild data.
     * @static
     * @param {Guild} guildData The guild data.
     * @returns {GuildStats} The guild statistics.
     */
    static getGuildStats(guildData) {
        return { 
            gpChar: guildData.roster.map(player => player.gpChar).reduce((a, b) => a + b), 
            gpShip: guildData.roster.map(player => player.gpShip).reduce((a, b) => a + b)
        };
    }

    /**
     * Get guild leader from guild data.
     * @static
     * @param {Guild} guildData The guild data.
     * @returns {GuildPlayer} Guild leader according to guild roster.
     */
    static getGuildLeader(guildData) {
        return guildData.roster.find(player => player.guildMemberLevel == GuildMemberLevelEnum.GuildMemberLevelLeader);
    }

    /**
     * Get guild officers from guild data.
     * @static
     * @param {Guild} guild The guild data.
     * @returns {GuildPlayer[]} List of guild officers according to guild roster.
     */
    static getGuildOfficers(guildData) {
        return guildData.roster.filter(player => player.guildMemberLevel == GuildMemberLevelEnum.GuildMemberLevelOfficer);
    }

    /**
     * Gets the desired player stat from player data.
     * @static
     * @param {Player} playerData Player data object from swgoh.help
     * @param {string} statName Desired stat name.
     * @returns {string} The stat value (or undefined if not found).
     */
    static getPlayerStat(playerData, statName) {
        var result;
        
        // find stat in playerdata object by name
        const stat = playerData.stats.find(stat => stat.nameKey == statName);

        if (stat) result = stat.value;

        return result;
    }

    /**
     * Gets summary statistics from player data.
     * @static
     * @param {Player} player The player data.
     * @returns {PlayerStats} The player stats.
     */
    static getPlayerStatsSummary(player) {
        /** @type {PlayerStats} */
        var result = { 
            chars: {
                count: 0,
                galacticLegendCount: 0,
                levels: new Array(MAX_UNIT_LEVELS).fill(0),
                rarities: new Array(MAX_UNIT_STARS).fill(0),
                gear:  new Array(MAX_CHAR_GEAR_LEVEL).fill(0),
                relics: new Array(MAX_CHAR_RELICS).fill(0),
                zetas: 0,
            },
            ships: {
                count: 0,
                levels: new Array(MAX_UNIT_LEVELS).fill(0),
                rarities: new Array(MAX_UNIT_STARS).fill(0)
            }
        };

        // loop over units
        for(var i = 0; i < player.roster.length; i++) {
            /** @type {Unit} */
            const unit = player.roster[i];

            // handle characters and ships
            if (unit.combatType == CombatTypeEnum.CombatTypeChar) {
                // increase character count
                result.chars.count++;

                // test for GL
                if (SwgohHelpApi.isGL(unit)) {
                    result.chars.galacticLegendCount++;
                }

                // increase level count
                result.chars.levels[unit.level - 1]++;

                // increase rarity count
                result.chars.rarities[unit.rarity - 1]++;

                // increase gear count
                result.chars.gear[unit.gear - 1]++;

                // check for relics
                if (unit.gear == 13) result.chars.relics[unit.relic.currentTier - 2]++;

                // increase zeta count
                result.chars.zetas += SwgohHelpApi.getZetaCount(unit);
            } else if (unit.combatType == CombatTypeEnum.CombatTypeShip) {
                // increase ship count
                result.ships.count++;

                // increase level count
                result.ships.levels[unit.level - 1]++;

                // increase rarity count
                result.ships.rarities[unit.rarity - 1]++;
            }
        }

        return result;
    }

    /**
     * Fetch data using XMLHttpRequest with auto retry for login.
     * @param {string} method String with desired method (GET or POST).
     * @param {string} URL Endpoint URL.
     * @param {JSON} The JSON payload to use.
     * @returns {XMLHttpRequest} The XMLHttpRequest obejct.
     */
    fetchRetry(method, url, payload) {
        this.logger.debug(`fetchRetry@swgohhelp-api: ${method}(t)ing data from "${url}" ${payload ? 'with payload ' + JSON.stringify(payload) : ''}`);

        // test if token already available
        if (!this.token) { 
            this.signIn();
        }

        const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xhr = new XMLHttpRequest();

        // open syncronous
        xhr.open(method, url, false);

        // setting request headers
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);

        // get JSON string from payload
        if (payload) {
            xhr.send(JSON.stringify(payload));
        } else {
            xhr.send();
        }

        if (xhr.readyState == xhr.DONE) {
            if (xhr.status == 503) {
                // bearer token expired?
                this.logger.error(`fetchRetry@swgohhelp-api: error 503 (service not available), bearer token expired?`);

                // force re-login 
                this.token = null;

                // retry send
                return this.fetchRetry(method, url, payload);
            } else {
                return xhr;
            }
        } else {
            this.logger.error(`fetchRetry@swgohhelp-api: error fetching data (ready state = ${xhr.readyState})`);

            return xhr;
        }
    }

    /**
     * Build full units cache from swgoh.help.
     * @returns {Map<string, UnitData}} Map between unit base id and unit data.
     */
    fetchUnits() {
        this.logger.debug("fetchUnits@swgohhelp-api: fetching units from swgoh.help");

        const payload = {
            "collection": CollectionsEnum.CollectionUnitsList,
            "language": this.language,
            "match" : { 
                "rarity": 7, 
                "obtainable" : true, 
                "obtainableTime": 0
            }
         };

        // get units list
        const tempUnits = this.getData(payload);

        var units;

        if (tempUnits) {
            units = new Map();

            // loop over units to create map
            tempUnits.forEach(unit => units.set(unit.baseId, unit));

            this.logger.debug(`fetchUnits@swgohhelp-api: API loaded units ok (total = ${units.size})`);
        }

        return units;
    }

    /**
     * Build local cache for game definitions.
     * @private
     */
    buildCache() {
        // set TTL to one hour
        const MAX_TTL_SECONDS = 3600;
        const now = new Date();

        if (!this.cache) {
            if (this.logger) this.logger.debug('buildCache@swgohhelp-api: No cache found, fetching new cache data');

            // build cache object
            this.cache = {
                units: this.fetchUnits(),
                updated: new Date()
            };
        } else if (now.getTime() - this.cache.updated.getTime() > MAX_TTL_SECONDS * 1000) {
            if (this.logger) this.logger.debug('buildCache@swgohhelp-api: Cache TTL exceeded, rebuilding cache');

            // ttl exceeded, let's rebuild cache
            this.cache = undefined;

            this.buildCache();
        }
    }

      /**
     * Gets a unit definition from the local cache.
     * @param {string} defId The unit definition id.
     * @returns {Unit} Unit definition from the local cache.
     */
    getUnit(defId) {
        this.buildCache();

        return this.cache.units.get(defId);
    }

    /**
     * Search for a unit from the unit cache (uses acronyms, full name or partial name matching).
     * @param {string} unitName The desired unit name.
     * @returns {UnitData} The unit data structure.
     */
    findUnit(unitName) {
        var result;

        this.buildCache();

        this.logger.debug(`findUnit@swgohhelp-api: data request for unit "${unitName}"`);

        var searchName = unitName.toLowerCase();

        // test for acronym
        if (this.acronyms.has(searchName)) {
            // set new search name to acronym mapping
            searchName = this.acronyms.get(searchName).toLowerCase();

            this.logger.debug(`getUnit@swgohhelp-api: mapped "${unitName}" to "${searchName}"`);
        }

        // search for full unit name
        result = Array.from(this.cache.units.values()).find(unit => unit.nameKey.toLowerCase() == searchName);

        if (result) {
            this.logger.debug(`getUnit@swgohhelp-api: full name matched to id "${result.baseId}" (${result.nameKey})`);
        } else {
            // not found: try substring
            for (let [unitBaseId, unit] of this.cache.units) {
                // test for name (ignoring case)
                if (unit.nameKey.toLowerCase().includes(searchName)) {                    
                    result = unit;

                    this.logger.debug(`getUnit@swgohhelp-api: partial name matched to id "${result.baseId}" (${result.nameKey})`);
                    break;
                }
            }
        }

        return result;
    }

    /**
     * Sign in to swgoh.help using credentials given on constructor.
     */
    signIn() {
        this.logger.debug('signIn@swgohhelp-api: signing in');

        const url = `${this.urlBase}/auth/signin`;

        const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xhr = new XMLHttpRequest();

        xhr.open('POST', url, false);

        const params = 
            `username=${this.user}&password=${this.password}&grant_type=password&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

        // setting request headers
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Content-Lenght', `${params.length}`);

        xhr.send(params);

        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            const response = JSON.parse(xhr.responseText);

            this.token = response.access_token;

            this.logger.debug(`signIn@swgohhelp-api: Success. Bearer token is "${this.token}"`);
        } else {
    		throw new Error(`Cannot login with these credentials: ${xhr.responseText}`);
        }	
    }

    /**
     * Fetch players' data from swgoh.help.
     * @param {string[]} allyCodes Array of desired ally codes.
     * @returns {Player[]} List of player data.
     */
    getPlayers(allyCodes) {
        // maximum batch size for ally code retrieval
        const MAX_ALLYCODES = 20;

        var response;

        this.logger.debug(`getPlayers@swgohhelp-api: data request for ally codes [${allyCodes}]`);

        if (allyCodes.length > MAX_ALLYCODES) {
            this.logger.debug(`getPlayers@swgohhelp-api: splitting ally codes`);

            // split in half
            var allyCodes1 = Array.from(allyCodes);
            var allyCodes2 = Array.from(allyCodes);

            allyCodes1.splice(MAX_ALLYCODES, allyCodes.length);
            allyCodes2.splice(0, MAX_ALLYCODES);

            return this.getPlayers(allyCodes1).concat(this.getPlayers(allyCodes2));
        } else {
            const payload = {
                "language": this.language,
                "allycodes": allyCodes
            };
    
            const xhr = this.fetchRetry('POST', this.urlBase + '/swgoh/player', payload);
    
            if (xhr.readyState == xhr.DONE && xhr.status == 200) {
                // get character data from function
                const response = JSON.parse(xhr.responseText);

                return response;
            } else {
                throw new Error(`Cannot get player data: ${xhr.responseText}`);
            }
        }
    }

    /**
     * Fetch player data from swgoh.help.
     * @param {string} allyCode 
     * @returns {Player} Player data.
     */
    getPlayer(allyCode) {
        this.logger.debug(`getPlayer@swgohhelp-api: data request for ally code ${allyCode}`);

        var result;

        const players = this.getPlayers(allyCode);

        // return first player
        if (players) result = players[0];

        return result;
    }

    /**
     * Fetch player unit from swgoh.help data.
     * @param {string} allycode The desired ally code.
     * @param {string} unitId Unit name to fetch.
     * @returns {Unit} swgoh.help unit object.
     */
    getPlayerUnit(allyCode, unitId) {
        this.logger.debug(`getPlayerUnit@swgohhelp-api: data request for ally code "${allyCode}" and unit id "${unitId}"`);
        var result;

        const xhr = this.fetchRetry('GET', this.urlBase + '/swgoh/units/' + allyCode, payload);
 
         if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            const response = JSON.parse(xhr.responseText);

            return response[unitId];
         } else {
            throw new Error(`Cannot get player unit data: ${xhr.responseText}`);
         }	

    }

     /**
     * Fetch player units from swgoh.help data.
     * @param {string[]} allycodes String array with the desired ally codes.
     * @returns {object} swgoh.help player units object, organized by unit.
     */
    getPlayerUnits(allyCodes) {
        this.logger.debug(`getUnits@swgohhelp-api: data request for ally codes [${allyCodes}]`);
        var result;

        const payload = {
            "allycodes": allyCodes
        };

        const xhr = this.fetchRetry('POST', this.urlBase + '/swgoh/units', payload);
 
        this.fetchRetry(xhr, payload);
        
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            const response = JSON.parse(xhr.responseText);

            return response;
         } else {
            throw new Error(`Cannot get player unit data: ${xhr.responseText}`);
         }
    }

    /**
     * Fetch player roster from swgoh.help data.
     * @param {string[]} allycode String array with the desired ally codes.
     * @returns {object} swgoh.help player roster object.
     */
    getPlayerRoster(allyCodes) {
        this.logger.debug(`getPlayerRoster@swgohhelp-api: data request for ally code "${allyCodes}"`);
        var result;

        const payload = {
            "allycodes": allyCodes
        };

        const xhr = this.fetchRetry('POST', this.urlBase + '/swgoh/roster', payload);
 
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            const response = JSON.parse(xhr.responseText);

            return response;
        } else {
            throw new Error(`Cannot get player unit data: ${xhr.responseText}`);
        }	

    }

    /**
     * Fetch guild data from swgoh.help.
     * @param {string} allyCode The guild player ally code.
     * @returns {Guild} Guild data.
     */
    getGuild(allyCode) {
        this.logger.debug(`getGuild@swgohhelp-api: data request for ally code "${allyCode}"`);

        const xhr = this.fetchRetry('GET', this.urlBase + '/swgoh/guilds/' + allyCode);
 
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            const response = JSON.parse(xhr.responseText);

            return response[0];
        } else {
            throw new Error(`Cannot get guild data: ${xhr.responseText}`);
        }	
    }

    /**
     * Fetch guild players from swgoh.help.
     * @param {string} allyCode The guild player ally code.
     * @returns {Player[]} Guild data.
     */
    getGuildPlayers(allyCode) {
        this.logger.debug(`getGuildPlayers@swgohhelp-api: data request for ally code "${allyCode}"`);

        var result;

        // get guild data
        const guild = this.getGuild(allyCode);

        // sanity check
        if (guild) {
            // build array with guild player ally codes
            const allyCodes = guild.roster.map(player => player.allyCode);

            // get data for guild players
            result = this.getPlayers(allyCodes);
        }

        return result;
    }

    /**
     * Get unit summary from guild.
     * @param {Player[]} guildPlayers List of guild players.
     * @param {string} unitName Unit name to search.
     */
    getGuildUnitStatsSummary(guildPlayers, unitName) {
        var stats = { 
            count: 0,
            galacticLegendCount: 0,
            levels: new Array(MAX_UNIT_LEVELS).fill(0),
            rarities: new Array(MAX_UNIT_STARS).fill(0),
            gear:  new Array(MAX_CHAR_GEAR_LEVEL).fill(0),
            relics: new Array(MAX_CHAR_RELICS).fill(0),
            zetas: {
                count: new Array(MAX_CHAR_ZETAS + 1).fill(0),   // zero zetas is a possibility
                list: {}
            },
            speed: {
                min: 9999,
                max: 0
            }
        };
        
        // get standard unit data
        const unit = this.findUnit(unitName);
        
        // sanity check
        if (unit) {
            // loop over guild players
            guildPlayers.forEach(player => {
                // get player unit
                const playerUnit = player.roster.find(searchUnit => searchUnit.defId == unit.baseId);

                // check if found
                if (playerUnit) {
                    // another one
                    stats.count++;

                    // levels
                    stats.levels[playerUnit.level - 1]++;

                    // rarities
                    stats.rarities[playerUnit.rarity - 1]++;

                    // chars only
                    if (unit.combatType == CombatTypeEnum.CombatTypeChar) {
                        //  gear level
                        stats.gear[playerUnit.gear - 1]++;

                        // relics
                        if (playerUnit.gear == 13) stats.relics[playerUnit.relic.currentTier - 2]++;

                        // zetas
                        const zetaSkills = SwgohHelpApi.getZetaCount(playerUnit);
                        stats.zetas.count[zetaSkills]++;

                        const zetas = SwgohHelpApi.getZetas(playerUnit);
                        zetas.forEach(zeta => {
                            // check if found
                            if (stats.zetas.list[zeta.id]) {
                                stats.zetas.list[zeta.id].count++;
                            } else {
                                stats.zetas.list[zeta.id] = {
                                    count: 1,
                                    name: zeta.nameKey
                                };
                            }
                        });

                        // speed calculation (special case for chars without mods)
                            // calculate unit stats
                        playerUnit.stats = this.statsCalculator.calcCharStats(playerUnit);

                        const charSpeed = 
                            playerUnit.stats.base[ModUnitStatEnum.StatSpeed] +
                                (playerUnit.stats.mods[ModUnitStatEnum.StatSpeed] ? playerUnit.stats.mods[ModUnitStatEnum.StatSpeed] : 0);

                        if (stats.speed.min > charSpeed) stats.speed.min = charSpeed;
                        if (stats.speed.max < charSpeed) stats.speed.max = charSpeed;
                    }
                }
            });
        }

        return stats;
    }

    /**
     * Generic supporting game data fetch from swgoh.help.
     * Returns game data listings for organizing your tools, building translation mappings, and understanding relationships between data.
     * @param {json} payload The JSON containing the request payload.
     * @returns {object} The collection data object.
     */
    getData(payload) {
        this.logger.debug(`getData@swgohhelp-api: data request for ${JSON.stringify(payload)}`);

        const xhr = this.fetchRetry('POST', this.urlBase + '/swgoh/data', payload);
 
        if (xhr.readyState == xhr.DONE && xhr.status == 200) {
            // get character data from function
            const response = JSON.parse(xhr.responseText);

            return response;
        } else {
            throw new Error(`Cannot get guild data: ${xhr.responseText}`);
        }	
    }
        
}

module.exports = { SwgohHelpApi, CombatTypeEnum, SquadUnitTypeEnum, ModSetEnum, ModUnitStatEnum, ModSlotEnum, CollectionsEnum, GuildMemberLevelEnum };