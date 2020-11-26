const Discord = require('discord.js');

module.exports = {
    help: {
        "name": ">ban",
        "id": "ban",
        "aliases": [
            "execute",
            "ban"
        ],
        "desc": "Ban members of the server.",
        "example": ">ban 770232718339604522"
    },
    /**
     * @param {Discord.Client} bot
     * @param {Discord.Message | Discord.PartialMessage} msg
     * @param {string[]} args
     */
    run: (bot, msg, args) =>
    {
        let msgF = msg.channel.send("Getting Latencies...");
        let when = Date.now();
        let msgLatency = Date.now() - when;
        let _ = new Discord.MessageEmbed()
            .setTitle("🏓 Pong!")
            .setColor("red")
            .setDescription("The bot is online!")
            .addField("WebSocket Latency", `\`\`\`js\n${bot.ws.ping}\`\`\``);
        // .addField("Message Latency", `\`\`\`js\n${msgLatency}\`\`\``);


        msg.channel.send([`There is an embed attached to this message. If you can't see it, check your settings under \`Text and Images\`. If you can't see it after that, an admin may have deleted the embed.`, _]);
    }
};;;