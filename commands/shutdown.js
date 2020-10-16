module.exports = {
    name: "shutdown",
    description: "Turns the bot off",
    aliases: ["sd"],
    ownerOnly: true,
    execute(message, client, args) {
        message.react("✅").then(
            process.exit()
        );
    }
}