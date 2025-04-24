"use client";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { motion } from "motion/react";

export default function Header() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <AppBar position="sticky">
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Logo oder Titel */}
                        <Typography variant="h6">My Website</Typography>

                        {/* Navigationsbuttons */}
                        <div>
                            <Button color="inherit" sx={{ marginRight: 2 }}>
                                Home
                            </Button>
                            <Button color="inherit" sx={{ marginRight: 2 }}>
                                About
                            </Button>
                            <Button color="inherit">Contact</Button>
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
}
