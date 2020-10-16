const { MessageEmbed } = require('discord.js');

// Lol
module.exports = {
    name: 'serverinfo',
    description: 'Get information about the current guild/server!',
    aliases: ['server-info', 'srv', 'si'],
    execute(message, args) {
        // console.log(message.guild)

        let verifLevel;

        if(message.guild.verificationLevel === "NONE") {
            verifLevel = 'None'
        } else if (message.guild.verificationLevel === "LOW") {
            verifLevel = 'Low'
        } else if(message.guild.verificationLevel === "MEDIUM") {
            verifLevel = 'Medium'
        } else if(message.guild.verificationLevel === "HIGH") {
            verifLevel = 'High'
        } else if(message.guild.verificationLevel === "VERY_HIGH") {
            verifLevel = 'Very High'
        }

        let isVerified;
        if(message.guild.verified === true) {
            isVerified = "Yes, this server is verified"
        } else if (message.guild.verified === false) {
            isVerified = "No, this server is not verified"
        }

        let region;
        if (message.guild.region === "russia") {
            region = 'Russia'
        } else if (message.guild.region === 'hongkong') {
            region = "Hong Kong"
        } else if (message.guild.region === "brazil") {
            region = 'Brazil'
        } else if (message.guild.region === "europe") {
            region = 'Europe'
        } else if (message.guild.region === "sydney") {
            region = 'Sydney'
        } else if (message.guild.region === "southafrica") {
            region = 'South Africa'
        } else if (message.guild.region === "singapore") {
            region = "Singapore"
        } else if (message.guild.region === "us-south") {
            region = "US South"
        } else if (message.guild.region === "us-central") {
            region = 'US Central'
        } else if (message.guild.region === "us-west") {
            region = 'US West'
        } else if (message.guild.region === "us-east") {
            region = 'US East'
        } else if (message.guild.region === "india") {
            region = "India"
        } else if (message.guild.region === "japan") {
            region = 'Japan'
        }

        let isLarge;
        if(message.guild.large === true) {
            isLarge = "Yes, this server is large"
        } else if (message.guild.large === false) {
            isLarge = 'No, this server is not large'
        }

        const embed = new MessageEmbed()
        
        .setColor('RANDOM')
        
        .setAuthor(`${message.guild.name}`)
        
        .addField('Owner', `${message.guild.owner} (${message.guild.ownerID})`, true)

        .addField('ID', `\`${message.guild.id}\``, true)

        .addField('Members', `${message.guild.memberCount} (${message.guild.members.cache.filter(mm => !mm.user.bot).size} users, ${message.guild.members.cache.filter(mm => mm.user.bot).size} bots)`, true)
        
        .addField('Verification Level', `${verifLevel}`, true)
        
        .addField('Verified', `${isVerified}`, true)
        
        .addField('Region', `${region}`, true)
        
        .addField('Icon URL', `[Click](https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon})`, true)

        .addField('Is Large (100 members or more)', `${isLarge}`, true)

        .setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}`)

        if(!message.guild.vanityURLCode === null) {
            embed.addField("Vanity URL:", `${message.guild.vanityURLCode}`)
        }
        
        message.channel.send(embed);
    }
};