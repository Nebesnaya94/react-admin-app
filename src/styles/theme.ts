import { defaultTheme } from "react-admin";

export const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    typography: {
      fontFamily: ["Mulish", "sans-serif"].join(","),
    },
  },
};
