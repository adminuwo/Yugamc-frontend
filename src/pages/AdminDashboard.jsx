import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Trash2, 
    LogOut, 
    Search,
    Eye,
    X,
    FileText,
    Upload,
    Home,
    Plus,
    Check,
    Database,
    RefreshCcw
} from 'lucide-react';
import yugLogo from '../assets/yug logo.webp';

const AdminDashboard = () => {
    const [activeTab, setActiveTab ] = useState('enquiries');
    const [enquiries, setEnquiries] = useState([]);
    const [files, setFiles] = useState([]);
    const [selectedUploadFiles, setSelectedUploadFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        } else {
            fetchEnquiries();
            fetchFiles();
        }
    }, [navigate]);

    const fetchEnquiries = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://yugamc-backend-246449377479.asia-south1.run.app'}/api/admin/enquiries`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
            });
            const data = await response.json();
            if (response.ok) setEnquiries(data.leads || []);
        } catch (err) {
            console.error('Error fetching enquiries:', err);
        }
    };

    const fetchFiles = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://yugamc-backend-246449377479.asia-south1.run.app'}/api/admin/files`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
            });
            const data = await response.json();
            if (response.ok) setFiles(data.files || []);
        } catch (err) {
            console.error('Error fetching files:', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const handleDeleteEnquiry = async (id) => {
        if(!window.confirm("क्या आप इसे सच में हटाना चाहते हैं?")) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://yugamc-backend-246449377479.asia-south1.run.app'}/api/admin/enquiries/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
            });
            if (response.ok) {
                setMessage({ type: 'success', text: 'सफलतापूर्वक हटा दिया गया।' });
                fetchEnquiries();
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'हटाने में कोई दिक्कत आई।' });
        }
    };

    const handleFileSelect = (e) => {
        const selected = Array.from(e.target.files);
        setSelectedUploadFiles(prev => [...prev, ...selected]);
    };

    const removeSelectedFile = (index) => {
        setSelectedUploadFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleUpload = async () => {
        if (!selectedUploadFiles.length) return;
        setIsUploading(true);
        setMessage({ type: '', text: '' });

        const formData = new FormData();
        for (let file of selectedUploadFiles) {
            formData.append('files', file);
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://yugamc-backend-246449377479.asia-south1.run.app'}/api/admin/upload`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` },
                body: formData
            });

            if (response.ok) {
                setMessage({ type: 'success', text: 'Assistant ko training mil gayi!' });
                setSelectedUploadFiles([]);
                fetchFiles();
            } else {
                setMessage({ type: 'error', text: 'Training failed.' });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Server error during training.' });
        } finally {
            setIsUploading(false);
        }
    };

    const handleDeleteFile = async (filename) => {
        if(!window.confirm("क्या आप इस जानकारी को Assistant से हटाना चाहते हैं?")) return;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://yugamc-backend-246449377479.asia-south1.run.app'}/api/admin/files/${filename}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` }
            });
            if (response.ok) {
                setMessage({ type: 'success', text: 'File hata di gayi hai.' });
                fetchFiles();
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Hataane mein fail ho gaya.' });
        }
    };

    const filteredEnquiries = enquiries.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             item.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'All' || item.requirement === filterType;
        return matchesSearch && matchesFilter;
    });

    return (
        <section className="min-h-screen bg-[#F8F9FA] pt-12 pb-20 px-4 md:px-10 font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Simplified Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div className="flex items-center gap-4">
                        <img src={yugLogo} alt="YUG AMC" className="w-12 h-12 object-contain" />
                        <div>
                            <h1 className="text-2xl font-serif text-text font-bold leading-tight">YUG AMC Admin</h1>
                            <Link to="/" className="text-[10px] uppercase font-bold text-accent tracking-[0.2em] flex items-center gap-1 hover:underline">
                                <Home size={10} /> Back to Website
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-secondary/50 flex-1 md:flex-none">
                            <button 
                                onClick={() => setActiveTab('enquiries')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 md:flex-none ${activeTab === 'enquiries' ? 'bg-accent text-white' : 'text-text/40'}`}
                            >
                                User Entries
                            </button>
                            <button 
                                onClick={() => setActiveTab('training')}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex-1 md:flex-none ${activeTab === 'training' ? 'bg-accent text-white' : 'text-text/40'}`}
                            >
                                AI Training
                            </button>
                        </div>
                        <button onClick={handleLogout} className="p-3 bg-white border border-secondary/50 rounded-xl text-text/40 hover:text-red-500 transition-all shadow-sm">
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>

                {message.text && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-4 rounded-xl mb-6 text-sm font-medium border flex justify-between items-center ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                        <span>{message.text}</span>
                        <button onClick={() => setMessage({ type: '', text: '' })}><X size={16} /></button>
                    </motion.div>
                )}

                {activeTab === 'enquiries' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {/* Simple Search */}
                        <div className="bg-white p-4 rounded-2xl border border-secondary flex flex-wrap gap-4 shadow-sm mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text/30" size={16} />
                                <input 
                                    type="text" 
                                    placeholder="Naam ya Email se search karein..." 
                                    className="w-full bg-primary/20 border-none rounded-xl py-3 pl-12 outline-none text-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <select 
                                className="bg-primary/20 rounded-xl px-4 py-3 outline-none text-sm cursor-pointer"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="All">Sari Jarurat (All)</option>
                                <option value="Residential">Ghar (Residential)</option>
                                <option value="Commercial">Dukan/Office (Commercial)</option>
                                <option value="Investment">Investment</option>
                            </select>
                        </div>

                        {/* Leads List */}
                        <div className="bg-white rounded-3xl border border-secondary shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-primary/30 border-b border-secondary">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold uppercase text-text/50">Custoer Ka Naam</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase text-text/50">Jarurat</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase text-text/50">Project</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase text-text/50">Tarikh</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase text-text/50 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-secondary/50">
                                        {filteredEnquiries.length === 0 ? (
                                            <tr><td colSpan="5" className="px-6 py-10 text-center text-text/30 italic">Abhi koi entry nahi hai.</td></tr>
                                        ) : (
                                            filteredEnquiries.map((lead) => (
                                                <tr key={lead.id} className="hover:bg-primary/10 group">
                                                    <td className="px-6 py-4">
                                                        <div className="font-bold text-sm">{lead.name}</div>
                                                        <div className="text-[10px] text-text/30">{lead.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-secondary rounded-lg">
                                                            {lead.requirement}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-xs text-text/60">{lead.project || '-'}</td>
                                                    <td className="px-6 py-4 text-xs text-text/30">{new Date(lead.timestamp).toLocaleDateString()}</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <button onClick={() => setSelectedEnquiry(lead)} className="p-2 text-text/30 hover:text-accent group-hover:scale-110 transition-transform"><Eye size={16} /></button>
                                                            <button onClick={() => handleDeleteEnquiry(lead.id)} className="p-2 text-red-300 hover:text-red-500 group-hover:scale-110 transition-transform"><Trash2 size={16} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'training' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        {/* Training Step 1: File Selection */}
                        <div className="bg-white p-8 rounded-3xl border border-secondary shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">1</div>
                                <h2 className="text-xl font-bold">Assistant ko training dene ke liye file chunein</h2>
                            </div>
                            
                            {!selectedUploadFiles.length ? (
                                <label className="cursor-pointer block border-2 border-dashed border-secondary/50 rounded-2xl p-12 text-center hover:bg-primary/20 transition-all hover:border-accent/40 group">
                                    <input type="file" multiple className="hidden" onChange={handleFileSelect} />
                                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Plus size={32} />
                                    </div>
                                    <span className="text-sm font-bold block text-text/60">PDF, Word ya Text file select karein</span>
                                    <p className="text-[10px] text-text/30 mt-2 uppercase tracking-widest font-bold">Yaha click karein</p>
                                </label>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedUploadFiles.map((file, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-4 bg-primary/20 rounded-xl border border-secondary/30">
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    <FileText size={18} className="text-accent flex-shrink-0" />
                                                    <span className="text-xs font-bold truncate">{file.name}</span>
                                                </div>
                                                <button onClick={() => removeSelectedFile(idx)} className="text-red-400 hover:text-red-600 ml-4"><X size={16} /></button>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={() => document.getElementById('add-more-files').click()} className="text-accent text-[10px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                                        <Plus size={12} /> Aur files jodein
                                    </button>
                                    <input id="add-more-files" type="file" multiple className="hidden" onChange={handleFileSelect} />
                                    
                                    <div className="pt-6 border-t border-secondary">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</div>
                                            <h2 className="text-xl font-bold">Training shuru karein</h2>
                                        </div>
                                        <button 
                                            onClick={handleUpload}
                                            disabled={isUploading}
                                            className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${isUploading ? 'bg-secondary text-text/30' : 'bg-text text-white hover:bg-accent shadow-xl active:scale-[0.98]'}`}
                                        >
                                            {isUploading ? (
                                                <>
                                                    <RefreshCcw className="animate-spin" size={18} />
                                                    Assistant Training le raha hai...
                                                </>
                                            ) : (
                                                <>
                                                    <Check size={18} />
                                                    Ab Train karein
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Active Files List */}
                        <div className="bg-white p-8 rounded-3xl border border-secondary shadow-sm">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Database size={20} className="text-accent" />
                                Active Knowledge (Jo Assistant ko pata hai)
                            </h2>
                            <div className="space-y-3">
                                {files.length === 0 ? (
                                    <div className="p-10 text-center border border-dashed border-secondary/30 rounded-2xl">
                                        <p className="text-sm text-text/30 italic">Abhi ko data nahi sikhaya gaya hai.</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {files.map(f => (
                                            <div key={f.name} className="flex items-center justify-between p-4 bg-white border border-secondary/50 rounded-2xl hover:border-accent/30 transition-all shadow-sm group">
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    <div className="p-2 bg-green-50 text-green-500 rounded-lg">
                                                        <FileText size={18} />
                                                    </div>
                                                    <div className="overflow-hidden">
                                                        <span className="text-[11px] font-bold truncate block">{f.name}</span>
                                                        <span className="text-[9px] text-text/30 uppercase font-bold">Sikhaya Gaya hai</span>
                                                    </div>
                                                </div>
                                                <button onClick={() => handleDeleteFile(f.name)} className="p-2 text-red-200 hover:text-red-500 transition-all group-hover:scale-110"><Trash2 size={16} /></button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Details Modal */}
                <AnimatePresence>
                    {selectedEnquiry && (
                        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEnquiry(null)} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <h3 className="text-2xl font-serif font-bold">Inquiry Details</h3>
                                    <button onClick={() => setSelectedEnquiry(null)} className="p-1 hover:bg-primary rounded-full transition-colors"><X size={24} className="text-text/30" /></button>
                                </div>
                                <div className="space-y-4 mb-8 relative z-10">
                                    <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                                        <p className="text-[10px] uppercase font-bold text-text/30 mb-1 tracking-widest">Customer Naam</p>
                                        <p className="font-bold text-text">{selectedEnquiry.name}</p>
                                    </div>
                                    <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                                        <p className="text-[10px] uppercase font-bold text-text/30 mb-1 tracking-widest">Mobile No.</p>
                                        <p className="font-bold text-text">{selectedEnquiry.phone}</p>
                                    </div>
                                    <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                                        <p className="text-[10px] uppercase font-bold text-text/30 mb-1 tracking-widest">Email</p>
                                        <p className="font-bold text-text">{selectedEnquiry.email}</p>
                                    </div>
                                    <div className="p-4 bg-primary/30 rounded-2xl border border-secondary/50">
                                        <p className="text-[10px] uppercase font-bold text-text/30 mb-1 tracking-widest">Sodesh (Message)</p>
                                        <p className="text-sm italic text-text/70">"{selectedEnquiry.message || 'No message provided'}"</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 relative z-10">
                                    <a href={`tel:${selectedEnquiry.phone}`} className="flex-1 bg-text text-white py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-widest hover:bg-accent transition-all shadow-lg">Phone Karein</a>
                                    <a href={`mailto:${selectedEnquiry.email}`} className="flex-1 bg-secondary text-text/60 py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all">Email Karein</a>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default AdminDashboard;
