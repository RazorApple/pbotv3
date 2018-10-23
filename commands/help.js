const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.react('👌');
    const embed = {
        "title": "Command help with pBot",
        "url": "http://firewall.co.nf/pbot/",
        "color": 0xff6a00,
        "timestamp": "2018-08-02T11:59:25.292Z",
        "footer": {
            "text": "Copyrighted by OwlsOwlAtNight"
        },
        "fields": [{
                "name": "                +addrole",
                "value": "Add an role to somebody."
            },
            {
                "name": "                +ban",
                "value": "Ban somebody"
            },
            {
                "name": "                +clear",
                "value": "Clear somebodys messasges"
            },
            {
                "name": "                +help",
                "value": "You are looking at help :thinking:thonk:tm::thinking:"
            },
            {
                "name": "                +serverinfo",
                "value": "Check this servers info."
            },
            {
                "name": "                +say",
                "value": "Ask the bot to say anything you want!"
            },
            {
                "name": "                +ms",
                "value": "Check the speed of our Heroku dyno."
            },
            {
                "name": "                +kick",
                "value": "Kick somebody"
            },
            {
                "name": "                +level",
                "value": "See your level"
            },
			{
                "name": "                +eval",
                "value": "OWNER ONLY: SUPER DANGER: CAN DESTROY THE BOT: Eval commands."
            },
            {
                "name": "                +pay",
                "value": "Pay somebody using your coins"
            },
            {
                "name": "                +prefix",
                "value": "Change the prefix"
            },
            {
                "name": "                +removerole",
                "value": "Remove an role"
            },
            {
                "name": "                +report",
                "value": "Report somebody for doing weird shit or idk"
            },
            {
                "name": "                +vtext",
                "value": "Vaporwave letters."
            },
            {
                "name": "                +getpfp",
                "value": "Get your profile picture!"
            },
            {
                "name": "                +purge",
                "value": "Delete X amount of messages."
            },
            {
                "name": "                +msgdelete",
                "value": "Delete a message by its ID.  *You must be in a channel where the msgid is located."
            },
            {
                "name": "                +username",
                "value": "OWNER ONLY: Change the name of the bot."
            },
            {
                "name": "                +invite",
                "value": "Get invites!"
            },
            {
                "name": "                +setnick",
                "value": "Set a nickname for an user/member."
            },
            {
                "name": "                +duck",
                "value": "A duck."
            },
            {
                "name": "                +fox",
                "value": "A fox."
            },
            {
                "name": "                +restart",
                "value": "OWNER ONLY: Restart the bot."
            },
            {
                "name": "                +cat",
                "value": "A cat."
            },
            {
                "name": "                +stop",
                "value": "OWNER ONLY: Stop the bot."
            },
            {
                "name": "                +dog",
                "value": "A dog."
            },
            {
                "name": "                +botinfo",
                "value": "Get the info about this bot."
            }
        ]
    };

    message.author.send({
        embed
    })
    message.reply(":e_mail: | ***YOU HAVE MAIL!***")
}
module.exports.help = {
    name: "help"
};