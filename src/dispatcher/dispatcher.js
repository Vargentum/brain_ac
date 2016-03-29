import {Dispatcher} from "flux";

const dispatcher = new Dispatcher()

//logging
dispatcher.register(console.log.bind(console))

export default dispatcher
