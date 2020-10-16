const { MessageEmbed } = require('discord.js')
const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Convert normal text into ASCII.",
    execute(message, args) {
        let toAscii = args.join(" ")
        if (!toAscii) {
            const embed = new MessageEmbed()
                .setDescription("**Please provide text to convert into ASCII.**")
                .setColor('RANDOM')
            return message.channel.send(embed);
        };
        figlet(toAscii, function (err, data) {
            message.channel.send(`\`\`\`${data}\`\`\``)
        })
    }
}