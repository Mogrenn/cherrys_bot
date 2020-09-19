const Discord = require("discord.js");
const bot = new Discord.Client();
let regex = new RegExp("impostor|Impostor");
bot.on("ready", () => {
    console.log("Ready and awaiting Command");
    //displayServerInfo(bot);
});

bot.on("message", (msg) => {
    if (msg.content.startsWith("<@!443816218646937602>")) {
        let roasts = ["You're as useless as the \"ueue\" in \"queue\"", "Mirrors can't talk. Lucky for you they can't laugh either", "hey, you have something on your chin... no, the 3rd one down", "You're the reason the gene pool needs a lifeguard.", "If i had a face like yours, I'd sue my parents.", "Your only chance of getting laid is to crawl up a chicken's butt and wait.", "Some day you'll go far... andi hope you stay there.", "Aha! I see the fuck-up fairy has visited us again", "You must have been born on a highway cus' that's where most accidents happen", "If laughter is the best medicine, your face must be curing the world", "Is your ass jealous of the amount of shit that just came out of your mouth?", "So a thought crossed your mind? Must have been a long and lonely journey", "If i wanted to kill myself I'd climb your ego and jump to your IQ", "I'd agree with you but then we'd both be wrong", "When I see your face there's not a thing I would change... except the direction I was looking in", "If i had a dollar for every time you said something smart, I'd be broke.", "When you were born the doctor threw you out the window, but the window threw you back.", "You're the reason god created the middle finger", "Your face is just fine but we we'll have to put a bag over that personality", "You bring everyone so much joy when you leave the room", "I thought of you today. It reminded me to take out the trash", "@JeppJeppsson Jesper is boring"];
        let random = Math.floor(Math.random() * roasts.length);

        msg.reply(roasts[random]);
    } else if (msg.content == "Who is the imposter") {
        let imposters = ["Charlie", "Apex", "Dennis", "Cherry", "Skippster", "Japp", "Mr. Autism"];
        let imposter = imposters[Math.floor(Math.random()*imposters.length)];
        msg.channel.send(imposter+", it's fucking "+imposter+" that is the imposter!!!");
    } else if (msg.content.match(regex)) {
        msg.reply("IT IS IMPOSTER ARE YOU DUMB");
    }
});

bot.on("voiceStateUpdate", (oldMember, newMember) => {
    let newUserChannel = newMember.channel;
    let oldUserChannel = oldMember.channel;

    if (oldUserChannel == null && newUserChannel !== null) {
        if (newMember.member.displayName == "CherryBerry") {
            console.log("Has joined");
            newUserChannel.join().then(connection => {
                connection.play("outro.mp3");
                sleep(5000).then(connection => {
                    newUserChannel.leave();
                });

            });
        }

    } else if (newUserChannel == null) {
        console.log("Has left");

        oldUserChannel.leave();

    }
});

bot.login("NjM2MTQ4ODIzMzg2ODgyMDQ5.Xa7Zwg.E-P91aYplvJigeV5rsPKq_24ezs");

function displayServerInfo(client) {
    console.log("Connected as " + client.user.tag);
    console.log("Server : ");
    client.guilds.forEach((guild) => {
        console.log(`-- ${guild.name} - ${guild.id}`);
        console.log("Channels : ");
        guild.channels.forEach((channel) => {
            console.log(`-- ${channel.name} (${channel.type} - ${channel.id})`);
        });
    });
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}