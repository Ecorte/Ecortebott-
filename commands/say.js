// if (cmd === "say") {

module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete().then(console.log("Message Delete"));
};
