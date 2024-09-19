const { Token } = require("../config.json");
const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Component,
} = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: '1286267347497259071',
    label: 'Green',
  },
  {
    id: '1286267411107938375',
    label: 'Purple',
  },
  {
    id: '1286267472596435026',
    label: 'Gold',
  },
];
client.on('ready', async (c) => {
  try {
    const channel = await client.channels.cache.get('1286267221428928523');
    if (!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary)
      );
    })
    await channel.send({
      content: 'Clam or remove a role.()()()',
      components: [row],
    });
    process.exit();

  } catch (error) {
    console.log(error)
  }
})

client.login(Token);