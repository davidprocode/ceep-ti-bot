const venom = require('venom-bot');

async function session (session_name) {
    let session = await venom.create({ session: session_name });
    return session
}

session('ti-ceep').then( client => client.onAnyMessage( message => console.log(message.body)))

