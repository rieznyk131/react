//оголошуємо функцію retrieveLocalStorage з дженеріком Т, яка приймає key типу стрінгу
export const retrieveLocalStorage = <T,>(key: string) => {

    //достаємо key з локального сховища, якщо key відсутній, то повертається пуста стрінга
    const object = localStorage.getItem(key) || '';

    //перевіряємо, якщо key відсутній або порожній, то повертаємо порожній об'єкт і приводимо його до типу Т
    if (!object) {
        return {} as T;
    }

    //парсимо отриманий  JSON рядок в JS об'єкт
    const parse = JSON.parse(object);

    //повертаємо  JS об'єкт, вказуючи, що він має тип Т
    return parse as T;
}