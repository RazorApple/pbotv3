
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.author.id != "384342022955466753") return message.reply("fucking cunt why are you trying to run this?");
message.react('👌');
bot.user.setUsername(args[0]);
message.reply("My username is now " + args[0] + ".")
}

module.exports.help = {
  name: "username"
}