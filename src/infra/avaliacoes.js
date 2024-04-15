import { collection, addDoc, getDocs, getDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase"

export async function inserirAvaliacao(novaAvaliacao) {
    const docRef = await addDoc(collection(db, "avaliações"), novaAvaliacao);
    return docRef.id;
}

export async function listarAvaliacoes() {
    let retorno;
    await getDocs(collection(db, "avaliações"))
        .then((querySnapshot) => {
            retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    return retorno;
}

export async function obterAvaliacao(id) {
    const docRef = doc(db, "avaliações", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export async function excluirAvaliacao(id) {
    await deleteDoc(doc(db, "avaliações", id));
}

export async function alterarAvaliacao(avaliacao) {
    await setDoc(doc(db, "avaliações", avaliacao.id), avaliacao);
}