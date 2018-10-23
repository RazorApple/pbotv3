const tokenfile = require("../token.json");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
if (message.author.id != "384342022955466753") return message.reply("fucking cunt why are you trying to run this?");
message.react('👌');
restart(message.channel);
function restart(channel) {
// send channel a message that you're resetting bot [optional]
channel.send('Restarting...')
bot.destroy()
bot.login(tokenfile.token);
}
}

module.exports.help = {
name: "restart"
}