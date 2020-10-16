const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Shows avatar of mentioned user or command author.",
    aliases: ["av"],
    execute(message, args) {
            let member = message.mentions.users.first() || message.author
            console.log(member)
        const embed = new MessageEmbed()
        .setAuthor(`${member.tag}'s Avatar`)
        .setImage(`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}`)
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}