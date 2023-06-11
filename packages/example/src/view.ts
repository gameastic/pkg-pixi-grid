import { Grid, type ICellContent, type IGridConfig } from '@gameastic/pixi-grid';
import { Container, Sprite, Text, Texture } from 'pixi.js';
import { getMainGridConfig } from './configs';

export class View extends Grid {
    public constructor() {
        super();

        const duckGroup = new DuckGroup();
        this.attach('cell_1', duckGroup);

        const parrotGroup = new ParrotGroup();
        this.attach('cell_2', parrotGroup);

        const rectGroup = new RectGroup();
        this.attach('cell_3', rectGroup);

        const textGroup = new TextGroup();
        this.attach('cell_4', textGroup);

        window.game.ticker.add(() => {
            duckGroup.rotation += 0.01;
            parrotGroup.rotation -= 0.01;
            rectGroup.rotation += 0.01;
            textGroup.rotation -= 0.01;

            this.rebuild();
        });

        window.addEventListener('resize', () => {
            this.rebuild();
        });
    }

    public getGridConfig(): IGridConfig {
        return getMainGridConfig();
    }
}

class DuckGroup extends Container implements ICellContent {
    public constructor() {
        super();

        const duck1 = Sprite.from('duck.png');
        const duck2 = Sprite.from('duck.png');

        duck1.anchor.set(-2, 2);
        duck2.anchor.set(2, -2);

        this.addChild(duck1);
        this.addChild(duck2);
        this.scale.set(0.5);
    }
}

class ParrotGroup extends Container implements ICellContent {
    public constructor() {
        super();

        const parrot1 = Sprite.from('parrot.png');
        const parrot2 = Sprite.from('parrot.png');

        parrot1.position.set(-140, 0);
        parrot2.position.set(140, 0);

        this.addChild(parrot1);
        this.addChild(parrot2);
        this.scale.set(0.5);
    }
}

class RectGroup extends Sprite {
    public constructor() {
        super(Texture.from('pixel.png'));
    }
}

class TextGroup extends Text {
    public constructor() {
        super('lorem ipsum lorem ipsum', {
            fontSize: 30,
        });

        this.anchor.set(0.5);
    }
}
