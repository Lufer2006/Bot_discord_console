const Discord = require('discord.js');
const readline = require('readline');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot está listo como: ${client.user.tag}!`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        // Reemplaza 'id-del-canal' con el ID del canal donde quieres que el bot envíe mensajes
        let channel = client.channels.get('1222599758607028255');
        if (!channel) {
            console.log('El canal no existe');
            return;
        }
        channel.send(input);
    });
});

// Asegúrate de reemplazar 'tu-token' con el token de tu bot.
client.login('MTIyMzc0NDI1MzkyNzM1ODUwNw.GBvfZQ._ZvTPsI8hOiE0T6NVaOQAm_1wAT6proVq1uio0');