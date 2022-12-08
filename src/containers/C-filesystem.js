import { get } from "mongoose";
import fs from ('fs')

class Cfilesystem {
    constructor(name){
        this.name = name;
    }
    async save(obj){
        try {
            const data = await fs.readFile(`./src/storage/${this.name}.json`, {
                encoding: "utf-8",
            });
            const dataP = await JSON.parse(data);
            Object.assign(obj, {
                id: uuidv4()
            });
            dataP.push(obj)
            await fs.writeFile(`./src/storage/${this.name}.json`, JSON.stringify(dataP, null, 2));
            console.info(`${obj} was saved with the id: ${obj.id}`);
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
            const data = await fs.readFile(`./src/storage/${this.name}.json`, {
                encoding: "utf-8",
            });
            return await (JSON.parse(data));
        } catch(err) {
            if (err.code === "ENOENT") return [];
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async getById(id){
        try {
            const data = await this.getAll();
            let dataP = await JSON.parse(data);
            let result = dataP.find(i => i.id == id);
            return (result);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async update(obj, id){
        try {
            const data = await this.getAll();
            let dataP = await JSON.parse(data);
            let result = dataP.filter(i => i.id != id);
            result.push(obj);
            await fs.writeFile(`./src/storage/${this.name}.json`, JSON.stringify(result, null, 2));
            console.info(`${id} was update`);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async supr(id){
        try {
            const data = this.getAll();
            let dataP = await JSON.parse(data);
            let result = dataP.filter(i => i.id != id);
            await fs.writeFile(`./src/storage/${this.name}.json`, JSON.stringify(result, null, 2));
            console.info(`${id} was delete`);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
}

export default Cfilesystem;