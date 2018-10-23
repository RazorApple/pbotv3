const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {


if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
if (args[0] == "help") {
message.reply("Usage: !addrole <user> <role>");
return;
}
  let role = args.join(" ").slice(22);
  let gRole = message.guild.roles.find(`name`, role);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  if (!role) return message.reply("Specify a role!");
  if (!gRole) return message.reply("Boiii where did the fucking role go?");
  if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
console.log(args[0])
console.log(args[1])
member.addRole(role).catch(console.error);
message.reply("SUCESS: Completed without failure.")
}

module.exports.help = {
  name: "addrole"
}
