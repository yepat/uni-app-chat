
let handlers = {}

let UIEvents = {
    register: function (event_name, handler) {
        let handler_list = handlers[event_name]

        if (typeof handler_list === 'undefined') {
            handler_list = {
                max_num: 0,
            }
            handlers[event_name] = handler_list
        }

        for (let i = 0; i < handler_list.max_num; ++i) {
            if (typeof handler_list[i] === 'undefined') {
                handler_list[i] = handler
                return i
            }
        }

        handler_list.max_num += 1
        handler_list[handler_list.max_num] = handler

        return handler_list.max_num
    },

    dispatch: function (event_name) {
        let handler_list = handlers[event_name]
        if (typeof handler_list === 'undefined') {
            return 0
        }

        let notify_num = 0
        let args = Array.prototype.slice.call(arguments, 1)
        for (const key in handler_list) {
            if (!(key === "max_num") && handler_list.hasOwnProperty(key)) {
                const element = handler_list[key];
                element.apply(null, args)
                notify_num += 1
            }
        }
        return notify_num
    },
    cancel: function (event_name, id = null) {
        if (id === null) {
            delete handlers[event_name]
        } else {
            delete handlers[event_name][id]
        }
    },

    clear: function () {
        handlers = {}
    }
}

module.exports = UIEvents