const { CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'discounts',
  description: 'List of the discount roles',

  /**
   *
   * @param {MessageEmbed} MessageEmbed
   * {CommandInteraction} interaction
   */

  execute (interaction) {
    const embed = new MessageEmbed()
      .setColor('RED')
      .setDescription('**What are the benefits of a discount role?**\n- Discount roles make you eligible for a deduction on any service (**Excludes Gold sales** and **Fire capes**)\n- Discount rates do not stack up on each other, nor any other discounts we may offer.\n\n**How to achieve discount roles?**\n- You can do so by ordering services from us!\n\n**Current discount roles:**\n\n<@&856961339088044082>```diff\n- After vouch on Discord and Trustpilots```\n<@&856961746896289793>```diff\n- Total orders must be 100$ or more!```\n<@&929958088780447754>```diff\n- Total orders must be 200$ or more!```\n<@&929958488849932318>```diff\n- Total orders must be 350$ or more!```\n<@&856961852180004904>```diff\n- Total orders must be 750$ or more!```\n<@&856962053640945705>```diff\n- Total orders must be 1250$ or more!```\n<@&856962276526915605>```diff\n- You must boost the server to be eligible for this discount role!```')
    interaction.reply({ content: 'Sucess', ephemeral: true })
    interaction.channel.send({ embeds: [embed] })
  }
}
