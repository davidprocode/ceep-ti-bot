const venom = require('venom-bot');

async function session (session_name) {
    let session = await venom.create({ session: session_name });
    return session
}

class Message {
    constructor(body, author, timestamp){
        this.body = body
        this.author = author
        this.timestamp = timestamp
    }
    show(){
        return {
            body: this.body,
            author: this.author,
            timestamp: this.timestamp      
        }
    }
}

session('ti-ceep').then( client => client.onAnyMessage(
    message => {
        let new_message = new Message(message.body, message.sender.id, message.timestamp)
        console.log(new_message.show());
}))