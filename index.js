const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready and awaiting Command");
});

bot.on("message", (msg) => {
    if (msg.content.startsWith("<@!443816218646937602>")) {
        let roasts = ["You're as useless as the \"ueue\" in \"queue\"", "Mirrors can't talk. Lucky for you they can't laugh either", "hey, you have something on your chin... no, the 3rd one down", "You're the reason the gene pool needs a lifeguard.", "If i had a face like yours, I'd sue my parents.", "Your only chance of getting laid is to crawl up a chicken's butt and wait.", "Some day you'll go far... andi hope you stay there.", "Aha! I see the fuck-up fairy has visited us again", "You must have been born on a highway cus' that's where most accidents happen", "If laughter is the best medicine, your face must be curing the world", "Is your ass jealous of the amount of shit that just came out of your mouth?", "So a thought crossed your mind? Must have been a long and lonely journey", "If i wanted to kill myself I'd climb your ego and jump to your IQ", "I'd agree with you but then we'd both be wrong", "When I see your face there's not a thing I would change... except the direction I was looking in", "If i had a dollar for every time you said something smart, I'd be broke.", "When you were born the doctor threw you out the window, but the window threw you back.", "You're the reason god created the middle finger", "Your face is just fine but we we'll have to put a bag over that personality", "You bring everyone so much joy when you leave the room", "I thought of you today. It reminded me to take out the trash", "@JeppJeppsson Jesper is boring"];
        let random = Math.floor(Math.random() * roasts.length);

        msg.reply(roasts[random]);
    }
});

bot.on("voiceStateUpdate", (oldMember, newMember) => {
    let newUserChannel = newMember.channel;
    let oldUserChannel = oldMember.channel;


    if (oldUserChannel == null && newUserChannel !== null) {

        console.log("Has joined");
        newUserChannel.join();

    } else if (newUserChannel == null) {

        console.log("Has left");
        oldUserChannel.leave();

    }
});

bot.login("NjM2MTQ4ODIzMzg2ODgyMDQ5.Xa7Zwg.IbjxNVNVxOdEq5_TvQv1L0oT9lA");