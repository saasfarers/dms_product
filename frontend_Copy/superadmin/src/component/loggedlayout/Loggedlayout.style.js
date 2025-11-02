import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100vh",
        backgroundColor: theme.palette.grey[50],
    },
    sidebar: {
        width: 300,
        backgroundColor: "#f4f4f4",
        borderRight: "1px solid #e5e7eb",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflowY: "auto",
    },
}));

export default useStyles;