// gamesPlayed.js
// Model object games played data
// ==================

'user strict';

/**
 * Container for played games
 * @class 
 * @module GamesPlayed
 */
class GamesPlayed {
    constructor(aral = 0, blitz = 0, blitzRounds = 0, casual = 0, casual5v5 = 0, ranked = 0, ranked5v5 = 0) {

        // int 11 | Default: 0
        this.aral = aral;
        
        // int 11 | Default: 0
        this.blitz = blitz;
        
        // int 11 | Default: 0
	    this.blitzRounds = blitzRounds;
        
        // int 11 | Default: 0
        this.casual = casual;
        
        // int 11 | Default: 0
        this.casual5v5 = casual5v5;

        // int 11 | Default: 0
        this.ranked = ranked;

        // int 11 | Default: 0
        this.ranked5v5 = ranked5v5;
    }

    /**
     * String reprentation of the object
     * @return {string} string reprentation of the object with all attributes
     */
    toString() {
        return `[${this.aral}, ${this.blitz}, ${this.casual}, ${this.casual5v5}, ${this.ranked}, ${this.ranked5v5} ]`;
    }

    /**
     * Number of played aral
     * @return {int} aral count
     */
    getAral() {
        return this.aral;
    }

    /**
     * Number of played blitz
     * @return {int} blitz count
     */
    getBlitz() {
        return this.blitz;
    }

    /**
     * Number of played Blitz rounds
     * @return {int} blitz rounds count
     */
    getBlitzRounds() {
        return this.blitzRounds;
    }

    /**
     * Number of played 3v3 casual
     * @return {int} casual count
     */
    getCasual() {
        return this.casual;
    }

    /**
     * Number of played 5v5 casual
     * @return {int} casual 5v5 count
     */
    getCasual5v5() {
        return this.casual5v5;
    }

    /**
     * Number of played 3v3 rank
     * @return {int} rank 3v3 count
     */
    getRanked() {
        return this.ranked;
    }

    /**
     * Number of played 5v5 rank
     * @return {int} rank 5v5 count
     */
    getRanked5v5() {
        return this.ranked5v5;
    }
};