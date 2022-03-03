const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
  name: 'minigames',
  description: 'List of Prices for Minigames',

  /**
   *
   * @param {MessageEmbed} MessageEmbed
   * {CommandInteraction} interaction
   */
  execute (interaction) {
    const embed = new MessageEmbed()
      .setColor('RED')
      .setDescription("- **Gear / ingame status may increase prices.**\n\n<:Zamorakcape:929787318041182218> **Mage arena 1**\n```diff\n- Cape unlock 43+ prayer = 1$``````diff\n- Cape unlock 1+ prayer = 2$``````diff\n- 100 of each cast w/o autocast = 1.5$``````diff\n- 100 of each cast with autocast = 0.5$```\n\n<:Imbuedzamorakcape:929788996840747120> **Mage arena 2**\n- No autocast will add 0.5$ per cape.\n- No protection prayers will add 5$ per cape.```diff\n- 1 cape = 2.5$``````diff\n- 3 capes = 6$``````diff\n- 10 capes = 15$```\n\n<:Dragondefender:929791741106737225> **Defenders**\n```diff\n- Bronze to Rune defender (tokens banked) = 10$``````diff\n- Bronze to Rune defender (no tokens banked) = 17$``````diff\n- Bronze to Dragon defender (tokens banked) = 12$``````diff\n- Bronze to Dragon defender (no tokens banked) = 22$``````diff\n- Bronze to Dragon defender (tokens banked) = 12$``````diff\n- Bronze to Dragon defender (no tokens banked) = 22$``````diff\n- Extra Rune or Dragon defenders = 1.5$ / defender```\n\n<:Kourend:929794793368854629> **Great Kourend Favour**```diff\n- Arceuus = 5$``````diff\n- Hosidius = 5$``````diff\n- Lovakengj = 10$``````diff\n- Piscarilius = 7.5$``````diff\n- Shayzien = 7.5$```\n\n<:Magesbook:929795705340563516> **Mage training arena**```diff\n- Bones to peaches = 25$``````diff\n- Mages book = 50$``````diff\n- Master wand = 40$``````diff\n- Infinity hat = 30$``````diff\n- Infinity top = 35$``````diff\n- Infinity bottom = 40$``````diff\n- Infinity gloves = 15$``````diff\n- Infinity boots = 12$``````diff\n- Full infinity = 120$``````diff\n- Shayzien = 7.5$```\n\n<:Elite_void:929931754549149717> **Pest control**```diff\n- Low lv. boat = 40k / point``````diff\n- Medium lv. boat = 35k / point``````diff\n- High lv. boat = 30k / point```\n\n<:Fightertorso:929932689375653928> **Barbarian assault**```diff\n- Torso = 15$``````diff\n- Lv. 5 role = 15$``````diff\n- Lv. 5 role all = 70$``````diff\n- Hat = 15$``````diff\n- Penance skirt = 15$``````diff\n- Runner boots = 5$``````diff\n- Penance gloves = 7.5$``````diff\n- Queen kill = 5$```\n\n<:Master_Farmer:929940186454978580> **Tithe farm**```diff\n- Gricoller's watering can = 15$``````diff\n- Seed box = 18$``````diff\n- Auto-weed = 3$``````diff\n- Herb sack = 15$``````diff\n- Farmer's strawhat = 5$``````diff\n- Farmer's jacket = 12$``````diff\n- Farmer's trousers = 9$``````diff\n- Farmer's boots = 3$``````diff\n- Full farmer outfit = 30$``````diff\n- Everything = 80$```\n\n<:Avatar_of_Destruction:929942289915215882> **Soulwars**```diff\n- Price per point = 100k``````diff\n- Spoils of war = 3m / crate```\n")
    interaction.reply({ content: 'Success', ephemeral: true })
    interaction.channel.send({ embeds: [embed] })
  }
}
