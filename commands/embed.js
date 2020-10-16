const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "embed",
    description: "Create an embed",
    execute(message, args) {
        let embedCont = args.join(" ")
        if(!embedCont) {
            const err = new MessageEmbed()
            .setDescription("**Please provide some embed content**")
            .setColor("RANDOM")
            return message.channel.send(err)
        }
        const embed = new MessageEmbed()
        .setDescription(`${embedCont}`)
        .setColor("RANDOM")
        .setFooter(`Embed created by ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
    }
}