const { Client, IntentsBitField } = require("discord.js");
const { Token } = require("../config.json");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,

  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online`)
})
client.on('messageCreate', (msg) => {
  if (msg.author.bot) {
    return;
  }
  if (msg.content === 'hello') {
    msg.reply("What's up nerd!")
  }
})
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("What's up nerd!")
  }
})

client.login(Token);