import * as discord from "discord.js"
const client = new discord.Client()
client.on("ready", () => {
    console.log(`Logged in ${client.user?.tag}`)
})

const prefix = "~"
client.on("message", (msg) => {
    if(msg.content.toLowerCase() == "linker sucks")
    {
        msg.reply(":(")
    }


    if(msg.content.startsWith(prefix+"dvorak"))
    {
        //TODO: qwerty and dvorak strings aren't perfectly accurate
        let output = ""
        let qwerty: string
        qwerty = "qwertyuiop[]asdfghjkl;'zxcvbnm,./-=QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?_+"
        let dvorak: string
        dvorak = "',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz[]\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ{}"

        for(let i=7; i<msg.content.length; i++)
        {
            let index = qwerty.indexOf(msg.content.substring(i,i+1))
            if(index == -1)
                output += msg.content.substring(i,i+1)
            else
                output += dvorak.substring(index,index+1)
        }

        msg.reply(output)
    }

    if(msg.content.startsWith(prefix+"qwerty"))
    {
        let output = ""
        let qwerty: string
        qwerty = "qwertyuiop[]asdfghjkl;'zxcvbnm,./-=QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?_+"
        let dvorak: string
        dvorak = "',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz[]\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ{}"

        for(let i=7; i<msg.content.length; i++)
        {
            let index = dvorak.indexOf(msg.content.substring(i,i+1))
            if(index == -1)
                output += msg.content.substring(i,i+1)
            else
                output += qwerty.substring(index,index+1)
        }

        msg.reply(output)
    }
})

client.login("")