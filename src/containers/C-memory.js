import { v4 as uuidv4 } from 'uuid';

class memory {
    constructor(){
        this.array = [];
    }
    //devolver valores en save y update
    async save(obj){
        try {
            Object.assign(obj, {
                code: uuidv4()
            });
            this.array.push(obj);
            console.info(`${obj} was saved with the id: ${obj.code}`);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async getAll(){
        try {
            return this.array;
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async getById(code){
        try {
            const result = this.array.filter(i => i.code = code);
            return result;
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async update(update, code){
        try {
            update.code = code;
            const result = this.array.filter(i => i.code != code);
            result.push(update);
            this.array = result;
            console.info(`${code} was update`);
            return result;
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    };
    async supr(code){
        try {
            this.array.filter(i => i.code != code);
            console.info(`${code} was delete`);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }

}