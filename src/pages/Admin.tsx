import { useEffect, useState } from "react";
import Container from "../components/Container";

type Message = {
    name: string;
    email: string;
    phone: string;
    date: string;
};

const API_URL =
    "https://homayonazar.com/api/new_api/callForm/readMessages.php";

export default function Admin() {
    const [password, setPassword] = useState("");
    const [authorized, setAuthorized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const isAuth = localStorage.getItem("admin-auth");
        const savedPassword = sessionStorage.getItem("admin-password");

        if (isAuth === "true" && savedPassword) {
            setAuthorized(true);
            setPassword(savedPassword);
            fetchMessages(savedPassword);
        }
    }, []);

    const fetchMessages = async (pwd: string) => {
        try {
            setLoading(true);

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: pwd })
            });

            const data = await res.json();

            if (data.status === "success") {
                setMessages(data.messages);
                setError("");
            } else {
                setError("Unauthorized");
                setMessages([]);
            }
        } catch (err) {
            console.error(err);
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async () => {
        if (!password) {
            setError("Please enter password");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password })
            });

            const data = await res.json();

            if (data.status === "success") {
                setAuthorized(true);
                setMessages(data.messages);

                // ذخیره وضعیت لاگین
                localStorage.setItem("admin-auth", "true");
                sessionStorage.setItem("admin-password", password);

                setError("");
            } else {
                setError("Wrong password");
            }
        } catch {
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("admin-auth");
        sessionStorage.removeItem("admin-password");

        setAuthorized(false);
        setMessages([]);
        setPassword("");
        setError("");
    };

    if (!authorized) {
        return (
            <div className="my-20">
                <Container>
                    <h2 className="text-3xl font-bold mb-6">Admin Login</h2>

                    <input
                        type="password"
                        placeholder="Admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border rounded mb-4"
                    />

                    <button
                        onClick={handleLogin}
                        className="bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        {loading ? "Checking..." : "Login"}
                    </button>

                    {error && (
                        <p className="text-red-500 mt-4">{error}</p>
                    )}
                </Container>
            </div>
        );
    }
    return (
        <div className="my-20">
            <Container>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Messages</h2>
                    <button  onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" > Logout </button>
                </div>

                {loading && <p>Loading...</p>}
                {!loading && messages.length === 0 && ( <p>No messages yet.</p> )}

                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className="bg-[var(--table)] p-4 rounded-xl">
                            <p><b>Name:</b> {msg.name}</p>
                            <p><b>Email:</b> {msg.email}</p>
                            <p><b>Phone:</b> {msg.phone}</p>
                            <p className="text-sm text-gray-500 mt-2"> {msg.date} </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}