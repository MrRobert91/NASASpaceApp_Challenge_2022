
export const Api = {
    //urlBase: 'http://localhost:8080/',
    urlBase: 'api/',

    generateImage: function(): Promise<Response> {
        return fetch(this.urlBase + 'generate')
    },

    generateImage2: function(query: string): Promise<Response> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query})
        };
        return fetch(this.urlBase + 'generate', requestOptions);
    },

    getSpaceObjects: function(): Promise<Response> {
        return fetch(this.urlBase + 'space-objects').then(r => r.json());
    },

    getArtists: function() {
        return fetch(this.urlBase + 'artists').then(r => r.json());
    }
}