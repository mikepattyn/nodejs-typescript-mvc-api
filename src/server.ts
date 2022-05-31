import 'reflect-metadata';
import bodyParser from 'body-parser'
import * as pkg from '../package.json';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Logger } from './logger';
import './controllers/status.controller';
import { env } from './environment';

// Setup DI
let container = new Container();
container.bind<Logger>(Logger).to(Logger);

// Server configuration
let server = new InversifyExpressServer(container, null, null, null, null);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();

// Serve the application at the given port

var port = env.PORT || "8080";

app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
    console.log(`Running Build: ${(<any>pkg)["version"]}`);
});