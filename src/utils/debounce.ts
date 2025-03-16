function debounce<T extends (...args: unknown[])=> void>(func: T, wait: number){
    let timeout: NodeJS.Timeout;
    function debounced(...args: Parameters<T>){
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    }

    debounced.cancel = () => clearTimeout(timeout);

    return debounced;
}

export default debounce;