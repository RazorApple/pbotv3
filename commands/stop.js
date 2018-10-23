const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.author.id != "384342022955466753") return message.reply("fucking cunt why are you trying to run this?");
message.react('👌');
process.exit(1)
}

module.exports.help = {
  name: "stop"
}
