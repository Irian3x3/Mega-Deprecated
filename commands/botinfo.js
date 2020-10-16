const package = require('../package.json');

const os = require('os')

let cpu = ((os.freemem()) * 100 / os.totalmem()).toFixed(2)

const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'botinfo',
    description: 'Provides information and statistics about the bot.',
    aliases: ["bi", "stats", "about", "bot"],
    execute(message, args, bot) {
            if(args[0] === "help") {
                const embed = new MessageEmbed()
                .setAuthor("Command: botinfo")
                .setDescription("Provides information and statistics about the bot.")
                .addField("Usage", "```.botinfo```")
                .addField("Aliases", "`stats`, `about`, `bot`, `bi`")
                return message.channel.send(embed)
            }

        const embed = new MessageEmbed()
        .setAuthor('Information about "Mega":')
        .setDescription(`Hello, I'm **Mega**! I'm a moderation bot with many features! \n My prefix is \`.\`.`)
        .addField('Discord.js Version', `\`${package.dependencies["discord.js"].replace("^", "v")}\``, true)
        .addField('Node.js Version', `\`v12.18.3\``, true)
        .addField('Bot Version', `\`${bot.config.version}\``, true)
        .addField("Servers", `\`${message.client.guilds.cache.size}\``, true)
        .addField("Total Users", `\`${message.client.users.cache.size}\``, true)
        .addField("Total Channels", `\`${message.client.channels.cache.size}\``, true)
        .addField("CPU Usage", `${cpu}%`)
        .setColor('RANDOM')

        message.channel.send(embed)
    }
}