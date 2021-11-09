export default class User {
    constructor(
        public token: string,
        public name: string,
        public cpf: number,
        public email: string,
        public age: number,
        public transactions: string[],
    ) {}
}
