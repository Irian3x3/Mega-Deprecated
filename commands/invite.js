const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'My invitation link!',
    aliases: "inv",
    execute(message) {

        if(message.content === ".") return;

        const embed = new MessageEmbed()
        .setTitle('Invite Mega')
        
        .setDescription("**[Click Here](https://bit.ly/31jHDNu 'My invitation link!')** to invite **Mega**!")
        
        .setThumbnail('https://media.discordapp.net/attachments/744938949226790923/747091531818598471/Screenshot_151.png')
        
        .setFooter('Tip: Type \'.support\' to join my support server!')
        .setColor('RANDOM')
        message.channel.send(embed);
    },
};