const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
  name: 'diaries',
  description: 'List of Prices for Diaries',

  /**
   *
   * @param {MessageEmbed} MessageEmbed
   * {CommandInteraction} interaction
   */
  execute (interaction) {
    const embed = new MessageEmbed()
      .setColor('RED')
      .setDescription('<:Ardougne_cloak:929591068733894697> **Ardougne achievement diary**\n```diff\n- Easy = 2$``````diff\n- Medium = 3$``````diff\n- Hard = 4.5$``````diff\n- Elite = 7$```\n\n<:Desert_amulet:929594294321438781> **Desert achievement diary**\n```diff\n- Easy = 2$``````diff\n- Medium = 2.5$``````diff\n- Hard = 5.5$``````diff\n- Elite = 7.5$```\n\n<:Faladorshield4:929594294380146698> **Falador achievement diary**\n```diff\n- Easy = 2$``````diff\n- Medium = 3.5$``````diff\n- Hard = 7.5$``````diff\n- Elite = 8.5$```\n- You will need full prospector for **Hard diaries**\n\n<:Fremennikseaboots4:929594294380146778> **Fremennik achievement diary**\n```diff\n- Easy = 2.5$``````diff\n- Medium = 2.5$``````diff\n- Hard = 5$``````diff\n- Elite = 7.5$```\n\n<:Kandarinheadgear4:929594294367559691> **Kandarin achievement diary**\n```diff\n- Easy = 2.5$``````diff\n- Medium = 4.5$``````diff\n- Hard = 5.5$``````diff\n- Elite = 7.5$```\n\n<:Karamjagloves4:929594294409494558> **Karamja achievement diary**\n```diff\n- Easy = 2.5$``````diff\n- Medium = 4.5$``````diff\n- Hard = 5.5$``````diff\n- Elite = 7.5$```\n-  You require a fire cape for **Elite diary**\n\n<:Explorers_ring:929594294325620796> **Lumbridge & Draynor achievement diary**\n```diff\n- Easy = 2.5$``````diff\n- Medium = 4$``````diff\n- Hard = 5.5$``````diff\n- Elite = 7.5$```\n\n<:Morytanialegs4:929594294468239400> **Morytania achievement diary**\n```diff\n- Easy = 2.5$``````diff\n- Medium = 3.5$``````diff\n- Hard = 5.5$``````diff\n- Elite = 7.5$```\n\n<:Varrock_armour:929594294149476393> **Varrock achievement diary**\n```diff\n- Easy = 2$``````diff\n- Medium = 3.5$``````diff\n- Hard = 6$``````diff\n- Elite = 5$```\n\n<:Western_banner:929594294145278013> **Western Provinces achievement diary**\n```diff\n- Easy = 3$``````diff\n- Medium = 6$``````diff\n- Hard = 9.5$``````diff\n- Elite = 25$```\n- A full set of void armour is required for **Elite diary**\n\n<:Wildernesssword4:929594294518554676> **Wilderness achievement diary**\n```diff\n- Easy = 2.5$``````diff\n- Medium = 4$``````diff\n- Hard = 6.5$``````diff\n- Elite = 7.5$```\n\n- **A additional fee may apply on lower combat levels**')
    interaction.reply({ content: 'Success', ephemeral: true })
    interaction.channel.send({ embeds: [embed] })
  }
}
