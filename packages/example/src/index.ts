import { Application, Assets } from 'pixi.js';
import { View } from './view';

window.addEventListener('load', () => {
    class Game extends Application {
        public constructor() {
            super({ resizeTo: window, backgroundColor: 0xcdcdcd, hello: true });

            void this.init().then(() => {
                this.stage.addChild(new View());
            });
        }

        public async init(): Promise<void> {
            await Assets.init({ basePath: 'assets' });
            await Assets.load(['duck.png', 'parrot.png', 'pixel.png']);
        }
    }

    window.game = new Game();

    // @ts-expect-error game.view is canvas type
    document.body.appendChild(window.game.view);
});
