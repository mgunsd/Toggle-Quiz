import React, { useState, useContext, FC} from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import { colors as c, IColors } from './colors';
import { fonts as f, IFonts } from './fonts';

// option to recognize browser color mode 
const Mode:string = (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'default' : 'default';

//themes object can be seperated to another file when big
export interface IThemes {
  [key: string]: any;
  default: {
      dark: boolean;
      colors:IColors
      fonts: IFonts;
  };
}
export const themes: IThemes = {
  default: {
    dark: true,
    colors: {
      text: c.text,
      white: c.white,
      base: c.base,
      shadow:c.shadow,
    },
    fonts: {
      title: f.title,
      body: f.body,
    },
  }
};

export const useTheme = () => useContext(ThemeContext);

export const Theme: FC = ({ children}:any) => {
  const [theme, setTheme] = useState<string>(Mode)
  return (
    <ThemeProvider
      theme={{
        colors: (themes[theme]).colors,
        fonts: (themes[theme]).fonts,
        setTheme, 
        dark: (themes[theme]).dark,
        theme: theme
      }}
    >
      {children}
    </ThemeProvider>
  )
};
