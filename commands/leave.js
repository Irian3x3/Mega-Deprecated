module.exports = {
    name: "leave",
    description: "Leaves the current guild.",
    ownerOnly: true,
    execute(message) {
        message.react("✅").then(
            message.guild.leave()
        );
    },
};