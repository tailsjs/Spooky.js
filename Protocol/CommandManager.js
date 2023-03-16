const fs = require("fs");

class CommandManager{
    constructor(){
        this.commands = {}

        fs.readdir('./Protocol/Commands/Client', (err, files) => {
            if(err)console.log(err)
            files.forEach(e => {
                let Command = require(`./Commands/Client/${e.replace(".js", "")}`);
                let commandClass = new Command()

                this.commands[commandClass.commandID] = Command 
            })
        })
    }

    handle(id){
        return this.commands[id]
    };

    getCommands(){
        return Object.keys(this.commands)
    }

}

module.exports = CommandManager