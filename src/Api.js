


class API {
    location = "http://127.0.0.1/api/v1/"


    async getPartners() {
        // Загрузка логотипов партнёров
        return await fetch(this.location + "partners/")
            .then(response => response.json())
    }

    async getContacts() {
        // Загрузка контактов
        return await fetch(this.location + "contacts/")
            .then(response => response.json())
    }

    async createOrder(data) {
        return await fetch(this.location + "order/")
            .then(response => response.json())
    }

    async getDocument(id) {
        // TODO: тут реализовать получение файла с Бэка
        // Загрузка документов с сервера
        return await fetch(this.location + "document/" + id )
            .then(response => response.json())
    }

}


export default new API();