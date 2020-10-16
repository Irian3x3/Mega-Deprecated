const { MessageEmbed } = require("discord.js")

module.exports = {
	name: 'ping',
	description: 'Shows bot ping!',
	execute(message) {
      const embed = new MessageEmbed()
      .setDescription("Ping...")
      .setColor('RANDOM')
      message.channel.send(embed).then(msg => {
        const embed2 = new MessageEmbed()
        .addField("Message Latency", `\`\`\`${message.client.ws.ping} ms\`\`\``)
        .setColor('RANDOM')
        msg.edit(embed2)
      });
  },
};