import { Box, Button, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useBoolean } from "react-use";
import Image from "./assets/form.jpg";
import Input from "./components/Input";

function App() {
  const [submitting, toggle] = useBoolean(false);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack mt={8} alignItems="center" height="100vh" spacing={4}>
      <Typography fontSize={32} fontWeight={600}>
        图片表单demo
      </Typography>
      <Box sx={{ position: "relative", maxWidth: 390, width: "100%" }}>
        <Box
          component="img"
          src={Image}
          width="100%"
          maxWidth={500}
          sx={{ zIndex: -1 }}
        />
        <Input label="A" bottom={28} right={64} />
        <Input label="B" top={23} right={63} />
        <Input label="C" top={124} right={147} />
        <Input label="D" bottom={31} left={108} />
        <Input label="E" top={66} left={10} />
        <Input label="F" top={39} left={76} />
        <Input label="G" top={28} left={154} />
      </Box>
      <Button
        variant="contained"
        disabled={submitting}
        sx={{ width: 240 }}
        onClick={() => {
          toggle();
          setTimeout(() => {
            toggle();
            enqueueSnackbar("数据已提交", { variant: "success" });
          }, 1500);
        }}
      >
        提交
      </Button>
    </Stack>
  );
}

export default App;
