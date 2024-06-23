import HttpService from "./HttpService";

export default class CopyShopService {
    static baseURL() {
        return "http://localhost:4000/copyshop";
    }

    static getShops() {
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
    static getShop(id) {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                `${CopyShopService.baseURL()}/${id}`,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving movie");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
    static review(shopId, review) {
        return new Promise((resolve, reject) => {
            HttpService.put(
                `${this.baseURL()}/review/${shopId}`,
                review,
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
