import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
        width: 300,
        boxSizing: "border-box",
        borderRight: "1px solid #e5e7eb",
        },
    },
    header: {
        padding: theme.spacing(3),
        borderBottom: "1px solid #e5e7eb",
    },
    logoBox: {
        width: 40,
        height: 40,
        backgroundColor: theme.palette.success.main,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
    },
    adminBox: {
        backgroundColor: "#ecfdf5",
        borderRadius: 8,
        padding: theme.spacing(2),
    },
    languageBox: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: theme.spacing(1, 2),
        backgroundColor: theme.palette.grey[50],
        marginBottom: theme.spacing(2),
    },
    logoutBtn: {
        justifyContent: "flex-start",
        textTransform: "none",
    },
}));

export default useStyles;