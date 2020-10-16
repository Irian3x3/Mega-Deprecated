const { MessageEmbed } = require('discord.js');

let logo = 'http://mega-website.irian3x3.repl.co/assets/mega-logo.png'

// Lol
module.exports = {
    name: 'help',
    description: 'List all of my commands',
    aliases: ['commands', 'h', 'hepl', 'command', 'cmds', 'cmd'],
    cooldown: 5,
    execute(message, args, bot) {
        if (args[0] === "help") {
            const lol = new MessageEmbed()
                .setImage("https://ci.memecdn.com/2006703.gif")
            return message.channel.send(lol)
        }

        const embed = new MessageEmbed()

            // Sets the author 
            .setAuthor('Help:')

            // Sets the color 
            .setColor('RANDOM')

            // Sets the thumbnail
            .setThumbnail(logo)

            // Adds the fields
            .addField('Moderation:', '`kick`, `ban`, `poll`, `purge`', true)
            .addField('Bot:', '`ping`, `invite`, `server`, `botinfo`, `suggest`, `changelog`', true)
            .addField('Fun:', '`reddit`, `say`, `encodeurl`, `decodeurl`, `clyde`, `ascii`', true)
            .addField('Info', '`serverinfo`, `avatar`, `userinfo`', true)

            // Sets the footer smh
            .setFooter('Command prefix: \'.\'')

            // Sets a timestamp smh
            .setTimestamp()
            // Checks if author is the owner of the bot and if he is, show this
            if(bot.config.owners.includes(message.author.id)) {
                embed.addField("Owner:", '`eval`, `reload`, `leave`, `shutdown`', true)
            }

        message.channel.send(embed);
    }
};
