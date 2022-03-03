const { Client } = require('discord.js')

module.exports = {
  name: 'ready',
  once: true,

  /**
     *
     * @param {Client} client
     */

  async execute (client) {
    console.log(`${client.user.tag} is online!`)
    client.user.setPresence({ activities: [{ name: 'Services ', type: 'WATCHING' }], status: 'dnd' })
  }
}
