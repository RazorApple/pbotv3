const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return message.reply('Missing the required `Manage Channels` and `Move Members` permissions.');

// Get the mentioned user/bot and check if they're in a voice channel:
let user = message.author;
const member = message.mentions.members.first();
if (!member) return message.reply('You need to @mention a user/bot to kick from the voice channel.');
if (!member.voiceChannel) return message.reply('That user/bot isn\'t in a voice channel.');

// Now we make a temporary voice channel, move the user/bot into the channel, and delete it:
const temp_channel = await message.guild.createChannel(user.id, 'voice', [
  { id: message.guild.id,
    deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'], },
  { id: member.id,
    deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'] }
]);
await member.setVoiceChannel(temp_channel);

await temp_channel.delete();

// Finally, pass some user response to show it all worked out:
msg.react('👌');
/* or just "message.reply", etc.. up to you! */
}

module.exports.help = {
  name: "vckick"
}
