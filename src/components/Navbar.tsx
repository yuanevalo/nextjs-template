"use client";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { motion } from "motion/react";

export default function Navbar() {
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
                        <Typography variant="h6">My Website</Typography>

                        <div>
                            <Button
                                color="inherit"
                                sx={{ marginRight: 2 }}
                                href="#"
                            >
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                sx={{ marginRight: 2 }}
                                href="#"
                            >
                                About
                            </Button>
                            <Button
                                color="inherit"
                                sx={{ marginRight: 2 }}
                                href="#"
                            >
                                Contact
                            </Button>
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
}
