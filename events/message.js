// client.on("message", msg => {
//  if (msg.author.bot) return;
//  if (msg.content.indexOf(PREFIX) !== 0) return;
//  const args = msg.content
//    .slice(PREFIX.length)
//    .trim()
//    .split(/ +/g);
//  const cmd = args.shift().toLowerCase();
//
// });

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.PREFIX) !== 0) return;
  const args = message.content
    .slice(client.PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (client.commands.has(command))
    client.commands.get(command)(client, message, args);
};
