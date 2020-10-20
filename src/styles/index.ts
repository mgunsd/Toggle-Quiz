export {GlobalStyles} from './stylereset';
export {Theme} from './theme';

export const Color = (color:string) => (props:any) => props.theme.colors[color];
export const Font = (font:string) => (props:any) => props.theme.fonts[font];