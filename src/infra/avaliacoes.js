import { collection, addDoc, getDocs } from "firebase/firestore";
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
