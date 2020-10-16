const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'poll',
	description: 'Reloads a command',
	execute(message, args) {

		let pollContent = args.join(" ");
		if(!pollContent) {
			const smth = new MessageEmbed()
			.setDescription('**What will the poll content be?**')
			return message.channel.send(smth)
		}
		
		const embed = new MessageEmbed()		
		
		
		.setTitle('Poll!')
		
		.setDescription(pollContent)

		.setFooter(`Poll by ${message.author.tag}`)
		.setTimestamp()
		.setColor('RANDOM')
		
		message.channel.send(embed).then(msg => {
			msg.react("👍"),
			msg.react("👎")
		})
    }
}