const Discord = require('discord.js')
    module.exports = {
    name: 'eval',
    description: 'Evaluates provided code',
    aliases: ['evaluate'],
    usage: '[command name]',
    ownerOnly: true,
    execute(message, args, bot) {
        const { inspect } = require("util")
        
    try {
        let toEval = args.join(" ")
        
        if (!toEval) {
            return message.channel.send(`404: Cannot evaluate nothing`);
        } else {
            if(toEval.includes("bot.token")) return;
            let hrStart = process.hrtime()
            let hrDiff;
             let evaluated = inspect(eval(toEval, { depth: 0 }));
            hrDiff = process.hrtime(hrStart);
            return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
        }
        
    } catch (e) {
        return message.channel.send(`Error while evaluating: \`${e.message}\``);
    }

    }
};