import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  lighten,
} from "@mui/material";
import { useBoolean } from "react-use";

export interface InputProps {
  label: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function Input({ label, top, bottom, left, right }: InputProps) {
  const [showModal, toggle] = useBoolean(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top,
          bottom,
          left,
          right,
          borderRadius: 500,
          border: "1px solid gray",
          width: "18px",
          height: "18px",
          background: "#f0bb7f",
          cursor: "pointer",
          fontSize: 12,
          fontWeight: 600,
          "&:hover": {
            background: `${lighten("#f0bb7f", 0.2)}`,
          },
        }}
        onClick={() => toggle()}
      >
        {label}
      </Box>
      <Dialog open={showModal} onClose={() => toggle()}>
        <DialogTitle sx={{ width: 520 }}>输入数据</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField placeholder="输入尺寸信息" fullWidth />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={() => toggle()}>确认</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
