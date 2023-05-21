import { Application, Assets } from 'pixi.js';
import { View } from './view';

window.addEventListener('load', () => {
    class Game extends Application {
        public constructor() {
            super({ resizeTo: window, backgroundColor: 0xcdcdcd, hello: true });

            Assets.add('duck', './images/duck.png');
            Assets.add('parrot', './images/parrot.png');
            Assets.add('pixel', './images/pixel.png');

            void Assets.load(['duck', 'parrot', 'pixel']).then(() => {
                this.stage.addChild(new View());
            });
        }
    }

    window.game = new Game();
    // @ts-expect-error
    document.body.appendChild(window.game.view);
});
