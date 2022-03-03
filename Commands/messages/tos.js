const { MessageButton, MessageActionRow, MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
  name: 'tos',
  description: 'Terms of services',

  /**
   *
   * @param {MessageEmbed} MessageEmbed
   * @param {CommandInteraction} interaction
   */

  async execute (interaction) {
    const Embed = new MessageEmbed().setDescription('You can\'t use this command').setColor('RED')
    if(!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({embeds: [Embed], ephemeral: true})

    const embed = new MessageEmbed()
      .setDescription("**Rules**\n*Please follow & Respect all of discords rules & Tos.*\n```diff\n- This is a server for you to buy accounts, gold, services. This is not a price checking discord or a discord for you to sell accounts.\n- We dont buy accounts either, so all pitches will be ignored.\n- Sales are not tolerated and advertising will result into a permanent ban.```\n**Terms Of Services**\n```diff\n- You are required to change your password before & after the services being handled.\n-  We require you to remove unnecessary wealth from your account prior to a service starting.\n- All information in your ticket is completely private to only owner/staff and yourself.\n- You must post a picture of your account stats when you open a ticket prior to getting a quote.\n- All pre-quest and skill requirements must be done or you will be charged for the quests/skills needed to complete your job.\n- All items for the quest must be purchased, or gp must be left on the account so that we can purchase the items needed from the GE.\n- We have the right to decline & refund any order at any point.\n- We are not responsible for any bans or mutes during or after the service is completed everything. All work is carried out by hand.\n- Ironman accounts may add additional fees if items and reqs needed for your job to be completed.\n- We are not held liable for Hcim deaths, & defence levels gained speak/talk with a staff member to try discuss an option if damanaged is caused.\n- Please do try not log in while a service is being done, unless you've spoke with the worker/staff. This prevents account flagging.\n- All jobs will be trained via hand with the following clients: Runelite or the standard oldschool client.\n- Some jobs may take longer then expected, delays happen. We will try compensate, but we are not entitled to.\n- After your job is finished it is your own responsibility to resecure your account. We will not be responsible for any hacks after the service is done.\n- For account purchases, you take full responsability in case of RWT Bans or any bans that may occur after you purchase.\n- All accounts sold are rested and we don't offer any insuranse or refunds for it. Buying accounts is an offense after all and it may sometimes lead to RWT/Macro ban\n- By Clicking on Accept, you're agreeing to terms of service & rules.```")

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('SUCCESS')
          .setCustomId('Verified')
          .setLabel('Accept')
          .setEmoji('✅')
      )
    interaction.reply({ content: 'Success', ephemeral: true })

    const message = interaction.channel.send({ embeds: [embed], components: [row] })
  }
}
