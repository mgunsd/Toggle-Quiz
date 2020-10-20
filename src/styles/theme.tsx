import React, { useState, useContext, FC} from "react";
import { ThemeProvider, ThemeContext } from "styled-components";


export interface IFonts {
  title:string,
  body:string, 
 };

export const f :IFonts = {
  title: 'muli',
  body: 'muli',
};

export interface IColors {
  white:string,
  base:string,
  text:string,
  shadow:string,
 
 };
 
 export const c: IColors = {
   white: '#fbfbfb',
   base:'#f1f9ff',
   text: '#ffffff',
   shadow:'hsla(0,0%,67%,.4)',
 };

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
  const [theme, setTheme] = useState<string>("default")
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