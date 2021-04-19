import * as discord from "discord.js"
const client = new discord.Client()
client.on("ready", () => {
    console.log(`Logged in ${client.user?.tag}`)
})

client.on("message", (msg) => {
    if(msg.content == "Linker-Sucks")
    {
        msg.reply(":(")
    }
})

client.login("ODMzNzc2NTA2NDg4MDk0Nzgy.YH3Q4Q.CFHKf4opsEskIWhg0X-VVbuWPxU")