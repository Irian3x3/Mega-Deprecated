const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'say',
	description: 'Says what you want',
	execute(message, args) {

		const sayContent = args.join(" ")

		if (!sayContent) {
			const embed = new MessageEmbed()
				.setDescription('**What do you want me to say?**')
				.setColor('RANDOM')

			return message.channel.send(embed)
		};
		message.delete( { timeout: 1000 } )
		message.channel.send(sayContent);


	}
};