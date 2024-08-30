import TeamGrid from '../components/team/page';

const teamsData = [
  {
    leader: {
      name: "John Doe",
      post: "Tech Lead",
      imageUrl:
        "https://imgs.search.brave.com/5VyVtoCvSBGS27czoq7TGAWzAr94CLtcLSCZa10WaJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yZWQtd29yZC1k/ZW1vLXdvb2Rlbi1j/dWJlcy1ibHVlLWJh/Y2tncm91bmRfNjA2/MjA3LTkzNi5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw",
    },
    members: [
      {
        name: "Jane Smith",
        post: "Frontend Developer",
        imageUrl: "/jane-smith.jpg",
      },
      {
        name: "Mike Johnson",
        post: "Backend Developer",
        imageUrl: "/mike-johnson.jpg",
      },
      {
        name: "Emily Brown",
        post: "UX Designer",
        imageUrl: "/emily-brown.jpg",
      },
      {
        name: "Chris Lee",
        post: "DevOps Engineer",
        imageUrl: "/chris-lee.jpg",
      },
    ],
  },
  {
    leader: {
      name: "Sarah Wilson",
      post: "Project Manager",
      imageUrl: "/sarah-wilson.jpg",
    },
    members: [
      {
        name: "Tom Harris",
        post: "Data Scientist",
        imageUrl: "/tom-harris.jpg",
      },
      { name: "Lucy Chen", post: "AI Specialist", imageUrl: "/lucy-chen.jpg" },
      { name: "Alex Kim", post: "Mobile Developer", imageUrl: "/alex-kim.jpg" },
      {
        name: "Rachel Green",
        post: "QA Engineer",
        imageUrl: "/rachel-green.jpg",
      },
      {
        name: "David Patel",
        post: "Systems Architect",
        imageUrl: "/david-patel.jpg",
      },
      {
        name: "Olivia Taylor",
        post: "Product Owner",
        imageUrl: "/olivia-taylor.jpg",
      },
      {
        name: "James Rodriguez",
        post: "Security Specialist",
        imageUrl: "/james-rodriguez.jpg",
      },
    ],
  },
  {
    members: [
      {
        name: "Emma Wilson",
        post: "Blockchain Developer",
        imageUrl: "/emma-wilson.jpg",
      },
      {
        name: "Ryan Chang",
        post: "AR/VR Engineer",
        imageUrl: "/ryan-chang.jpg",
      },
      {
        name: "Sophie Martin",
        post: "IoT Specialist",
        imageUrl: "/sophie-martin.jpg",
      },
    ],
  },
];

export default function Teams() {
  return <TeamGrid teams={teamsData} />;
}