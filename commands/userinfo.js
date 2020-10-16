const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "userinfo",
    description: "Get information about a user.",
    aliases: ["user", "ui", "whois"],
    execute(message, args) {
        let user = message.mentions.members.first() || message.author
        
        const embed = new MessageEmbed()
        .setAuthor(`${user.username}${user.discriminator}`)
        .addField("Username", `${user.username}`, true)
        .addField("Discriminator/Tag", `\`#${user.discriminator}\``, true)
        .addField("ID:", `\`${user.id}\``, true)
        .addField("Avatar URL:", `[Click here](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar})`, true)
        .addField("Creation Date", `${user.createdAt}`, true)
        .addField("Join Guild Date", `${user.joinedAt}`, true)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}