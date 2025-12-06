const PiranhaMessage = require('../../PiranhaMessage')

class OwnHomeDataMessage extends PiranhaMessage {
  constructor (client, player) {
    super()
    this.id = 24101
    this.client = client
    this.player = player
    this.version = 0
  }

  async decode () {
    this.secondsSinceLastSave = this.readInt()
    this.secondsSinceLastMaintenance = this.readInt()
    this.currentTimestamp = this.readInt()

    this.mapId = this.readInt()
    this.layoutId = this.readInt()

    /* sub_36BCBC - START */

    this.readInt()
    this.readInt()

    this.readInt()
    this.readInt()

    this.readInt()
    this.readInt()

    /* sub_36BCBC - END */

    this.reengagementSeconds = this.readInt()
  }

  async encode () {
    this.writeInt(this.secondsSinceLastMaintenance) // secondsSinceLastSave
    this.writeInt(this.secondsSinceLastMaintenance) // secondsSinceLastMaintenance
    this.writeInt(this.currentTimestamp) // currentTimestamp

    this.LogicClientHome()
    this.LogicClientAvatar()

    this.writeInt(this.mapId) // mapId
    this.writeInt(this.layoutId) // layoutId

    this.writeInt(352)
    this.writeInt(1190797808)

    this.writeInt(352)
    this.writeInt(1192597808)

    this.writeInt(352)
    this.writeInt(1192597808)

    this.writeInt(this.reengagementSeconds) // reengagementSeconds

    console.log('[*] >> OwnHomeDataMessage sent!')
  }

  async LogicClientHome() {
    this.writeLong(this.client.player.highID, this.client.player.lowID)

    this.writeInt(0) // m_shieldDurationSeconds
    this.writeInt(0) // m_guardDurationSeconds
    this.writeInt(0) // m_personalBreakSeconds

    // Home JSON
    this.writeString("{\"exp_ver\":1,\"active_layout\":0,\"act_l2\":0,\"layout_state\":[0,0,0,0,0,0,0,0],\"layout_cooldown\":[0,0,0,0,0,0,0,0],\"buildings\":[{\"data\":1000001,\"id\":500000000,\"lvl\":0,\"x\":28,\"y\":16},{\"data\":1000004,\"id\":500000001,\"lvl\":0,\"x\":32,\"y\":12,\"res_time\":0},{\"data\":1000000,\"id\":500000002,\"lvl\":0,\"x\":32,\"y\":15,\"units\":[]},{\"data\":1000015,\"id\":500000003,\"lvl\":0,\"x\":26,\"y\":19},{\"data\":1000014,\"id\":500000004,\"lvl\":0,\"x\":28,\"y\":35},{\"data\":1000004,\"id\":500000005,\"lvl\":1,\"x\":25,\"y\":21,\"res_time\":0},{\"data\":1000008,\"id\":500000006,\"lvl\":1,\"x\":29,\"y\":13,\"attack_mode\":false,\"attack_mode_draft\":false,\"attack_mode_war\":false,\"attack_mode_draft_war\":false,\"attack_mode2\":false,\"attack_mode_d2\":false,\"attack_mode3\":false,\"attack_mode_d3\":false,\"attack_mode4\":false,\"attack_mode_d4\":false,\"attack_mode5\":false,\"attack_mode_d5\":false,\"attack_mode_chal\":false,\"attack_mode_dchal\":false,\"attack_mode_arrw\":false,\"attack_mode_draft_arrw\":false},{\"data\":1000002,\"id\":500000007,\"lvl\":1,\"x\":26,\"y\":12,\"res_time\":0},{\"data\":1000002,\"id\":500000008,\"lvl\":1,\"x\":31,\"y\":22,\"res_time\":0},{\"data\":1000015,\"id\":500000009,\"lvl\":0,\"x\":31,\"y\":20},{\"data\":1000003,\"id\":500000010,\"lvl\":0,\"x\":28,\"y\":23},{\"data\":1000005,\"id\":500000011,\"lvl\":0,\"x\":29,\"y\":10},{\"data\":1000008,\"id\":500000012,\"lvl\":1,\"x\":28,\"y\":20,\"attack_mode\":false,\"attack_mode_draft\":false,\"attack_mode_war\":false,\"attack_mode_draft_war\":false,\"attack_mode2\":false,\"attack_mode_d2\":false,\"attack_mode3\":false,\"attack_mode_d3\":false,\"attack_mode4\":false,\"attack_mode_d4\":false,\"attack_mode5\":false,\"attack_mode_d5\":false,\"attack_mode_chal\":false,\"attack_mode_dchal\":false,\"attack_mode_arrw\":false,\"attack_mode_draft_arrw\":false},{\"data\":1000006,\"id\":500000013,\"lvl\":2,\"x\":25,\"y\":15,\"unit_prod\":{\"m\":1,\"unit_type\":0}}],\"obstacles\":[],\"traps\":[],\"decos\":[],\"vobjs\":[{\"data\":39000000,\"id\":508000000,\"lvl\":0,\"x\":25,\"y\":54},{\"data\":39000002,\"id\":508000001,\"lvl\":0,\"x\":34,\"y\":54}],\"respawnVars\":{\"secondsFromLastRespawn\":84,\"respawnSeed\":-212853765,\"obstacleClearCounter\":0,\"time_to_gembox_drop\":273516,\"time_in_gembox_period\":244716},\"units\":{\"unit_prod\":{}},\"spells\":{\"unit_prod\":{}},\"buildings2\":[{\"data\":1000034,\"id\":500000000,\"lvl\":0,\"x\":25,\"y\":22},{\"data\":1000033,\"id\":500000006,\"lvl\":0,\"wI\":6,\"wP\":1,\"wX\":0,\"x\":31,\"y\":28},{\"data\":1000033,\"id\":500000007,\"lvl\":0,\"wI\":6,\"wX\":1,\"x\":29,\"y\":28},{\"data\":1000033,\"id\":500000008,\"lvl\":0,\"wI\":6,\"wX\":2,\"x\":33,\"y\":28},{\"data\":1000033,\"id\":500000009,\"lvl\":0,\"wI\":6,\"wX\":3,\"x\":30,\"y\":28},{\"data\":1000033,\"id\":500000010,\"lvl\":0,\"wI\":6,\"wX\":4,\"x\":32,\"y\":28},{\"data\":1000033,\"id\":500000036,\"lvl\":0,\"wI\":36,\"wP\":1,\"wX\":0,\"x\":34,\"y\":24},{\"data\":1000033,\"id\":500000037,\"lvl\":0,\"wI\":36,\"wX\":1,\"x\":34,\"y\":22},{\"data\":1000033,\"id\":500000038,\"lvl\":0,\"wI\":36,\"wX\":2,\"x\":34,\"y\":26},{\"data\":1000033,\"id\":500000039,\"lvl\":0,\"wI\":36,\"wX\":3,\"x\":34,\"y\":23},{\"data\":1000033,\"id\":500000040,\"lvl\":0,\"wI\":36,\"wX\":4,\"x\":34,\"y\":25},{\"data\":1000035,\"id\":500000065,\"lvl\":0,\"locked\":true,\"x\":25,\"y\":26,\"res_time\":0},{\"data\":1000040,\"id\":500000115,\"lvl\":0,\"locked\":true,\"x\":22,\"y\":18,\"unit_prod\":{\"m\":1,\"unit_type\":0}},{\"data\":1000044,\"id\":500000116,\"lvl\":0,\"locked\":true,\"x\":30,\"y\":24},{\"data\":1000039,\"id\":500000117,\"lvl\":0,\"locked\":true,\"x\":13,\"y\":39},{\"data\":1000053,\"id\":500000118,\"lvl\":0,\"locked\":true,\"x\":43,\"y\":14},{\"data\":1000046,\"id\":500000119,\"lvl\":0,\"locked\":true,\"x\":20,\"y\":26},{\"data\":1000042,\"id\":500000120,\"lvl\":0,\"locked\":true,\"x\":26,\"y\":16,\"up2\":{}},{\"data\":1000050,\"id\":500000121,\"lvl\":0,\"locked\":true,\"x\":26,\"y\":20},{\"data\":1000037,\"id\":500000122,\"lvl\":0,\"locked\":true,\"x\":29,\"y\":19,\"res_time\":17709}],\"obstacles2\":[],\"traps2\":[],\"decos2\":[],\"vobjs2\":[{\"data\":39000001,\"id\":508000000,\"lvl\":0,\"x\":14,\"y\":53},{\"data\":39000003,\"id\":508000001,\"lvl\":0,\"x\":9,\"y\":56}],\"v2rs\":22,\"tgsec\":0,\"tgseed\":0,\"cooldowns\":[],\"newShopBuildings\":[1,0,1,1,1,1,1,0,2,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"newShopTraps\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"newShopDecos\":[1,4,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-4,0,0,0,-25,0,0,0],\"offer\":{\"t\":1,\"offers\":[]},\"last_league_rank\":0,\"last_alliance_level\":1,\"last_league_shuffle\":0,\"last_season_seen\":-1,\"last_news_seen\":137,\"war_tutorials_seen\":0,\"war_base\":false,\"arr_war_base\":false,\"army_names\":[\"\",\"\",\"\",\"\"],\"account_flags\":0,\"bool_layout_edit_shown_erase\":false,\"events\":[6,21],\"es\":0}")

    //Calender JSON
    this.writeString("{}")

    // Global JSON
    this.writeString("{}")
  }

  async LogicClientAvatar() {
    this.writeLong(this.client.player.highID, this.client.player.lowID)
    this.writeLong(this.client.player.highID, this.client.player.lowID)

    /*if (this.m_allianceId != null)
    {
        this.writeBoolean(true)
        this.writeLong(this.m_allianceId)
        this.writeString(this.m_allianceName)
        this.writeInt(this.m_allianceBadgeId)
        this.writeInt((int) this.m_allianceRole)
        this.writeInt(this.m_allianceExpLevel)
    }
    else
    {*/
        this.writeBoolean(false)
    //}

    /*if (this.m_leagueInstanceId != null)
    {
        this.writeBoolean(true)
        this.writeLong(this.m_leagueInstanceId)
    }
    else
    {*/
        this.writeBoolean(false)
    //}

    this.writeInt(0) // m_legendaryScore
    this.writeInt(0) // m_legendaryScoreVillage2

    //this.m_legendSeasonEntry.Encode(encoder)
    //this.m_legendSeasonEntryVillage2.Encode(encoder)

    this.writeInt(0) // m_duelWinCount
    this.writeInt(0) // m_duelLoseCount
    this.writeInt(0) // m_duelDrawCount

    this.writeInt(0) // m_leagueType
    this.writeInt(1) // m_allianceCastleLevel
    this.writeInt(0) // m_allianceCastleUsedCapacity
    this.writeInt(0) // m_allianceCastleUsedCapacity
    this.writeInt(0) // m_allianceCastleTotalSpellCapacity
    this.writeInt(0) // m_allianceCastleUsedSpellCapacity

    this.writeInt(1) // m_townHallLevel
    this.writeInt(1) // m_townHallLevelVillage2

    this.writeString(this.m_name) // m_name
    this.writeString(this.m_facebookId) // m_facebookId

    this.writeInt(1) // m_expLevel
    this.writeInt(0) // m_expPoints
    this.writeInt(1000000000) // m_diamonds
    this.writeInt(1000000000) // m_freeDiamonds
    this.writeInt(0) // m_attackRating
    this.writeInt(0) // m_attackKFactor
    this.writeInt(0) // m_score
    this.writeInt(0) // m_duelScore
    this.writeInt(0) // m_attackWinCount
    this.writeInt(0) // m_attackLoseCount
    this.writeInt(0) // m_defenseWinCount
    this.writeInt(0) // m_defenseLoseCount
    this.writeInt(0) // m_treasuryGoldCount
    this.writeInt(0) // m_treasuryElixirCount
    this.writeInt(0) // m_treasuryDarkElixirCount
    this.writeInt(0)

    /*if (this.m_warInstanceId != null)
    {
        this.writeBoolean(true)
        this.writeLong(this.m_warInstanceId)
    }
    else
    {*/
        this.writeBoolean(false)
    //}

    this.writeBoolean(false) // m_nameSetByUser
    this.writeBoolean(false) // m_allianceChatFilter
    this.writeInt(0) // m_nameChangeState
    this.writeInt(0) // m_cumulativePurchasedDiamonds
    this.writeInt(0) // m_redPackageState
    this.writeInt(0) // m_warPreference
    this.writeInt(0) // m_attackShieldReduceCounter
    this.writeInt(0)

    /*if (this.m_challengeId != null)
    {
        this.writeBoolean(true)

        this.writeInt(this.m_challengeState)
        this.writeLong(this.m_challengeId)
    }
    else
    {*/
        this.writeBoolean(false)
    //}

    this.writeInt(0); // this.m_resourceCap.length
    /* for (let i = 0; i < this.m_resourceCap.length; i++) {
        this.m_resourceCap[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_resourceCount.length
    /* for (let i = 0; i < this.m_resourceCount.length; i++) {
        this.m_resourceCount[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitCount.length
    /* for (let i = 0; i < this.m_unitCount.length; i++) {
        this.m_unitCount[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_spellCount.length
    /* for (let i = 0; i < this.m_spellCount.length; i++) {
        this.m_spellCount[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitUpgrade.length
    /* for (let i = 0; i < this.m_unitUpgrade.length; i++) {
        this.m_unitUpgrade[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_spellUpgrade.length
    /* for (let i = 0; i < this.m_spellUpgrade.length; i++) {
        this.m_spellUpgrade[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_heroUpgrade.length
    /* for (let i = 0; i < this.m_heroUpgrade.length; i++) {
        this.m_heroUpgrade[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_heroHealth.length
    /* for (let i = 0; i < this.m_heroHealth.length; i++) {
        this.m_heroHealth[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_heroState.length
    /* for (let i = 0; i < this.m_heroState.length; i++) {
        this.m_heroState[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_allianceUnitCount.length
    /* for (let i = 0; i < this.m_allianceUnitCount.length; i++) {
        this.m_allianceUnitCount[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_missionCompleted.length
    /* for (let i = 0; i < this.m_missionCompleted.length; i++) {
        ByteStreamHelper.WriteDataReference(encoder, this.m_missionCompleted[i]);
    } */

    this.writeInt(0); // this.m_achievementRewardClaimed.length
    /* for (let i = 0; i < this.m_achievementRewardClaimed.length; i++) {
        ByteStreamHelper.WriteDataReference(encoder, this.m_achievementRewardClaimed[i]);
    } */

    this.writeInt(0); // this.m_achievementProgress.length
    /* for (let i = 0; i < this.m_achievementProgress.length; i++) {
        this.m_achievementProgress[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_npcStars.length
    /* for (let i = 0; i < this.m_npcStars.length; i++) {
        this.m_npcStars[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_lootedNpcGold.length
    /* for (let i = 0; i < this.m_lootedNpcGold.length; i++) {
        this.m_lootedNpcGold[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_lootedNpcElixir.length
    /* for (let i = 0; i < this.m_lootedNpcElixir.length; i++) {
        this.m_lootedNpcElixir[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_allianceUnitVisitCapacity
    this.writeInt(0); // this.m_allianceUnitSpellVisitCapacity

    this.writeInt(0); // this.m_heroMode.length
    /* for (let i = 0; i < this.m_heroMode.length; i++) {
        this.m_heroMode[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_variables.length
    /* for (let i = 0; i < this.m_variables.length; i++) {
        this.m_variables[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitPreset1.length
    /* for (let i = 0; i < this.m_unitPreset1.length; i++) {
        this.m_unitPreset1[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitPreset2.length
    /* for (let i = 0; i < this.m_unitPreset2.length; i++) {
        this.m_unitPreset2[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitPreset3.length
    /* for (let i = 0; i < this.m_unitPreset3.length; i++) {
        this.m_unitPreset3[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_previousArmy.length
    /* for (let i = 0; i < this.m_previousArmy.length; i++) {
        this.m_previousArmy[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_eventUnitCounter.length
    /* for (let i = 0; i < this.m_eventUnitCounter.length; i++) {
        this.m_eventUnitCounter[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitCountVillage2.length
    /* for (let i = 0; i < this.m_unitCountVillage2.length; i++) {
        this.m_unitCountVillage2[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_unitCountNewVillage2.length
    /* for (let i = 0; i < this.m_unitCountNewVillage2.length; i++) {
        this.m_unitCountNewVillage2[i].encode(encoder);
    } */

    this.writeInt(0); // this.m_freeActionCount.length
    /* for (let i = 0; i < this.m_freeActionCount.length; i++) {
        this.m_freeActionCount[i].encode(encoder);
    } */
  }
}

module.exports = OwnHomeDataMessage