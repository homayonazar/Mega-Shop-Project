import { useState } from "react";
import Container from "../components/Container";

export default function CompanyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            alert("Please fill all fields!");
            return;
        }

        try {
            const response = await fetch("https://homayonazar.com/api/new_api/callForm/index.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone }),
            });

            const result = await response.json();

            if (result.status === "success") {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
                setName("");
                setEmail("");
                setPhone("");
                setError("");
            } else {
                setError(result.message || "Failed to submit form");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong!");
        }
    };

    return (
        <div className="bg-[var(--bg)] mb-10">
            <p className="text-4xl text-center font-bold mt-10">Contact Us</p>
            <Container>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"
                >
                    <input
                        type="text"
                        placeholder="Company Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* <input
                        type="text"
                        placeholder="Company Address"
                        className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /> */}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition "
                    >
                        Submit
                    </button>

                    {submitted && (
                        <p className="text-green-600 font-semibold text-center mt-2 col-span-1 md:col-span-2">
                            Form submitted successfully!
                        </p>
                    )}

                    {error && (
                        <p className="text-red-600 font-semibold text-center mt-2 col-span-1 md:col-span-2">
                            {error}
                        </p>
                    )}
                </form>
            </Container>
        </div>
    );
}