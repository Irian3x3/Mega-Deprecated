const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clyde",
    description: "Clyde will say what you want",
    execute(message, args) {
        let toClyde = args.join(" ")
        if(!toClyde) {
            const hi = new MessageEmbed()
            .setDescription("**Please provide some text for clyde to say**")
            .setColor('RANDOM')
            return message.channel.send(hi)
        }
        console.log(encodeURIComponent(toClyde));

        const embed = new MessageEmbed()
        .setImage(`https://ctk-api.herokuapp.com/clyde/${encodeURIComponent(toClyde)}`)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}