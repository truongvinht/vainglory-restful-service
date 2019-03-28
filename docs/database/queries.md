#mySQL Queries for database setup

CREATE DATABASE Vainglory_Records;

## MATCHES
```Bash
CREATE TABLE MATCHES (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	created_at DATETIME NOT NULL,
	duration INTEGER NOT NULL, 
	endgame_reason VARCHAR(32), 
	game_mode VARCHAR(32) NOT NULL,
	patch_version VARCHAR(10) NOT NULL,
	queue VARCHAR(32), 
	shard_id VARCHAR(10) NOT NULL, 
	telemetry_url VARCHAR(255), 
	uuid CHAR(36) NOT NULL
);
```
## ROSTER


## PARTICIPANT
```Bash
CREATE TABLE PARTICIPANTS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	actor VARCHAR(255) NOT NULL
	
);
```
## PLAYER
```Bash
CREATE TABLE PLAYERS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	created_at DATETIME NOT NULL,
	games_played_aral INTEGER NOT NULL DEFAULT 0,
	games_played_blitz INTEGER NOT NULL DEFAULT 0,
	games_played_blitz_rounds INTEGER NOT NULL DEFAULT 0,
	games_played_casual INTEGER NOT NULL DEFAULT 0,
	games_played_casual5v5 INTEGER NOT NULL DEFAULT 0,
	games_played_ranked INTEGER NOT NULL DEFAULT 0,
	games_played_ranked5v5 INTEGER NOT NULL DEFAULT 0,
	guild_tag VARCHAR(10),
	karma_level INTEGER NOT NULL,
	level INTEGER NOT NULL DEFAULT 0,
	name VARCHAR(255) NOT NULL,
	patch_version VARCHAR(10) NOT NULL,
	rank_points_blitz FLOAT,
	rank_points_ranked FLOAT,
	rank_points_ranked5v5 FLOAT,
	shard_id VARCHAR(10) NOT NULL, 
	skill_tier INTEGER NOT NULL DEFAULT 0,
	uuid CHAR(36) NOT NULL,
	wins INTEGER NOT NULL,
	xp INTEGER NOT NULL
);
```