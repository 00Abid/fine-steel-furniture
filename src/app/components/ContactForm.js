"use client";

import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function ContactForm({ initialProduct = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    org: "",
    product: initialProduct,
    msg: "",
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const adminPhone = "916391155926";

    const text = `*New Lead: Fine Steel Furniture*%0A----------------------------%0A*👤 Client:* ${formData.name}%0A*📞 Phone:* ${formData.phone}%0A*🏢 Company:* ${formData.org || "Individual"}%0A*📦 Requirement:* ${formData.product}%0A*📝 Details:* ${formData.msg}%0A----------------------------`;

    window.open(`https://wa.me/${adminPhone}?text=${text}`, "_blank");

    // Immediate reset to prevent double-leads
    setFormData({ name: "", phone: "", org: "", product: "", msg: "" });
  };

  return (
    <form onSubmit={handleWhatsApp} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Product / Category</label>
        <input
          required
          placeholder="e.g. Office Cupboard, SS 304 Cabinet"
          value={formData.product}
          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message / Specs</label>
        <textarea
          required
          rows={4}
          value={formData.msg}
          onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
          className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0F172A] text-white py-6 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl"
      >
        Send Inquiry to WhatsApp <ArrowRight size={20} />
      </button>
    </form>
  );
}