const { CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ping',
  description: 'Ping',

  /**
     *
     * @param {CommandInteraction} interaction
     */
  execute(interaction) {
    const Embed = new MessageEmbed().setDescription('You can\'t use this command').setColor('RED')
    if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ embeds: [Embed], ephemeral: true })
    interaction.reply({ content: 'PONG', ephemeral: true })
  }
}
