import api from "./api";

export async function generateWebsite(prompt) {

    const response = await api.post("/website/generate", {
        prompt
    });

    return response.data;
}

export async function getGenerationStatus() {

    const response = await api.get("/website/status");

    return response.data;
}

export async function editWebsite(prompt) {

    const response = await api.post("/website/edit", {
        prompt
    });

    return response.data;
}
export async function publishWebsite() {

    const response = await api.post(

        "/publish/"

    );

    return response.data;

}
export function exportWebsite() {

    window.open(

        "http://127.0.0.1:5000/api/export/",

        "_blank"

    );

}

