import { CellScale, type IGridConfig, type IRect } from '@gameastic/pixi-grid';

function getCanvasBounds(): IRect {
    return { x: 0, y: 0, width: window.game.renderer.width, height: window.game.renderer.height };
}

export const getMainGridConfig = (..._args: any[]): IGridConfig => {
    return {
        debug: { color: 0xff0000 },
        area: getCanvasBounds(),
        cells: [
            {
                name: 'cell_1',
                bounds: { x: 0, y: 0, width: 0.5, height: 0.5 },
            },
            {
                name: 'cell_2',
                bounds: { x: 0, y: 0.5, width: 0.5, height: 0.5 },
                padding: { x: 0.1, y: 0.2, width: 0.8, height: 0.6 },
            },
            {
                name: 'cell_3',
                scale: CellScale.showAll,
                bounds: { x: 0.5, y: 0, width: 0.5, height: 0.5 },
                padding: { x: 0.1, y: 0.2, width: 0.8, height: 0.6 },
            },
            {
                name: 'cell_4',
                bounds: { x: 0.5, y: 0.5, width: 0.5, height: 0.5 },
                padding: { x: 0.3, y: 0.3, width: 0.4, height: 0.4 },
            },
        ],
    };
};
