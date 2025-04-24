"use client";
import { Button, Container, Paper, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
    const [message, setMessage] = useState<string | null>(null);

    const fetchMessage = async () => {
        const res = await fetch("/api/hello");
        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 10 }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Paper elevation={4} sx={{ padding: 4, textAlign: "center" }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to my site!
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        This site uses Material UI and Framer Motion for cool
                        animations.
                    </Typography>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={fetchMessage}
                        >
                            Click me!
                        </Button>
                    </motion.div>

                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            style={{ marginTop: "1.5rem" }}
                        >
                            <Typography variant="body1">{message}</Typography>
                        </motion.div>
                    )}
                </Paper>
            </motion.div>
        </Container>
    );
}
