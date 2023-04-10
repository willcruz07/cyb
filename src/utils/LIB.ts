/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-bitwise */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDateFirebase {
    seconds: number;
    nanoseconds: number;
}

const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

const dayOfWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
];

/* eslint-disable no-useless-escape */
export const removeMask = (value: string) => {
    value = value.replace(/\D/g, '');
    return value;
};

export const maskDate = (value: string) => {
    if (value) {
        value = removeMask(value);
        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        return value;
    } return '';
};

export const maskTime = (value: string) => {
    if (value) {
        value = removeMask(value);
        value = value.replace(/(\d{2})(\d)/, '$1:$2');
        return value;
    } return '';
};

export const formattedDateTimeFirebase = (date: Date, isTime?: boolean) => {
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    month = month < 10 ? `0${String(month)}` : month;
    let day: any = date.getDate();
    day = day < 10 ? `0${String(day)}` : day;

    const time = date.toLocaleTimeString();

    if (isTime) {
        return `${day}/${month}/${year} ${time} `;
    } return `${day}/${month}/${year} `;
};

export const getUUID = () => {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

export const getDateFirebase = (date: IDateFirebase) => new Date(date.seconds * 1000 + date.nanoseconds / 1000000);

export const validDate = (value: string): boolean => {
    const patternValidaData = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
    return patternValidaData.test(value);
};

export const validTime = (value: string): boolean => {
    const patternValidTime = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]:[0-5][\d]$/;
    return patternValidTime.test(value);
};

export const strToDate = (value: string): Date => {
    if (validDate(value)) {
        const day = Number(value.split('/')[0]);
        const month = Number(value.split('/')[1]);
        const year = Number(value.split('/')[2]);

        return new Date(year, month - 1, day);
    } return new Date();
};

export const strToDateTime = (value: string): Date => {
    const date = value.split(' ')[0];
    const time = value.split(' ')[1];

    if (validDate(date) && validTime(time)) {
        const day = Number(date.split('/')[0]);
        const month = Number(date.split('/')[1]);
        const year = Number(date.split('/')[2]);

        const hours = Number(time.split(':')[0]);
        const minutes = Number(time.split(':')[1]);
        const seconds = Number(time.split(':')[2]);

        return new Date(year, month - 1, day, hours, minutes, seconds);
    } return new Date();
};

export const dateTimeToStr = (value?: Date): string => {
    if (value) {
        const date = value.toISOString().split('T')[0];
        const year = date.split('-')[0];
        const month = date.split('-')[1];
        const day = date.split('-')[2];

        return `${day}/${month}/${year}`;
    } return '';
};

export const emailValid = (value: string) => {
    const email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (email.test(value)) {
        return true;
    }
    return false;
};

export const checkStringDateValid = (value: string) => {
    if (value) {
        const year = Number(value.split('/')[2]);
        const month = Number(value.split('/')[1]);
        const day = Number(value.split('/')[0]);

        if ((day > 31) || (month > 12) || (year.toString().length < 4)) {
            return false;
        }

        return !isNaN(new Date(year, (month - 1), day) as any);
    } return false;
};

export const formattedAmount = (value: number) => {
    const amount = value
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return `R$ ${amount}`;
};

export const formattedStringDate = (value: string) => {
    if (value) {
        value = removeMask(value);
        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        value = value.replace(/(\d{2})(\d)/, '$1/$2');
        return value;
    } return '';
};

export const formattedPhone = (value: string) => {
    if (value) {
        value = removeMask(value);
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        return value;
    } return '';
};

export const formattedCPF = (value: string) => {
    if (value) {
        value = removeMask(value);
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1-$2');
        return value;
    } return '';
};

export const formattedCNPJ = (value: string) => {
    if (value) {
        value = removeMask(value);
        value = value.replace(/(\d{2})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1/$2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
        return value;
    } return '';
};

export const formattedCpfCnpj = (value: string) => {
    if (value) {
        value = removeMask(value);
        if (value.length === 11) {
            return formattedCPF(value);
        } return formattedCNPJ(value);
    } return '';
};

export const getFilterDate = (
    listFilter: any[],
    initialDate: string,
    finalDate: string,
): any[] => listFilter.filter((lead) => (
    getDateFirebase(lead.createdAt)
          >= strToDateTime(`${initialDate} 00:00:01`)
        && getDateFirebase(lead.createdAt) <= strToDateTime(`${finalDate} 23:59:59`)
));

export const getFilterStatus = (listFilter: any[], status: string) => listFilter.filter((lead) => lead.status.toLowerCase().includes(status.toLowerCase()));

export const CPFisValid = (value: string): boolean => {
    if (!value) return false;

    const isString = typeof value === 'string';
    const validTypes = isString || Number.isInteger(value) || Array.isArray(value);

    if (!validTypes) return false;

    if (isString) {
        if (value.length > 14) return false;

        const digitsOnly = /^\d{11}$/.test(value);

        const validFormat = /^\d{3}.\d{3}.\d{3}-\d{2}$/.test(value);

        if (!digitsOnly && !validFormat) {
            return false;
        }
    }

    const match = value.toString().match(/\d/g);
    const numbers = Array.isArray(match) ? match.map(Number) : [];

    if (numbers.length !== 11) return false;

    const items = [...new Set(numbers)];
    if (items.length === 1) return false;

    let sum = 0;
    let remainder;

    value = value.replace(/\D/g, '');

    for (let i = 1; i <= 9; i++) {
        sum += Number(value.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }

    if (remainder !== Number(value.substring(9, 10))) {
        return false;
    }
    sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += Number(value.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }

    if (remainder !== Number(value.substring(10, 11))) {
        return false;
    }

    return true;
};

export const CNPJisValid = (value: string): boolean => {
    if (!value) return false;

    // Aceita receber o valor como string, número ou array com todos os dígitos
    const isString = typeof value === 'string';
    const validTypes = isString || Number.isInteger(value) || Array.isArray(value);

    // Elimina valor em formato inválido
    if (!validTypes) return false;

    // Filtro inicial para entradas do tipo string
    if (isString) {
        // Limita ao máximo de 18 caracteres, para CNPJ formatado
        if (value.length > 18) return false;

        // Teste Regex para veificar se é uma string apenas dígitos válida
        const digitsOnly = /^\d{14}$/.test(value);
        // Teste Regex para verificar se é uma string formatada válida
        const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value);

        // Se o formato é válido, usa um truque para seguir o fluxo da validação
        if (!digitsOnly && !validFormat) {
        // Se não, retorna inválido
            return false;
        }
    }

    // Guarda um array com todos os dígitos do valor
    const match = value.toString().match(/\d/g);
    const numbers = Array.isArray(match) ? match.map(Number) : [];

    // Valida a quantidade de dígitos
    if (numbers.length !== 14) return false;

    // Elimina inválidos com todos os dígitos iguais
    const items = [...new Set(numbers)];
    if (items.length === 1) return false;

    // Cálculo validador
    const calc = (x: number) => {
        const slice = numbers.slice(0, x);
        let factor = x - 7;
        let sum = 0;

        for (let i = x; i >= 1; i--) {
            const n = slice[x - i];
            sum += n * factor--;
            if (factor < 2) factor = 9;
        }

        const result = 11 - (sum % 11);

        return result > 9 ? 0 : result;
    };

    // Separa os 2 últimos dígitos de verificadores
    const digits = numbers.slice(12);

    // Valida 1o. dígito verificador
    const digit0 = calc(12);
    if (digit0 !== digits[0]) return false;

    // Valida 2o. dígito verificador
    const digit1 = calc(13);
    return digit1 === digits[1];
};

export const getCurrentDate = () => {
    const currentDate = new Date();
    return `${currentDate.getDate().toString().padStart(2, '0')} de ${month[currentDate.getMonth()]} - ${dayOfWeek[currentDate.getDay()]}`;
};
