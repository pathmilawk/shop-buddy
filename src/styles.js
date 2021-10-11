import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  searchBoxTextField: {
    width: "60%",
      marginTop: "10px",
      marginBottom: "10px"
    },
    productCardSummary: {
        padding: "10px",
    },
    productCardSummaryImage: {
        objectFit: "contain",
    },
    counterButtonGroup: {
        objectFit: "contain",
      },
    counterCount: {
        color: "#282c33",
        cursor: "default"
    },
    parentFlexRight: {
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap",
                alignItems: "center"
    },
    parentFlexCenter: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
                alignItems: "center"
    },
    parentFlexSpaceBetween: {
        display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center"
    },
    parentFlexSpaceAround: {
        display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center"
    },
    productCardFullImage: {
        objectFit: "fill",
        borderRadius: '2%',
        margin: '10px'
    },
    cartItemSummary: {
        padding: "10px",
    },
    cartItemSummaryImage: {
        objectFit: "contain",
    }
});

export default useStyles;
