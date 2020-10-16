const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "encodeurl",
    description: "Encodes a URL.",
    aliases: ["encodeuri"],
    execute(message, args) {
        if (args[0] === "help") {
            const embed = new MessageEmbed()
                .setAuthor("Command: encodeurl")
                .setDescription("Encodes a URL.")
                .addField("Usage", "```.encodeurl [url]```")
                .addField("Example", "```.encodeurl https://google.com```")
                .addField("Aliases", "`encodeuri`")
                .setFooter("[] - Required | <> - Optional")
            return message.channel.send(embed)
        }

        let toEncode = args.join(" ")
        if (!toEncode) {
            const embed = new MessageEmbed()
                .setDescription('**Please provide a URL to encode.**')
                .setColor('RANDOM')
            return message.channel.send(embed)
        }
        const embed = new MessageEmbed()
            .addField('Message:', `${toEncode}`, true)
            .addField('Encoded:', `${encodeURIComponent(toEncode)}`, true)
            .setColor('RANDOM')
        message.channel.send(embed)
    }
}