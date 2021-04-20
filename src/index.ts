import * as discord from "discord.js"
import config from "./config"
const client = new discord.Client()
client.on("ready", () => {
    console.log(`Logged in ${client.user?.tag}`)
})

const {prefix} = config;

client.on("message", (msg) => 
{
    let input = msg.content;

    //Commands
    if(input.startsWith(prefix))
    {
        input = input.substring(prefix.length,input.length) //Removes prefix
        
        //""Help"" menu
        if(input.startsWith("help"))
        {
            msg.react('🇳')
            msg.react('🇴')
        }

        //Translate qwerty to dvorak
        else if(input.startsWith("dvorak"))
        {
            input = input.substring(6,input.length) //Removes dvorak

            let output = ""
            let qwerty: string
            qwerty = "qwertyuiop[]asdfghjkl;'zxcvbnm,./-=QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?_+"
            let dvorak: string
            dvorak = "',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz[]\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ{}"

            for(let i=0; i<input.length; i++)
            {
                let index = qwerty.indexOf(input.substring(i,i+1))
                if(index == -1)
                    output += input.substring(i,i+1)
                else
                    output += dvorak.substring(index,index+1)
            }

            msg.reply(output)
        }
        
        //Translate dvorak to qwerty
        else if(input.startsWith("qwerty"))
        {
            input = input.substring(6,input.length) //Removes qwerty

            let output = ""
            let qwerty: string
            qwerty = "qwertyuiop[]asdfghjkl;'zxcvbnm,./-=QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?_+"
            let dvorak: string
            dvorak = "',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz[]\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ{}"

            for(let i=0; i<input.length; i++)
            {
                let index = dvorak.indexOf(input.substring(i,i+1))
                if(index == -1)
                    output += input.substring(i,i+1)
                else
                    output += qwerty.substring(index,index+1)
            }

            msg.reply(output)
        }

        else //Invalid / Unknown command
        {
            msg.reply("Unkown command. There is no help menu though, so good luck.")
        }
    }

    //Replies
    else if(input.toLowerCase().indexOf("linker sucks") != -1)
    {
        msg.reply(":(")
    }
})

client.login(config.token)
