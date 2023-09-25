const names = [
  "Aarav Patel",
  "Neha Sharma",
  "Raj Kapoor",
  "Sanya Mehta",
  "Arjun Singh",
  "Aisha Khan",
  "Vivek Verma",
  "Ishaan Gupta",
  "Priya Malhotra",
  "Rohan Desai",
  "Sanjana Reddy",
  "Aditi Choudhury",
  "Karan Patel",
  "Anaya Khanna",
  "Amit Dubey",
  "Sara Kumar",
  "Aditya Sharma",
  "Riya Mehta",
  "Yash Rajput",
  "Zoya Khan",
  "Aryan Joshi",
  "Aaliyah Kapoor",
  "Rahul Singh",
  "Mira Deshmukh",
  "Rohit Kumar",
  "Ayesha Reddy",
  "Amitabh Das",
  "Ishika Pandey",
  "Ankit Tiwari",
  "Nandini Gupta",
  "Vikram Malhotra",
  "Nisha Sharma",
  "Siddharth Verma",
  "Kavya Patel",
  "Varun Kapoor",
  "Meera Singh",
  "Sahil Sharma",
  "Neha Thakur",
  "Rajat Choudhury",
  "Kritika Khanna",
  "Aman Verma",
  "Jiya Gupta",
  "Aryan Kapoor",
  "Aishwarya Sharma",
  "Kunal Reddy",
  "Anjali Joshi",
  "Aarav Mehta",
  "Aditi Kumar",
];


const chats=[
    "Hello everyone!",
    "What's up?",
    "I'm new here!",
    "Where are you all from?",
    "Give a shoutout to Canada!",
    "Who's excited for the stream?",
    "I love your channel!",
    "Can you play some music?",
    "Hi from Australia!",
    "Please notice me!",
    "How's the weather there?",
    "Tell us a fun fact!",
    "Who's your favorite YouTuber?",
    "What's your favorite food?",
    "Share your setup!",
    "I'm a big fan!",
    "Let's break a record today!",
    "Do you like video games?",
    "Give a shoutout to India!",
    "I subscribed last week!",
    "What's your next video about?",
    "Say hi to Brazil!",
    "Can you dance for us?",
    "Tell a joke!",
    "Any book recommendations?",
    "I'm watching from work!",
    "Can you sing a song?",
    "How's your day going?",
    "Who's your role model?",
    "Let's have a dance party!"
  ]
  
export function generateRandomName() {
  return names[Math.floor(Math.random() * names.length)];
  
}


export function generateRandomChat() {
    return chats[Math.floor(Math.random() * chats.length)];

    
    
  }
  