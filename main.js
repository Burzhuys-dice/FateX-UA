const originalFetch = window.fetch;
window.fetch = async function(...args) {
    if (typeof args[0] === 'string') {
                if (args[0].includes('systems/fatex/data/uk/systems.json')) {
            args[0] = 'modules/FateX-UA/data/systems.json';
        } 
              else if (args[0].includes('systems/fatex/data/uk/systems/')) {
                       args[0] = args[0].replace('systems/fatex/data/uk/systems/', 'modules/FateX-UA/data/uk/systems/');
        }
    }
    return originalFetch.apply(this, args);
};

const originalAjax = $.ajax;
$.ajax = function(options) {
    if (typeof options === 'string') {
        if (options.includes('systems/fatex/data/uk/systems.json')) {
            arguments[0] = 'modules/FateX-UA/data/systems.json';
        } else if (options.includes('systems/fatex/data/uk/systems/')) {
            arguments[0] = options.replace('systems/fatex/data/uk/systems/', 'modules/fatex-ua/data/uk/systems/');
        }
    } else if (options && options.url) {
        if (options.url.includes('systems/fatex/data/uk/systems.json')) {
            options.url = 'modules/FateX-UA/data/systems.json';
        } else if (options.url.includes('systems/fatex/data/uk/systems/')) {
            options.url = options.url.replace('systems/fatex/data/uk/systems/', 'modules/FateX-UA/data/uk/systems/');
        }
    }
    return originalAjax.apply(this, arguments);
};