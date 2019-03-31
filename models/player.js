// player.js
// Model object for PLAYERS
// ==================

const BaseModel = require('./baseModel');
'user strict';

let TABLE = "PLAYERS";

/**
 * Vainglory player which participates in matches.
 * @class 
 * @module Player
 */
class Player extends BaseModel {
    constructor(createdAt = null, gamesPlayed, guildTag, karmaLevel, level, name, patchVersion, rankPoints, shardId, skillTier, uuid, wins, xp) {

        // date | nullable | Default: null
        this.createdAt = createdAt;
        
        // Object with int values
        this.gamesPlayed = gamesPlayed;
        
        // varchar 10 | nullable | Default: null
	    this.guildTag = guildTag;
        
        // int 11 | Default: 0
        this.karmaLevel = karmaLevel;

        this.level = level;

        this.name = name;

        this.patchVersion = patchVersion;

        this.rankPoints = rankPoints;

        this.shardId = shardId;

        this.skillTier = skillTier;

        this.uuid = uuid;

        this.wins = wins;

        this.xp = xp;
    }

    /**
     * Create SQL query (Rawdata)
     * @return {string} query to create (Rawdata)
     */
    getAddSQL() {

        var attributes = ["created_at", "guild_tag","karma_level","level","name","patch_version", "shard_id","skill_tier","uuid","wins","xp"];
        var values = ["NULL", ];
        let sql = `INSERT INTO ${TABLE}(date, guild_id, player_id, value) VALUES('${this.date}','${this.guild_id}',${this.player_id},${this.value})`;
        return sql;           
    }


};