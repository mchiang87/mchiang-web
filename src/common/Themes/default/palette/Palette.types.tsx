import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    color: {
      lightBlue: createPalette.ColorPartial;
      primary: createPalette.ColorPartial;
      secondary: createPalette.ColorPartial;
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends Omit<Palette, 'augmentColor'> { }
}
