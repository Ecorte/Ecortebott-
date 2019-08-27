module.exports = (client, member) => {
  member.send("Welcome!");
  const channel = client.channel.find(r => r.name === "general");
  channel.send(`${member} Welcome to ther server`);
};
