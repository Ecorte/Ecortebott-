exports.run = (client, message, args) => {
  const channel = client.channels.find(r => r.name === "ecorte-logs");
  const role = message.guild.roles.find(r => r.name === args[0]);
  if (!role) return message.channel.send("This role does not exist");
  if (message.member.roles.find(r => r.name === args[0])) {
    message.member.roles.remove(role);
    message.channel.send(`Role: ${role} removed from ${message.author}.`);
    channel.send(`Role: ${role} removed from ${message.author}.`);
  } else {
    message.member.roles.add(role);
    message.channel.send(`Role: ${role} added to ${message.author}.`);
    channel.send(`Role: ${role} added to ${message.author}.`);
  }
};

exports.help = {
  name: "role"
};
