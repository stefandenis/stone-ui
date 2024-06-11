import { createTheme } from "@mui/material";

const darkThemeColors = {
    appBar: {
        backgroundColor: "#000000",
    },
    body: {
        background: "#000000"
    }
}

export const darkTheme = createTheme({
    palette: {
        primary: {
           main: "#f9c252",
           dark: "#17191e"
        },
        secondary: {
            main: "#f8842b"
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: darkThemeColors.appBar.backgroundColor
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "white",
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: darkThemeColors.body.background
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: [
                        "Varela Round"
                    ].join(",")

                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: "rgba(255,255,255,0.9)",
                    "::placeholder": "rgba(255,255,255,0.9)",
                    border: "#f8842b",
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "&.subvariant-hovered": {
                        "& fieldset": {
                            border: "1px solid rgba(255,255,255,0.4)",
                            backgroundColor: "rgba(255,255,255,0.09)"
                        },
                        "& .MuiInputBase-input:hover + fieldset": {
                            border: `1.5px solid #f9c252`
                        },
                        "& .MuiInputBase-input:focus + fieldset": {
                            border: `1.5px solid rgba(255,255,255, 0.6)`
                        }
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "gray"
                }

            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                   color: "rgba(248,132,43,0.5)"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "#f9c252"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#17191e"
                }
            }
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(255,255,255,0.19)"
                }
            }
        }

    }
})
