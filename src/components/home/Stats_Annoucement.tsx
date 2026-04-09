import { GraduationCap, History, Medal, User } from "lucide-react"

export default function Stats_Annoucement() {
    return (
        <div className="py-12 px-6 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
                <div className="flex items-center flex-col p-6 gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <History className="text-blue-600" />
                    <p className="text-3xl font-black text-slate-900 leading-none">9+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Years of Excellence</p>
                </div>
                <div className="flex items-center flex-col p-6 gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <GraduationCap className="text-blue-600" />
                    <p className="text-3xl font-black text-slate-900 leading-none">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Board Results</p>
                </div>
                <div className="flex items-center flex-col p-6 gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <User className="text-blue-600" />
                    <p className="text-3xl font-black text-slate-900 leading-none">50+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Expert Faculty</p>
                </div>
                <div className="flex items-center flex-col p-6 gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <Medal className="text-blue-600" />
                    <p className="text-3xl font-black text-slate-900 leading-none">2000+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Students Enrolled</p>
                </div>
            </div>
        </div>
    )
}