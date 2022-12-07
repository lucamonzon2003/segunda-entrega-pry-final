import fs from ('fs')

class filesystem {
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
                code: uuidv4()
            });
            dataP.push(obj)
            await fs.writeFile(`./src/storage/${this.name}.json`, JSON.stringify(dataP, null, 2));
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
            const data = await fs.readFile(`./src/storage/${this.name}.json`, {
                encoding: "utf-8",
            });
            return await (JSON.parse(data));
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
            const data = await fs.readFile(`./src/storage/${this.name}.json`, {
                encoding: "utf-8",
            });
            let dataP = await JSON.parse(data);
            let result = dataP.find(i => i.code == code);
            return (result);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async update(obj, code){
        try {
            const data = await fs.readFile(`./src/storage/${this.name}.json`, {
                encoding: "utf-8",
            });
            let dataP = await JSON.parse(data);
            let result = dataP.filter(i => i.code != code);
            result.push(obj);
            await fs.writeFile(`./src/storage/${this.name}.json`, JSON.stringify(result, null, 2));
            console.info(`${code} was update`);
        } catch(err) {
            console.error(err);
            return {
                succes: false,
                messsage: err.messsage
            };
        }
    }
    async supr(code){
        try {
            const data = await fs.readFile(`./src/storage/${this.name}.json`, {
                encoding: "utf-8",
            });
            let dataP = await JSON.parse(data);
            let result = dataP.filter(i => i.code != code);
            await fs.writeFile(`./src/storage/${this.name}.json`, JSON.stringify(result, null, 2));
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