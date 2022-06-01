import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjUuKRgBjFpywczVaLuF6IXa3pwfYsTJU",
  authDomain: "explore-space-r-quiz-project.firebaseapp.com",
  projectId: "explore-space-r-quiz-project",
  storageBucket: "explore-space-r-quiz-project.appspot.com",
  messagingSenderId: "724706928668",
  appId: "1:724706928668:web:cc93ce7cfd922df0a3d7d9",
  measurementId: "G-W813VYFQE7"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.db = app.database();
    }

    scores = () => this.db.ref('scores');
}


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);