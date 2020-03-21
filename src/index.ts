import app from './app';
import Config from './config';

/**
 * Server Configuration
 */
const host: string = Config.HOST;
const port: number = Config.PORT;

/**
 * Runs the server
 */
app.listen(port, host, () => console.log(`Apollo Server listening at http://${host}:${port}/graphql`));
