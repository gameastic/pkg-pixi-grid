import { Application, Assets } from 'pixi.js';
import duck from '../assets/duck.png';
import parrot from '../assets/parrot.png';
import pixel from '../assets/pixel.png';
import { View } from './view';

window.addEventListener('load', () => {
    class Game extends Application {
        public constructor() {
            super({ resizeTo: window, backgroundColor: 0xcdcdcd, hello: true });

            Assets.add('duck', duck);
            Assets.add('parrot', parrot);
            Assets.add('pixel', pixel);

            void Assets.load(['duck', 'parrot', 'pixel']).then(() => {
                this.stage.addChild(new View());
            });
        }
    }

    window.game = new Game();
    // @ts-expect-error
    document.body.appendChild(window.game.view);
});
