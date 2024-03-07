    // Utiliza os dados de login para se conectar na twitch e entrar nos chats 
    import dotenv from 'dotenv';
    dotenv.config();
    import tmi from 'tmi.js';
    import config from './config.json' assert { type: 'json' };
    import botConfig from './botConfig.json' assert { type: 'json' };
    import colors from './colors.json' assert {type: 'json'};
    import fs from 'fs/promises';

const client = new tmi.Client({ options: { debug: false, messagesLogLevel: "info" },
 connection: { reconnect: true, secure: true },
  identity: { username: `${process.env.TWITCH_USERNAME}`,
   password: `oauth:${process.env.TWITCH_OAUTH}` },
    channels: ["loosaz","cellbit","peqitw","fitmc"]
}); 
client.connect().catch(console.error);
 client.on('message', (channel, tags, message, self) => 
{
  if(tags.username.toLowerCase() == 'loosaz'){
    changeColor();
} const commandArguments = message.split(' ');
const command = commandArguments[0].toLowerCase();

switch (command) {
    case '+color':
        if (tags.username.toLowerCase() === 'loosaz') {
          // Allow "loosaz" to change color
          if (botConfig.colorConfiguration.changeColor === false) {
            botConfig.colorConfiguration.changeColor = true;
            client.say(channel, 'Color change enabled.');
            fs.writeFile('botConfig.json', JSON.stringify(botConfig, null, 2), (err) => {
              if (err) {
                console.error('Error writing botConfig.json:', err);
                return;
              }
            });
          } else {
            botConfig.colorConfiguration.changeColor = false;
            client.say(channel, 'Color change disabled.');
              changeColorToDefault();
            fs.writeFile('botConfig.json', JSON.stringify(botConfig, null, 2), (err) => {
              if (err) {
                console.error('Error writing botConfig.json:', err);
                return;
              }
            });
          }
        }
        break;

    case '+colorset':
  if (commandArguments.length === 1) {
    client.say(channel, `Available color-sets: ${Object.keys(colors).join(', ')}`);
  } else if (tags.username.toLowerCase() === 'username') {
    // Allow "loosaz" to set the color
    const requestedColorSet = commandArguments[1].toLowerCase();
    if (colors[requestedColorSet]) {
      botConfig.colorConfiguration.set = requestedColorSet;
      client.say(channel, `New color set defined to: ${requestedColorSet}`);
      fs.writeFile('botConfig.json', JSON.stringify(botConfig, null, 2), (err) => {
        if (err) {
          console.error('Error writing botConfig.json:', err);
          return;
        }
      });
    } else {
      client.say(channel, 'Color set not found.');
    }
  }
  break;
}
});
let cooldown = false;
let colorIndex = 0;

const changeColor = async () => {
  if (cooldown) return;
  if (botConfig.colorConfiguration.changeColor === false) return;
  cooldown = true;

  let newColor = colors[botConfig.colorConfiguration.set][colorIndex];
  (colorIndex+1 >= colors[botConfig.colorConfiguration.set].length) ? colorIndex = 0 : colorIndex++;

  try {
      const encodedColor = encodeURIComponent(newColor);
      const options = {
          method: 'PUT',
          headers: {
              'Client-ID': config.helix_id,
              authorization: `Bearer ${config.helix_token}`
          }
      };

      const url = `chat/color?user_id=${config.id}&color=${encodedColor}`;
      const response = await fetch('https://api.twitch.tv/helix/' + url, options);

      if (response.status !== 204) { console.error(await response.json()); }
  }catch(e) {
      console.log(e);
  }finally{
      cooldown = false;
  }
};
const changeColorToDefault = () => {setTimeout(async () => {
    try{
        const encodedColor = encodeURIComponent("#C70039");
        const options = {
            method: 'PUT',
            headers: {
                'Client-ID': config.helix_id,
                authorization: `Bearer ${config.helix_token}`
            }
        };

      const url = `chat/color?user_id=${config.id}&color=${encodedColor}`;
      const response = await fetch('https://api.twitch.tv/helix/' + url, options);

      if (response.status !== 204) { console.error(await response.json()); }
  }catch(e) {
      console.log(e);
  }finally{
      cooldown = false;
  }
  
},1000)};


