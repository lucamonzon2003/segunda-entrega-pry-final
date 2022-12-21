import _ from 'lodash'
export class cartCreateDTO {
    constructor(cart) {
        this.timestamp = cart.timestamp
        this.products = cart.products
    }
    build() {
        return this
    }
}

export class artResponseDto {
    constructor(cart) {
        this.id = cart.id;
        this.timestamp = cart.timestamp;
        this.products = cart.products;
    }
    build() {
        return this;
    }
}