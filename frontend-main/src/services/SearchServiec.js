import HttpService from "./HttpService";

export default class MovieService {
    static baseURL() {
        return "http://localhost:4000/search";
    }

    static getMovies() {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                this.baseURL(),
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

}