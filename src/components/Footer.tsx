"use client";
import { Container, Typography, Link, Box, Grid } from "@mui/material";
import { motion } from "motion/react";

export default function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Box
                sx={{
                    backgroundColor: "#333",
                    color: "white",
                    py: 4,
                    mt: 5,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={2} justifyContent="center">
                        <Link href="#" color="inherit" underline="none">
                            Privacy Policy
                        </Link>
                        <Link href="#" color="inherit" underline="none">
                            Terms of Service
                        </Link>
                        <Link href="#" color="inherit" underline="none">
                            Support
                        </Link>
                    </Grid>

                    <Typography variant="body2" sx={{ mt: 3 }}>
                        &copy; 2025 My Website. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </motion.div>
    );
}
