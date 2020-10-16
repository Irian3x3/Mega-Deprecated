const config = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "changelog",
    description: "The bot's changelog, new features and updates",
    aliases: ["news", "cl"],
    execute(message, args, bot) {
        const embed = new MessageEmbed()
        .setAuthor(`Mega's Changelog`)
        .setDescription(`Currently on update: \`${config.version}\` \n **What's new:**`)
        .addField('1', `Made a lot of changes to the \`.serverinfo\` command`, true)
        .addField('2', `Added this command (\`.changelog\`) lol`, true)
        .setColor('RANDOM')
        message.channel.send(embed)
    },
};