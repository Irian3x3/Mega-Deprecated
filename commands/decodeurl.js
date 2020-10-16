const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "decodeurl",
    description: "Decodes a URL.",
    aliases: ["decodeuri"],
    execute(message, args) {
        if (args[0] === "help") {
            const embed = new MessageEmbed()
                .setAuthor("Command: decodeurl")
                .setDescription("Decodes a URL.")
                .addField("Usage", "```.decodeurl [url]```")
                .addField("Example", "```.decodeurl https%3A%2F%2Fgoogle.com```")
                .addField("Aliases", "`decodeuri`")
                .setFooter("[] - Required | <> - Optional")
            return message.channel.send(embed)
        }

        let toDecode = args.join(" ")
        if (!toDecode) {
            const embed = new MessageEmbed()
                .setDescription('**Please provide a URL to decode.**')
                .setColor('RANDOM')
            return message.channel.send(embed)
        }
        const embed = new MessageEmbed()
            .addField('Message:', `${toDecode}`, true)
            .addField('Decoded:', `${decodeURIComponent(toDecode)}`, true)
            .setColor('RANDOM')
        message.channel.send(embed)
    }
}