import { useState } from "react";
import Container from "../components/Container";

export default function CompanyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            setError("Please fill all fields!");
            return;
        }

        setError("");
        setShowDemoModal(true);
    };

    return (
        <div className="py-16 transition-colors duration-300">
            <Container>
                <div className="max-w-3xl mx-auto">
                    
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-black tracking-tight">Contact Us</h1>
                        <p className="text-zinc-400 text-sm mt-3">We'd love to hear from you. Please fill out the form below.</p>
                    </div>

                    {/* Form Card */}
                    <div className="p-8 md:p-12 border rounded-[32px] shadow-sm transition-all duration-300"
                         style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Company Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Your Company" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors"
                                        style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="name@company.com" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors"
                                        style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}
                                    />
                                </div>

                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="+90 (531) 123 4567" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors"
                                    style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}
                                />
                            </div>

                            {error && (
                                <p className="text-rose-500 font-bold text-sm text-center pt-2"> 
                                    {error} 
                                </p>
                            )}

                            <button 
                                type="submit" 
                                className="w-full text-base uppercase tracking-wider font-extrabold py-5 rounded-2xl hover:opacity-90 transition-opacity mt-4 cursor-pointer shadow-lg"
                                style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Container>

            {/* ----- Premium Demo Warning Modal ----- */}
            {showDemoModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-md" onClick={() => setShowDemoModal(false)} />
                    
                    <div className="relative border w-full max-w-md rounded-[32px] p-8 shadow-2xl z-10 text-center animate-in fade-in zoom-in-95 duration-200"
                         style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                        
                        <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-6 text-2xl">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>

                        <h3 className="text-2xl font-black mb-4">Demo Form Notice</h3>
                        
                        <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium mb-8">
                            This contact form is for demonstration purposes only and does not submit real data.
                        </p>

                        <button 
                            onClick={() => setShowDemoModal(false)}
                            className="w-full font-bold text-base py-4 rounded-2xl hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
                        >
                            Understood
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}