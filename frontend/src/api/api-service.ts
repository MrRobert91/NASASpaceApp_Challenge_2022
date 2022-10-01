
export const Api = {
    //urlBase: 'http://localhost:8080/',
    urlBase: 'api/',

    generateImage: function(): Promise<Response> {
        return fetch(this.urlBase + 'generate')
    },

    getSpaceObjects: function(): Promise<Response> {
        return fetch(this.urlBase + 'space-objects').then(r => r.json());
    },

    getArtists: function() {
        return fetch(this.urlBase + 'artists').then(r => r.json());
    }
}