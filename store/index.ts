//import * as Modules from '../vuex-modules';
import { Database } from 'vuex-typed-modules';
import { AlertModule } from '../vuex-modules';

const database = new Database({ logger: process.browser });

export const plugins = [database.deploy([AlertModule])];

export const state = () => ({});
