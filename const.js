const Status = {
    BACKLOG: `backlog`,
    PROCESSING: `processing`,
    DONE: `done`,
    TRASH: `basket`
};

const StatusLabel = {
    [Status.BACKLOG]: `Бэклог`,
    [Status.PROCESSING]: `В процессе`,
    [Status.DONE]: `Готово`,
    [Status.TRASH]: `Корзина`
}

const OrderPosition = {
    START: `start`,
    END: `end`,
    BELOW: `below`,
    ABOVE: `above`
}

export {Status, StatusLabel, OrderPosition};