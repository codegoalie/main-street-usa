export const getTheme = (index) => themes[index % themes.length];

const themes = [
  {
    backgroundColor: "#45484d",
    backgroundColorGradient: "#000",
    color: "ghostwhite",
    deg: "135deg",
  },
  {
    backgroundColor: "ghostwhite",
    backgroundColorGradient: "#85a2ce",
    color: "#2f2f2f",
    deg: "35deg",
  },
];
