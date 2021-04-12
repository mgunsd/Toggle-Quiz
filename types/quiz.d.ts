interface Quiz {
  toptext: string;
  subtext: {
    true: string;
    false: string;
  };
  options: Array[[string[], number]];
}
