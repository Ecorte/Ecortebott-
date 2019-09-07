
module.exports = async (client, message) => {
  const settings = await client.getGuild(message.guild);
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(settings.prefix) !== 0) return;

  //  if (client.commands.has(command)) client.commands.get(command)(client, message, args, settings);
  if (client.commands.has(command)) client.commands.get(command)(client, message, args, settings);
};
