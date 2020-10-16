const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'kick',
	description: 'kick a user in a server',
	execute(message, args) {
    let member = message.mentions.members.first() // || message.guild.members.get(args[0]);

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("You must have the permission `kick members` to access this command");
    }
    else{

        if(!member) {
           const embed = new MessageEmbed()
           .setDescription("Please mention a user to kick")
           .setColor('RANDOM')
            return message.channel.send(embed);
        }
        if(!member.kickable) { 
            const embed = new MessageEmbed()
            .setDescription("I couldn't kick this member! Do I have kick permissions and a higher role than them?")
            .setColor('RANDOM')
            return message.channel.send(embed)
        }

        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "Please provide a reason.";
        member.kick(reason)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag}! | Reason: ${reason}`);
    }
 }
}