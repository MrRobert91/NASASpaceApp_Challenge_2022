
export const Api = {
    urlBase: '',

    generateImage: function(): Promise<Response> {
        return fetch(this.urlBase + 'generate')
    }
}