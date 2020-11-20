const Discord = require('discord.js');

module.exports = {
    help: {
        "name": ">role",
        "id": "role",
        whitelisted: false,
        "aliases": [
            "role"
        ],
        "desc": "Coming Soon!",
        "example": ">role add 36811510864111206 10299382993849283"
    },
    /**
     * @param {Discord.Client} bot
     * @param {Discord.Message} msg
     * @param {string[]} args
     */
    run: (bot, msg, args) =>
    {
        let _ = new Discord.MessageEmbed({
            color: "black",
            title: "User Statistics",
            description: "This person better be ready for this!",
            fields: [
                {
                    name: "Coming soon",
                    value: "```This feature is coming soon.```"
                }
            ]
        });
        msg.channel.send(_);
    }
};;;