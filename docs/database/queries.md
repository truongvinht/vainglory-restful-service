#mySQL Queries for database setup

CREATE DATABASE Vainglory_Records;

## Core Model Objects

### MATCHES

+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| id             | int(11)      | NO   | PRI | NULL    | auto_increment |
| created_at     | datetime     | NO   |     | NULL    |                |
| duration       | int(11)      | NO   |     | NULL    |                |
| endgame_reason | varchar(32)  | YES  |     | NULL    |                |
| game_mode      | varchar(32)  | NO   |     | NULL    |                |
| patch_version  | varchar(10)  | NO   |     | NULL    |                |
| queue          | varchar(32)  | YES  |     | NULL    |                |
| shard_id       | varchar(10)  | NO   |     | NULL    |                |
| telemetry_url  | varchar(255) | YES  |     | NULL    |                |
| uuid           | char(36)     | NO   |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+

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
### ROSTER

+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| id               | int(11)      | NO   | PRI | NULL    | auto_increment |
| aces_earned      | int(11)      | NO   |     | 0       |                |
| gold             | int(11)      | NO   |     | 0       |                |
| hero_kills       | int(11)      | NO   |     | 0       |                |
| kraken_captures  | int(11)      | NO   |     | 0       |                |
| shard_id         | varchar(10)  | NO   |     | NULL    |                |
| side             | varchar(32)  | YES  |     | NULL    |                |
| team             | varchar(255) | YES  |     | NULL    |                |
| turret_kills     | int(11)      | NO   |     | 0       |                |
| turret_remaining | int(11)      | NO   |     | 0       |                |
| uuid             | char(36)     | NO   |     | NULL    |                |
| won              | varchar(10)  | NO   |     | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+

```Bash
CREATE TABLE ROSTERS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	aces_earned INTEGER NOT NULL DEFAULT 0,
	gold INTEGER NOT NULL DEFAULT 0,
	hero_kills INTEGER NOT NULL DEFAULT 0,
	kraken_captures INTEGER NOT NULL DEFAULT 0,
	shard_id VARCHAR(10) NOT NULL, 
	side VARCHAR(32),
	team VARCHAR(255),
	turret_kills INTEGER NOT NULL DEFAULT 0,
	turret_remaining INTEGER NOT NULL DEFAULT 0,
	uuid CHAR(36) NOT NULL,
	won VARCHAR(10) NOT NULL
);
```
### PARTICIPANT
+-----------------------+--------------+------+-----+---------+----------------+
| Field                 | Type         | Null | Key | Default | Extra          |
+-----------------------+--------------+------+-----+---------+----------------+
| id                    | int(11)      | NO   | PRI | NULL    | auto_increment |
| actor                 | varchar(255) | NO   |     | NULL    |                |
| assists               | int(11)      | NO   |     | 0       |                |
| crystal_mine_captures | int(11)      | NO   |     | 0       |                |
| deaths                | int(11)      | NO   |     | 0       |                |
| farm                  | int(11)      | NO   |     | 0       |                |
| first_afk_time        | int(11)      | NO   |     | 0       |                |
| player_uuid           | char(36)     | NO   |     | NULL    |                |
| shard_id              | varchar(10)  | NO   |     | NULL    |                |
| uuid                  | char(36)     | NO   |     | NULL    |                |
+-----------------------+--------------+------+-----+---------+----------------+

```Bash
CREATE TABLE PARTICIPANTS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	actor VARCHAR(255) NOT NULL,
	assists INTEGER NOT NULL DEFAULT 0,
	crystal_mine_captures INTEGER NOT NULL DEFAULT 0,
	deaths INTEGER NOT NULL DEFAULT 0,
	farm INTEGER NOT NULL DEFAULT 0,
	first_afk_time INTEGER NOT NULL DEFAULT 0,
	player_uuid CHAR(36) NOT NULL,
	shard_id VARCHAR(10) NOT NULL, 
	uuid CHAR(36) NOT NULL
);
```
### PLAYER
+---------------------------+--------------+------+-----+---------+----------------+
| Field                     | Type         | Null | Key | Default | Extra          |
+---------------------------+--------------+------+-----+---------+----------------+
| id                        | int(11)      | NO   | PRI | NULL    | auto_increment |
| created_at                | datetime     | YES  |     | NULL    |                |
| games_played_aral         | int(11)      | NO   |     | 0       |                |
| games_played_blitz        | int(11)      | NO   |     | 0       |                |
| games_played_blitz_rounds | int(11)      | NO   |     | 0       |                |
| games_played_casual       | int(11)      | NO   |     | 0       |                |
| games_played_casual5v5    | int(11)      | NO   |     | 0       |                |
| games_played_ranked       | int(11)      | NO   |     | 0       |                |
| games_played_ranked5v5    | int(11)      | NO   |     | 0       |                |
| guild_tag                 | varchar(10)  | YES  |     | NULL    |                |
| karma_level               | int(11)      | NO   |     | 0       |                |
| level                     | int(11)      | NO   |     | 0       |                |
| name                      | varchar(255) | NO   |     | NULL    |                |
| patch_version             | varchar(10)  | YES  |     | NULL    |                |
| rank_points_blitz         | float        | YES  |     | NULL    |                |
| rank_points_ranked        | float        | YES  |     | NULL    |                |
| rank_points_ranked5v5     | float        | YES  |     | NULL    |                |
| shard_id                  | varchar(10)  | NO   |     | NULL    |                |
| skill_tier                | int(11)      | NO   |     | 0       |                |
| uuid                      | char(36)     | NO   |     | NULL    |                |
| wins                      | int(11)      | NO   |     | 0       |                |
| xp                        | int(11)      | NO   |     | 0       |                |
+---------------------------+--------------+------+-----+---------+----------------+

```Bash
CREATE TABLE PLAYERS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	created_at DATETIME,
	games_played_aral INTEGER NOT NULL DEFAULT 0,
	games_played_blitz INTEGER NOT NULL DEFAULT 0,
	games_played_blitz_rounds INTEGER NOT NULL DEFAULT 0,
	games_played_casual INTEGER NOT NULL DEFAULT 0,
	games_played_casual5v5 INTEGER NOT NULL DEFAULT 0,
	games_played_ranked INTEGER NOT NULL DEFAULT 0,
	games_played_ranked5v5 INTEGER NOT NULL DEFAULT 0,
	guild_tag VARCHAR(10),
	karma_level INTEGER NOT NULL DEFAULT 0,
	level INTEGER NOT NULL DEFAULT 0,
	name VARCHAR(255) NOT NULL,
	patch_version VARCHAR(10),
	rank_points_blitz FLOAT,
	rank_points_ranked FLOAT,
	rank_points_ranked5v5 FLOAT,
	shard_id VARCHAR(10) NOT NULL, 
	skill_tier INTEGER NOT NULL DEFAULT 0,
	uuid CHAR(36) NOT NULL,
	wins INTEGER NOT NULL DEFAULT 0,
	xp INTEGER NOT NULL DEFAULT 0
);
```

## Relational Model Objects

### MATCH_ROSTER

+-----------+---------+------+-----+---------+----------------+
| Field     | Type    | Null | Key | Default | Extra          |
+-----------+---------+------+-----+---------+----------------+
| id        | int(11) | NO   | PRI | NULL    | auto_increment |
| match_id  | int(11) | NO   | MUL | NULL    |                |
| roster_id | int(11) | NO   | MUL | NULL    |                |
+-----------+---------+------+-----+---------+----------------+

```Bash
CREATE TABLE MATCH_ROSTERS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	match_id INTEGER NOT NULL,
	FOREIGN KEY fk_match(match_id)
	REFERENCES MATCHES(id),
	roster_id INTEGER NOT NULL,
	FOREIGN KEY fk_roster(roster_id)
	REFERENCES ROSTERS(id)
);
```
### ROSTER_MEMBERS

+----------------+---------+------+-----+---------+----------------+
| Field          | Type    | Null | Key | Default | Extra          |
+----------------+---------+------+-----+---------+----------------+
| id             | int(11) | NO   | PRI | NULL    | auto_increment |
| roster_id      | int(11) | NO   | MUL | NULL    |                |
| participant_id | int(11) | NO   | MUL | NULL    |                |
+----------------+---------+------+-----+---------+----------------+

```Bash
CREATE TABLE ROSTER_MEMBERS (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
	roster_id INTEGER NOT NULL,
	FOREIGN KEY fk_roster_member(roster_id)
	REFERENCES ROSTERS(id),
	participant_id INTEGER NOT NULL,
	FOREIGN KEY fk_participant(participant_id)
	REFERENCES PARTICIPANTS(id)
);
````

