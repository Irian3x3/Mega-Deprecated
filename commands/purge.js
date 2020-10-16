module.exports = {
    name: "purge",
    description: "Bulk deletes a certain amount of messages.",
    aliases: ["clear", "bulk"],
    cooldown: 5,
    execute(message, args) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const { MessageEmbed } = require('discord.js')
            const embed = new MessageEmbed()
                .setDescription('**You need `Manage Messages` permission to use this command!')
                .setColor('RANDOM')
            return message.channel.send(embed)
        }

        if (!args[0]) {
            const { MessageEmbed } = require('discord.js')
            const embed = new MessageEmbed()
                .setDescription('How many messages do you want me to purge?')
                .setColor('RANDOM')
            return message.channel.send(embed)
        }


        if (isNaN(args[0]) == true) {
            const { MessageEmbed } = require('discord.js')
            const embed = new MessageEmbed()
                .setDescription("**That's not a number!**")
                .setColor('RANDOM')
            return message.channel.send(embed)
        }
        message.delete().then(
            message.channel.bulkDelete(args[0])
        )
    }
}