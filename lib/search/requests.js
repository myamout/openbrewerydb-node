import https from "https";

/**
 * Takes in a url and returns a promise that resolves
 * a JSON string equaling and array of JSON objects
 * @param {string} url 
 */
export const fetch = (url) => {
    return new Promise((resolve, reject) => {
        const request = https.get(url, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error(`Failed to complete request with status code: ${response.statusCode}`));
            }
            const body = [];
            response.on('data', (chunk) => body.push(chunk));
            response.on('end', () => resolve(body.join('')));
        });
        request.on('error', (err) => reject(err));
    });
};
