export const config = {
    backendUrl: process.env.REACT_APP_REST_API_URL || "http://localhost:5000",
    api: {
        quiz: "/quiz",
        attempt: "/attempt/:id",
        stone: "/stone/:id",
    }
}
