const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'support',
    description: 'A invite to my official discord!',
    execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle('**Mega** Support Server')
        .setDescription('**[Click here](https://invite.gg/iriandev)** to join our support server!')
        .setFooter('Tip: do \'.invite\' to invite Mega to your server!')
        .setColor('RANDOM')
        message.channel.send(embed);
         
    },
};