const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "suggest",
    description: "Suggest a feature for the bot",
    aliases: "sugg",
    execute(message, args, bot) {
        let suggContent = args.join(" ");
        if (!suggContent) {
            const bruh = new MessageEmbed()
            .setDescription("**Please also provide suggestion content.**")
            .setColor('RANDOM')
            return message.channel.send(bruh)
        };

        message.channel.send(`**Suggestion sent**: \n ${suggContent}`)
        const suggEmbed = new MessageEmbed()
        .setAuthor(`${message.author.tag} suggests:`)
        .setDescription(suggContent)
        .setTimestamp()
        .setColor('RANDOM')
        message.client.channels.cache.get(`${bot.config.logs}`).send(suggEmbed)
    }
}