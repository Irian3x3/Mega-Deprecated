const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ban',
	description: 'bans the user',
	execute(message, args) {
        if(args[0] === "help") {
            const embed = new MessageEmbed()
            .setAuthor('Command: ban')
            .setDescription("Bans the mentioned user with provided reason.")
            .addField("Usage", "```.ban [mention] <reason>```")
            .addField("Example", "```.ban @FakeMega Impersonating and raiding!```")
            .addField("Aliases", "`None`")
            .setFooter("[] - Required | <> - Optional")
            return message.channel.send(embed)
        }
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);

        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send("You need: **Ban** permissions to use this command!");
        }

        else{
            if(!member)
                return message.channel.send("Please mention a valid member of this server");
            if(!member.bannable) 
                return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

            let reason = args.slice(1).join(' ');
            if(!reason) reason = "No reason provided";

            member.ban(reason)
                .catch(error => message.channel.send(`I was unable to ban <@!${member}>: \`\`\`${error}\`\``));
            message.channel.send(`${member.user.tag} has been banned by ${message.author.tag} | reason: ${reason}`);
        }
    }
}