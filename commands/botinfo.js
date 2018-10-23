const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    const embed = new Discord.RichEmbed()
        .setTitle(`werBot`)
        .setColor(0x00AE86)
        .setThumbnail(bot.user.displayAvatarURL)
        .addField(' Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(' Uptime ', `${uptime}`, true)
        .addField(' Users ', `${bot.users.size.toLocaleString()}`, true)
        .addField(' Servers', `${bot.guilds.size.toLocaleString()}`, true)
        .addField(' Channels', `${bot.channels.size.toLocaleString()}`, true)
        .addField(' Discord.js', `v${Discord.version}`, true)
		.addField('Created On', `${bot.user.createdAt}`, true);
    message.channel.send({
        embed
    });
},


module.exports.help = {
    name: "botinfo"
}