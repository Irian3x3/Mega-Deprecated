const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const bot = new Discord.Client({
	disableMentions: "everyone" // Completely optional. Disables @everyone and @here mentions.
});

bot.config = config;

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}
const cooldowns = new Discord.Collection();

bot.once('ready', () => {
	bot.user.setActivity(`with Mods • ${bot.config.prefix}help`, {
		type: "PLAYING"
	});
	bot.channels.cache.get(`${config.logs}`).send(`I am online on login: \`${bot.user.tag}\``);
	
});

bot.on('message', message => {
	if (!message.content.startsWith(bot.config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if(message.channel.type === "dm") return;

	if (command.ownerOnly && !bot.config.owners.includes(message.author.id)) {
		const nope = new Discord.MessageEmbed()
			.setDescription("Only the bot owner can execute this command")
			.setColor("RED")
		return message.channel.send(nope)
	} // Makes it so if a command is labeled as owner only, it will deny the command.

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			const embed = new Discord.MessageEmbed()
				.setDescription(`Please wait \`${timeLeft.toFixed(1)}\` more second(s) using the \`${command.name}\` command again`)
				.setColor('RANDOM')
			return message.channel.send(embed); // Sets cooldowns
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, bot);
	} catch (error) {
		bot.channels.cache.get(`${config.logs}`).send(`\`${message.author.tag}\` had an error while executing \`${command.name}\` in \`${message.guild.name}\`: \`\`\`${error}\`\`\``)
		message.channel.send(`There was an error running the command \`${command.name}\``)
	}

});

bot.login(bot.config.token); // Login to the bot
