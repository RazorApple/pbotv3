
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Usage: +msgdelete <messageID>");
    return;
  }
message.channel.fetchMessage(args[0]).then(response => {
console.log(response.content)
response.delete().then(response => {
console.log(`Deleted message from ${message.author.username}`)
}).catch(error => {
  console.error(error);
});

}).catch(error => {
  console.error(error);
});
message.delete(500);
}

module.exports.help = {
  name: "msgdelete"
}
