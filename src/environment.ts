import { AppConfig, configure } from 'ts-appconfig';

export class Environment extends AppConfig {
	readonly PORT: Number = -1;
}

export const env: Environment = configure(Environment);