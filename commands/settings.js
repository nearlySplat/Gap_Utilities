const Discord = require('discord.js');
let embeds = require('../misc/embeds');


module.exports = {
    help: {
        "name": ">settings",
        "id": "settings",
        "aliases": [
            "setting",
            "settings",
            "config",
            "set"
        ],
        "desc": "[WIP] Sets default settings.",
        "example": ">settings default",
        "whitelisted": false,
        "category": "config"
    },
    /**
     * @param {Discord.Client} bot
     * @param {Discord.Message | Discord.PartialMessage} msg
     * @param {string[]} args
     * @param {firebase.default.database.Database} db
     */
    run: async (bot, msg, args, db, flags, ctx) =>
    {
        if (args[2] == "guild" && (!msg.member.hasPermission('MANAGE_GUILD') && msg.author.id != "728342296696979526"))
            {
                ctx.respond(embeds.userPermissionsMissing('manage_guild'))
            };
        if (!args[1] || !args[2] || !args[3]) return ctx.respond("You need to provide a type, key and value. Example: `settings addprefix user e;`");
        switch (args[1].toLowerCase())
            {
                case 'addprefix':
                    let data = db.get(`settings.${args[2] == "user" ? "u" : "g"}${msg.guild.id}.prefixes`);
                    if (data.length >= 25) return ctx.respond("Max number of prefixes reached.")
                    if (!(data ?? false)) { data = []; db.set(`settings.${args[2] == "user" ? "u" : "g"}${msg.guild.id}.prefixes`, data) }
                    if (data.includes(args.slice(3).join(" "))) return ctx.respond("Prefix already exists.")
                    let index = data.push(args.slice(3).join(" ")) - 1,
                      value = data[index];
                    db.set(`settings.${args[2] == "user" ? "u" : "g"}${msg.guild.id}.prefixes`, data)
                    return ctx.respond('Prefix `' + args.slice(3).join(' ') + '` was added to the database.');
                 case 'rmprefix':
                    let data = db.get(`settings.${args[2] == "user" ? "u" : "g"}${msg.guild.id}.prefixes`);
                    if (!(data ?? false)) { data = []; db.set(`settings.${args[2] == "user" ? "u" : "g"}${msg.guild.id}.prefixes`, data) }
                    if (!data.includes(args.slice(3).join(" "))) return ctx.respond("Prefix does not exist.")
                    data = data.splice(data.indexOf(args.slice(3).join(" ")), 1)
                    db.set(`settings.${args[2] == "user" ? "u" : "g"}${msg.guild.id}.prefixes`, data)
                    return ctx.respond('Prefix `' + args.slice(3).join(' ') + '` was removed from the database.');
            }
    }
};
