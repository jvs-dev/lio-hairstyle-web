import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot, addDoc, collection, updateDoc, deleteField, query, where, getDocs, deleteDoc, getDoc, arrayUnion, arrayRemove, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_API_KEY}`,
    authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_PROJECT_ID}`,
    storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID}`,
    appId: `${import.meta.env.VITE_APP_ID}`,
    measurementId: `${import.meta.env.VITE_MEASUREMENT_ID}`
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

let nomesDosDiasDaSemana = ["Domingo", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let agendedDates = document.getElementById("agendedDates")


function calcularProximoDiaDaSemana(diaDaSemana) {
    // Obter a data atual
    var hoje = new Date();

    // Calcular a diferença em dias até o próximo dia da semana desejado
    var diferenca = diaDaSemana - hoje.getDay();
    if (diferenca <= 0) {
        if (diferenca == 0) {
            return "Hoje"
        } else {
            diferenca += 7; // Adicionar 7 dias se o próximo dia já tiver passado nesta semana
        }
    }

    // Calcular a data do próximo dia da semana
    var proximoDia = new Date(hoje.getTime() + diferenca * 24 * 60 * 60 * 1000);

    // Formatar a data no formato DD/MM
    var dia = ("0" + proximoDia.getDate()).slice(-2);
    var mes = ("0" + (proximoDia.getMonth() + 1)).slice(-2);

    // Retornar a data formatada
    return dia + '/' + mes;
}

// Exemplo de uso para obter a próxima quinta-feira
let PROXQUI = document.getElementById("PROXQUI").innerHTML = `Quinta<br>(${calcularProximoDiaDaSemana(4)})`
let PROXSEX = document.getElementById("PROXSEX").innerHTML = `Sexta<br>(${calcularProximoDiaDaSemana(5)})`
let PROXSAB = document.getElementById("PROXSAB").innerHTML = `Sábado<br>(${calcularProximoDiaDaSemana(6)})`
let PROXDOM = document.getElementById("PROXDOM").innerHTML = `Domingo<br>(${calcularProximoDiaDaSemana(0)})`
let PROXTER = document.getElementById("PROXTER").innerHTML = `Terça<br>(${calcularProximoDiaDaSemana(2)})`
let PROXQUA = document.getElementById("PROXQUA").innerHTML = `Quarta<br>(${calcularProximoDiaDaSemana(3)})`



nomesDosDiasDaSemana.forEach(element => {
    let q = query(collection(db, `${element}`), where("closed", "==", true));
    let unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let days_p = document.getElementById(`${element.replace("á", "a").slice(0, 3).toUpperCase()}${doc.id.replace(":00", "")}`)
            days_p.classList.remove("closed")
            if (doc.data().agended == true || doc.data().closed == true) {
                days_p.classList.add("closed")
            } else {
                days_p.classList.remove("closed")
            }
        });
    });
});
nomesDosDiasDaSemana.forEach(element => {
    let q = query(collection(db, `${element}`), where("closed", "==", false));
    let unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let days_p = document.getElementById(`${element.replace("á", "a").slice(0, 3).toUpperCase()}${doc.id.replace(":00", "")}`)
            days_p.classList.remove("closed")
            if (doc.data().agended == true || doc.data().closed == true) {
                days_p.classList.add("closed")
            } else {
                days_p.classList.remove("closed")
            }
        });
    });
});

nomesDosDiasDaSemana.forEach(element => {
    let q = query(collection(db, `${element}`), where("agended", "==", true));
    let unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let days_p = document.getElementById(`${element.replace("á", "a").slice(0, 3).toUpperCase()}${doc.id.replace(":00", "")}`)
            days_p.classList.remove("closed")
            if (doc.data().agended == true || doc.data().closed == true) {
                days_p.classList.add("closed")
            } else {
                days_p.classList.remove("closed")
            }
        });
    });
});
nomesDosDiasDaSemana.forEach(element => {
    let q = query(collection(db, `${element}`), where("agended", "==", false));
    let unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let days_p = document.getElementById(`${element.replace("á", "a").slice(0, 3).toUpperCase()}${doc.id.replace(":00", "")}`)
            days_p.classList.remove("closed")
            if (doc.data().agended == true || doc.data().closed == true) {
                days_p.classList.add("closed")
            } else {
                days_p.classList.remove("closed")
            }
        });
    });
});