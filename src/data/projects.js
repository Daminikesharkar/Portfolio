import collabboardImg from "../assets/spryntsync.png"
import gotaskyImg from "../assets/gotasky.png"
import expenseTrackerImg from "../assets/expensemanager.png"
import circleChatImg from "../assets/circlechat.png"
import gestureOsImg from "../assets/GestureOs.png"

export const projects = [
    {
        id: 1,
        title: "SprintSync",
        image: collabboardImg,
        description:
            "A real-time collaboration platform featuring AI-powered task generation, live chat, activity tracking, and scalable backend architecture.",
        tech: [
            "React",
            "Node.js",
            "Kafka",
            "Redis",
            "AWS",
        ],
        github: "https://github.com/Daminikesharkar/SprintSync",
        live: "#",
    },
    {
        id: 2,
        title: "GoTasky",
        image: gotaskyImg,
        description:
            "A location-aware productivity assistant with real-time proximity alerts, smart errand planning, and live tracking systems.",
        tech: [
            "TypeScript",
            "WebSockets",
            "Redis",
            "Tailwind",
        ],
        github: "https://github.com/Daminikesharkar/GoTasky",
        live: "#",
    },
    {
        id: 3,
        title: "Expense Tracker",
        image: expenseTrackerImg,
        description:
            "A full-stack expense management application with AWS deployment workflows and CI/CD automation pipelines.",
        tech: [
            "Express",
            "MongoDB",
            "Jenkins",
            "AWS EC2",
        ],
        github: "https://github.com/Daminikesharkar/Expense-manager",
        live: "#",
    },
    {
        id: 4,
        title: "Circle Chat",
        image: circleChatImg,
        description:
            "A real-time communication platform supporting secure one-to-one and group messaging with Socket.IO.",
        tech: [
            "Socket.IO",
            "Node.js",
            "MongoDB",
        ],
        github: "https://github.com/Daminikesharkar/circle-chat-app",
        live: "#",
    },
    {
        id: 5,
        title: "Gesture Based OS",
        image: gestureOsImg,
        description:
            "A computer vision system enabling intuitive gesture-based human-computer interaction using real-time hand tracking.",
        tech: [
            "Python",
            "MediaPipe",
            "OpenCV",
        ],
        github: "https://drive.google.com/file/d/1RQhV7LUTKj7XIjglsUWiL80loheUZH78/view",
        live: "https://drive.google.com/file/d/19dfBsJmlcwq0aIHeg_vTfwR6-PMe7Y2b/view",
    },
];