const { MessageEmbed } = require('discord.js');

const snoowrap = require('snoowrap');
const r = new snoowrap({
    userAgent: 'e',
    clientId: '9KGa_sWGonZctw',
    clientSecret: 'bTXWj7y-HN0UL_3w11x49elBpPk',
    refreshToken: '577798536903-lGwpA4oNUAXdX8acxCRyajAw-ck'
});

module.exports = {
	name: 'reddit',
	description: 'Reddit search',
    execute(message, args) {
        r.getTop(args[0], {
            limit: 100,
            time: 'day',
        }).then(result => {
            const index = Math.floor(Math.random() * 99);
            const post = result[index];

            if(!args[0]) { 
            const idot = new MessageEmbed()
            .setDescription('**Please provide a subreddit name**')
            return message.channel.send(idot) 
        }
            // h
            console.log(post);

            if(!post) {
                const hmm = new MessageEmbed()
                .setDescription("**This is an unknown subreddit, maybe try a different query?**")
                return message.channel.send(hmm)
            }
            if(post.over_18 && !message.channel.nsfw) {
                const no = new MessageEmbed()
                .setDescription("**Content Blocked**: May contain adult content")
                return message.channel.send(no)
            }
            // Creates the discord embed
            const embed = new MessageEmbed()
        
            // Sets the author
                .setAuthor(post.num_comments+' comments | '+post.ups+' upvotes | Author: u/'+post.author.name)
           
            // Sets the title
                .setTitle(post.title)
                
            // Sets desc
                .setDescription(post.selftext)

            // Makes the title be a link   
                .setURL('https://reddit.com'+post.permalink)
                
            // Posts the image    
                .setImage(post.url)
                .setColor('RANDOM')

            message.channel.send(embed)
        
        });
    }
}