import { v4 as uuidv4 } from 'uuid';

class Cmemory {
    constructor(){
        this.array = [];
    }
    //devolver valores en save y update
    //sacar los try
    async save(obj){
        try {
            Object.assign(obj, {
                id: uuidv4()
            });
            this.array.push(obj);
            return obj;
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
    async getById(id){
        try {
            const result = this.array.filter(i => i.id = id);
            return result;
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async update(update, id){
        try {
            update.id = id;
            const result = this.array.filter(i => i.id != id);
            result.push(update);
            this.array = result;
            return result;
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    };
    async supr(id){
        try {
            this.array.filter(i => i.code != id);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }

}

export default Cmemory;