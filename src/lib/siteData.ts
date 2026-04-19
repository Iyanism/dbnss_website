import { Award, BookOpen, Target, Users } from "lucide-react";

export const NAVLINKS = [
    { id: 1, label: "About Us", href: "/aboutus" },
    { id: 2, label: "Courses", href: "/courses" },
    { id: 3, label: "Faculty", href: "/faculty" },
    { id: 4, label: "Admissions", href: "/admissions" },
    { id: 5, label: "Students", href: "/students" },
    { id: 6, label: "Infrastructure", href: "/infrastructure" },
    { id: 7, label: "Results", href: "/results" },
    { id: 8, label: "Alumni", href: "/alumni" },
    { id: 9, label: "Events", href: "/events" },
    { id: 10, label: "Contact Us", href: "/contact" },
];

export const heroSlides = [
    {
        id: 1,
        image: "/hero_1.webp",
        alt: "Students in classroom",
        tagline: "Premier Education in Khetri",
        title: "Best Senior Secondary Excellence from LKG to 12th",
        description: "Nurturing future leaders since 2016 with a focus on academic rigor, character building, and comprehensive growth in Khetri, Assam.",
    },
    {
        id: 2,
        image: "/hero_2.webp",
        alt: "School campus",
        tagline: "Specialized Streams",
        title: "Shape Your Future with Arts and Science",
        description: "Our dedicated faculty and modern laboratories provide the perfect environment for mastering both Arts and Science disciplines.",
    },
    {
        id: 3,
        image: "/classroom.webp",
        alt: "Sports activities",
        tagline: "Holistic Development",
        title: "A Glimpse Into a Brighter Tomorrow",
        description: "From LKG foundations to Class 12 milestones, we ensure every student achieves their highest potential in Assam.",
    },
];

export const stats = [
    { id: 1, value: "10+", label: "Years of Excellence", icon: Award },
    { id: 2, value: "2000+", label: "Students Enrolled", icon: Users },
    { id: 3, value: "100%", label: "Board Exam Results", icon: Target },
    { id: 4, value: "50+", label: "Qualified Faculty", icon: BookOpen },
];

export const announcements = [
    { id: 1, text: "Admission Open for 2026-27 Session - Apply Now!", link: "/admissions" },
    { id: 2, text: "Parent-Teacher Meeting scheduled for April 5th, 2025.", link: "/events" },
];

export const faqs = [
    {
        q: "What is the admission procedure for the new session?",
        a: "The admission process involves filling out an online application form, followed by an interaction/entrance test depending on the grade. Detailed steps are available on our Admissions page."
    },
    {
        q: "What are the school timings for Junior and Senior sections?",
        a: "Junior section (LKG to Class V) operates from 8:30 AM to 1:30 PM. Senior section (Class VI to XII) operates from 8:00 AM to 2:30 PM."
    },
    {
        q: "Does the school provide transport facilities?",
        a: "Yes, we have a fleet of safe and well-maintained buses covering major routes across the city. Transport fees are calculated based on distance."
    },
    {
        q: "What are the stream options available in Senior Secondary?",
        a: "We offer Science (PCM/PCB) and Arts streams with various elective subjects including Computer Science, Economics, and Fine Arts."
    },
    {
        q: "Is there any scholarship or fee concession available?",
        a: "Yes, merit-based scholarships are available for outstanding students. Need-based financial assistance can be applied for through the school office."
    },
    {
        q: "What extracurricular activities are offered?",
        a: "We offer a wide range of activities including sports, music, dance, art, robotics, debate, and various club activities."
    },
];

export const facultyMembers = [
    // a) High and Higher Secondary level (class 9, 10, 11 and 12)
    { id: "vp", name: "Mr. Sanjib Kr. Baishya", subject: "Administration", qualification: "MBA", experience: "N/A", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Sanjib_Kr._Baishya(Vice_Principal).webp", category: "Senior Section (9-12)" },
    { id: "s1", name: "Mr. Suman Das", subject: "Physics", qualification: "M.Sc. in Physics", experience: "8 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Suman_Das.webp", category: "Senior Section (9-12)" },
    { id: "s2", name: "Mr. Kalidas Mandal", subject: "Chemistry", qualification: "M.Sc. in Chemistry", experience: "10 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Kalidas_Mandal.webp", category: "Senior Section (9-12)" },
    { id: "s3", name: "Mr. Rajib Lochan Baishya", subject: "ECE / Technical", qualification: "Bachelor of Engineering (ECE)", experience: "10 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Rajib_Lochan_Baishya.webp", category: "Senior Section (9-12)" },
    { id: "s4", name: "Mr. Himangshu Sharma", subject: "Botany", qualification: "M.Sc. in Botany", experience: "5 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Himangshu_Sharma.webp", category: "Senior Section (9-12)" },
    { id: "s5", name: "Miss Jonali Sharma", subject: "Assamese", qualification: "M.A. in Assamese", experience: "10 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Jonali_Sharma.webp", category: "Senior Section (9-12)" },
    { id: "s6", name: "Mrs. Chandana Bhumij", subject: "Hindi", qualification: "M.A. in Hindi", experience: "8 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Chandana_Bhumij.webp", category: "Senior Section (9-12)" },
    { id: "s7", name: "Mrs. Rekha Baishya", subject: "Education", qualification: "M.A. in Education, B.Ed.", experience: "9 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Rekha_Baishya.webp", category: "Senior Section (9-12)" },
    { id: "s8", name: "Miss Himadri Das", subject: "Anthropology", qualification: "M.A. in Anthropology", experience: "3 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Himadri_Das.webp", category: "Senior Section (9-12)" },
    { id: "s9", name: "Mr. Guneswar Daimary", subject: "Political Science", qualification: "M.A. in Political Science", experience: "4 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Guneswar_Daimary.webp", category: "Senior Section (9-12)" },
    { id: "s10", name: "Miss Shaswati Kashyap", subject: "Geography", qualification: "M.A. in Geography, B.Ed.", experience: "1 Year", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Shaswati_Kashyan.webp", category: "Senior Section (9-12)" },
    { id: "s11", name: "Miss Meerlek Ronghang", subject: "English", qualification: "M.A. in English", experience: "2 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Meerlek_Ronghang.webp", category: "Senior Section (9-12)" },
    { id: "s14", name: "Mr. Khanin Das", subject: "English", qualification: "Pursuing M.A. in English", experience: "2 Years", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Khanin_Das.webp", category: "Senior Section (9-12)" },
    { id: "s15", name: "Miss Priya Borkataki", subject: "Mathematics", qualification: "M.Sc. in Mathematics, Pursuing B.Ed", experience: "1 Year", classes: "9 - 12", image: "/dbnss/teachers/Teachers_Profiles/Priya_Borkataki.webp", category: "Senior Section (9-12)" },
    { id: "s16", name: "Mr. Hiteswar Bordoloi", subject: "Physics (Lab Assistant)", qualification: "Retired Lab Assistant", experience: "28 Years", classes: "Practical (9-12)", image: "/dbnss/teachers/Teachers_Profiles/Hiteswar_Bordoloi.webp", category: "Senior Section (9-12)" },

    // b) Nursery, L.P. and M.E. level (nursery to 8)
    { id: "j1", name: "Miss Merina Sangma", subject: "General", qualification: "M.Sc., B.Ed.", experience: "5 Years", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Merina_Sangma.webp", category: "Junior Section (Nursery-8)" },
    { id: "j3", name: "Mrs. Parinita Borah", subject: "General", qualification: "M.A.", experience: "4 Years", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Parinita_Bora.webp", category: "Junior Section (Nursery-8)" },
    { id: "j4", name: "Miss Nibedita Rongpee", subject: "General", qualification: "Pursuing M.A.", experience: "2 Years", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Nibedita_Rongpee.webp", category: "Junior Section (Nursery-8)" },
    { id: "j5", name: "Miss Jilpa Injal", subject: "Science", qualification: "B.Sc.", experience: "3 Years", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Jilpa_Injal.webp", category: "Junior Section (Nursery-8)" },
    { id: "j6", name: "Miss Jahnobi Saikia", subject: "Science", qualification: "B.Sc., B.Ed.", experience: "1 Year", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Jahnovi_Saikia.webp", category: "Junior Section (Nursery-8)" },
    { id: "j7", name: "Miss Dipika Chetri", subject: "General", qualification: "B.Sc., Pursuing M.A.", experience: "2 Years", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Dipika_Chetri.webp", category: "Junior Section (Nursery-8)" },
    { id: "j8", name: "Miss Anuska Kashyap", subject: "General", qualification: "Pursuing M.A.", experience: "1 Year", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Anuska_kashyap.webp", category: "Junior Section (Nursery-8)" },
    { id: "j10", name: "Miss Kaberi Baruah", subject: "General", qualification: "M.A.", experience: "2 Years", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Kaberi_Baruah.webp", category: "Junior Section (Nursery-8)" },
    { id: "j11", name: "Miss Tulika Deka", subject: "General", qualification: "M.A.", experience: "1 Year", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Tulika_Deka.webp", category: "Junior Section (Nursery-8)" },
    { id: "j12", name: "Miss Himadri Dey", subject: "General", qualification: "B.A.", experience: "1 Year", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/Himadri_Dey.webp", category: "Junior Section (Nursery-8)" },
    { id: "j15", name: "Miss Himashree Bora", subject: "General", qualification: "B.A.", experience: "N/A", classes: "Nursery - 8", image: "/dbnss/teachers/Teachers_Profiles/HImashree_Bora.webp", category: "Junior Section (Nursery-8)" },
    { id: "j16", name: "Mr. Rupan Deka", subject: "Arts", qualification: "Drawing Teacher", experience: "N/A", classes: "Nursery - 12", image: "/dbnss/teachers/Teachers_Profiles/Rupan_Deka.webp", category: "Junior Section (Nursery-8)" },

    // c) Non-Teaching Staff
    { id: "nt1", name: "Joya Phangchoo", subject: "Support Staff", qualification: "General", experience: "N/A", classes: "Administration", image: "/dbnss/teachers/Teachers_Profiles/Joya Phangchoo.webp", category: "Non-Teaching Staff" },
    { id: "nt2", name: "Geeta Das", subject: "Support Staff", qualification: "General", experience: "N/A", classes: "Administration", image: "/dbnss/teachers/Teachers_Profiles/Gita_Das.webp", category: "Non-Teaching Staff" },
    { id: "nt3", name: "Kamal Tumung", subject: "Support Staff", qualification: "General", experience: "N/A", classes: "Administration", image: "/dbnss/teachers/Teachers_Profiles/Kamal_Tumung.webp", category: "Non-Teaching Staff" },
];

export interface Topper {
    name: string;
    percentage: string;
    year: string;
    image: string;
}

export interface PrideStudent {
    name: string;
    achievement: string;
    image: string;
}

export const toppers: Topper[] = [
    {
        name: "Rehena Mallick(Science)",
        percentage: "84.6%",
        year: "2019",
        image: "/dbnss/result/Rehena_Mallick.webp"
    },
    {
        name: "Dibya Jyoti Pukan(Science)",
        percentage: "92%",
        year: "2022",
        image: "/dbnss/result/Dibya_Jyoti_Pukan.webp"
    },
    {
        name: "Sumi Pator(Science)",
        percentage: "79.6%",
        year: "2023",
        image: "/dbnss/result/Sumi_Pator.webp"
    },
    {
        name: "Alimpa Medhi(Arts)",
        percentage: "88.8%",
        year: "2023",
        image: "/dbnss/result/Alimpa_Medhi.webp"
    },
    {
        name: "Anubha Marme(Science)",
        percentage: "88.2%",
        year: "2024",
        image: "/dbnss/result/Anubha_Marme.webp"
    },
    {
        name: "Tina Moni Boro(Arts)",
        percentage: "86.6%",
        year: "2024",
        image: "/dbnss/result/Tina_Moni_Boro.webp"
    },
    {
        name: "Sibangee Bhattacharya(Science)",
        percentage: "86.2%",
        year: "2025",
        image: "/dbnss/result/Sibangee_Bhattacharya.webp"
    },
    {
        name: "Momi Rahang(Arts)",
        percentage: "88.6%",
        year: "2025",
        image: "/dbnss/result/Momi_Rahang.webp"
    },
];

export const hslc2026Toppers: Topper[] = [
    {
        name: "Gunjan Das",
        percentage: "93.16%",
        year: "2026",
        image: "/dbnss/result/hslc_2026/Gunjan_Das(HSLC_Center_Topper).jpeg"
    },
    {
        name: "Bhaskar Jyoti Phukan",
        percentage: "82.33%",
        year: "2026",
        image: "/dbnss/result/hslc_2026/Bhaskar_Jyoti_Phukan.jpeg"
    },
    {
        name: "Kuldeep Puri",
        percentage: "81.82%",
        year: "2026",
        image: "/dbnss/result/hslc_2026/Kuldeep_Puri.jpeg"
    }
];

export const prideStudents: PrideStudent[] = [
    { name: "Praiselina R. Sangma", achievement: "MBBS (DMCH)", image: "/dbnss/result/Praiselina_R._Sangma.webp" },
    { name: "Hrishikesh Talukdar", achievement: "B.Tech. (NIT Silchar)", image: "/dbnss/result/Hrishikesh_Talukdar.webp" },
    { name: "Dibya Jyoti Phukan", achievement: "B.Tech. (NIT Silchar)", image: "/dbnss/result/Dibya_Jyoti_Pukan.webp" },
    { name: "Anubha Marme", achievement: "MBBS (GMCH)", image: "/dbnss/result/Anubha_Marme.webp" },
    { name: "Sumi Pator", achievement: "MBBS (JMCH)", image: "/dbnss/result/Sumi_Pator.webp" },
    { name: "Joel Rahang", achievement: "MBBS (KMCH)", image: "/dbnss/result/Joel_Rahang.webp" },
    { name: "Anupam Rabha", achievement: "B.Tech IIT (Dharwad)", image: "/dbnss/result/Anupam_Rabha.webp" },
    { name: "Purabi Swargiary", achievement: "BDS (GMCH)", image: "/dbnss/result/Purabi_Swargiary.webp" },
];

export const rulesAndRegulations = [
    "Minimum 80% attendance will be required to appear in examinations as a regular candidate. Students with below 60% attendance will not be allowed to appear any examination.",
    "Students must attend Class Tests / Unit tests / Half Yearly / Pre Final examinations so that corrective/improvement measures could be taken up.",
    "Students must be very careful not to spoil/damage any part of school premises, furniture and equipments.",
    "Students must be careful of his/her behaviour with other students/teaching/non-teaching staff to maintain education friendly environment.",
    "Smoking / Spitting / consumption of tobacco / chewing gutkha etc. are strictly prohibited in school premises. Students under the influence of these will be rusticated from the school.",
    "Students must have to adhere to institutional disciplinary – norms set by the Govt. in respect of ragging and the school authority."
];

export const historicalResults = {
    arts: [
        { year: "2022", percentage: "100%" },
        { year: "2023", percentage: "97.3%" },
        { year: "2024", percentage: "100%" },
        { year: "2025", percentage: "100%" },
    ],
    science: [
        { year: "2018", percentage: "100%" },
        { year: "2019", percentage: "96.6%" },
        { year: "2020", percentage: "100%" },
        { year: "2021", percentage: "100%" },
        { year: "2022", percentage: "100%" },
        { year: "2023", percentage: "100%" },
        { year: "2024", percentage: "100%" },
        { year: "2025", percentage: "94.3%" },
    ]
};

export const ourEndeavour = [
    "Individual student's attention",
    "Periodic evaluation in the form of test",
    "Special care for our below average students",
    "“Learn by doing” approach",
    "Home visit by teachers",
    "Sharing student's feedback with parents for needful upgradation",
    "Exchanging ideas between experts and students through seminar for motivational purpose",
    "Organizing various competition to boost the confidence of our students"
];

export const admissionDetails = {
    fees: {
        science: { admission: "15,000", monthly: "2,000" },
        arts: { admission: "13,000", monthly: "1,500" }
    },
    documentation: [
        "10th marksheet",
        "H.S.L.C. Passed certificate (provisional will also be accepted, but students have to submit original certificate later)",
        "Registration certificate",
        "Original Transfer / Migration certificate (if students seeking admission from other boards like CBSE, ICSC, Open School etc.)",
        "2 copies of recent passport size photo of students",
        "Caste certificate",
        "Xerox copy of AADHAR card"
    ],
    eligibility: {
        science: "Passed in H.S.L.C. (Matric) examination with minimum 55% marks of State Board / C.B.S.E. / I.C.S.E. or its equivalent.",
        arts: "Passed in H.S.L.C. (Matric) examination of State Board / C.B.S.E. / I.C.S.E. or its equivalent."
    },
    portalLink: "https://darpan.ahsec.assam.gov.in/" // Placeholder for common Assam Govt. portal or relevant link
};

export const coursesDetailed = {
    science: {
        compulsory: ["English", "MIL (Alternative English / Assamese / Hindi)"],
        elective: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Geography"]
    },
    arts: {
        compulsory: ["English", "MIL (Alternative English / Assamese / Hindi)"],
        elective: ["Political Science", "History", "Geography", "Anthropology", "Computer Science", "Education", "Tourism and Hospitality"]
    },
    integrated: {
        description: "From this year School will start integrated course for science stream students to prepare for NEET/JEE/CEE/B.Sc. nursing / CUET examinations parallelly with NCERT syllabus.",
        combinations: [
            "(a) Physics / Chemistry / Mathematics / Biology",
            "(b) Physics / Chemistry / Mathematics / Computer Science",
            "(c) Physics / Chemistry / Biology/ Geography"
        ]
    }
};
