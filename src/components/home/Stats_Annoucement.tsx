import { GraduationCap, History, Medal, User } from "lucide-react"

export default function Stats_Annoucement() {
    return (
        <div className="pt-10 pl-10">
            <div className="grid grid-cols-2 w-150 gap-10">
                <div className="flex items-center flex-col p-10 gap-4">
                    <History />
                    <p className="">40+</p>
                    <p className="">Years of Excellence</p>
                </div>
                <div className="flex items-center flex-col p-10 gap-4">
                    <GraduationCap />
                    <p className="">40+</p>
                    <p className="">Years of Excellence</p>
                </div>
                <div className="flex items-center flex-col p-10 gap-4">
                    <User />
                    <p className="">40+</p>
                    <p className="">Years of Excellence</p>
                </div>
                <div className="flex items-center flex-col p-10 gap-4">
                    <Medal />
                    <p className="">40+</p>
                    <p className="">Years of Excellence</p>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}