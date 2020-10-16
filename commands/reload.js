const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	aliases: ['rst'],
	ownerOnly: true,
	execute(message, args) {
		
		if(!args[0]) {
			const embed = new MessageEmbed()
			.setDescription('**What command do you want me to reload?**')
			.setColor('RANDOM')
		return message.channel.send(embed)
	}
		
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Reloaded \`${command.name}.js\``);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading command \`${command.name}.js\`:\`\`\`${error.message}\`\`\``);
        

		}
	},
};