import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ThemeToggle from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <Stack spacing={3} sx={{ p: 4, maxWidth: '300px' }}>
      <Stack direction="row" sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4">MUI + Next.js 16</Typography>
        <ThemeToggle />
      </Stack>
      <Typography variant="body1">
        This button, color, and font are all coming from your custom theme.
      </Typography>
      <Button variant="contained" color="primary">
        Themed Button
      </Button>
    </Stack>
  );
}
